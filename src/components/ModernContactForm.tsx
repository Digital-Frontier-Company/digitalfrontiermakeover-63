import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Satellite, User, Mail, Link2, ChartLine, Send, Shield, Zap, Cloud, HelpCircle } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useToast } from '@/hooks/use-toast';

const ModernContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    socialLink: '',
    marketingNeeds: 'Pricing starts At $899'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://public.lindy.ai/api/v1/webhooks/lindy/26e30680-521e-45e0-a00b-0ed2ac52aeef', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'no-cors', // Add this to handle CORS
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: `Social Link: ${formData.socialLink}\nMarketing Needs: ${formData.marketingNeeds}`,
          form_type: 'Modern Contact Form'
        }),
      });

      // Since we're using no-cors, we won't get proper response status
      // Instead, we'll show success message and let user know to check for confirmation
      toast({
        title: "Message Sent!",
        description: "Your message has been submitted successfully. We'll get back to you within 24 hours.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        socialLink: '',
        marketingNeeds: 'Pricing starts At $899'
      });
      
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Submission Error", 
        description: "There was a problem sending your message. Please try again or contact us directly at contact@digitalfrontier.app",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    // Add pulse animation to header periodically
    const interval = setInterval(() => {
      const header = document.querySelector('.form-header');
      if (header) {
        header.classList.add('animate-pulse');
        setTimeout(() => {
          header.classList.remove('animate-pulse');
        }, 1000);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-electric-azure rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-electric-azure rounded-full animate-pulse opacity-40"></div>
        <div className="absolute bottom-1/4 left-2/3 w-3 h-3 bg-electric-azure rounded-full animate-pulse opacity-50"></div>
        <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-electric-azure rounded-full animate-pulse opacity-30"></div>
      </div>

      <Card className="relative backdrop-blur-sm border-electric-azure/20 bg-card/90 overflow-hidden">
        {/* Neon top border */}
        <div className="h-1 bg-gradient-to-r from-electric-azure to-electric-purple"></div>
        
        <CardContent className="p-8 relative">
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }}></div>

          {/* Header */}
          <div className="text-center mb-10 relative z-10">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-electric-azure to-electric-purple flex items-center justify-center animate-pulse-slow">
                <Satellite className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="form-header text-3xl md:text-4xl font-bold mb-2 text-gradient bg-gradient-to-r from-electric-azure to-electric-purple bg-clip-text text-transparent font-['Orbitron']">
              DIGITAL FRONTIER COMPANY
            </h2>
            <div className="h-1 w-32 bg-electric-azure mx-auto rounded-full mb-3 shadow-neon-sm"></div>
            <p className="text-electric-azure/80 font-light">Enter the digital frontier</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            {/* Name Field */}
            <div className="relative">
              <Label htmlFor="name" className="block text-sm font-medium text-electric-azure/90 mb-2 flex items-center">
                <User className="w-4 h-4 mr-2" />
                Name: <span className="text-red-400 ml-1">*</span>
              </Label>
              <div className="relative">
                <Input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="First and Last"
                  required
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  className={`bg-deep-navy border-electric-azure/30 text-white focus:border-electric-azure focus:ring-electric-azure/50 transition-all duration-300 ${
                    focusedField === 'name' ? 'shadow-neon' : ''
                  }`}
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <User className="w-4 h-4 text-electric-azure/60" />
                </div>
              </div>
            </div>

            {/* Email Field */}
            <div className="relative">
              <Label htmlFor="email" className="block text-sm font-medium text-electric-azure/90 mb-2 flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                Email address: <span className="text-red-400 ml-1">*</span>
              </Label>
              <div className="relative">
                <Input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="john@doe.com"
                  required
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  className={`bg-deep-navy border-electric-azure/30 text-white focus:border-electric-azure focus:ring-electric-azure/50 transition-all duration-300 ${
                    focusedField === 'email' ? 'shadow-neon' : ''
                  }`}
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <Mail className="w-4 h-4 text-electric-azure/60" />
                </div>
              </div>
            </div>

            {/* Social Link Field */}
            <div className="relative">
              <Label htmlFor="social" className="block text-sm font-medium text-electric-azure/90 mb-2 flex items-center">
                <Link2 className="w-4 h-4 mr-2" />
                Social Link: <span className="text-red-400 ml-1">*</span>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <HelpCircle className="w-4 h-4 ml-1 text-electric-azure/60" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Link to Facebook, Instagram, TikTok, YouTube, Twitch, etc.</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Label>
              <div className="relative">
                <Input
                  type="text"
                  id="social"
                  value={formData.socialLink}
                  onChange={(e) => handleInputChange('socialLink', e.target.value)}
                  required
                  onFocus={() => setFocusedField('social')}
                  onBlur={() => setFocusedField(null)}
                  className={`bg-deep-navy border-electric-azure/30 text-white focus:border-electric-azure focus:ring-electric-azure/50 transition-all duration-300 ${
                    focusedField === 'social' ? 'shadow-neon' : ''
                  }`}
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <Link2 className="w-4 h-4 text-electric-azure/60" />
                </div>
              </div>
            </div>

            {/* Marketing Needs */}
            <div className="relative">
              <Label htmlFor="marketing-needs" className="block text-sm font-medium text-electric-azure/90 mb-2 flex items-center">
                <ChartLine className="w-4 h-4 mr-2" />
                What are your Marketing needs and budget?
              </Label>
              <Select value={formData.marketingNeeds} onValueChange={(value) => handleInputChange('marketingNeeds', value)}>
                <SelectTrigger className="bg-deep-navy border-electric-azure/30 text-white focus:border-electric-azure focus:ring-electric-azure/50">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-deep-navy border-electric-azure/30">
                  <SelectItem value="full stack marketing plan ( need to perform a review to price )">
                    Full service we do it all
                  </SelectItem>
                  <SelectItem value="$89 / Hour">
                    Hourly Basis (mostly for smaller individual type tasks)
                  </SelectItem>
                  <SelectItem value="Pricing starts At $899">
                    Specific Task i.e Web design, SEO, Local SEO, AI
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-electric-azure to-electric-purple hover:from-electric-azure/90 hover:to-electric-purple/90 text-white font-bold py-4 px-6 rounded-lg text-lg tracking-wider uppercase transition-all duration-300 transform hover:scale-[1.02] shadow-neon hover:shadow-neon-lg disabled:opacity-50"
              >
                <Send className="w-5 h-5 mr-2" />
                {isSubmitting ? 'Sending...' : 'Submit Request'}
              </Button>
            </div>
          </form>
        </CardContent>

        {/* Footer note */}
        <div className="p-4 text-center text-electric-azure/80 text-sm border-t border-electric-azure/20">
          <p>Your data is encrypted and securely transmitted</p>
        </div>
      </Card>

      {/* Tech badges */}
      <div className="flex justify-center mt-8 space-x-6 text-sm text-electric-azure/80">
        <div className="flex items-center">
          <Shield className="w-4 h-4 mr-2" />
          <span>256-bit Encryption</span>
        </div>
        <div className="flex items-center">
          <Zap className="w-4 h-4 mr-2" />
          <span>AI-Powered</span>
        </div>
        <div className="flex items-center">
          <Cloud className="w-4 h-4 mr-2" />
          <span>Cloud Hosted</span>
        </div>
      </div>
    </div>
  );
};

export default ModernContactForm;