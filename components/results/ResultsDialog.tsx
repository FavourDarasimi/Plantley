"use client";

import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cancel01Icon, RefreshIcon } from "hugeicons-react";
import { useDetection } from "@/hooks/useDetection";
import { SeverityBadge } from "@/components/results/SeverityBadge";
import { ConfidenceBar } from "@/components/results/ConfidenceBar";
import { CausesList } from "@/components/results/CausesList";
import { TreatmentSteps } from "@/components/results/TreatmentSteps";
import { PreventionList } from "@/components/results/PreventionList";

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
            className="relative w-full max-w-[480px] max-h-[85vh] flex flex-col bg-white dark:bg-[#111d12] rounded-t-3xl md:rounded-2xl shadow-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between p-6 pb-4 border-b border-[var(--border)]">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h2 className="text-2xl font-semibold text-[var(--text-primary)] truncate">
                    {result.disease_name}
                  </h2>
                  <SeverityBadge severity={result.severity} />
                </div>
                <p className="text-sm text-[var(--text-tertiary)] italic">
                  {result.scientific_name}
                </p>
                {result.crop && (
                  <p className="text-xs text-[var(--text-tertiary)] mt-0.5">
                    Crop: {result.crop}
                  </p>
                )}
              </div>
              <button
                onClick={handleClose}
                className="shrink-0 p-1.5 rounded-full hover:bg-[var(--bg-pill-hover)] transition-colors"
                aria-label="Close dialog"
              >
                <Cancel01Icon
                  size={20}
                  className="text-[var(--text-secondary)]"
                  strokeWidth={2}
                />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              <ConfidenceBar confidence={result.confidence} />
              <CausesList causes={result.causes} />
              <TreatmentSteps steps={result.treatment_steps} />
              <PreventionList tips={result.prevention_tips} />
            </div>

            <div className="p-4 border-t border-[var(--border)] bg-white dark:bg-[#111d12]">
              <button
                onClick={handleScanAnother}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-green-600 text-white text-sm font-medium hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-400 transition-colors"
              >
                <RefreshIcon size={18} strokeWidth={2} />
                Scan another plant
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
