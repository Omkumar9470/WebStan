import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useState, useEffect, useRef, ReactNode } from 'react';

const faqs: { question: string; answer: ReactNode }[] = [
  {
    question: "How Does WebStan Work?",
    answer: "WebStan, a creative digital agency, offers complete solutions to establish and elevate your online presence. We specialize in website design and development, web branding, brand identity, UI/UX design, and digital marketing — combining creativity with strategy to bring your vision to life. Our approach starts with understanding your goals and your audience, ensuring every project is tailored to your brand’s unique personality. From crafting user-friendly, high-performing websites to building a strong digital footprint through impactful marketing campaigns and professional brand product shoots, WebStan makes sure your brand stands out in today’s competitive online space. By blending innovative ideas, cutting-edge technology, and thoughtful design, we create solutions that inspire growth and lasting success.",
  },
  {
    question: "What Services do WebStan Offer?",
    answer: (
      <div>
        <p className="mb-4">WebStan, a creative digital agency, provides a complete range of services to help businesses build, strengthen, and expand their online presence. Our expertise covers:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Brand Product Shoots</strong> – Offering professional photography and cinematography that showcases your products or services with originality and impact.</li>
          <li><strong>Digital Marketing Services</strong> – Leveraging SEO, social media marketing, PPC campaigns, and content strategies to boost visibility and drive targeted traffic.</li>6+
          <li><strong>Web Branding & Brand Identity</strong> – Creating a consistent and memorable brand image through custom logo design, color palettes, typography, and strategic branding approaches.</li>
          <li><strong>UI/UX Design</strong> – Enhancing user experience with intuitive, aesthetic, and functional designs that keep visitors engaged.</li>
          <li><strong>Website Design & Development</strong> – Crafting visually stunning, fully responsive, and user-friendly websites tailored to your unique business goals.</li> 
        </ul>
        <p className="mt-4">At WebStan, we blend creativity, innovation, and technology to deliver solutions that not only look exceptional but also drive real business growth.</p>
      </div>
    ),
  },
  {
    question: "What's the average project duration in WebStan?",
    answer: "At WebStan, project timelines are shaped by the scope and complexity of the work. Smaller projects, such as basic website design, can be completed within 1–2 weeks, while larger undertakings — like custom web applications, full-scale e-commerce platforms, or complete branding campaigns — may take several weeks to deliver. Every project is mapped out with clear milestones, ensuring high quality, on-time delivery, and results that align perfectly with our clients’ objectives.",
  },
  {
    question: "Is an advance payment required before starting a project?",
    answer: "Yes. At WebStan, we request an advance payment of 50% of the total project value to officially kick off the work. This allows us to secure the required resources, dedicate our team’s time, and ensure your project gets the focus and priority it deserves from day one.",
  },
  {
    question: "Do you offer refunds?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: "What happens if I miss a payment deadline?",
    answer: "If a payment deadline is missed, services may be temporarily suspended, and project ownership may be withheld until all outstanding dues are settled. We encourage timely payments to ensure smooth progress and avoid any disruptions.",
  },
  {
    question: "Can the company cancel a project?",
    answer: (
      <div>
        <p className="mb-2">In rare cases, we may need to cancel a project due to unforeseen circumstances — such as lack of cooperation or expectations that significantly exceed the agreed budget. In such situations:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Clients will be informed immediately with a clear explanation.</li>
          <li>Refunds for any unfinished work will be issued based on the project’s progress.</li>
        </ul>
      </div>
    ),
  },
  {
    question: "How long will it take to get an estimate from you?",
    answer: "We value your time and aim to respond quickly. Once we understand your requirements, we set up the right team, conduct initial research and analysis, and get back to you with a contract — all within 24 hours.",
  },
];

const AnimatedAccordionItem = ({ faq, index }: { faq: { question: string, answer: ReactNode }, index: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    const currentRef = itemRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={itemRef}
      className={`transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <AccordionItem value={faq.question}>
        <AccordionTrigger>
          <h2>{faq.question}</h2>
        </AccordionTrigger>
        <AccordionContent>
          <div className="prose prose-invert max-w-none">{faq.answer}</div>
        </AccordionContent>
      </AccordionItem>
    </div>
  );
};

const FAQSection = () => {
  const [isHeadingVisible, setHeadingVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setHeadingVisible(true);
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

  const headingText = "Frequently Asked Question";
  const headingWords = headingText.split(" ");

  return (
    <section ref={sectionRef} className="py-24 sm:py-32">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white mt-8">
            {headingWords.map((word, index) => (
              <span
                key={index}
                className={`inline-block mr-2 transition-all duration-500 ease-out ${isHeadingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                {word}
              </span>
            ))}
          </h1>
        </div>
        <div className="mt-8 w-full max-w-7xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AnimatedAccordionItem key={faq.question} faq={faq} index={index} />
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;