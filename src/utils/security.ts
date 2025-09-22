// Security utilities for input sanitization and validation
import DOMPurify from 'isomorphic-dompurify';

// Input sanitization functions
export const sanitizeInput = (input: string): string => {
  if (!input) return '';
  
  // Remove potential XSS scripts and malicious content
  return DOMPurify.sanitize(input.trim(), { 
    ALLOWED_TAGS: [],
    ALLOWED_ATTR: []
  });
};

export const sanitizeEmail = (email: string): string => {
  if (!email) return '';
  
  // Basic email sanitization
  const sanitized = sanitizeInput(email);
  return sanitized.toLowerCase();
};

export const sanitizeUrl = (url: string): string => {
  if (!url) return '';
  
  // Sanitize and validate URL format
  const sanitized = sanitizeInput(url);
  
  // Allow common social media domains and basic URL patterns
  const allowedPatterns = [
    /^https?:\/\/(www\.)?(facebook|instagram|twitter|tiktok|youtube|twitch|linkedin)\.com\/.+/i,
    /^https?:\/\/(www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}\/.*/i
  ];
  
  // If it doesn't start with http/https, add https://
  const urlWithProtocol = sanitized.match(/^https?:\/\//) ? sanitized : `https://${sanitized}`;
  
  return urlWithProtocol;
};

// Validation functions
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateName = (name: string): boolean => {
  // Allow letters, spaces, hyphens, apostrophes
  const nameRegex = /^[a-zA-Z\s'-]{2,50}$/;
  return nameRegex.test(name.trim());
};

export const validateUrl = (url: string): boolean => {
  try {
    const urlObj = new URL(url.startsWith('http') ? url : `https://${url}`);
    return ['http:', 'https:'].includes(urlObj.protocol);
  } catch {
    return false;
  }
};

// Rate limiting utility
export const createRateLimiter = (maxAttempts: number, windowMs: number) => {
  const attempts = new Map<string, { count: number; resetTime: number }>();
  
  return {
    canAttempt: (identifier: string): boolean => {
      const now = Date.now();
      const record = attempts.get(identifier);
      
      if (!record || now > record.resetTime) {
        attempts.set(identifier, { count: 1, resetTime: now + windowMs });
        return true;
      }
      
      if (record.count >= maxAttempts) {
        return false;
      }
      
      record.count++;
      return true;
    },
    
    getRemainingTime: (identifier: string): number => {
      const record = attempts.get(identifier);
      if (!record) return 0;
      
      const now = Date.now();
      return Math.max(0, record.resetTime - now);
    }
  };
};

// Form security configuration
export const FORM_SECURITY_CONFIG = {
  // Rate limiting: 3 submissions per 5 minutes per IP
  RATE_LIMIT: {
    MAX_ATTEMPTS: 3,
    WINDOW_MS: 5 * 60 * 1000 // 5 minutes
  },
  
  // Field length limits
  FIELD_LIMITS: {
    NAME: 50,
    EMAIL: 320, // RFC 5321 limit
    URL: 2048,
    MESSAGE: 1000
  },
  
  // Validation patterns
  PATTERNS: {
    NAME: /^[a-zA-Z\s'-]{2,50}$/,
    EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  }
};

// Generate a simple client-side token for basic CSRF protection
export const generateCSRFToken = (): string => {
  return btoa(crypto.getRandomValues(new Uint8Array(32)).join(''));
};

// Log security events (in production, this would send to monitoring service)
export const logSecurityEvent = (event: string, details: any) => {
  console.warn(`[SECURITY] ${event}:`, details);
  
  // In production, you would send this to your monitoring service
  // Example: analytics.track('security_event', { event, details, timestamp: Date.now() });
};