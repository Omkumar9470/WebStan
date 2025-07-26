import { useState, useEffect, useRef } from 'react';
import testimonialImage from "@/assets/testimonial-dominika.jpg";

const TestimonialSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const headingText = "What our client say";
  const words = headingText.split(" ");

  const quoteText = "I can't say enough good things about Vinno. Their design expertise is unmatched, and they have a keen eye for aesthetics. It was a pleasure collaborating with them. I can't say enough good things about Vinno.";
  const letters = quoteText.split('');
  
  // Simplified delay calculation
  const quoteStartDelay = (words.length * 0.08) + 0.2;

  return (
    <section ref={sectionRef} className="py-20 bg-background text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16">
            {words.map((word, index) => (
              <span
                key={index}
                className={`inline-block mr-3 transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${index * 0.08}s` }}
              >
                {word}
              </span>
            ))}
          </h2>

          <div className="space-y-8">
            <blockquote 
              className="text-xl md:text-2xl text-foreground leading-relaxed"
            >
              {letters.map((letter, index) => (
                <span
                  key={index}
                  className={`inline-block transition-all duration-500 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                  style={{ transitionDelay: `${quoteStartDelay + index * 0.015}s` }}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </span>
              ))}
            </blockquote>

            <div 
              className={`flex flex-col items-center space-y-4 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
              style={{ transitionDelay: `0.1s` }}
            >
              <img
                src={testimonialImage}
                alt="Dominika Drońska"
                className="w-20 h-20 rounded-full object-cover"
                onError={(e) => { e.currentTarget.src = 'https://placehold.co/100x100/1a1a1a/ffffff?text=D+D'; }}
              />
              <div className="text-center">
                <h4 className="text-lg font-semibold text-foreground">
                  Dominika Drońska
                </h4>
                <p className="text-muted-foreground">
                  Senior Data Analyst
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
