import { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";

const InstaPage = () => {
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

  const headingText = "Follow us on Instagram";
  const headingWords = headingText.split(" ");

  const headingDuration = headingWords.length * 0.1;
  const buttonStartDelay = headingDuration + 0.2;

  return (
    <section 
      ref={sectionRef} 
      className={`relative py-40 bg-cover bg-center bg-no-repeat text-white overflow-hidden rounded-lg transition-all duration-700 ease-out hover:scale-105 h-full ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}`}
      style={{ backgroundImage: `url('https://res.cloudinary.com/dpsmum8qz/image/upload/v1754774326/ChatGPT_Image_Aug_10_2025_02_34_27_AM_hr4zfw.png')` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            {headingWords.map((word, index) => (
              <span
                key={index}
                className={`inline-block mr-3 transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                {word}
              </span>
            ))}
          </h2>
          <div 
            className={`flex justify-center transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            style={{ transitionDelay: `${buttonStartDelay}s` }}
          >
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={() => window.open('https://www.instagram.com/webstan_', '_blank')}
            >
              Follow Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstaPage;