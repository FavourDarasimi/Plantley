"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowDown01Icon } from "hugeicons-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "How accurate is the disease detection?",
    answer:
      "Plantley uses Claude Vision AI, one of the most advanced AI models available. While it is highly accurate, we recommend consulting a local agricultural extension agent for critical cases.",
  },
  {
    question: "What crops do you support?",
    answer:
      "We currently support 12 major crops including maize, cassava, tomato, rice, yam, cowpea, groundnut, sorghum, millet, plantain, sweet potato, and cocoa. We are expanding to more crops regularly.",
  },
  {
    question: "Is Plantley really free?",
    answer:
      "Yes, Plantley is completely free for all farmers. No subscriptions, no hidden fees. We believe access to crop disease diagnosis should be available to everyone.",
  },
  {
    question: "Do I need internet to use it?",
    answer:
      "Yes, you need an internet connection to upload the photo and receive the diagnosis. The AI processing happens on our servers. We are working on offline support for a future release.",
  },
  {
    question: "How do I take a good leaf photo?",
    answer:
      "Place the affected leaf on a plain, light-coloured background. Ensure good lighting (natural daylight is best). Hold your phone steady and capture the leaf up close, showing both healthy and diseased areas.",
  },
  {
    question: "What should I do after receiving a diagnosis?",
    answer:
      "Follow the treatment steps provided in the diagnosis. For severe cases, we recommend also consulting with a local agricultural expert. You can scan another leaf anytime if symptoms change.",
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const shouldReduce = useReducedMotion();

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className=" px-4 py-10">
      <motion.div
        variants={containerVariants}
        initial={shouldReduce ? false : "hidden"}
        whileInView={shouldReduce ? {} : "show"}
        viewport={{ once: true, margin: "-60px" }}
        className="max-w-3xl mx-auto"
      >
        <p className="text-xs uppercase tracking-widest text-green-600 mb-4 text-center">
          FAQ
        </p>
        <h2 className="text-3xl font-medium text-[var(--text-primary)] mb-10 text-center">
          Frequently asked questions
        </h2>
        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="bg-[var(--bg-secondary)] dark:bg-[#111d12] border border-[var(--border)] rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left text-base font-medium text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] transition-colors"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                >
                  <span>{faq.question}</span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0"
                  >
                    <ArrowDown01Icon
                      size={16}
                      className="text-[var(--text-tertiary)]"
                      strokeWidth={2}
                    />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${i}`}
                      key="answer"
                      initial={shouldReduce ? false : { height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div
                        className={cn(
                          "px-5 pb-4 text-sm text-[var(--text-secondary)] leading-relaxed",
                        )}
                      >
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
