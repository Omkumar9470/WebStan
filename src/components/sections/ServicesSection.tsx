import { useState, useEffect, useRef } from 'react';

const ServicesSection = () => {
  // State to track if the section is visible on screen
  const [isVisible, setIsVisible] = useState(false);
  
  // Ref to attach to the section we want to observe
  const sectionRef = useRef<HTMLDivElement>(null);

  // This effect sets up the Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Stop observing once it's visible to save resources
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    // Cleanup function
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const services = [
    {
      number: "01",
      title: "Website Development",
      href: "/service/content-writing"
    },
    {
      number: "02", 
      title: "UI & UX Design",
      href: "/service/branding-identity"
    },
    {
      number: "03",
      title: "Search Engine Optimization", 
      href: "/service/search-engine-optimization"
    },
    {
      number: "04",
      title: "Personalized ChatBot",
      href: "/service/product-design"
    }
  ];

  const headingText = "Most demanded services offered by us";
  const words = headingText.split(" ");

  return (
    // Added a ref and id to the section
    <section id="services" ref={sectionRef} className="py-20 bg-background text-white">
      <div className="container mx-auto px-6">
        <h2 
          className="text-4xl md:text-5xl font-bold text-foreground mb-16 text-center"
        >
          {words.map((word, index) => (
            <span
              key={index}
              className={`inline-block mr-4 transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {word}
            </span>
          ))}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            // This new outer div handles the initial animation
            <div
              key={service.number}
              className={`${isVisible ? 'animate-pixelateIn' : 'opacity-0'}`}
            >
              {/* The inner 'a' tag now only handles hover effects and content */}
              <a
                href={service.href}
                className="block p-8 bg-card rounded-lg border border-border transition-all duration-300 hover:scale-105 hover:border-primary"
              >
                <div className="space-y-4">
                  <div className="text-3xl font-bold text-primary">
                    {service.number}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {service.title}
                  </h3>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
