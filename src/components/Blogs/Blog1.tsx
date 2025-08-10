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

  const headingText = "The Growing Importance of a Strong Online Presence for Businesses";
  const headingWords = headingText.split(" ");
  const paragraphDelay = (headingWords.length * 0.08) + 0.2;

  return (
    <section ref={sectionRef} className="py-20 bg-section-bg overflow-hidden mt-20">
      <div className="container mx-auto px-6">
        <div className="md:flex md:space-x-12">
          <div className="md:w-1/2">
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
              className={`my-8 transition-all duration-500 ease-out ${isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: `${paragraphDelay}s` }}
            >
              <img 
                src="https://res.cloudinary.com/dpsmum8qz/image/upload/v1754854760/Gemini_Generated_Image_53kmx753kmx753km_j0moas.png" 
                alt="Blog post illustration" 
                className="w-full h-auto rounded-lg object-cover mb-8"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <div 
              className={`text-muted-foreground text-lg transition-all duration-500 ease-out ${isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: `${paragraphDelay + 0.2}s` }}
            >
              <p className="mb-4">
                In today’s fast-moving digital world, a strong online presence is no longer optional. It has become a key factor in how businesses attract customers, build trust, and compete in their industry. Whether you run a small local shop or a global brand, your website is often the first place people go to learn about you. That means the quality of your online presence can directly affect your growth.
              </p>
              <p className="mb-4">
                Many businesses still underestimate the value of a well-designed and functional website. It is not just about looking good. A great website needs to work smoothly, load quickly, and provide a clear path for visitors to find what they are looking for. This combination of design and usability can be the difference between someone choosing your services or moving on to a competitor.
              </p>
              <p className="mb-4">
                The demand for skilled web development and design is rising rapidly. As more businesses shift online, the competition for attention grows stronger. This means companies are now looking for websites that not only represent their brand visually but also give visitors a great experience from start to finish. Mobile responsiveness, secure browsing, and clear communication have all become basic requirements.
              </p>
              <p className="mb-4">
                An agency that understands these needs can make a big difference. By focusing on both the creative and technical sides, it becomes possible to deliver websites that help businesses stand out and achieve their goals. Every detail matters, from the way a page is structured to how quickly it loads on a smartphone.
              </p>
              <p>
                The online space will only get more competitive in the coming years. Businesses that invest in their digital presence today are setting themselves up for long-term success. The right approach can turn a website from a simple online brochure into a powerful tool for growth, customer engagement, and brand building.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog1;