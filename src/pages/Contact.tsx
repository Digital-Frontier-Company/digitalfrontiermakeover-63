import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useLocation } from "react-router-dom";
import { Mail, Phone, MapPin, User, MessageSquare, Send, Satellite } from "lucide-react";
import FAQSection from "@/components/FAQSection";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { submitToHubSpot } from "@/utils/hubspot";
import { motion } from 'framer-motion';

// Define form validation schema
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters"
  }),
  email: z.string().email({
    message: "Invalid email address"
  }),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().min(1, {
    message: "Please select a service"
  }),
  message: z.string().min(10, {
    message: "Message should be at least 10 characters"
  }),
  consent: z.boolean().refine(value => value === true, {
    message: "You must agree to be contacted"
  })
});
const Contact = () => {
  const location = useLocation();
  const {
    toast
  } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const [bubbles, setBubbles] = useState(() => Array.from({
    length: 8
  }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 20 + Math.random() * 40,
    speed: 0.1 + Math.random() * 0.2,
    direction: Math.random() * 360,
    opacity: 0.3 + Math.random() * 0.4
  })));

  // Initialize form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
      consent: false
    }
  });

  // Form submission handler
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const response = await fetch('https://public.lindy.ai/api/v1/webhooks/lindy/26e30680-521e-45e0-a00b-0ed2ac52aeef', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          message: `Phone: ${values.phone || 'Not provided'}\nCompany: ${values.company || 'Not provided'}\nService Interest: ${values.service}\nMessage: ${values.message}\nConsent: ${values.consent}`,
          form_type: 'Main Contact Form'
        }),
      });

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "Your message has been sent. We'll get back to you within 24 hours."
        });
        form.reset();
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  // Create ref for the form to enable scrolling
  const formRef = React.useRef<HTMLDivElement>(null);

  // Bubble movement animation
  useEffect(() => {
    const interval = setInterval(() => {
      setBubbles(prevBubbles => prevBubbles.map(bubble => ({
        ...bubble,
        x: (bubble.x + Math.cos(bubble.direction) * bubble.speed + 100) % 100,
        y: (bubble.y + Math.sin(bubble.direction) * bubble.speed + 100) % 100
      })));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  // Track mouse movement for interactive effects - Optimized for performance
  useEffect(() => {
    let rafId: number;
    let lastTime = 0;
    
    const handleMouseMove = (e: MouseEvent) => {
      const now = performance.now();
      if (now - lastTime < 16) return; // Throttle to ~60fps
      lastTime = now;
      
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      
      rafId = requestAnimationFrame(() => {
        setMousePosition({
          x: e.clientX,
          y: e.clientY
        });
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  // Handle bubble pop
  const handleBubblePop = (id: number) => {
    setBubbles(prevBubbles => prevBubbles.map(bubble => bubble.id === id ? {
      ...bubble,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 20 + Math.random() * 40,
      speed: 0.1 + Math.random() * 0.2,
      direction: Math.random() * 360,
      opacity: 0.3 + Math.random() * 0.4
    } : bubble));
  };

  // Effect to handle scrolling to form when coming from other pages
  React.useEffect(() => {
    // Check if there's a hash in the URL or if a specific query param exists
    if (location.hash === "#contact-form" && formRef.current) {
      formRef.current.scrollIntoView({
        behavior: "smooth"
      });
    }
  }, [location]);
  return <div className="relative min-h-screen bg-deep-navy" style={{
    background: 'var(--gradient-hero)'
  }}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Orbs */}
        {Array.from({
        length: 3
      }, (_, i) => <div key={i} className="absolute rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-500/10" style={{
        width: `${60 + i * 20}px`,
        height: `${60 + i * 20}px`,
        left: `${20 + i * 30}%`,
        top: `${20 + i * 25}%`,
        animation: `float ${4 + i * 2}s ease-in-out infinite`,
        animationDelay: `${i * 1.5}s`,
        filter: 'blur(1px)',
        transform: `translate(${(mousePosition.x - (typeof window !== 'undefined' ? window.innerWidth / 2 : 0)) * (0.01 + i * 0.005)}px, ${(mousePosition.y - (typeof window !== 'undefined' ? window.innerHeight / 2 : 0)) * (0.01 + i * 0.005)}px)`,
        transition: 'transform 0.6s ease-out'
      }} />)}
      </div>

      {/* Interactive Clickable Bubbles */}
      <div className="absolute inset-0 overflow-hidden">
        {bubbles.map(bubble => <div key={bubble.id} className="absolute rounded-full bg-gradient-to-br from-cyan-400/30 to-blue-500/20 cursor-pointer hover:scale-110 transition-all duration-300" style={{
        width: `${bubble.size}px`,
        height: `${bubble.size}px`,
        left: `${bubble.x}%`,
        top: `${bubble.y}%`,
        opacity: bubble.opacity,
        filter: 'drop-shadow(0 0 8px rgba(0, 255, 255, 0.4))',
        animation: `float ${3 + bubble.id % 3}s ease-in-out infinite`,
        animationDelay: `${bubble.id * 0.5}s`
      }} onClick={() => handleBubblePop(bubble.id)} />)}
      </div>

      {/* Animated Grid Pattern Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
        backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.3) 1px, transparent 1px)
            `,
        backgroundSize: '50px 50px',
        animation: 'grid-move 20s linear infinite',
        filter: 'drop-shadow(0 0 2px cyan)'
      }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen">
        {/* Header with modern styling */}
        <motion.div className="text-center pt-20 pb-10" initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }}>
          <div className="flex justify-center mb-6">
            
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient bg-gradient-to-r from-electric-azure to-electric-purple bg-clip-text text-transparent">
            DIGITAL FRONTIER CONTACT
          </h2>
          <div className="h-1 w-32 bg-electric-azure mx-auto rounded-full mb-4 shadow-neon-sm"></div>
          <p className="text-xl text-soft-white/80 max-w-3xl mx-auto">
            Ready to Transform Your Digital Presence? Let's create your digital breakthrough together.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Contact form section */}
            <div className="md:col-span-7" id="contact-form" ref={formRef}>
              <Card className="backdrop-blur-sm border-electric-azure/20 bg-card/90 overflow-hidden">
                {/* Neon top border */}
                <div className="h-1 bg-gradient-to-r from-electric-azure to-electric-purple"></div>
                <CardContent className="p-8 relative">
                  {/* Grid pattern overlay */}
                  <div className="absolute inset-0 opacity-5" style={{
                  backgroundImage: `linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)`,
                  backgroundSize: '30px 30px'
                }}></div>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 relative z-10">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Name field */}
                        <FormField control={form.control} name="name" render={({
                        field
                      }) => <FormItem>
                              <FormLabel className="block text-sm font-medium text-electric-azure/90 mb-2 flex items-center">
                                <User className="w-4 h-4 mr-2" /> Your Name <span className="text-red-400 ml-1">*</span>
                              </FormLabel>
                              <FormControl>
                                <div className="relative">
                                  <Input placeholder="John Smith" {...field} className="bg-deep-navy border-electric-azure/30 text-white focus:border-electric-azure focus:ring-electric-azure/50 transition-all duration-300" />
                                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                                    <User className="w-4 h-4 text-electric-azure/60" />
                                  </div>
                                </div>
                              </FormControl>
                              <FormMessage />
                            </FormItem>} />
                        
                        {/* Email field */}
                        <FormField control={form.control} name="email" render={({
                        field
                      }) => <FormItem>
                              <FormLabel className="block text-sm font-medium text-electric-azure/90 mb-2 flex items-center">
                                <Mail className="w-4 h-4 mr-2" /> Email Address <span className="text-red-400 ml-1">*</span>
                              </FormLabel>
                              <FormControl>
                                <div className="relative">
                                  <Input placeholder="john@company.com" {...field} className="bg-deep-navy border-electric-azure/30 text-white focus:border-electric-azure focus:ring-electric-azure/50 transition-all duration-300" />
                                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                                    <Mail className="w-4 h-4 text-electric-azure/60" />
                                  </div>
                                </div>
                              </FormControl>
                              <FormMessage />
                            </FormItem>} />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Phone field */}
                        <FormField control={form.control} name="phone" render={({
                        field
                      }) => <FormItem>
                              <FormLabel className="block text-sm font-medium text-electric-azure/90 mb-2 flex items-center">
                                <Phone className="w-4 h-4 mr-2" /> Phone (Optional)
                              </FormLabel>
                              <FormControl>
                                <div className="relative">
                                  <Input placeholder="(555) 123-4567" {...field} className="bg-deep-navy border-electric-azure/30 text-white focus:border-electric-azure focus:ring-electric-azure/50 transition-all duration-300" />
                                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                                    <Phone className="w-4 h-4 text-electric-azure/60" />
                                  </div>
                                </div>
                              </FormControl>
                              <FormMessage />
                            </FormItem>} />
                        
                        {/* Company field */}
                        <FormField control={form.control} name="company" render={({
                        field
                      }) => <FormItem>
                              <FormLabel className="block text-sm font-medium text-electric-azure/90 mb-2 flex items-center">
                                <MessageSquare className="w-4 h-4 mr-2" /> Company (Optional)
                              </FormLabel>
                              <FormControl>
                                <div className="relative">
                                  <Input placeholder="Your company name" {...field} className="bg-deep-navy border-electric-azure/30 text-white focus:border-electric-azure focus:ring-electric-azure/50 transition-all duration-300" />
                                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                                    <MessageSquare className="w-4 h-4 text-electric-azure/60" />
                                  </div>
                                </div>
                              </FormControl>
                              <FormMessage />
                            </FormItem>} />
                      </div>
                      
                      {/* Service selection */}
                      <FormField control={form.control} name="service" render={({
                      field
                    }) => <FormItem>
                            <FormLabel className="block text-sm font-medium text-electric-azure/90 mb-2">Service You're Interested In</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="bg-deep-navy border-electric-azure/30 text-white focus:border-electric-azure focus:ring-electric-azure/50">
                                  <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className="bg-deep-navy border-electric-azure/30">
                                <SelectItem value="ai-advertising">AI-Powered Advertising</SelectItem>
                                <SelectItem value="generative-engine">Generative Engine Optimization</SelectItem>
                                <SelectItem value="ad-funnel">Ad Funnel Blueprint</SelectItem>
                                <SelectItem value="content-automation">Content Automation</SelectItem>
                                <SelectItem value="consulting">AI Strategy Consulting</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>} />
                      
                      {/* Message field */}
                      <FormField control={form.control} name="message" render={({
                      field
                    }) => <FormItem>
                            <FormLabel className="block text-sm font-medium text-electric-azure/90 mb-2 flex items-center">
                              <MessageSquare className="w-4 h-4 mr-2" /> Your Message
                            </FormLabel>
                            <FormControl>
                              <Textarea placeholder="Tell us about your project or questions..." className="min-h-[120px] bg-deep-navy border-electric-azure/30 text-white focus:border-electric-azure focus:ring-electric-azure/50 transition-all duration-300" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>} />
                      
                      {/* Consent checkbox */}
                      <FormField control={form.control} name="consent" render={({
                      field
                    }) => <FormItem className="flex flex-row items-start space-x-3 space-y-0 p-4 rounded-md border border-electric-azure/30 bg-deep-navy/50">
                            <FormControl>
                              <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel className="text-electric-azure/90">
                                I agree to be contacted about my inquiry and other relevant services
                              </FormLabel>
                              <FormMessage />
                            </div>
                          </FormItem>} />
                      
                      {/* Submit button */}
                      <div className="pt-4">
                        <Button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-electric-azure to-electric-purple hover:from-electric-azure/90 hover:to-electric-purple/90 text-white font-bold py-4 px-6 rounded-lg text-lg tracking-wider uppercase transition-all duration-300 transform hover:scale-[1.02] shadow-neon hover:shadow-neon-lg">
                          <Send className="w-5 h-5 mr-2" />
                          {isSubmitting ? "Sending..." : "Submit Request"}
                        </Button>
                      </div>
                    </form>
                  </Form>

                  {/* Footer note */}
                  <div className="pt-4 text-center text-electric-azure/80 text-sm border-t border-electric-azure/20 mt-6">
                    <p>Your data is encrypted and securely transmitted</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Contact information sidebar */}
            <div className="md:col-span-5">
              <div className="space-y-8">
                {/* Why contact us section */}
                <Card className="backdrop-blur-sm border-electric-azure/20 bg-card/90">
                  <CardContent className="p-6">
                    <h3 id="why-work-with-us-heading" className="text-xl font-bold mb-4 text-electric-azure">Why Work With Us?</h3>
                    <ul className="space-y-3 text-soft-white/80">
                      <li className="flex items-start gap-2">
                        <div className="rounded-full bg-electric-azure/20 p-1 mt-1">
                          <div className="rounded-full bg-electric-azure w-2 h-2"></div>
                        </div>
                        <span>Pioneers in AI-driven advertising solutions (certified by Google AI and Meta Business Partners)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="rounded-full bg-electric-azure/20 p-1 mt-1">
                          <div className="rounded-full bg-electric-azure w-2 h-2"></div>
                        </div>
                        <span>Proven track record of increasing conversion rates by 38% on average (verified client data, 2024)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="rounded-full bg-electric-azure/20 p-1 mt-1">
                          <div className="rounded-full bg-electric-azure w-2 h-2"></div>
                        </div>
                        <span>Tailored strategies for your specific industry</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="rounded-full bg-electric-azure/20 p-1 mt-1">
                          <div className="rounded-full bg-electric-azure w-2 h-2"></div>
                        </div>
                        <span>Transparent reporting and continuous optimization</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                {/* Contact details card */}
                <Card className="backdrop-blur-sm border-electric-azure/20 bg-card/90">
                  <CardContent className="p-6">
                    <h3 id="contact-details-heading" className="text-xl font-bold mb-4 text-electric-azure">Get In Touch</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="bg-electric-azure/20 p-3 rounded-full">
                          <Mail className="h-5 w-5 text-electric-azure" />
                        </div>
                        <div>
                          <p className="text-sm text-soft-white/60">Email Us</p>
                          <p className="font-medium text-soft-white">david@digitalfrontier.app</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="bg-electric-azure/20 p-3 rounded-full">
                          <Phone className="h-5 w-5 text-electric-azure" />
                        </div>
                        <div>
                          <p className="text-sm text-soft-white/60">Call Us</p>
                          <p className="font-medium text-soft-white">901-657-5007</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="bg-electric-azure/20 p-3 rounded-full">
                          <MapPin className="h-5 w-5 text-electric-azure" />
                        </div>
                        <div>
                          <p className="text-sm text-soft-white/60">Location</p>
                          <p className="font-medium text-soft-white">Memphis, TN</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Response time guarantee */}
                <Card className="backdrop-blur-sm border-electric-azure/20 bg-electric-azure/10">
                  <CardContent className="p-5">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-soft-white">Average Response Time</h4>
                      <span className="text-electric-azure font-semibold">4 hours</span>
                    </div>
                    <div className="mt-2 bg-deep-navy/30 h-2 rounded-full">
                      <div className="bg-gradient-to-r from-electric-azure to-electric-purple w-3/4 h-2 rounded-full"></div>
                    </div>
                    <p className="text-sm text-soft-white/80 mt-2">
                      We respond to all inquiries within 24 hours, typically much faster. Our average response time is 4.2 hours (tracked via CRM analytics).
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
        
        {/* Testimonials section */}
        <section className="mt-16 relative z-10" aria-labelledby="testimonials-heading">
          <div className="max-w-7xl mx-auto px-6">
            <h3 id="testimonials-heading" className="text-2xl font-bold text-center mb-8 text-electric-azure">What Our Clients Say</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Testimonial 1 */}
              <Card className="backdrop-blur-sm border-electric-azure/20 bg-card/90">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    {[1, 2, 3, 4, 5].map(star => <span key={star} className="text-yellow-400 text-lg">★</span>)}
                  </div>
                  <p className="text-soft-white/80 mb-4 italic">"Digital Frontier transformed our lead generation completely. We saw a 73% increase in qualified leads within the first month of their AI-powered campaigns."</p>
                  <div>
                    <p className="font-semibold text-electric-azure">Sarah Chen</p>
                    <p className="text-soft-white/60 text-sm">Marketing Director, TechFlow Solutions</p>
                  </div>
                </CardContent>
              </Card>

              {/* Testimonial 2 */}
              <Card className="backdrop-blur-sm border-electric-azure/20 bg-card/90">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    {[1, 2, 3, 4, 5].map(star => <span key={star} className="text-yellow-400 text-lg">★</span>)}
                  </div>
                  <p className="text-soft-white/80 mb-4 italic">"The ROI speak for itself. Our content engagement increased 240% and conversion rates jumped 58% after implementing their Answer Engine Optimization strategy."</p>
                  <div>
                    <p className="font-semibold text-electric-azure">Marcus Rodriguez</p>
                    <p className="text-soft-white/60 text-sm">CEO, CloudScale Systems</p>
                  </div>
                </CardContent>
              </Card>

              {/* Testimonial 3 */}
              <Card className="backdrop-blur-sm border-electric-azure/20 bg-card/90">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    {[1, 2, 3, 4, 5].map(star => <span key={star} className="text-yellow-400 text-lg">★</span>)}
                  </div>
                  <p className="text-soft-white/80 mb-4 italic">"Finally, a marketing team that understands B2B tech. Our MQLs increased 156% and our sales cycle shortened by 2 weeks on average."</p>
                  <div>
                    <p className="font-semibold text-electric-azure">Amanda Foster</p>
                    <p className="text-soft-white/60 text-sm">VP Growth, DataVault Inc</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="mt-20 relative z-10">
          <div className="max-w-7xl mx-auto px-6">
            <FAQSection faqs={[{
            question: "How long does it take to see results?",
            answer: "Most clients see initial improvements within 30 days, with significant results typically appearing within 60-90 days."
          }, {
            question: "What makes your AI approach different?",
            answer: "We use proprietary algorithms that continuously learn and optimize your campaigns based on real-time performance data."
          }, {
            question: "Do you work with small businesses?",
            answer: "Yes, we offer scalable solutions for businesses of all sizes, from startups to enterprise companies."
          }]} />
          </div>
        </section>
      </div>
    </div>;
};
export default Contact;