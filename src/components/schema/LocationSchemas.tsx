import { Helmet } from 'react-helmet-async';
import { 
  generateLocalBusinessSchema, 
  generateServiceSchema,
  generateOrganizationSchema 
} from '@/lib/utils';

interface LocationSchemasProps {
  city: string;
  state: string;
  latitude?: number;
  longitude?: number;
  services: string[];
  businessName?: string;
  phoneNumber?: string;
  address?: string;
}

// Geographic coordinates for Tennessee cities
const CITY_COORDINATES = {
  'Memphis': { lat: 35.1495, lng: -90.0490 },
  'Collierville': { lat: 35.0420, lng: -89.6645 },
  'Germantown': { lat: 35.0867, lng: -89.8101 }
};

export default function LocationSchemas({
  city,
  state,
  latitude,
  longitude,
  services,
  businessName = "Digital Frontier Company",
  phoneNumber = "+1-901-555-0123",
  address
}: LocationSchemasProps) {
  // Use provided coordinates or fall back to city defaults
  const coords = CITY_COORDINATES[city as keyof typeof CITY_COORDINATES];
  const finalLat = latitude || coords?.lat || 35.1495;
  const finalLng = longitude || coords?.lng || -90.0490;

  // Enhanced operating hours for local business
  const operatingHours = [
    "Mo-Fr 09:00-17:00",
    "Sa 10:00-14:00"
  ];

  // Generate enhanced local business schema
  const localBusinessSchema = generateLocalBusinessSchema(
    `${businessName} - ${city} Digital Marketing`,
    city,
    state,
    finalLat,
    finalLng,
    phoneNumber,
    address,
    services,
    "$$$",
    operatingHours
  );

  // Enhanced service schema with local focus
  const serviceSchema = generateServiceSchema(
    `AI-Powered Digital Marketing Services in ${city}`,
    `Comprehensive digital marketing and SEO services specifically designed for ${city}, ${state} businesses. Our AI-driven approach delivers measurable results for local companies.`,
    businessName,
    "Digital Marketing Services",
    `${city}, ${state}`,
    services.map(service => ({
      name: service,
      description: `Professional ${service.toLowerCase()} services tailored for ${city} businesses`,
      price: "Contact for pricing"
    }))
  );

  // Organization schema with local branch information
  const organizationSchema = {
    ...generateOrganizationSchema(),
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city,
      "addressRegion": state,
      "addressCountry": "US",
      ...(address && { "streetAddress": address })
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": finalLat,
      "longitude": finalLng
    },
    "areaServed": {
      "@type": "City",
      "name": city,
      "containedInPlace": {
        "@type": "State",
        "name": state
      }
    }
  };

  // Professional service schema for better AI understanding
  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": `${businessName} ${city}`,
    "description": `Leading digital marketing agency serving ${city}, ${state} with AI-powered solutions`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city,
      "addressRegion": state,
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates", 
      "latitude": finalLat,
      "longitude": finalLng
    },
    "telephone": phoneNumber,
    "url": `https://thedigitalfrontier.ai/${city.toLowerCase()}-digital-marketing`,
    "priceRange": "$$$",
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": finalLat,
        "longitude": finalLng
      },
      "geoRadius": "25000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `${city} Digital Marketing Services`,
      "itemListElement": services.map(service => ({
        "@type": "Offer",
        "name": service,
        "description": `Expert ${service.toLowerCase()} for ${city} businesses`,
        "areaServed": {
          "@type": "City",
          "name": city
        }
      }))
    }
  };

  return (
    <Helmet>
      {/* Local Business Schema */}
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>

      {/* Service Schema */}
      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>

      {/* Organization Schema */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>

      {/* Professional Service Schema */}
      <script type="application/ld+json">
        {JSON.stringify(professionalServiceSchema)}
      </script>
    </Helmet>
  );
}