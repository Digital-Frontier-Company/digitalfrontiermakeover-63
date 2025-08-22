import { NextRequest, NextResponse } from 'next/server';

const PRERENDER_TOKEN = process.env.PRERENDER_IO_TOKEN;

// Bot user agents that should get pre-rendered content
const BOT_USER_AGENTS = [
  'googlebot',
  'bingbot',
  'slurp',
  'duckduckbot',
  'baiduspider',
  'yandexbot',
  'facebookexternalhit',
  'twitterbot',
  'rogerbot',
  'linkedinbot',
  'embedly',
  'quora link preview',
  'showyoubot',
  'outbrain',
  'pinterest',
  'developers.google.com/+/web/snippet',
  'slackbot',
  'vkshare',
  'w3c_validator',
  'redditbot',
  'applebot',
  'whatsapp',
  'flipboard',
  'tumblr',
  'bitlybot',
  'skypeuripreview',
  'nuzzel',
  'discordbot',
  'google page speed',
  'qwantify'
];

function isBot(userAgent: string): boolean {
  if (!userAgent) return false;
  
  const lowerUserAgent = userAgent.toLowerCase();
  return BOT_USER_AGENTS.some(bot => lowerUserAgent.includes(bot));
}

function shouldPrerender(request: NextRequest): boolean {
  // Don't prerender API calls, assets, or certain file types
  const { pathname } = request.nextUrl;
  
  const excludePatterns = [
    '/api/',
    '/functions/',
    '/_next/',
    '/_vercel/',
    '.js',
    '.css',
    '.png',
    '.jpg',
    '.jpeg',
    '.gif',
    '.svg',
    '.ico',
    '.woff',
    '.woff2',
    '.ttf',
    '.eot',
    '.pdf',
    '.xml',
    '.txt'
  ];
  
  return !excludePatterns.some(pattern => pathname.includes(pattern));
}

async function getPrerenderHTML(url: string): Promise<string | null> {
  if (!PRERENDER_TOKEN) {
    console.error('PRERENDER_IO_TOKEN not found in environment');
    return null;
  }

  try {
    const prerenderUrl = `https://service.prerender.io/${encodeURIComponent(url)}`;
    
    console.log(`Requesting prerendered content for: ${url}`);
    
    const response = await fetch(prerenderUrl, {
      headers: {
        'X-Prerender-Token': PRERENDER_TOKEN,
        'User-Agent': 'Mozilla/5.0 (compatible; Prerender)'
      },
      signal: AbortSignal.timeout(10000) // 10 second timeout
    });

    if (!response.ok) {
      console.error(`Prerender.io error: ${response.status} - ${response.statusText}`);
      return null;
    }

    const html = await response.text();
    console.log(`Successfully fetched prerendered content for: ${url}`);
    return html;
    
  } catch (error) {
    console.error('Error fetching from Prerender.io:', error);
    return null;
  }
}

export async function middleware(request: NextRequest) {
  const userAgent = request.headers.get('user-agent') || '';
  const url = request.url;
  
  // Check if this is a bot request and should be prerendered
  const isBotRequest = isBot(userAgent);
  const shouldPrerenderPage = shouldPrerender(request);
  
  console.log(`Middleware: ${request.nextUrl.pathname} - Bot: ${isBotRequest}, Should prerender: ${shouldPrerenderPage}`);

  if (isBotRequest && shouldPrerenderPage) {
    try {
      const prerenderHTML = await getPrerenderHTML(url);
      
      if (prerenderHTML) {
        return new NextResponse(prerenderHTML, {
          status: 200,
          headers: {
            'Content-Type': 'text/html',
            'Cache-Control': 's-maxage=86400, stale-while-revalidate=43200', // Cache for 24h, stale for 12h
            'X-Prerendered': 'true'
          }
        });
      }
    } catch (error) {
      console.error('Error in prerender middleware:', error);
      // Fall through to serve normal content
    }
  }

  // Continue with normal request
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - robots.txt (robots file)
     * - sitemap.xml (sitemap file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)',
  ],
};