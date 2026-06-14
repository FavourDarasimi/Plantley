"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ImageUploadIcon,
  AiInnovation01Icon,
  TaskDone01Icon,
} from "hugeicons-react";

const steps = [
  {
    number: 1,
    icon: ImageUploadIcon,
    title: "Upload a photo",
    description:
      "Take a clear photo of the affected tomato leaf or upload one from your gallery.",
  },
  {
    number: 2,
    icon: AiInnovation01Icon,
    title: "AI analysis",
    description:
      "Our AI examines the image and detects whether the leaf is healthy or has leaf mold.",
  },
  {
    number: 3,
    icon: TaskDone01Icon,
    title: "Get your result",
    description:
      "See whether your tomato leaf is healthy or affected by leaf mold, along with a confidence score.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export function HowItWorksSection() {
  const shouldReduce = useReducedMotion();

  return (
    <section className=" px-4 py-10">
      <motion.div
        variants={containerVariants}
        initial={shouldReduce ? false : "hidden"}
        whileInView={shouldReduce ? {} : "show"}
        viewport={{ once: true, margin: "-60px" }}
        className="max-w-5xl mx-auto text-center"
      >
        <motion.p
          variants={cardVariants}
          className="text-xs uppercase tracking-widest text-green-600 mb-4"
        >
          How It Works
        </motion.p>
        <motion.h2
          variants={cardVariants}
          className="text-3xl font-medium text-[var(--text-primary)] mb-10"
        >
          From snap to solution in three simple steps
        </motion.h2>
        <motion.div
          variants={containerVariants}
          className="flex flex-col md:grid md:grid-cols-3 gap-6 min-w-0"
        >
          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={cardVariants}
              className="bg-[var(--bg-secondary)] dark:bg-[#111d12] border border-[var(--border)] rounded-2xl p-6 text-left"
            >
              <div className="flex justify-between items-center">
                <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mb-4">
                  <span className="text-sm font-medium text-green-700 dark:text-green-300">
                    {step.number}
                  </span>
                </div>
                <step.icon
                  size={28}
                  className="text-green-500 mb-3"
                  strokeWidth={1.5}
                />
              </div>

              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
