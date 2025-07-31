import { Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const handleScrollTo = (id: string) => {
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-background text-white py-4" id="footer">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-center">
        {/* Social links will be pushed to the left on medium screens and up */}
        <div className="flex items-center space-x-4 mb-4 md:mb-0 md:mr-auto">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a onClick={() => handleScrollTo('home')} className="text-muted-foreground hover:text-primary transition-colors cursor-pointer font-bold">
            WS
          </a>
        </div>
        <div className="text-muted-foreground text-sm text-center">
          © Copyright TIC GLOBAL SERVICES / admin@webstan.in
        </div>
        {/* A spacer to help with centering the copyright text on larger screens */}
        <div className="hidden md:flex items-center space-x-4 md:ml-auto">
            <a className="text-muted-foreground cursor-pointer font-bold opacity-0">WS</a>
             <a className="text-muted-foreground"><Linkedin className="w-6 h-6 opacity-0" /></a>
            <a className="text-muted-foreground"><Instagram className="w-6 h-6 opacity-0" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
