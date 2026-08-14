
import { useState, useRef } from 'react';
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TurnstileWidget } from "@/components/TurnstileWidget";
import { useTurnstile } from "@/hooks/useTurnstile";
import { submitLead } from "@/lib/contact-leads";
import { 
  User, Mail, Link2, TrendingUp, ChevronDown, Send, 
  Shield, Zap, Cloud, HelpCircle
} from "lucide-react";

const ContactForDigitalMarketing = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const formRef = useRef<HTMLFormElement>(null);
  const {
    turnstileToken,
    setTurnstileToken,
    turnstileReset,
    resetTurnstile,
  } = useTurnstile();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitMessage('');

    if (!turnstileToken) {
      setSubmitMessage('Please complete the human verification before submitting.');
      return;
    }

    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      const rawSocialLink = String(formData.get('text-1752650925101-0') ?? '');
      const socialLink = /^https?:\/\//i.test(rawSocialLink)
        ? rawSocialLink
        : `https://${rawSocialLink}`;

      await submitLead({
        name: String(formData.get('text-1752650679296-0') ?? ''),
        email: String(formData.get('text-1752650807996-0') ?? ''),
        socialLink,
        message: `Marketing Needs: ${String(formData.get('select-1752651040594-0') ?? '')}`,
        form_type: 'digital-marketing',
        turnstile_token: turnstileToken,
      });

      setSubmitMessage('Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.');
      formRef.current?.reset();
    } catch {
      setSubmitMessage('Sorry, there was an error sending your message. Please try again.');
    } finally {
      resetTurnstile();
      setIsSubmitting(false);
    }
  };

  return (
    <PageLayout
      title="Contact for Digital Marketing"
      subtitle="Get in touch for AI-powered marketing solutions"
      currentPath="/contact-for-digital-marketing"
    >
      <div className="max-w-2xl mx-auto">
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 overflow-hidden">
          <div className="h-1 bg-gradient-to-r from-cyan-500 to-blue-500" />
          
          <div className="p-8">
            {/* Header */}
            <div className="text-center mb-10">
              <img 
                src="/lovable-uploads/7223877a-0a55-4ae4-9fbe-ad1c46acae0f.png" 
                alt="Digital Frontier Logo"
                className="h-24 w-auto mx-auto mb-4"
              />
              <h2 className="text-3xl font-bold mb-2 text-slate-100">
                DIGITAL FRONTIER COMPANY
              </h2>
              <div className="h-1 w-32 bg-cyan-400 mx-auto rounded-full mb-3" />
              <p className="text-cyan-300">Contact for Digital Marketing Services</p>
            </div>
            
            {/* Form */}
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <Label htmlFor="name" className="text-cyan-200 flex items-center gap-2 mb-2">
                  <User className="h-4 w-4" /> Name: <span className="text-red-500">*</span>
                </Label>
                <div className="relative">
                  <Input 
                    type="text" id="name" name="text-1752650679296-0"
                    placeholder="First and Last" required
                    className="bg-slate-900 border-slate-600 text-white focus:border-cyan-400 pr-10"
                  />
                  <User className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-cyan-400" />
                </div>
              </div>
              
              {/* Email */}
              <div>
                <Label htmlFor="email" className="text-cyan-200 flex items-center gap-2 mb-2">
                  <Mail className="h-4 w-4" /> Email address: <span className="text-red-500">*</span>
                </Label>
                <div className="relative">
                  <Input 
                    type="email" id="email" name="text-1752650807996-0"
                    placeholder="john@doe.com" required
                    className="bg-slate-900 border-slate-600 text-white focus:border-cyan-400 pr-10"
                  />
                  <Mail className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-cyan-400" />
                </div>
              </div>
              
              {/* Social Link */}
              <div>
                <Label htmlFor="social" className="text-cyan-200 flex items-center gap-2 mb-2">
                  <Link2 className="h-4 w-4" /> Social Link: <span className="text-red-500">*</span>
                  <span className="relative group cursor-pointer">
                    <HelpCircle className="h-4 w-4 text-cyan-400" />
                    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 bg-slate-700 text-white text-xs rounded py-2 px-3 shadow-lg z-10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                      Link to Facebook, Instagram, TikTok, YouTube, Twitch, etc.
                    </span>
                  </span>
                </Label>
                <div className="relative">
                  <Input 
                    type="url" id="social" name="text-1752650925101-0" required
                    className="bg-slate-900 border-slate-600 text-white focus:border-cyan-400 pr-10"
                  />
                  <Link2 className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-cyan-400" />
                </div>
              </div>
              
              {/* Marketing Needs */}
              <div>
                <Label htmlFor="marketing-needs" className="text-cyan-200 flex items-center gap-2 mb-2">
                  <TrendingUp className="h-4 w-4" /> What are your Marketing needs and budget?
                </Label>
                <div className="relative">
                  <select 
                    id="marketing-needs" name="select-1752651040594-0"
                    className="w-full px-4 py-2.5 bg-slate-900 text-white border border-slate-600 rounded-md focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 appearance-none"
                    defaultValue="Pricing starts At $899"
                  >
                    <option value="full stack marketing plan ( need to perform a review to price )">Full service we do it all</option>
                    <option value="$89 / Hour">Hourly Basis (mostly for smaller individual type tasks)</option>
                    <option value="Pricing starts At $899">Specific Task i.e Web design, SEO, Local SEO, AI</option>
                    <option value="AI Crew Chief Package">AI Crew Chief Package - Proven AI Solutions</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-cyan-400 pointer-events-none" />
                </div>
              </div>
              
              <TurnstileWidget
                onTokenChange={setTurnstileToken}
                resetSignal={turnstileReset}
                className="flex justify-center text-sm text-red-300"
              />

              {/* Submit */}
              <div className="pt-4">
                <Button 
                  type="submit" disabled={isSubmitting || !turnstileToken}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-slate-900 font-bold py-6 text-lg"
                >
                  <Send className="h-5 w-5 mr-2" />
                  {isSubmitting ? 'Sending...' : 'Submit Request'}
                </Button>
              </div>
            </form>
            
            {/* Success/Error Message */}
            {submitMessage && (
              <div className={`mt-6 p-4 rounded-lg text-center ${
                submitMessage.includes('error') || submitMessage.includes('Sorry') 
                  ? 'bg-red-900/20 border border-red-500/30 text-red-300' 
                  : 'bg-green-900/20 border border-green-500/30 text-green-300'
              }`}>
                <p>{submitMessage}</p>
              </div>
            )}
          </div>
          
          <div className="p-4 text-center text-cyan-300 text-sm border-t border-slate-700">
            <p>Protected by Turnstile and server-side abuse controls</p>
          </div>
        </div>
        
        {/* Tech badges */}
        <div className="flex justify-center mt-8 space-x-6 text-slate-300">
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-cyan-400" />
            <span className="text-sm">Human Verification</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="h-4 w-4 text-cyan-400" />
            <span className="text-sm">AI-Powered</span>
          </div>
          <div className="flex items-center gap-2">
            <Cloud className="h-4 w-4 text-cyan-400" />
            <span className="text-sm">Cloud Hosted</span>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ContactForDigitalMarketing;
