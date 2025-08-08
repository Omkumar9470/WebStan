import React, { useEffect, useRef, useState } from 'react';

const sections = [
  {
    id: 'Brand Product Shoots',
    title: 'Brand Product Shoots',
    description: 'Showcase your products in their best light with professional photography that captures detail, emotion, and your brand’s unique personality — creating visuals that connect with your audience.',
    imageUrl: 'https://res.cloudinary.com/dpsmum8qz/image/upload/v1754408596/Project_1_ckgbdp.jpg',
  },
  {
    id: 'Web Branding & Brand Identity',
    title: 'Web Branding & Brand Identity',
    description: 'Craft a distinct and memorable brand image through thoughtful design, consistent visuals, and strategic storytelling that sets you apart in the digital space.',
    imageUrl: 'https://res.cloudinary.com/dpsmum8qz/image/upload/v1754408596/Project_1_ckgbdp.jpg',
  },
  {
    id: 'Digital Marketing Services',
    title: 'Digital Marketing Services',
    description: 'Boost your reach with targeted strategies in SEO, social media, PPC, and content marketing — driving visibility, engagement, and meaningful conversions.',
    imageUrl: 'https://res.cloudinary.com/dpsmum8qz/image/upload/v1754408596/Project_1_ckgbdp.jpg',
  },
  {
    id: 'UI/UX Design',
    title: 'UI/UX Design',
    description: 'Design seamless, intuitive digital experiences that not only look stunning but also make every interaction effortless and enjoyable for your users.',
    imageUrl: 'https://res.cloudinary.com/dpsmum8qz/image/upload/v1754408596/Project_1_ckgbdp.jpg',
  },
];

const BrandingPage: React.FC = () => {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const [visibilities, setVisibilities] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = (entry.target as HTMLElement).dataset.sectionId;
          if (id) {
            setVisibilities((prev) => ({ ...prev, [id]: entry.isIntersecting }));
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="bg-background text-foreground mt-20">
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 -z-10" />

      {/* Dynamic Sections */}
      <div className="relative z-10 py-20">
        {sections.map((section, index) => (
          <section
            key={section.id}
            ref={(el) => {
              if (el) sectionRefs.current[index] = el;
            }}
            data-section-id={section.id}
            className={`py-16 md:py-24 transition-all duration-1000 transform ${visibilities[section.id] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="container mx-auto px-6">
              <div className={`flex flex-wrap items-center ${index % 2 !== 0 ? 'flex-row-reverse' : ''}`}>
                <div className="md:w-1/2 p-8">
                  <img src={section.imageUrl} alt={section.title} className="rounded-lg shadow-2xl w-full" />
                </div>
                <div className="md:w-1/2 p-8">
                  <h2 className="text-4xl font-bold mb-4">
                    {section.title.split(' ').map((word, wordIndex) => (
                      <span
                        key={wordIndex}
                        className="inline-block transition-all duration-500 transform"
                        style={{
                          animation: visibilities[section.id]
                            ? `fadeInUp 0.5s ease-out ${wordIndex * 0.1}s forwards`
                            : 'none',
                          opacity: 0,
                        }}>
                        {word}&nbsp;
                      </span>
                    ))}
                  </h2>
                  <p className="text-lg text-white/80">
                    {section.description.split(' ').map((word, wordIndex) => (
                      <span
                        key={wordIndex}
                        className="inline-block transition-all duration-500 transform"
                        style={{
                          animation: visibilities[section.id]
                            ? `fadeInUp 0.5s ease-out ${0.5 + wordIndex * 0.05}s forwards`
                            : 'none',
                          opacity: 0,
                        }}>
                        {word}&nbsp;
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default BrandingPage;