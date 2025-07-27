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
    },
    {
      image: projectPentaclay,
      title: "Pentaclay Design Works",
      year: "© 2025",
      href: "/project/pentaclay-design-works"
    }
  ];

  const headingText = "Real Work, Real Impact Projects That Made a Difference";
  const words = headingText.split(" ");

  return (
    <section ref={sectionRef} id="projects" className="py-20 bg-section-bg text-white">
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
            <p 
              className={`text-muted-foreground text-lg transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: `${words.length * 0.05 + 0.1}s` }}
            >
              WebStan will be collaborating with your team to develop ideas.
            </p>
          </div>
          <div 
            className={`hidden md:block transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: `${words.length * 0.05 + 0.2}s` }}
          >
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              View All
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 0.1 + 0.5}s` }}
            >
              <a
                href={project.href}
                className="group block space-y-4"
              >
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => { e.currentTarget.src = `https://placehold.co/600x800/1a1a1a/ffffff?text=${project.title.replace(' ', '+')}`; }}
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {project.year}
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>

        <div className="md:hidden mt-12 text-center">
          <div 
            className={`transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: '1s' }}
          >
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              View All
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
