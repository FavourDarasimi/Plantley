"use client";

import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cancel01Icon, RefreshIcon } from "hugeicons-react";
import { useDetection } from "@/hooks/useDetection";

function formatClassName(name: string): string {
  return name
    .split("_")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export function ResultsDialog() {
  const { result, isDialogOpen, closeDialog, reset } = useDetection();

  const handleClose = useCallback(() => {
    closeDialog();
  }, [closeDialog]);

  const handleScanAnother = useCallback(() => {
    closeDialog();
    setTimeout(() => reset(), 300);
  }, [closeDialog, reset]);

  useEffect(() => {
    if (!isDialogOpen) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") handleClose();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isDialogOpen, handleClose]);

  const percent = result
    ? Math.round(result.confidence > 1 ? result.confidence : result.confidence * 100)
    : 0;

  return (
    <AnimatePresence>
      {isDialogOpen && result && (
        <motion.div
          key="overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-end justify-center md:items-center bg-black/5 backdrop-blur-[2px]"
          onClick={handleClose}
        >
          <motion.div
            key="dialog"
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 60, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative w-full max-w-[400px] bg-white dark:bg-[#111d12] rounded-t-3xl md:rounded-2xl shadow-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-10 p-1.5 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Close dialog"
            >
              <Cancel01Icon
                size={20}
                className="text-white"
                strokeWidth={2}
              />
            </button>

            <div className="bg-gradient-to-br from-green-600 to-green-800 dark:from-green-500 dark:to-green-700 px-6 pt-12 pb-16 text-center">
              <div className="text-5xl mb-3">🌿</div>
              <h2 className="text-2xl font-bold text-white">
                {formatClassName(result.predicted_class)}
              </h2>
                <p className="text-sm text-green-100 mt-1">Prediction</p>
            </div>

            <div className="px-6 pb-6 -mt-6">
              <div className="bg-white dark:bg-[#1a2a1e] rounded-xl shadow-sm border border-[var(--border)] p-5 space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[var(--text-tertiary)]">
                      Confidence
                    </span>
                    <span className="text-2xl font-bold text-green-600 dark:text-green-400">
                      {percent}%
                    </span>
                  </div>
                  <div className="h-2 rounded-full bg-green-100 dark:bg-green-900 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${percent}%` }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="h-full rounded-full bg-green-500"
                    />
                  </div>
                </div>

                <button
                  onClick={handleScanAnother}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-green-600 text-white text-sm font-medium hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-400 transition-colors"
                >
                  <RefreshIcon size={18} strokeWidth={2} />
                  Scan another tomato leaf
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
