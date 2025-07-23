import { Button } from "@/components/ui/button";
import aboutImage from "@/assets/about-image.jpg";

const AboutSection = () => {
  return (
    <section className="py-20 bg-section-bg">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Founded with a passion for design
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  Experience and Expertise
                </h3>
                <p className="text-foreground text-lg">
                  Over the years we gathered a team of professionals united by the same mission.
                </p>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  Customized Solution
                </h3>
                <p className="text-foreground text-lg">
                  We help startups and businesses build complete products from brand strategy to websites.
                </p>
              </div>
            </div>

            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Read Our Story
            </Button>
          </div>

          {/* Right side - Image */}
          <div>
            <img
              src={aboutImage}
              alt="Our team at work"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;