import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Ready to grow your business?
          </h2>
          
          <p className="text-xl text-muted-foreground">
            Our brand tenders and marketing mixologists always serve up unique, design-forward websites.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Let's Talk
            </Button>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <div className="text-left">
                  <div className="font-semibold">Free Remix</div>
                  <div className="text-sm">Grab Now!</div>
                </div>
              </Button>
              
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <div className="text-left">
                  <div className="font-semibold">All-Access Pass</div>
                  <div className="text-sm">Unlock for $97</div>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;