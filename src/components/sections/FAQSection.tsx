import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useState, useEffect, useRef } from 'react';

const faqs = [
  {
    question: "How Does TIC Global Services Work?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: "What Services do TIC Global services Offer?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: "What's the average project duration in TIC Global Services?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: "Is an advance payment required before starting a project?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: "Do you offer refunds?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const AnimatedAccordionItem = ({ faq, index }: { faq: { question: string, answer: string }, index: number }) => {
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
          <h3>{faq.answer}</h3>
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