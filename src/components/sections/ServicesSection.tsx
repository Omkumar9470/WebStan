import { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
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

  return (
    <section ref={sectionRef} id="services" className="py-8 bg-section-bg text-white">
      <div className="container mx-auto px-0">
        <div
          className={`group relative transition-all duration-[1000ms] ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className={`overflow-hidden rounded-lg relative transition-all duration-1000 ${isVisible ? 'h-[100vh]' : 'h-[60vh]'}`}>
            <div
              className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-[500ms]"
              style={{ backgroundImage: "url('https://res.cloudinary.com/dpsmum8qz/image/upload/v1754840357/1754840041905_2_gxbpmy.jpg')" }}>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex flex-col justify-between">
              <div className="bg-transparent p-4 rounded-lg md:backdrop-blur-sm transition-opacity duration-[700ms] md:group-hover:opacity-75">
                <h2 className="text-3xl md:text-5xl font-bold text-white">Branding</h2>
              </div>
              <div className='flex justify-between items-end'>
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 z-10 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-[700ms]">
                  <div className="p-3 rounded-lg">
                    <h2 className="text-xl md:text-2xl font-semibold text-white">Logo</h2>
                  </div>
                  <div className="p-3 rounded-lg">
                    <h2 className="text-xl md:text-2xl font-semibold text-white">Design</h2>
                  </div>
                  <div className="p-3 rounded-lg">
                    <h2 className="text-xl md:text-2xl font-semibold text-white">Photoshoot</h2>
                  </div>
                </div>
                <div className="z-10 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-[700ms]">
                  <a href="/branding">
                    <Button
                      variant="outline"
                      className="border-primary text-primary bg-transparent hover:bg-primary hover:text-primary-foreground px-6 py-3 text-lg"
                    >
                      view all
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
