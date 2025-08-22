import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const PRERENDER_TOKEN = Deno.env.get('PRERENDER_IO_TOKEN');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

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

function isPrerenderable(url: string): boolean {
  // Don't prerender API calls, assets, or certain file types
  const excludePatterns = [
    '/api/',
    '/functions/',
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
    '.pdf'
  ];
  
  return !excludePatterns.some(pattern => url.includes(pattern));
}

async function getPrerenderHTML(url: string): Promise<string | null> {
  try {
    const prerenderUrl = `https://service.prerender.io/${encodeURIComponent(url)}`;
    
    console.log(`Requesting prerendered content for: ${url}`);
    
    const response = await fetch(prerenderUrl, {
      headers: {
        'X-Prerender-Token': PRERENDER_TOKEN!,
        'User-Agent': 'Mozilla/5.0 (compatible; Prerender)'
      },
      timeout: 10000 // 10 second timeout
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

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    if (!PRERENDER_TOKEN) {
      console.error('PRERENDER_IO_TOKEN not found in environment');
      return new Response(JSON.stringify({ error: 'Prerender token not configured' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    const { url, userAgent } = await req.json();

    if (!url) {
      return new Response(JSON.stringify({ error: 'URL is required' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    // Check if this is a bot request
    const isBotRequest = isBot(userAgent || '');
    
    // Check if the URL should be prerendered
    const shouldPrerender = isPrerenderable(url);

    console.log(`Processing request - URL: ${url}, Bot: ${isBotRequest}, Prerenderable: ${shouldPrerender}`);

    if (isBotRequest && shouldPrerender) {
      const prerenderHTML = await getPrerenderHTML(url);
      
      if (prerenderHTML) {
        return new Response(JSON.stringify({ 
          html: prerenderHTML,
          prerendered: true 
        }), {
          status: 200,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
      }
    }

    // Return indication that normal SPA should be served
    return new Response(JSON.stringify({ 
      prerendered: false,
      message: 'Serve normal SPA content'
    }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Error in prerender-ssr function:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }
};

serve(handler);