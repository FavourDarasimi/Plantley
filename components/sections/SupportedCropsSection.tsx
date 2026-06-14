"use client";

import { motion, useReducedMotion } from "framer-motion";

const crops = [
  "Tomato",
];

const containerVariants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const pillVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.04, duration: 0.3, ease: "easeOut" as const },
  }),
};

export function SupportedCropsSection() {
  const shouldReduce = useReducedMotion();

  return (
    <section className=" px-4 py-10">
      <motion.div
        variants={containerVariants}
        initial={shouldReduce ? false : "hidden"}
        whileInView={shouldReduce ? {} : "show"}
        viewport={{ once: true, margin: "-60px" }}
        className="max-w-7xl mx-auto text-center"
      >
        <p className="text-xs uppercase tracking-widest text-green-600 mb-4">
           Supported Crop
        </p>
        <h2 className="text-3xl font-medium text-[var(--text-primary)] mb-10">
          We specialise in tomato diagnosis
        </h2>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
          {crops.map((crop, i) => (
            <motion.span
              key={crop}
              custom={i}
              variants={shouldReduce ? {} : pillVariants}
              initial={shouldReduce ? false : "hidden"}
              whileInView={shouldReduce ? {} : "show"}
              viewport={{ once: true }}
              className="px-4 py-2 rounded-full text-sm bg-[var(--bg-secondary)] dark:bg-black border border-[var(--border-pill)] text-[var(--text-primary)] hover:bg-[var(--bg-pill-hover)] transition-colors"
            >
              {crop}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
