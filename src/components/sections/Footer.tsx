import { Twitter, Linkedin, Github, Instagram } from 'lucide-react';
import logoImage from "@/assets/1.png"; // Assuming you have your logo here

const Footer = () => {
  // Function to handle smooth scrolling
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card text-white py-16" id="footer">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-12">
          
          {/* Column 1: Logo, Brand, and Socials (takes up 2 columns) */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
               <div
                style={{
                  width: '36px',
                  height: '36px',
                  backgroundImage: `url(${logoImage})`,
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
                aria-label="Company Logo"
              ></div>
              <span className="text-2xl font-bold">WebStan</span>
            </div>
            <p className="text-muted-foreground max-w-sm">
              We are a strategic & creative digital agency who are focused on UX, mobile, social, data gathering and promotional offerings.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
               <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Primary Pages */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-foreground">Primary Pages</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" onClick={() => handleScrollTo('home')} className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => handleScrollTo('about')} className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  About Us
                </a>
              </li>
              <li>
                <a href="#projects" onClick={() => handleScrollTo('projects')} className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  Projects
                </a>
              </li>
              <li>
                <a href="#blog" onClick={() => handleScrollTo('blog')} className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Utility Pages */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-foreground">Utility Pages</h4>
             <ul className="space-y-2">
              <li>
                <a href="/pricing" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  Pricing Plan
                </a>
              </li>
              <li>
                <a href="/404" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  404
                </a>
              </li>
              <li>
                <a href="/template" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  Get the template
                </a>
              </li>
            </ul>
          </div>

           {/* Column 4: Resources */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-foreground">Resources</h4>
             <ul className="space-y-2">
              <li>
                <a href="#contact" onClick={() => handleScrollTo('contact')} className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  Contact
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
