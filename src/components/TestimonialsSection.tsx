
import { Star } from "lucide-react";

type TestimonialProps = {
  image: string;
  quote: string;
  name: string;
  title: string;
  company: string;
};

const Testimonial = ({ image, quote, name, title, company }: TestimonialProps) => (
  <div className="df-testimonial-card">
    <div className="df-testimonial-content">
      <div className="df-testimonial-image-container">
        <img src={image} alt={`${name} headshot`} className="df-testimonial-image" />
      </div>
      <div className="df-testimonial-quote-container">
        <div className="df-testimonial-quote">
          <span className="df-quote-mark">"</span>
          {quote}
        </div>
        <div className="df-testimonial-author">
          <div className="df-testimonial-name">{name}</div>
          <div className="df-testimonial-position">{title}
            {company && <>, {company}</>}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const TestimonialsSection = () => {
  return (
    <section className="df-testimonials-section">
      <div className="container">
        <div className="text-center mb-3">
          <div className="df-stars-container">
            <Star className="df-star-icon" fill="#00BFFF" strokeWidth={1} />
            <Star className="df-star-icon" fill="#00BFFF" strokeWidth={1} />
            <Star className="df-star-icon" fill="#00BFFF" strokeWidth={1} />
            <Star className="df-star-icon" fill="#00BFFF" strokeWidth={1} />
            <Star className="df-star-icon" fill="#00BFFF" strokeWidth={1} />
            <div className="df-rating-label">Trusted by businesses across Memphis and beyond</div>
          </div>
        </div>
        
        <div className="df-testimonials-container">
          <Testimonial 
            image="/lovable-uploads/7cb44db8-2a71-4927-bc07-e05c54261377.png"
            quote="Enrollments up 85% in a single semester thanks to their tailored ad funnels."
            name="Amy B."
            title="Director"
            company="Delta Learning Center"
          />
          
          <Testimonial 
            image="/lovable-uploads/4a25c6e7-d446-42a7-b9be-e55739bc1e58.png"
            quote="Our project bids doubled after their Answer Engine Optimization roadmap."
            name="Denise C."
            title="COO"
            company="Memphis Earth Movers"
          />
          
          <Testimonial 
            image="/lovable-uploads/05e5d28b-90bc-4666-9f8c-eb24aa8f2db4.png"
            quote="Digital Frontier dialed in our local search and our phone hasn't stopped ringing."
            name="Mark R."
            title="Owner"
            company="Patriot Plunges"
          />
        </div>

        <div className="df-testimonials-container">
          <Testimonial 
            image="/lovable-uploads/34b9c76a-de0d-438b-aa2c-82b92aac2a9f.png"
            quote="Digital Frontier transformed our online presence. In three months our traffic grew 120% and qualified leads doubled. Couldn't be happier!"
            name="Sarah L."
            title="Owner"
            company="Memphis Coffee Co."
          />
        </div>

        <div className="df-certifications">
          <a href="https://designrush.com" target="_blank" rel="noopener noreferrer" className="df-certification-badge">
            <img src="/lovable-uploads/8a3a4ac6-afc9-40fa-b252-4f574c36292e.png" alt="Read our reviews at DesignRush.com" />
          </a>
          <div className="df-certification-badge">
            <img src="/lovable-uploads/11d4191c-6402-4a54-bb45-9f2a67acf667.png" alt="Lindy Certified Partner" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
