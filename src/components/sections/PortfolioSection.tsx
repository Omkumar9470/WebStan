import { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import projectZ3 from "@/assets/project-z3.jpg";
import projectVinency from "@/assets/project-vinency.jpg";
import projectStudioClay from "@/assets/project-studio-clay.jpg";
import projectPentaclay from "@/assets/project-pentaclay.jpg";

const PortfolioSection = () => {
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

  const projects = [
    {
      image: projectZ3,
      title: "Z3 Branding & Website",
      year: "© 2024",
      href: "/project/z3-branding-website"
    },
    {
      image: projectVinency,
      title: "Vinency Website",
      year: "© 2023",
      href: "/project/vinency-website"
    },
    {
      image: projectStudioClay,
      title: "Studio Clay",
      year: "© 2022",
      href: "/project/studio-clay"
    }
  ];

  const headingText = "Real Work";
  const words = headingText.split(" ");

  return (
    <section ref={sectionRef} id="projects" className="pt-20 bg-section-bg text-white">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {words.map((word, index) => (
                <span
                  key={index}
                  className={`inline-block mr-3 transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                  style={{ transitionDelay: `${index * 0.05}s` }}
                >
                  {word}
                </span>
              ))}
            </h2>
          </div>
          
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${project.title === 'Studio Clay' ? 'lg:col-span-2' : ''}`}
              style={{ transitionDelay: `${index * 0.1 + 0.5}s` }}
            >
              <a
                href={project.href}
                className="group block space-y-4 relative"
              >
                <div className="overflow-hidden rounded-lg relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full object-cover group-hover:scale-105 transition-transform duration-300 ${project.title === 'Studio Clay' ? 'aspect-video' : 'aspect-square'}`}
                    onError={(e) => { e.currentTarget.src = `https://placehold.co/600x800/1a1a1a/ffffff?text=${project.title.replace(' ', '+')}`; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4">
                    <h3 className="text-lg font-semibold text-white">
                      {project.title}
                    </h3>
                    <p className="text-white/80 text-sm">
                      {project.year}
                    </p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default PortfolioSection;
