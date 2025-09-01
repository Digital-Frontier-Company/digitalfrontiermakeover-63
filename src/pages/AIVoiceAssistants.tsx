import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PhoneCall, Clock, DollarSign, MessageCircle, CheckCircle, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import InternalLinkEnhancer from '@/components/layout/InternalLinkEnhancer';

const AIVoiceAssistants = () => {
  return (
    <>
      <Helmet>
        <title>AI Voice Assistants - Custom Voice AI That Converts Leads | Digital Frontier</title>
        <meta name="description" content="Deploy AI voice assistants that make calls, answer 24/7, slash support costs, and convert more leads. Your brand with a voice that sells." />
        <meta name="keywords" content="AI voice assistants, voice AI, automated calling, lead conversion, customer support AI, voice technology" />
        <link rel="canonical" href="https://digitalfrontier.ai/ai-voice-assistants" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/5">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 relative overflow-hidden">
          <div className="container mx-auto max-w-6xl text-center relative z-10">
            <div className="mb-8">
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
                Voice Assistant Capable of Making Calls
              </h1>
              <div className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                Your Brand, Now with a Voice That Sells
              </div>
              <div className="text-xl md:text-2xl text-muted-foreground mb-8">
                This Isn't Just AI. It's the Future of Customer Experience.
              </div>
            </div>

            <div className="max-w-4xl mx-auto mb-12">
              <p className="text-lg text-muted-foreground mb-8">
                Tired of lifeless support? Forget clunky chatbots.
                You're about to plug your business into a custom-built AI voice assistant that talks like a human, learns like a beast, and closes like a pro.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
              <div className="flex items-start gap-4 p-6 bg-card/50 backdrop-blur-sm rounded-lg border">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-foreground mb-2">Answer customer questions 24/7</h3>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-card/50 backdrop-blur-sm rounded-lg border">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-foreground mb-2">Slash your support costs</h3>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-card/50 backdrop-blur-sm rounded-lg border">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <MessageCircle className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-foreground mb-2">Convert more leads with smart, real-time responses</h3>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-card/50 backdrop-blur-sm rounded-lg border">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <PhoneCall className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-foreground mb-2">Build loyalty with seamless, personal voice interactions</h3>
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="mb-12">
              <Card className="max-w-2xl mx-auto bg-card/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <blockquote className="text-xl italic text-muted-foreground mb-4">
                    "Feels like talking to your best rep. Only this one never sleeps."
                  </blockquote>
                </CardContent>
              </Card>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <div className="text-xl font-semibold text-foreground mb-4">
                👉 Ready to turn every conversation into cash?
              </div>
              <Button size="lg" className="mb-4">
                <Link to="/contact" className="flex items-center gap-2">
                  <PhoneCall className="h-5 w-5" />
                  Book Your Free Strategy Call Now
                </Link>
              </Button>
              <p className="text-muted-foreground">
                We'll build it. You just sit back and sound smarter than your competitors.
              </p>
            </div>
          </div>

          {/* Background Decorations */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 bg-secondary/5">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why Choose Our AI Voice Assistants?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="p-8">
                  <div className="p-4 bg-primary/10 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                    <Clock className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">24/7 Availability</h3>
                  <p className="text-muted-foreground">Never miss a call or opportunity. Your AI assistant works around the clock.</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-8">
                  <div className="p-4 bg-primary/10 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                    <MessageCircle className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Human-Like Conversations</h3>
                  <p className="text-muted-foreground">Advanced natural language processing that sounds genuinely human.</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-8">
                  <div className="p-4 bg-primary/10 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Scalable Solution</h3>
                  <p className="text-muted-foreground">Handle hundreds of calls simultaneously without hiring more staff.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <InternalLinkEnhancer 
          currentPage="AI Voice Assistants"
          relatedLinks={[
            { 
              href: "/ai-implementation-consulting", 
              title: "AI Implementation Consulting", 
              description: "Expert guidance for implementing AI solutions in your business",
              category: "strategy" as const
            },
            { 
              href: "/ai-and-digital-marketing", 
              title: "AI & Digital Marketing", 
              description: "Leverage AI to enhance your digital marketing strategies",
              category: "strategy" as const
            },
            { 
              href: "/content-creation-agent", 
              title: "Content Creation Agent", 
              description: "Automated content generation with AI-powered tools",
              category: "technical" as const
            },
            { 
              href: "/predictive-analytics-agent", 
              title: "Predictive Analytics Agent", 
              description: "Harness predictive analytics for business insights",
              category: "technical" as const
            }
          ]}
        />
      </div>
    </>
  );
};

export default AIVoiceAssistants;