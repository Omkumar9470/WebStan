import React, { useEffect, useRef, useState } from 'react';

const sections = [
  {
    id: 'photoshoot',
    title: 'Photoshoot',
    description: 'Capturing your brand\'s essence through professional photography that tells a story and engages your audience.',
    imageUrl: 'https://res.cloudinary.com/dpsmum8qz/image/upload/v1754408596/Project_1_ckgbdp.jpg',
  },
  {
    id: 'branding',
    title: 'Branding',
    description: 'Developing a strong, cohesive brand identity that resonates with your target market and sets you apart from the competition.',
    imageUrl: 'https://res.cloudinary.com/dpsmum8qz/image/upload/v1754408596/Project_1_ckgbdp.jpg',
  },
  {
    id: 'logo',
    title: 'Logo Design',
    description: 'Creating a unique and memorable logo that perfectly represents your brand\'s values and vision.',
    imageUrl: 'https://res.cloudinary.com/dpsmum8qz/image/upload/v1754408596/Project_1_ckgbdp.jpg',
  },
  {
    id: 'design',
    title: 'Graphic Design',
    description: 'From web to print, we deliver stunning visuals that communicate your message effectively and elevate your brand aesthetic.',
    imageUrl: 'https://res.cloudinary.com/dpsmum8qz/image/upload/v1754408596/Project_1_ckgbdp.jpg',
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Driving growth through strategic online marketing campaigns, including SEO, social media, and content strategy.',
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