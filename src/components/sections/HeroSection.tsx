import heroImage from "@/assets/hero-image.jpg";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const headingText = "Code That Performs. Design That Connects.";
  const words = headingText.split(" ");

  const initialDelay = 0.5; 
  const stagger = 0.1; 
  const paragraphDelay = initialDelay + words.length * stagger;

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#121212] text-white py-24 px-4 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Left side: Text content and CTA */}
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              {words.map((word, index) => (
                <span
                  key={index}
                  // Added mr-4 to create space between words
                  className="inline-block opacity-0 animate-fadeInUp mr-4"
                  style={{ animationDelay: `${initialDelay + index * stagger}s` }}
                >
                  {word}
                </span>
              ))}
            </h1>
            <p 
              className="text-lg text-white/70 max-w-lg mx-auto lg:mx-0 opacity-0 animate-fadeInUp"
              style={{ animationDelay: `${paragraphDelay}s` }}
            >
              Transforming Ideas into Intelligent Digital Experiences.
            </p>
            <div 
              className="pt-4 opacity-0 animate-fadeInUp"
              style={{ animationDelay: `${paragraphDelay + 0.2}s` }}
            >
              <Button size="lg" className="bg-yellow-400 text-black font-bold hover:bg-yellow-500 rounded-lg px-8 py-3 text-base">
                Get Started
              </Button>
            </div>
          </div>

          {/* Right side: Hero image and Stats card */}
          <div 
            className="relative opacity-0 animate-fadeInUp"
            style={{ animationDelay: `${initialDelay + 0.4}s` }}
          >
            <img
              src={heroImage}
              alt="Digital agency workspace"
              className="w-full rounded-2xl object-cover shadow-2xl aspect-[4/3]"
              onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                e.currentTarget.src = 'https://placehold.co/800x600/1a1a1a/ffffff?text=Workspace';
              }}
            />
            
            <div className="absolute -bottom-8 -right-4 sm:-right-8 bg-black/50 backdrop-blur-lg p-6 rounded-2xl w-[90%] max-w-sm shadow-lg border border-white/10">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <h3 className="text-3xl font-bold text-white">10+</h3>
                  <p className="text-white/60 text-sm">Years</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white">600+</h3>
                  <p className="text-white/60 text-sm">Projects</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white">500+</h3>
                  <p className="text-white/60 text-sm">Clients</p>
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
