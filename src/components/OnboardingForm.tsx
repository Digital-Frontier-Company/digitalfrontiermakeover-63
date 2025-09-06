import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useToast } from '@/hooks/use-toast';
import { submitToHubSpot } from '@/utils/hubspot';
import { Building2, User, Mail, Phone, MapPin, Globe, FileText, Palette, Upload, Key } from 'lucide-react';

const OnboardingForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    // Section 1: Business Information
    businessName: '',
    websiteUrl: '',
    contactPerson: '',
    email: '',
    phone: '',
    businessAddress: '',
    
    // Section 2: Project Details
    webDesignPackage: '',
    monthlyServicePlan: '',
    addOnServices: [] as string[],
    
    // Section 3: Brand & Style Guidelines  
    businessDescription: '',
    hasLogo: '',
    websiteInspiration: '',
    
    // Section 4: Content & Assets
    providingContent: '',
    needCopywriting: '',
    
    // Section 5: Login Credentials
    domainRegistrar: '',
    hostingProvider: '',
    socialMediaAccounts: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleAddOnServiceChange = (service: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      addOnServices: checked 
        ? [...prev.addOnServices, service]
        : prev.addOnServices.filter(s => s !== service)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await submitToHubSpot({
        firstName: formData.contactPerson.split(' ')[0] || '',
        lastName: formData.contactPerson.split(' ').slice(1).join(' ') || '',
        email: formData.email,
        phone: formData.phone,
        company: formData.businessName,
        website: formData.websiteUrl,
        business_address: formData.businessAddress,
        web_design_package: formData.webDesignPackage,
        monthly_service_plan: formData.monthlyServicePlan,
        add_on_services: formData.addOnServices.join(', '),
        business_description: formData.businessDescription,
        has_logo: formData.hasLogo,
        website_inspiration: formData.websiteInspiration,
        providing_content: formData.providingContent,
        need_copywriting: formData.needCopywriting,
        domain_registrar: formData.domainRegistrar,
        hosting_provider: formData.hostingProvider,
        social_media_accounts: formData.socialMediaAccounts,
        form_type: 'Client Onboarding Form'
      });

      toast({
        title: "Onboarding Form Submitted!",
        description: "Thank you for completing the form. We'll be in touch shortly to schedule our project kickoff meeting.",
      });
      
      // Reset form
      setFormData({
        businessName: '',
        websiteUrl: '',
        contactPerson: '',
        email: '',
        phone: '',
        businessAddress: '',
        webDesignPackage: '',
        monthlyServicePlan: '',
        addOnServices: [],
        businessDescription: '',
        hasLogo: '',
        websiteInspiration: '',
        providingContent: '',
        needCopywriting: '',
        domainRegistrar: '',
        hostingProvider: '',
        socialMediaAccounts: ''
      });
      
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Submission Error", 
        description: "There was a problem submitting your form. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const addOnServiceOptions = [
    'Advanced SEO (+$1,000/month)',
    'Full Social Media Management (+$1,500/month)', 
    'Google Ads Setup & Management (+$2,000/month)',
    'Conversion Rate Optimization (+$1,000/month)',
    'CRM Setup & Automation ($3,000 one-time)',
    'Analytics & Reporting Dashboards (+$750/month)'
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card className="border-electric-azure/20 bg-card/90">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-electric-azure to-electric-purple flex items-center justify-center">
              <Building2 className="w-8 h-8 text-white" />
            </div>
          </div>
          <CardTitle className="text-3xl font-bold text-gradient bg-gradient-to-r from-electric-azure to-electric-purple bg-clip-text text-transparent">
            Digital Frontier Company - Client Onboarding Form
          </CardTitle>
          <p className="text-muted-foreground mt-2">
            Welcome to Digital Frontier Company! We are excited to partner with you on your digital journey. 
            Please complete this form to help us get started.
          </p>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* Section 1: Business Information */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-electric-azure flex items-center">
                <Building2 className="w-5 h-5 mr-2" />
                Section 1: Business Information
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="businessName" className="flex items-center mb-2">
                    <Building2 className="w-4 h-4 mr-2" />
                    Business Name <span className="text-red-400 ml-1">*</span>
                  </Label>
                  <Input
                    id="businessName"
                    value={formData.businessName}
                    onChange={(e) => handleInputChange('businessName', e.target.value)}
                    required
                    className="bg-background border-electric-azure/30"
                  />
                </div>
                
                <div>
                  <Label htmlFor="websiteUrl" className="flex items-center mb-2">
                    <Globe className="w-4 h-4 mr-2" />
                    Website URL (if any)
                  </Label>
                  <Input
                    id="websiteUrl"
                    type="url"
                    value={formData.websiteUrl}
                    onChange={(e) => handleInputChange('websiteUrl', e.target.value)}
                    className="bg-background border-electric-azure/30"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="contactPerson" className="flex items-center mb-2">
                    <User className="w-4 h-4 mr-2" />
                    Contact Person <span className="text-red-400 ml-1">*</span>
                  </Label>
                  <Input
                    id="contactPerson"
                    value={formData.contactPerson}
                    onChange={(e) => handleInputChange('contactPerson', e.target.value)}
                    required
                    className="bg-background border-electric-azure/30"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="flex items-center mb-2">
                    <Mail className="w-4 h-4 mr-2" />
                    Email Address <span className="text-red-400 ml-1">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                    className="bg-background border-electric-azure/30"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="phone" className="flex items-center mb-2">
                    <Phone className="w-4 h-4 mr-2" />
                    Phone Number <span className="text-red-400 ml-1">*</span>
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    required
                    className="bg-background border-electric-azure/30"
                  />
                </div>
                
                <div>
                  <Label htmlFor="businessAddress" className="flex items-center mb-2">
                    <MapPin className="w-4 h-4 mr-2" />
                    Business Address <span className="text-red-400 ml-1">*</span>
                  </Label>
                  <Input
                    id="businessAddress"
                    value={formData.businessAddress}
                    onChange={(e) => handleInputChange('businessAddress', e.target.value)}
                    required
                    className="bg-background border-electric-azure/30"
                  />
                </div>
              </div>
            </div>

            {/* Section 2: Project Details */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-electric-azure flex items-center">
                <FileText className="w-5 h-5 mr-2" />
                Section 2: Project Details
              </h3>
              
              <div>
                <Label className="text-base font-medium mb-3 block">
                  Which web design package did you select? <span className="text-red-400 ml-1">*</span>
                </Label>
                <RadioGroup 
                  value={formData.webDesignPackage} 
                  onValueChange={(value) => handleInputChange('webDesignPackage', value)}
                  className="space-y-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="basic" id="basic" />
                    <Label htmlFor="basic">Basic ($1,500)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="professional" id="professional" />
                    <Label htmlFor="professional">Professional ($3,000)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="premium" id="premium" />
                    <Label htmlFor="premium">Premium ($6,000)</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label className="text-base font-medium mb-3 block">
                  Which monthly service plan did you select? <span className="text-red-400 ml-1">*</span>
                </Label>
                <RadioGroup 
                  value={formData.monthlyServicePlan} 
                  onValueChange={(value) => handleInputChange('monthlyServicePlan', value)}
                  className="space-y-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="digital-care" id="digital-care" />
                    <Label htmlFor="digital-care">Digital Care Plan ($500/month)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="none" id="none" />
                    <Label htmlFor="none">No monthly plan at this time</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label className="text-base font-medium mb-3 block">
                  Please select any add-on services you require:
                </Label>
                <div className="space-y-3">
                  {addOnServiceOptions.map((service) => (
                    <div key={service} className="flex items-center space-x-2">
                      <Checkbox 
                        id={service}
                        checked={formData.addOnServices.includes(service)}
                        onCheckedChange={(checked) => handleAddOnServiceChange(service, checked as boolean)}
                      />
                      <Label htmlFor={service} className="text-sm">{service}</Label>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Section 3: Brand & Style Guidelines */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-electric-azure flex items-center">
                <Palette className="w-5 h-5 mr-2" />
                Section 3: Brand & Style Guidelines
              </h3>
              
              <div>
                <Label htmlFor="businessDescription" className="flex items-center mb-2">
                  <FileText className="w-4 h-4 mr-2" />
                  Please provide a brief description of your business and its target audience:
                </Label>
                <Textarea
                  id="businessDescription"
                  value={formData.businessDescription}
                  onChange={(e) => handleInputChange('businessDescription', e.target.value)}
                  rows={4}
                  className="bg-background border-electric-azure/30"
                />
              </div>

              <div>
                <Label className="text-base font-medium mb-3 block">
                  Do you have an existing logo or branding guidelines?
                </Label>
                <RadioGroup 
                  value={formData.hasLogo} 
                  onValueChange={(value) => handleInputChange('hasLogo', value)}
                  className="space-y-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes-logo" id="yes-logo" />
                    <Label htmlFor="yes-logo">Yes, I have a logo and branding guidelines</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes-logo-only" id="yes-logo-only" />
                    <Label htmlFor="yes-logo-only">Yes, I have a logo but no branding guidelines</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="no" />
                    <Label htmlFor="no">No, I need help creating a logo and branding</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label htmlFor="websiteInspiration" className="flex items-center mb-2">
                  <Globe className="w-4 h-4 mr-2" />
                  Please list any websites you like the design of, and explain what you like about them:
                </Label>
                <Textarea
                  id="websiteInspiration"
                  value={formData.websiteInspiration}
                  onChange={(e) => handleInputChange('websiteInspiration', e.target.value)}
                  rows={3}
                  className="bg-background border-electric-azure/30"
                />
              </div>
            </div>

            {/* Section 4: Content & Assets */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-electric-azure flex items-center">
                <Upload className="w-5 h-5 mr-2" />
                Section 4: Content & Assets
              </h3>
              
              <div>
                <Label className="text-base font-medium mb-3 block">
                  Will you be providing the content (text and images) for the website?
                </Label>
                <RadioGroup 
                  value={formData.providingContent} 
                  onValueChange={(value) => handleInputChange('providingContent', value)}
                  className="space-y-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes-all" id="yes-all" />
                    <Label htmlFor="yes-all">Yes, I will provide all content and images</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="partial" id="partial" />
                    <Label htmlFor="partial">I will provide some content, but need help with the rest</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="no-content" />
                    <Label htmlFor="no-content">No, I need help creating all content</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label className="text-base font-medium mb-3 block">
                  If not, would you like to purchase our copywriting services?
                </Label>
                <RadioGroup 
                  value={formData.needCopywriting} 
                  onValueChange={(value) => handleInputChange('needCopywriting', value)}
                  className="space-y-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="yes-copywriting" />
                    <Label htmlFor="yes-copywriting">Yes, please provide copywriting services</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="no-copywriting" />
                    <Label htmlFor="no-copywriting">No, I will handle copywriting myself</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="maybe" id="maybe-copywriting" />
                    <Label htmlFor="maybe-copywriting">Maybe, let's discuss this during our meeting</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>

            {/* Section 5: Login Credentials */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-electric-azure flex items-center">
                <Key className="w-5 h-5 mr-2" />
                Section 5: Login Credentials
              </h3>
              <p className="text-sm text-muted-foreground">
                Please provide login credentials for the following accounts, if applicable:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="domainRegistrar" className="flex items-center mb-2">
                    <Globe className="w-4 h-4 mr-2" />
                    Domain Registrar
                  </Label>
                  <Textarea
                    id="domainRegistrar"
                    value={formData.domainRegistrar}
                    onChange={(e) => handleInputChange('domainRegistrar', e.target.value)}
                    rows={2}
                    placeholder="Provider, login details, etc."
                    className="bg-background border-electric-azure/30"
                  />
                </div>
                
                <div>
                  <Label htmlFor="hostingProvider" className="flex items-center mb-2">
                    <Building2 className="w-4 h-4 mr-2" />
                    Current Hosting Provider
                  </Label>
                  <Textarea
                    id="hostingProvider"
                    value={formData.hostingProvider}
                    onChange={(e) => handleInputChange('hostingProvider', e.target.value)}
                    rows={2}
                    placeholder="Provider, login details, etc."
                    className="bg-background border-electric-azure/30"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="socialMediaAccounts" className="flex items-center mb-2">
                  <User className="w-4 h-4 mr-2" />
                  Social Media Accounts
                </Label>
                <Textarea
                  id="socialMediaAccounts"
                  value={formData.socialMediaAccounts}
                  onChange={(e) => handleInputChange('socialMediaAccounts', e.target.value)}
                  rows={3}
                  placeholder="Facebook, Instagram, Twitter, LinkedIn login details, etc."
                  className="bg-background border-electric-azure/30"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-electric-azure to-electric-purple hover:from-electric-azure/90 hover:to-electric-purple/90 text-white font-bold py-4 px-6 rounded-lg text-lg"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Onboarding Form'}
              </Button>
              <p className="text-center text-sm text-muted-foreground mt-4">
                Thank you for completing this form. We will be in touch shortly to schedule our project kickoff meeting.
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default OnboardingForm;