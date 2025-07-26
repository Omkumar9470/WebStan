import { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission,
    // e.g., send the data to a server or an email service.
    console.log("Form submitted:", formData);
    alert("Thank you for your message!");
    setFormData({ name: '', email: '', message: '' }); // Reset form
  };

  // Intersection Observer for on-scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const headingText = "Get in Touch";
  const headingWords = headingText.split(" ");

  return (
    <section ref={sectionRef} id="contact" className="py-24 bg-background text-white overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
             {headingWords.map((word, index) => (
              <span
                key={index}
                className={`inline-block mr-3 transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${index * 0.08}s` }}
              >
                {word}
              </span>
            ))}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Contact Info */}
          <div 
            className={`space-y-8 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            style={{ transitionDelay: '0.4s' }}
          >
            <h3 className="text-2xl font-semibold text-foreground">Contact Information</h3>
            <p className="text-muted-foreground">
              Have a project in mind or just want to say hello? Fill out the form or contact us through the information below. We'd love to hear from you.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-primary" />
                <a href="mailto:contact@codeverve.com" className="text-lg hover:text-primary transition-colors">
                  contact@codeverve.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-primary" />
                <a href="tel:+1234567890" className="text-lg hover:text-primary transition-colors">
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-6 h-6 text-primary" />
                <p className="text-lg">Greater Noida, Uttar Pradesh, India</p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <form 
            onSubmit={handleSubmit}
            className={`space-y-6 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            style={{ transitionDelay: '0.6s' }}
          >
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium text-muted-foreground">Full Name</Label>
              <Input 
                id="name" 
                type="text" 
                placeholder="John Doe" 
                value={formData.name}
                onChange={handleChange}
                required 
                className="bg-card border-border focus:border-primary"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-muted-foreground">Email Address</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required 
                className="bg-card border-border focus:border-primary"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message" className="text-sm font-medium text-muted-foreground">Message</Label>
              <Textarea 
                id="message" 
                placeholder="Tell us about your project..." 
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="bg-card border-border focus:border-primary"
              />
            </div>
            <Button type="submit" size="lg" className="w-full">
              Send Message
            </Button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default ContactPage;
