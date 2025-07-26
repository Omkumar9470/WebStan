import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import logoImage from "@/assets/1.png"; // Import the new logo

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 20);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  // Function to handle smooth scrolling and close mobile menu
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close menu after clicking a link
  };

  const logoText = "CodeVerve";
  const letters = logoText.split("");

  return (
    <nav className={`fixed left-0 right-0 z-50 text-white transition-all duration-700 ${visible ? 'top-5' : '-top-full'}`}>
      <div className="container mx-auto px-10 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Left */}
          <div className="flex items-center space-x-2 ml-0 md:ml-12">
            {/* The SVG has been replaced with this div styled with CSS */}
            <div
              style={{
                width: '28px',
                height: '28px',
                backgroundImage: `url(${logoImage})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
              aria-label="Company Logo"
            ></div>
            <span className="text-xl font-bold">
              {letters.map((letter, index) => (
                <span
                  key={index}
                  className="inline-block opacity-0 animate-fadeInUp"
                  style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                >
                  {letter}
                </span>
              ))}
            </span>
          </div>

          {/* Navigation Links - Center */}
          <div className="hidden md:flex items-center justify-center space-x-16 flex-1 mx-4">
            <a href="#" onClick={() => handleScrollTo('home')} className="text-white/90 hover:text-white transition-colors text-base font-bold cursor-pointer">
              Home
            </a>
            <a href="#about" onClick={() => handleScrollTo('about')} className="text-white/90 hover:text-white transition-colors text-base font-bold cursor-pointer">
              About
            </a>
            <a href="#projects" onClick={() => handleScrollTo('projects')} className="text-white/90 hover:text-white transition-colors text-base font-bold cursor-pointer">
              Projects
            </a>
            <div className="relative group">
              <button className="text-white/90 hover:text-white transition-colors text-base font-bold flex items-center">
                All Pages
                <ChevronDown className="ml-1 w-3 h-3 opacity-70" />
              </button>
            </div>
          </div>

          {/* Contact Button - Right (Hidden on mobile) */}
          <div className="hidden md:block pr-4">
            <Button className="bg-transparent border border-white text-white hover:bg-white hover:text-black rounded-half px-6">
              Contact
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <a href="#" onClick={() => handleScrollTo('home')} className="block text-white hover:text-yellow-400 transition-colors text-base cursor-pointer">
              Home
            </a>
            <a href="#about" onClick={() => handleScrollTo('about')} className="block text-white hover:text-yellow-400 transition-colors text-base cursor-pointer">
              About
            </a>
            <a href="#projects" onClick={() => handleScrollTo('projects')} className="block text-white hover:text-yellow-400 transition-colors text-base cursor-pointer">
              Projects
            </a>
            <a href="#pages" onClick={() => handleScrollTo('pages')} className="block text-white hover:text-yellow-400 transition-colors text-base cursor-pointer">
              All Pages
            </a>
            <Button className="w-full bg-transparent border border-white text-white hover:bg-white hover:text-black rounded-full">
              Contact
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
