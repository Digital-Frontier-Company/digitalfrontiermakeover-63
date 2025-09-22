import { useState, useCallback, useRef } from 'react';
import { 
  sanitizeInput, 
  sanitizeEmail, 
  sanitizeUrl,
  validateEmail, 
  validateName, 
  validateUrl,
  createRateLimiter,
  generateCSRFToken,
  logSecurityEvent,
  FORM_SECURITY_CONFIG 
} from '@/utils/security';

interface FormData {
  name: string;
  email: string;
  socialLink: string;
  marketingNeeds: string;
}

interface ValidationErrors {
  name?: string;
  email?: string;
  socialLink?: string;
  general?: string;
}

export const useFormSecurity = () => {
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>({});
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [rateLimitTimeRemaining, setRateLimitTimeRemaining] = useState(0);
  
  // Create rate limiter (using IP would be better, but we'll use a browser fingerprint)
  const rateLimiter = useRef(createRateLimiter(
    FORM_SECURITY_CONFIG.RATE_LIMIT.MAX_ATTEMPTS,
    FORM_SECURITY_CONFIG.RATE_LIMIT.WINDOW_MS
  ));
  
  // Simple browser fingerprint for rate limiting
  const getBrowserFingerprint = useCallback(() => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    ctx?.fillText('fingerprint', 10, 10);
    const fingerprint = canvas.toDataURL();
    
    return btoa(
      navigator.userAgent + 
      navigator.language + 
      screen.width + 
      screen.height + 
      fingerprint
    );
  }, []);

  const sanitizeFormData = useCallback((formData: FormData): FormData => {
    return {
      name: sanitizeInput(formData.name),
      email: sanitizeEmail(formData.email),
      socialLink: sanitizeUrl(formData.socialLink),
      marketingNeeds: sanitizeInput(formData.marketingNeeds)
    };
  }, []);

  const validateFormData = useCallback((formData: FormData): ValidationErrors => {
    const errors: ValidationErrors = {};

    // Validate name
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    } else if (!validateName(formData.name)) {
      errors.name = 'Name must be 2-50 characters and contain only letters, spaces, hyphens, and apostrophes';
    }

    // Validate email
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    // Validate social link
    if (!formData.socialLink.trim()) {
      errors.socialLink = 'Social link is required';
    } else if (!validateUrl(formData.socialLink)) {
      errors.socialLink = 'Please enter a valid URL (e.g., https://instagram.com/username)';
    }

    // Check field length limits
    if (formData.name.length > FORM_SECURITY_CONFIG.FIELD_LIMITS.NAME) {
      errors.name = `Name must be less than ${FORM_SECURITY_CONFIG.FIELD_LIMITS.NAME} characters`;
    }
    
    if (formData.email.length > FORM_SECURITY_CONFIG.FIELD_LIMITS.EMAIL) {
      errors.email = `Email must be less than ${FORM_SECURITY_CONFIG.FIELD_LIMITS.EMAIL} characters`;
    }
    
    if (formData.socialLink.length > FORM_SECURITY_CONFIG.FIELD_LIMITS.URL) {
      errors.socialLink = `URL must be less than ${FORM_SECURITY_CONFIG.FIELD_LIMITS.URL} characters`;
    }

    return errors;
  }, []);

  const checkRateLimit = useCallback(() => {
    const fingerprint = getBrowserFingerprint();
    const canSubmit = rateLimiter.current.canAttempt(fingerprint);
    
    if (!canSubmit) {
      const remainingTime = rateLimiter.current.getRemainingTime(fingerprint);
      setIsRateLimited(true);
      setRateLimitTimeRemaining(Math.ceil(remainingTime / 1000));
      
      logSecurityEvent('RATE_LIMIT_EXCEEDED', {
        fingerprint: fingerprint.substring(0, 10) + '...',
        remainingTime
      });
      
      // Start countdown timer
      const timer = setInterval(() => {
        const remaining = rateLimiter.current.getRemainingTime(fingerprint);
        if (remaining <= 0) {
          setIsRateLimited(false);
          setRateLimitTimeRemaining(0);
          clearInterval(timer);
        } else {
          setRateLimitTimeRemaining(Math.ceil(remaining / 1000));
        }
      }, 1000);
      
      return false;
    }
    
    return true;
  }, [getBrowserFingerprint]);

  const secureFormSubmit = useCallback(async (
    formData: FormData,
    submitFunction: (sanitizedData: FormData, csrfToken: string) => Promise<void>
  ) => {
    // Clear previous errors
    setValidationErrors({});

    // Check rate limiting
    if (!checkRateLimit()) {
      return false;
    }

    // Sanitize input data
    const sanitizedData = sanitizeFormData(formData);
    
    // Validate sanitized data
    const errors = validateFormData(sanitizedData);
    
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      logSecurityEvent('VALIDATION_FAILED', { errors, formData: sanitizedData });
      return false;
    }

    try {
      // Generate CSRF token
      const csrfToken = generateCSRFToken();
      
      // Submit the form
      await submitFunction(sanitizedData, csrfToken);
      
      logSecurityEvent('FORM_SUBMITTED_SUCCESSFULLY', {
        hasName: !!sanitizedData.name,
        hasEmail: !!sanitizedData.email,
        hasSocialLink: !!sanitizedData.socialLink
      });
      
      return true;
    } catch (error) {
      logSecurityEvent('FORM_SUBMISSION_ERROR', { error: (error as Error).message });
      throw error;
    }
  }, [sanitizeFormData, validateFormData, checkRateLimit]);

  return {
    validationErrors,
    isRateLimited,
    rateLimitTimeRemaining,
    secureFormSubmit,
    sanitizeFormData,
    validateFormData
  };
};