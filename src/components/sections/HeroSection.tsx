import { Button } from "@/components/ui/button";
import AnimatedCircle from "@/components/ui/animated-circle";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                We are an{" "}
                <span className="block">award winning</span>
                <span className="block">digital agency</span>
              </h1>
            </div>
            
            {/* Hero image for mobile */}
            <div className="lg:hidden">
              <img
                src={heroImage}
                alt="Digital agency workspace"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-stats-bg p-6 rounded-lg">
              <div>
                <h3 className="text-3xl font-bold text-foreground">10 +</h3>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-foreground">600 +</h3>
                <p className="text-muted-foreground">Projects Done</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-foreground">500 +</h3>
                <p className="text-muted-foreground">Happy Clients</p>
              </div>
            </div>
          </div>

          {/* Right side - Image for desktop */}
          <div className="hidden lg:block">
            <img
              src={heroImage}
              alt="Digital agency workspace"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Animated circle */}
      <AnimatedCircle />
    </section>
  );
};

export default HeroSection;