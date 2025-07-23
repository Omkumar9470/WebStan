import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-end">
          {/* Left side - Text content and image */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                We are an{" "}
                <span className="block">award winning</span>
                <span className="block">digital agency</span>
              </h1>
            </div>
            
            {/* Hero image - positioned below text on left side */}
            <div className="mt-8">
              <img
                src={heroImage}
                alt="Digital agency workspace"
                className="w-full h-80 lg:h-96 object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Right side - Stats card */}
          <div className="flex justify-end">
            <div className="bg-stats-bg p-8 rounded-lg w-full max-w-sm">
              <div className="space-y-8">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;