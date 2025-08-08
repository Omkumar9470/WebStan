import { Link } from "react-router-dom";
import { PopupButton } from "react-calendly";

const HeroSection = () => {
  const headingText = "We Build Together. Your Digital Legacy.";
  const words = headingText.split(" ");

  const initialDelay = 0.5; 
  const stagger = 0.1; 
  const paragraphDelay = initialDelay + words.length * stagger;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-white text-center overflow-hidden"
    >
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="https://res.cloudinary.com/dpsmum8qz/video/upload/v1754316250/1_idm5ie.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      <div className="relative z-20 container mx-auto px-6 space-y-8">
        
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          {words.map((word, index) => (
            <span
              key={index}
              className="inline-block opacity-0 animate-fadeInUp mr-4"
              style={{ animationDelay: `${initialDelay + index * stagger}s` }}
            >
              {word}
            </span>
          ))}
        </h1>
        
        <p 
          className="text-xl md:text-xl text-white/80 max-w-3xl mx-auto opacity-0 animate-fadeInUp"
          style={{ animationDelay: `${paragraphDelay}s` }}
        >
          Transforming Ideas into Intelligent Digital Experiences.
        </p>

        <div 
          className="pt-4 opacity-0 animate-fadeInUp"
          style={{ animationDelay: `${paragraphDelay + 0.2}s` }}
        >
          <PopupButton
            url="https://calendly.com/shubhamsahu5122333/30min"
            rootElement={document.getElementById("root")}
            text="Book A Meeting"
            className="bg-yellow-400 text-black font-bold hover:bg-yellow-500 rounded-lg px-8 py-3 text-base"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;