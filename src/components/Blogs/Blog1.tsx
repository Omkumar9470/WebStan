import { useState, useEffect, useRef } from 'react';

const Blog1 = () => {
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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

  const headingText = "This is Blog Post 1";
  const headingWords = headingText.split(" ");
  const paragraphDelay = (headingWords.length * 0.08) + 0.2;

  return (
    <section ref={sectionRef} className="py-20 bg-section-bg overflow-hidden mt-20">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          {headingWords.map((word, index) => (
            <span
              key={index}
              className={`inline-block mr-3 transition-all duration-500 ease-out ${isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: `${index * 0.08}s` }}
            >
              {word}
            </span>
          ))}
        </h1>
        <div 
          className={`text-muted-foreground text-lg transition-all duration-500 ease-out ${isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: `${paragraphDelay}s` }}
        >
          <p className="mb-4">
            This is the first paragraph of the blog post. Here we can discuss the main topic. The content will be engaging and informative, following the established theme of the website. We can add more paragraphs as needed to elaborate on the subject.
          </p>
          <p className="mb-4">
            Here is another paragraph, continuing the discussion. We can include formatted text, links, and even images to make the blog post more visually appealing and easier to read. The animations will make the content appear smoothly as the user scrolls.
          </p>
          <p>
            Finally, a concluding paragraph to summarize the key points or provide a call to action. Keeping the design and animations consistent ensures a seamless user experience across the entire site.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blog1;