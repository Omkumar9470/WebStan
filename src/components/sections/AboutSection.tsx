import { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  // State to track if the elements are visible on screen
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [isImageVisible, setIsImageVisible] = useState(false);

  // Refs to attach to the elements we want to observe
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  // This effect sets up the Intersection Observer to watch for when elements scroll into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === contentRef.current) {
              setIsContentVisible(true);
            }
            if (entry.target === imageRef.current) {
              setIsImageVisible(true);
            }
            // Stop observing the element once it's visible
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (contentRef.current) observer.observe(contentRef.current);
    if (imageRef.current) observer.observe(imageRef.current);

    // Cleanup function to unobserve elements when the component unmounts
    return () => {
      if (contentRef.current) observer.unobserve(contentRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);

  const headingText = "Shaping the Future of Digital Through Custom Web Solutions";
  const words = headingText.split(" ");

  return (
    // Added id="about" to make this section linkable
    <section id="about" className="py-20 bg-black overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left side - Content */}
          <div ref={contentRef} className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              {/* The heading animates word by word */}
              {words.map((word, index) => (
                <span
                  key={index}
                  // Added mr-4 for spacing between words
                  className={`inline-block mr-4 transition-all duration-500 ease-out ${isContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  {word}
                </span>
              ))}
            </h2>
            
            <div className="space-y-6">
              {/* Each text block animates in with a delay */}
              <div
                className={`transition-all duration-500 ease-out ${isContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: '0.6s' }}
              >
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  Experience and Expertise
                </h3>
                <p className="text-foreground text-lg">
                  Delivering High-Precision Digital Solutions with Proven Technical Expertise.
                </p>
              </div>
              
              <div
                className={`transition-all duration-500 ease-out ${isContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: '0.6s' }} // Increased delay for second paragraph
              >
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  Customized Solution
                </h3>
                <p className="text-foreground text-lg">
                  Our custom-built solutions are engineered to match your vision, workflow, and growth strategy.
                </p>
              </div>
            </div>

            <div
              className={`transition-all duration-500 ease-out ${isContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: '0.7s' }} // Increased delay for button
            >
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Read Our Story
              </Button>
            </div>
          </div>

          {/* Right side - Image */}
          <div ref={imageRef}>
            {/* The image slides up from the bottom */}
            <img
              src={'https://res.cloudinary.com/dpsmum8qz/image/upload/v1754321605/2_kzin9f.jpg'}
              alt="Our team at work"
              className={`w-full h-auto object-cover rounded-lg transition-all duration-1000 ease-out ${isImageVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
              style={{ transitionDelay: '0.2s' }} // Added delay to image animation
              onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                e.currentTarget.src = 'https://placehold.co/800x600/1a1a1a/ffffff?text=Our+Team';
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
