"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ZapIcon, LockIcon, Location01Icon } from "hugeicons-react";

const features = [
  {
    icon: ZapIcon,
    title: "Lightning-Fast",
    description:
      "Detect leaf mold or confirm healthy leaves in seconds. No waiting for lab reports.",
  },
  {
    icon: LockIcon,
    title: "Completely Free",
    description:
      "No subscriptions, no hidden fees. Free for every farmer, forever.",
  },
  {
    icon: Location01Icon,
    title: "Built for West Africa",
    description:
      "Specialised in tomato diseases. Made for Nigerian farmers.",
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

export function WhyPlantleySection() {
  const shouldReduce = useReducedMotion();

  return (
    <section className=" px-4 py-10">
      <motion.div
        variants={containerVariants}
        initial={shouldReduce ? false : "hidden"}
        whileInView={shouldReduce ? {} : "show"}
        viewport={{ once: true, margin: "-60px" }}
        className="max-w-3xl mx-auto text-center"
      >
        <motion.p
          variants={cardVariants}
          className="text-xs uppercase tracking-widest text-green-600 mb-4"
        >
          Why Plantley?
        </motion.p>
        <motion.h2
          variants={cardVariants}
          className="text-3xl font-medium text-[var(--text-primary)] mb-10"
        >
          Built for tomato farmers, by people who care
        </motion.h2>
        <motion.div
          variants={containerVariants}
          className="flex flex-col gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              className="flex items-start gap-4 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-2xl p-5 text-left"
            >
              <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center shrink-0">
                <feature.icon
                  size={20}
                  className="text-green-600 dark:text-green-400"
                  strokeWidth={1.5}
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-1">
                  {feature.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
