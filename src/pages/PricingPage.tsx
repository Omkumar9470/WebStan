import { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Check as CheckIcon } from 'lucide-react';

const PricingPage = () => {
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsSectionVisible(true);
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

  const pricingTiers = [
    {
      name: 'Basic',
      price: '$29',
      description: 'For individuals and small teams.',
      features: [
        '10 Projects',
        'Basic Analytics',
        'Email Support',
      ],
      buttonText: 'Choose Basic',
      featured: false,
    },
    {
      name: 'Pro',
      price: '$79',
      description: 'For growing businesses and professionals.',
      features: [
        'Unlimited Projects',
        'Advanced Analytics',
        'Priority Support',
        'Team Collaboration',
      ],
      buttonText: 'Choose Pro',
      featured: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large organizations with custom needs.',
      features: [
        'Unlimited Everything',
        'Dedicated Account Manager',
        '24/7 Phone Support',
        'Custom Integrations',
      ],
      buttonText: 'Contact Us',
      featured: false,
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-foreground mb-4 transition-all duration-500 ease-out ${isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Flexible Pricing for Teams of All Sizes
          </h2>
          <p className={`text-muted-foreground text-lg transition-all duration-500 ease-out ${isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '0.2s' }}>
            Choose a plan that fits your needs. All plans come with a 14-day free trial.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <div
              key={tier.name}
              className={`p-8 rounded-lg border transition-all duration-300 ${tier.featured ? 'border-primary scale-105 bg-card' : 'border-border bg-card/50 hover:border-yellow-400'} opacity-0 ${isSectionVisible ? 'animate-pixelateIn' : ''}`}
              style={{ animationDelay: `${0.4 + index * 0.15}s` }}
            >
              <h3 className="text-2xl font-semibold text-foreground mb-2">{tier.name}</h3>
              <p className={`text-4xl font-bold mb-4 ${tier.featured ? 'text-primary' : 'text-foreground'}`}>{tier.price}</p>
              <p className="text-muted-foreground mb-6">{tier.description}</p>
              <ul className="space-y-4 mb-8">
                {tier.features.map(feature => (
                  <li key={feature} className="flex items-center">
                    <CheckIcon className={`h-5 w-5 mr-3 ${tier.featured ? 'text-primary' : 'text-green-500'}`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button 
                className={`w-full mt-8 rounded-lg px-6 text-base font-bold ${
                  tier.featured 
                    ? 'bg-yellow-400 text-black hover:bg-yellow-500'
                    : 'bg-transparent border border-white text-white hover:bg-white hover:text-black'
                }`}>
                  {tier.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPage;