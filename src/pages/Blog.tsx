import { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";

const Blog = () => {
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Since this is a page, we can set it to visible immediately
    setIsSectionVisible(true);

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

  const blogPosts = [
    {
      title: "The Growing Importance of a Strong Online Presence for Businesses",
      description: "In today’s fast-moving digital world, a strong online presence is no longer optional. It has become a key factor in how businesses attract customers, build trust, and compete in their industry.",
      date: "Aug 11, 2025",
      href: "/blog/blog1"
    }
  ];

  const headingText = "See our latest blogs & articles";
  const headingWords = headingText.split(" ");
  const paragraphDelay = (headingWords.length * 0.08) + 0.2;

  return (
    <section ref={sectionRef} className="py-20 bg-section-bg overflow-hidden mt-20">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
               {headingWords.map((word, index) => (
                <span
                  key={index}
                  className={`inline-block mr-3 transition-all duration-500 ease-out ${isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                  style={{ transitionDelay: `${index * 0.08}s` }}
                >
                  {word}
                </span>
              ))}
            </h2>
            <p 
              className={`text-muted-foreground text-lg transition-all duration-500 ease-out ${isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: `${paragraphDelay}s` }}
            >
              Stay Ahead with Expert Thoughts on Tech, Design, and Digital Trends.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogPosts.map((post, index) => (
            // The outer div handles the initial animation
            <div
              key={index}
              className={`opacity-0 ${isSectionVisible ? 'animate-pixelateIn' : ''}`}
              style={{ animationDelay: `${paragraphDelay + 0.2 + index * 0.1}s` }}
            >
              {/* The inner 'a' tag handles the hover effects */}
              <a
                href={post.href}
                className="group block p-6 h-full bg-card rounded-lg border border-border hover:border-primary transition-all duration-300 hover:scale-105 hover:bg-background"
              >
                <div className="flex flex-col h-full space-y-4">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                    {post.description}
                  </p>
                  <p className="text-primary text-sm font-medium pt-2">
                    {post.date}
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;