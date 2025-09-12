import { useState, useRef } from 'react';
import { supabase } from '@/integrations/supabase/client';

const ModernContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const formData = new FormData(e.currentTarget);
      const contactData = {
        name: formData.get('text-1752650679296-0') as string,
        email: formData.get('text-1752650807996-0') as string,
        message: `Social Link: ${formData.get('text-1752650925101-0') as string}\nMarketing Needs: ${formData.get('select-1752651040594-0') as string}`,
        form_type: 'Modern Contact Page Form',
      };

      console.log('Submitting to Lindy webhook:', contactData);

      const response = await fetch('https://public.lindy.ai/api/v1/webhooks/lindy/26e30680-521e-45e0-a00b-0ed2ac52aeef', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactData),
      });

      if (response.ok) {
        console.log('Webhook response successful');
        setSubmitMessage('Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.');
        
        // Reset form
        formRef.current?.reset();
      } else {
        throw new Error('Failed to submit form to webhook');
      }
      
    } catch (error: any) {
      console.error('Form submission error:', error);
      setSubmitMessage(error.message || 'Sorry, there was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Digital Frontier Company | Modern Form</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              tailwind.config = {
                theme: {
                  extend: {
                    colors: {
                      'neon-cyan': '#0ff',
                      'dark-bg': '#0a0a15',
                      'dark-card': '#121226',
                    },
                    boxShadow: {
                      'neon': '0 0 10px #0ff, 0 0 20px #0ff',
                      'neon-sm': '0 0 5px #0ff, 0 0 10px #0ff',
                    },
                    animation: {
                      'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                    }
                  }
                }
              }
            `
          }}
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `
              @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700&family=Exo+2:wght@300;400;500;600&display=swap');
              
              body {
                font-family: 'Exo 2', sans-serif;
                background-color: #0a0a15;
                background-image: 
                  radial-gradient(circle at 10% 20%, rgba(0, 255, 255, 0.05) 0%, transparent 20%),
                  radial-gradient(circle at 90% 80%, rgba(0, 255, 255, 0.05) 0%, transparent 20%),
                  linear-gradient(to bottom, #0a0a15, #0a0a15);
                color: #e0e0ff;
                min-height: 100vh;
                display: flex;
                flex-direction: column;
                overflow-x: hidden;
              }
              
              .neon-text {
                text-shadow: 0 0 5px #0ff, 0 0 10px #0ff;
                color: #fff;
              }
              
              .neon-border {
                border: 1px solid rgba(0, 255, 255, 0.3);
                box-shadow: inset 0 0 10px rgba(0, 255, 255, 0.2), 0 0 10px rgba(0, 255, 255, 0.2);
              }
              
              .neon-border:focus {
                border-color: #0ff;
                box-shadow: inset 0 0 10px rgba(0, 255, 255, 0.5), 0 0 20px rgba(0, 255, 255, 0.5);
                outline: none;
              }
              
              .neon-glow {
                box-shadow: 0 0 15px rgba(0, 255, 255, 0.7);
              }
              
              .neon-btn {
                background: linear-gradient(135deg, #00ccff, #00ffcc);
                box-shadow: 0 0 15px rgba(0, 255, 255, 0.7);
                transition: all 0.3s ease;
              }
              
              .neon-btn:hover {
                box-shadow: 0 0 25px rgba(0, 255, 255, 0.9), 0 0 40px rgba(0, 255, 255, 0.5);
                transform: translateY(-2px);
              }
              
              .grid-pattern {
                background-image: 
                  linear-gradient(rgba(0, 255, 255, 0.05) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(0, 255, 255, 0.05) 1px, transparent 1px);
                background-size: 30px 30px;
              }
              
              .tooltip:hover .tooltip-text {
                opacity: 1;
                visibility: visible;
              }
              
              .tooltip-text {
                opacity: 0;
                visibility: hidden;
                transition: all 0.3s ease;
              }
              
              .pulse {
                animation: pulse-animation 2s infinite;
              }
              
              @keyframes pulse-animation {
                0% { box-shadow: 0 0 0 0px rgba(0, 255, 255, 0.4); }
                100% { box-shadow: 0 0 0 20px rgba(0, 255, 255, 0); }
              }
              
              .grid-line {
                position: absolute;
                background: rgba(0, 255, 255, 0.1);
              }
            `
          }}
        />
      </head>
      <body className="relative">
        {/* Animated grid lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="grid-line w-full h-px top-10 left-0"></div>
          <div className="grid-line w-full h-px top-1/3 left-0"></div>
          <div className="grid-line w-full h-px top-2/3 left-0"></div>
          <div className="grid-line w-px h-full left-10 top-0"></div>
          <div className="grid-line w-px h-full left-1/3 top-0"></div>
          <div className="grid-line w-px h-full left-2/3 top-0"></div>
        </div>
        
        {/* Floating particles */}
        <div className="particles absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-neon-cyan rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-neon-cyan rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 left-2/3 w-3 h-3 bg-neon-cyan rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-neon-cyan rounded-full animate-pulse"></div>
        </div>
        
        <div className="container mx-auto px-4 py-12 flex-grow flex items-center justify-center">
          <div className="w-full max-w-2xl">
            {/* Form Card */}
            <div className="bg-dark-card backdrop-blur-sm rounded-xl neon-border overflow-hidden relative z-10">
              <div className="p-1 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
              
              <div className="p-8 grid-pattern">
                {/* Header with animated logo */}
                <div className="text-center mb-10">
                  <div className="flex justify-center mb-4">
                    <img 
                      src="/lovable-uploads/7223877a-0a55-4ae4-9fbe-ad1c46acae0f.png" 
                      alt="Digital Frontier Logo"
                      className="h-24 w-auto pulse"
                    />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-2 neon-text font-['Orbitron']">
                    DIGITAL FRONTIER COMPANY
                  </h2>
                  <div className="h-1 w-32 bg-neon-cyan mx-auto rounded-full mb-3"></div>
                  <p className="text-cyan-300 font-light">Enter the digital frontier</p>
                </div>
                
                {/* Form */}
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div className="relative">
                    <label htmlFor="name" className="block text-sm font-medium text-cyan-200 mb-2">
                      <i className="fas fa-user mr-2"></i>Name: <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                        <input 
                          type="text" 
                          id="name"
                          name="text-1752650679296-0"
                          placeholder="First and Last" 
                          required
                          className="w-full px-4 py-3 bg-dark-bg text-white neon-border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition duration-300"
                        />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                        <i className="fas fa-user text-cyan-400"></i>
                      </div>
                    </div>
                  </div>
                  
                  {/* Email Field */}
                  <div className="relative">
                    <label htmlFor="email" className="block text-sm font-medium text-cyan-200 mb-2">
                      <i className="fas fa-envelope mr-2"></i>Email address: <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input 
                        type="email" 
                        id="email"
                        name="text-1752650807996-0"
                        placeholder="john@doe.com" 
                        required
                        className="w-full px-4 py-3 bg-dark-bg text-white neon-border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition duration-300"
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                        <i className="fas fa-at text-cyan-400"></i>
                      </div>
                    </div>
                  </div>
                  
                  {/* Social Link Field */}
                  <div className="relative">
                    <label htmlFor="social" className="block text-sm font-medium text-cyan-200 mb-2">
                      <i className="fas fa-link mr-2"></i>Social Link: <span className="text-red-500">*</span>
                      <span className="tooltip inline-block relative cursor-pointer">
                        <i className="fas fa-question-circle ml-1 text-cyan-400"></i>
                        <span className="tooltip-text absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 bg-gray-800 text-white text-xs rounded py-2 px-3 shadow-lg z-10">
                          Link to Facebook, Instagram, TikTok, YouTube, Twitch, etc.
                        </span>
                      </span>
                    </label>
                    <div className="relative">
                      <input 
                        type="text" 
                        id="social"
                        name="text-1752650925101-0"
                        required
                        className="w-full px-4 py-3 bg-dark-bg text-white neon-border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition duration-300"
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                        <i className="fas fa-hashtag text-cyan-400"></i>
                      </div>
                    </div>
                  </div>
                  
                  {/* Marketing Needs */}
                  <div className="relative">
                    <label htmlFor="marketing-needs" className="block text-sm font-medium text-cyan-200 mb-2">
                      <i className="fas fa-chart-line mr-2"></i>What are your Marketing needs and budget?
                    </label>
                    <div className="relative">
                      <select 
                        id="marketing-needs"
                        name="select-1752651040594-0"
                        className="w-full px-4 py-3 bg-dark-bg text-white neon-border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent appearance-none transition duration-300"
                      >
                        <option value="full stack marketing plan ( need to perform a review to price )">Full service we do it all</option>
                        <option value="$89 / Hour">Hourly Basis (mostly for smaller individual type tasks)</option>
                        <option value="Pricing starts At $899" selected>Specific Task i.e Web design, SEO, Local SEO, AI</option>
                        <option value="AI Crew Chief Package">AI Crew Chief Package - Proven AI Solutions</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <i className="fas fa-chevron-down text-cyan-400"></i>
                      </div>
                    </div>
                  </div>
                  
                  {/* Submit Button */}
                  <div className="pt-4">
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 neon-btn text-dark-bg font-bold rounded-lg text-lg tracking-wider uppercase transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <i className="fas fa-paper-plane mr-2"></i>
                      {isSubmitting ? 'Sending...' : 'Submit Request'}
                    </button>
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
              
              {/* Footer note */}
              <div className="p-4 text-center text-cyan-300 text-sm border-t border-cyan-900">
                <p>Your data is encrypted and securely transmitted</p>
              </div>
            </div>
            
            {/* Tech badges */}
            <div className="flex justify-center mt-8 space-x-6">
              <div className="flex items-center">
                <i className="fas fa-shield-alt text-cyan-400 mr-2"></i>
                <span className="text-sm">256-bit Encryption</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-bolt text-cyan-400 mr-2"></i>
                <span className="text-sm">AI-Powered</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-cloud text-cyan-400 mr-2"></i>
                <span className="text-sm">Cloud Hosted</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Animated footer */}
        <footer className="py-6 text-center text-cyan-400 text-sm relative z-10">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p>&copy; 2023 Digital Frontier Company. All rights reserved.</p>
              </div>
              <div className="flex space-x-6">
                <a href="#" className="hover:text-cyan-200 transition duration-300">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="hover:text-cyan-200 transition duration-300">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="hover:text-cyan-200 transition duration-300">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#" className="hover:text-cyan-200 transition duration-300">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </footer>

        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Add interactive effects
              document.addEventListener('DOMContentLoaded', function() {
                // Add focus effects to form elements
                const inputs = document.querySelectorAll('input, select');
                inputs.forEach(input => {
                  input.addEventListener('focus', function() {
                    this.parentElement.classList.add('neon-glow');
                  });
                  
                  input.addEventListener('blur', function() {
                    this.parentElement.classList.remove('neon-glow');
                  });
                });
                
                // Add pulse animation to header periodically
                setInterval(() => {
                  const header = document.querySelector('h1');
                  header.classList.add('animate-pulse');
                  setTimeout(() => {
                    header.classList.remove('animate-pulse');
                  }, 1000);
                }, 5000);
                
                // Add floating effect to form card
                const formCard = document.querySelector('.bg-dark-card');
                formCard.style.transition = 'transform 0.3s ease';
                
                formCard.addEventListener('mouseenter', () => {
                  formCard.style.transform = 'translateY(-5px)';
                });
                
                formCard.addEventListener('mouseleave', () => {
                  formCard.style.transform = 'translateY(0)';
                });
              });
            `
          }}
        />
      </body>
    </html>
  );
};

export default ModernContactForm;