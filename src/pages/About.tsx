import { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";

const AboutPage = () => {
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

  const headingText = "About Us";
  const words = headingText.split(" ");

  return (
    // Added id="about" to make this section linkable
    <section id="about" className="py-20 bg-black overflow-hidden mt-20">
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
                <h2 className="text-xl font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  Building Brands with Vision, Passion, and Precision
                </h2>
                <p className="text-foreground text-lg">
                  At WebStan, we don’t just create websites — we build experiences.
                  We're a modern creative agency driven by the idea that great design,
                  smart strategy, and genuine storytelling can transform how people see and engage with your brand.
                  Founded by two passionate minds — Om Pandey and Shubham Sahu — WebStan was born out of a shared vision:
                  to help businesses, startups, and creators make their mark online with bold, beautiful, and functional digital solutions.
                </p>
              </div>

              <div
                className={`transition-all duration-500 ease-out ${isContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: '0.6s' }}
              >
                <h2 className="text-xl font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  Our Story
                </h2>
                <p className="text-foreground text-lg">
                  What started as late-night brainstorming sessions and weekend side-projects turned into a full-blown creative agency.
                  We realized early on that businesses were struggling to find partners who truly understood both design and strategy —
                  not just how things look, but how they work and why they matter.
                  So, we built WebStan to be that missing piece.
                  <br />
                  Every project we take on is a collaboration, not a transaction.
                  We dive deep into your brand, understand your goals, and then bring your vision to life through clean
                  design, intuitive development, and marketing strategies that actually convert.
                </p>
              </div>

              <div
                className={`transition-all duration-500 ease-out ${isContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: '0.6s' }}
              >
                <h2 className="text-xl font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  What We Do
                </h2>
                <div className="text-foreground text-lg space-y-4">
                  <p>
                    We offer a tight but powerful suite of services designed to elevate your digital presence:
                  </p>
                  <ul className="space-y-4 list-disc pl-5">
                    <li>
                      <h3 className="font-semibold">Website Design & Development</h3>
                      <p className="text-muted-foreground">
                        From sleek one-pagers to complex web platforms — we craft responsive, modern websites built for
                        performance.
                      </p>
                    </li>
                    <li>
                      <h3 className="font-semibold">Web Branding & Brand Identity</h3>
                      <p className="text-muted-foreground">
                        Your brand deserves to stand out. We help you define and refine your identity — logo, typography,
                        colors, voice — everything that makes you, you.
                      </p>
                    </li>
                    <li>
                      <h3 className="font-semibold">UI/UX Design</h3>
                      <p className="text-muted-foreground">
                        We design interfaces that are not just beautiful but user-focused, making navigation seamless and
                        experiences unforgettable.
                      </p>
                    </li>
                    <li>
                      <h3 className="font-semibold">Digital Marketing</h3>
                      <p className="text-muted-foreground">
                        From social media strategies to SEO and paid campaigns — we help your brand grow and get seen by
                        the right people.
                      </p>
                    </li>
                    <li>
                      <h3 className="font-semibold">Brand Product Shoots</h3>
                      <p className="text-muted-foreground">
                        Visuals matter. We provide high-quality product photography that showcases your brand in the best
                        light — literally.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>

              <div
                className={`transition-all duration-500 ease-out ${isContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: '0.8s' }}
              >
                <h2 className="text-xl font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  Why Work With Us?
                </h2>
                <p className="text-foreground text-lg">
                  We're not the biggest agency — and we like it that way. It means we're more personal, more attentive,
                  and deeply involved in every project we take on. When you work with WebStan, you work directly with the
                  people who actually care about your success. We're not here for shortcuts. We're here to build
                  something that lasts.
                </p>
              </div>
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

export default AboutPage;
