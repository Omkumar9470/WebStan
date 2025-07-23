import testimonialImage from "@/assets/testimonial-dominika.jpg";

const TestimonialSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16">
            What our client say
          </h2>

          <div className="space-y-8">
            <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed">
              "I can't say enough good things about Vinno. Their design expertise is unmatched, and they have a keen eye for aesthetics. It was a pleasure collaborating with them. I can't say enough good things about Vinno."
            </blockquote>

            <div className="flex flex-col items-center space-y-4">
              <img
                src={testimonialImage}
                alt="Dominika Drońska"
                className="w-20 h-20 rounded-full object-cover"
              />
              <div className="text-center">
                <h4 className="text-lg font-semibold text-foreground">
                  Dominika Drońska
                </h4>
                <p className="text-muted-foreground">
                  Senior Data Analyst
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;