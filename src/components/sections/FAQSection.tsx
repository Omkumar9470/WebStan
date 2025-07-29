import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is WebStan?",
    answer: "WebStan is a cutting-edge web development agency that specializes in creating high-performance websites and applications.",
  },
  {
    question: "How can I get started with WebStan?",
    answer: "You can get started by contacting us through our website. We will schedule a consultation to discuss your project and provide you with a quote.",
  },
  {
    question: "What technologies do you use?",
    answer: "We use a variety of modern technologies, including React, Next.js, and Node.js, to build fast, scalable, and secure web applications.",
  },
  {
    question: "Do you offer design services?",
    answer: "Yes, we offer a full range of design services, including UI/UX design, branding, and graphic design.",
  },
  {
    question: "What is your pricing model?",
    answer: "We offer flexible pricing models to suit your needs. We can work on an hourly basis or provide a fixed-price quote for your project.",
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="py-20 bg-background text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}