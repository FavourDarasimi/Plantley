"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowDown01Icon } from "hugeicons-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "How accurate is the detection?",
    answer:
      "Plantley uses a custom-trained model specialised for tomato leaf analysis. While it is highly accurate for leaf mold detection, we recommend consulting a local agricultural extension agent for critical cases.",
  },
  {
    question: "What can the model detect?",
    answer:
      "Our model is trained to detect two classes: leaf mold and healthy leaves. If your tomato plant is affected by leaf mold, the model will flag it. Otherwise, it will classify it as healthy. We are actively working to expand detection to more tomato diseases in future updates.",
  },
  {
    question: "Is Plantley really free?",
    answer:
      "Yes, Plantley is completely free for all tomato farmers. No subscriptions, no hidden fees. We believe access to tomato disease detection should be available to everyone.",
  },
  {
    question: "Do I need internet to use it?",
    answer:
      "Yes, you need an internet connection to upload the photo and receive the result. The AI processing happens on our servers. We are working on offline support for a future release.",
  },
  {
    question: "How do I take a good tomato leaf photo?",
    answer:
      "Place the tomato leaf on a plain, light-coloured background. Ensure good lighting (natural daylight is best). Hold your phone steady and capture the leaf up close.",
  },
  {
    question: "Does the tool provide treatment advice?",
    answer:
      "No, the tool only detects whether the leaf is healthy or has leaf mold. It does not provide treatment steps or detailed diagnosis. Please consult a local agricultural expert for advice on managing leaf mold.",
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
