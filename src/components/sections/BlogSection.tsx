import { Button } from "@/components/ui/button";

const BlogSection = () => {
  const blogPosts = [
    {
      title: "Crafting Memorable Identities for Businesses",
      description: "Delve into the art and science of branding, and learn how our studio helps businesses.",
      date: "Sep 8, 2014",
      href: "/blog/crafting-memorable-identities-for-businesses"
    },
    {
      title: "Creating Memorable Brand Experiences", 
      description: "Discover the secrets behind designing impactful brand experiences that resonate with audience.",
      date: "May 8, 2023",
      href: "/blog/creating-memorable-brand-experiences"
    },
    {
      title: "Innovative Design Trends to Watch in [2023]",
      description: "Stay ahead of the curve with a glimpse into emerging design trends and technologies.",
      date: "Jul 8, 2019", 
      href: "/blog/innovative-design-trends-to-watch-in-2023"
    },
    {
      title: "Exploring the Psychology Behind Design Choices",
      description: "Uncover the psychology behind color choices in design and learn how strategic color selection.",
      date: "Feb 8, 2020",
      href: "/blog/exploring-the-psychology-behind-design-choices"
    }
  ];

  return (
    <section className="py-20 bg-section-bg">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              See our latest blogs & articles
            </h2>
            <p className="text-muted-foreground text-lg">
              We take pride in knowing that we will focus on the design quality.
            </p>
          </div>
          <Button variant="outline" className="hidden md:block border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            See All
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogPosts.map((post, index) => (
            <a
              key={index}
              href={post.href}
              className="group block p-6 bg-card rounded-lg border border-border hover:border-primary transition-all duration-300 hover:bg-background"
            >
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {post.description}
                </p>
                <p className="text-primary text-sm font-medium">
                  {post.date}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="md:hidden mt-8 text-center">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            See All
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;