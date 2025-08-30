import { Helmet } from 'react-helmet-async';
import { 
  generateLocalBusinessSchema, 
  generateServiceSchema, 
  generateEnhancedFAQSchema,
  generateHowToSchema,
  generateCaseStudySchema,
  generateReviewAggregateSchema
} from '@/lib/utils';

interface SchemaManagerProps {
  // Local Business Schema
  businessName?: string;
  city?: string;
  state?: string;
  latitude?: number;
  longitude?: number;
  phoneNumber?: string;
  address?: string;
  services?: string[];
  priceRange?: string;
  operatingHours?: object;

  // Service Schema
  serviceName?: string;
  serviceDescription?: string;
  serviceType?: string;
  serviceOffers?: Array<{name: string, description: string, price?: string}>;

  // FAQ Schema
  faqs?: Array<{
    question: string;
    answer: string;
    category?: string;
    relatedQuestions?: string[];
  }>;

  // How-To Schema
  howToName?: string;
  howToDescription?: string;
  howToSteps?: Array<{name: string, text: string, image?: string}>;
  totalTime?: string;
  estimatedCost?: string;

  // Case Study Schema
  caseStudies?: Array<{
    name: string;
    description: string;
    client: string;
    industry: string;
    challenge: string;
    solution: string;
    results: Array<{metric: string, value: string}>;
    datePublished?: string;
  }>;

  // Reviews Schema
  reviewsItemName?: string;
  reviewsRating?: number;
  reviewsCount?: number;
  reviews?: Array<{
    author: string;
    rating: number;
    text: string;
    datePublished?: string;
  }>;
}

export default function SchemaManager({
  businessName,
  city,
  state,
  latitude,
  longitude,
  phoneNumber,
  address,
  services,
  priceRange,
  operatingHours,
  serviceName,
  serviceDescription,
  serviceType,
  serviceOffers,
  faqs,
  howToName,
  howToDescription,
  howToSteps,
  totalTime,
  estimatedCost,
  caseStudies,
  reviewsItemName,
  reviewsRating,
  reviewsCount,
  reviews
}: SchemaManagerProps) {
  const schemas = [];

  // Generate Local Business Schema
  if (businessName && city && state) {
    schemas.push(generateLocalBusinessSchema(
      businessName,
      city,
      state,
      latitude,
      longitude,
      phoneNumber,
      address,
      services,
      priceRange,
      operatingHours
    ));
  }

  // Generate Service Schema
  if (serviceName && serviceDescription && serviceType) {
    schemas.push(generateServiceSchema(
      serviceName,
      serviceDescription,
      "Digital Frontier Company",
      serviceType,
      city ? `${city}, ${state}` : "Worldwide",
      serviceOffers
    ));
  }

  // Generate Enhanced FAQ Schema
  if (faqs && faqs.length > 0) {
    schemas.push(generateEnhancedFAQSchema(faqs));
  }

  // Generate How-To Schema
  if (howToName && howToDescription && howToSteps) {
    schemas.push(generateHowToSchema(
      howToName,
      howToDescription,
      howToSteps,
      totalTime,
      estimatedCost
    ));
  }

  // Generate Case Study Schemas
  if (caseStudies && caseStudies.length > 0) {
    caseStudies.forEach(caseStudy => {
      schemas.push(generateCaseStudySchema(
        caseStudy.name,
        caseStudy.description,
        caseStudy.client,
        caseStudy.industry,
        caseStudy.challenge,
        caseStudy.solution,
        caseStudy.results,
        caseStudy.datePublished
      ));
    });
  }

  // Generate Review Aggregate Schema
  if (reviewsItemName && reviewsRating && reviewsCount) {
    schemas.push(generateReviewAggregateSchema(
      reviewsItemName,
      reviewsRating,
      reviewsCount,
      reviews
    ));
  }

  return (
    <Helmet>
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}