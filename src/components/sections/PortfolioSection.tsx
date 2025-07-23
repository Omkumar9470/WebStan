import { Button } from "@/components/ui/button";
import projectZ3 from "@/assets/project-z3.jpg";
import projectVinency from "@/assets/project-vinency.jpg";
import projectStudioClay from "@/assets/project-studio-clay.jpg";
import projectPentaclay from "@/assets/project-pentaclay.jpg";

const PortfolioSection = () => {
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

  return (
    <section className="py-20 bg-section-bg">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Take a look at some of our best works
            </h2>
            <p className="text-muted-foreground text-lg">
              Vinency will be collaborating with your design team to develop ideas.
            </p>
          </div>
          <Button variant="outline" className="hidden md:block border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            View All
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.href}
              className="group block space-y-4 hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
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
          ))}
        </div>

        <div className="md:hidden mt-8 text-center">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            View All
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;