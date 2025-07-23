const ServicesSection = () => {
  const services = [
    {
      number: "01",
      title: "Content Writing",
      href: "/service/content-writing"
    },
    {
      number: "02", 
      title: "Branding & Identity",
      href: "/service/branding-identity"
    },
    {
      number: "03",
      title: "Search Optimization", 
      href: "/service/search-engine-optimization"
    },
    {
      number: "04",
      title: "Product Design",
      href: "/service/product-design"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16 text-center">
          Most demanded services offered by us
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <a
              key={service.number}
              href={service.href}
              className="group block p-8 bg-card rounded-lg border border-border hover:border-primary transition-all duration-300 hover:bg-section-bg"
            >
              <div className="space-y-4">
                <div className="text-3xl font-bold text-primary group-hover:text-primary transition-colors">
                  {service.number}
                </div>
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;