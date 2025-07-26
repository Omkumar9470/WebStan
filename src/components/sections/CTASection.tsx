import { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom'; // Import the Link component

const CTASection = () => {
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

  const headingText = "Let’s Build Something Exceptional Together.";
  const headingWords = headingText.split(" ");

  const paragraphText = "Our expert team turns your unique ideas into high-performing, scalable digital solutions — built to last.";
  const paragraphWords = paragraphText.split(" ");
  
  const headingDuration = headingWords.length * 0.08;
  const paragraphStartDelay = headingDuration + 0.1;
  const buttonStartDelay = paragraphStartDelay + (paragraphWords.length * 0.08) + 0.2;

  return (
    <section ref={sectionRef} className="py-20 bg-background text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            {headingWords.map((word, index) => (
              <span
                key={index}
                className={`inline-block mr-3 transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${index * 0.08}s` }}
              >
                {word}
              </span>
            ))}
          </h2>
          
          <p className="text-xl text-muted-foreground">
             {paragraphWords.map((word, index) => (
              <span
                key={index}
                className={`inline-block mr-2 transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${paragraphStartDelay + index * 0.08}s` }}
              >
                {word}
              </span>
            ))}
          </p>

          <div 
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            style={{ transitionDelay: `${buttonStartDelay}s` }}
          >
            {/* The Button now uses asChild to render the Link, making it a navigation element */}
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
              <Link to="/contact">Let's Talk</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
