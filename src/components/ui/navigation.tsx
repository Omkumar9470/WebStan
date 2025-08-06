import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const brandName = "Webstan";
  const letters = brandName.split("");

  // Hides navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 20);
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  // Closes desktop dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Smoothly scrolls to a section
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    // Close the main mobile menu when a primary link is clicked
    setIsMenuOpen(false);
  };

  // --- Handlers for DESKTOP dropdown ---
  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 300);
  };
  
  const handleClick = () => {
    setIsDropdownOpen(state => !state);
  }

  return (
    <nav className={`fixed left-0 right-0 z-50 text-white transition-all duration-700 ${visible ? 'top-5' : '-top-full'}`}>
      <div className="container mx-auto px-10 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Left */}
          <div className="flex items-center space-x-3 ml-0 md:ml-12">
            <div
              style={{
                width: '28px',
                height: '28px',
                backgroundImage: `url(https://res.cloudinary.com/dpsmum8qz/image/upload/v1754405046/1_ktvgid.png)`,
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
                  style={{ animationDelay: `${0.1 + index * 0.05}s` }}
                >
                  {letter}
                </span>
              ))}
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center justify-center space-x-16 flex-1 mx-4">
            <a href="/" className="text-white/90 hover:text-white transition-colors text-base font-bold cursor-pointer">
              Home
            </a>
            <a href="/#projects" onClick={() => handleScrollTo('projects')} className="text-white/90 hover:text-white transition-colors text-base font-bold cursor-pointer">
              Projects
            </a>
            <a href="/about" className="text-white/90 hover:text-white transition-colors text-base font-bold cursor-pointer">
              About
            </a>
            <div 
              className="relative" 
              ref={dropdownRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button 
                onClick={handleClick}
                className="text-white/90 hover:text-white transition-colors text-base font-bold flex items-center"
              >
                All Pages
                <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-48 bg-black/50 backdrop-blur-lg border border-white/10 rounded-xl shadow-lg transition-all duration-300 ${isDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <div className="p-2">
                  <Link to="/pricing" className="block px-4 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white rounded-md">Pricing</Link>
                  <Link to="/blog" className="block px-4 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white rounded-md">Blog</Link>
                  <Link to="/branding" className="block px-4 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white rounded-md">Branding</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Button - Right (Hidden on mobile) */}
          <div className="hidden md:block pr-4">
            <Link to="/pricing">
              <Button
                variant="outline"
                className="border-primary text-primary bg-transparent hover:bg-primary hover:text-primary-foreground px-6 py-3 text-lg"
              >
                Pricing
              </Button>
            </Link>
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
          <div className="md:hidden mt-4 pb-4 space-y-2 bg-background/80 backdrop-blur-lg rounded-lg">
            <a href="#" onClick={() => handleScrollTo('home')} className="block px-4 py-2 text-white hover:text-yellow-400 transition-colors text-base cursor-pointer">
              Home
            </a>
            <a href="#projects" onClick={() => handleScrollTo('projects')} className="block px-4 py-2 text-white hover:text-yellow-400 transition-colors text-base cursor-pointer">
              Projects
            </a>
            <a href="#about" onClick={() => handleScrollTo('about')} className="block px-4 py-2 text-white hover:text-yellow-400 transition-colors text-base cursor-pointer">
              About
            </a>
            {/* --- Mobile Dropdown Section --- */}
            <div>
              <button
                onClick={() => setIsMobileDropdownOpen(prev => !prev)}
                className="w-full flex justify-between items-center px-4 py-2 text-white hover:text-yellow-400 transition-colors text-base cursor-pointer"
              >
                <span>All Pages</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMobileDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {isMobileDropdownOpen && (
                <div className="pl-8 mt-2 space-y-2">
                  <Link to="/pricing" className="block px-4 py-2 text-white/80 hover:text-yellow-400 transition-colors text-base">Pricing</Link>
                  <Link to="/blog" className="block px-4 py-2 text-white/80 hover:text-yellow-400 transition-colors text-base">Blog</Link>
                  <Link to="/branding" className="block px-4 py-2 text-white/80 hover:text-yellow-400 transition-colors text-base">Branding</Link>
                </div>
              )}
            </div>
            {/* Contact Button for Mobile */}
            <div className="px-4 pt-4">
              <Link to="/pricing" className="block w-full">
                <Button
                  variant="outline"
                  className="w-full border-primary text-primary bg-transparent hover:bg-primary hover:text-primary-foreground"
                >
                  Pricing
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
