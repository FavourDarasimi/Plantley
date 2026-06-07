"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Upload04Icon, Camera01Icon, Leaf01Icon } from "hugeicons-react";
import { useDetection } from "@/hooks/useDetection";
import { useCamera } from "@/hooks/useCamera";
import { CameraCapture } from "@/components/upload/CameraCapture";
import { ScanningState } from "@/components/upload/ScanningState";
import { cn } from "@/lib/utils";

const ACCEPTED_TYPES = ["image/jpeg", "image/png", "image/webp"];

export function UploadZone() {
  const { isLoading, detect, error } = useDetection();
  const { fileInputRef, cameraInputRef, openFilePicker, openCamera } =
    useCamera();
  const [isDragging, setIsDragging] = useState(false);
  const [fileError, setFileError] = useState<string | null>(null);

  const handleFile = useCallback(
    (file: File) => {
      if (!ACCEPTED_TYPES.includes(file.type)) {
        setFileError("Please upload a JPG, PNG, or WebP image");
        return;
      }
      setFileError(null);
      detect(file);
    },
    [detect],
  );

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      const file = e.dataTransfer.files?.[0];
      if (file) handleFile(file);
    },
    [handleFile],
  );

  const displayError = fileError ?? error;

  if (isLoading) {
    return (
      <div
        className={cn(
          "min-h-[220px] rounded-2xl border-2 border-dashed p-8",
          "border-green-300 dark:border-green-800",
          "bg-green-50/20 dark:bg-green-950/20",
          "flex items-center justify-center",
        )}
      >
        <ScanningState />
      </div>
    );
  }

  return (
    <motion.div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      animate={isDragging ? { scale: 1.02, borderColor: "#22c55e" } : {}}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={cn(
        "relative min-h-[220px] rounded-2xl border-2 p-8",
        "flex flex-col items-center justify-center",
        isDragging
          ? "border-solid border-green-500 bg-green-50/80 dark:bg-green-950/40"
          : "border-dashed border-green-300 dark:border-green-800 bg-green-50 dark:bg-green-950/20",
      )}
    >
      <CameraCapture
        fileInputRef={fileInputRef}
        cameraInputRef={cameraInputRef}
        onFileSelect={handleFile}
      />

      <div className="flex flex-col items-center gap-4 text-center">
        <Leaf01Icon size={48} className="text-green-500" strokeWidth={1.5} />
        <div>
          <p className="text-base font-medium text-[var(--text-primary)]">
            Upload your leaf photo
          </p>
          <p className="text-sm text-[var(--text-tertiary)] mt-1">
            Drag & drop or choose an option below
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={openFilePicker}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-green-600 text-white text-sm font-medium hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-400 transition-colors whitespace-nowrap"
          >
            <Upload04Icon size={18} strokeWidth={2} />
            Browse files
          </button>
          <button
            onClick={openCamera}
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-[var(--border)] text-[var(--text-secondary)] text-sm font-medium hover:bg-[var(--bg-pill-hover)] transition-colors whitespace-nowrap"
          >
            <Camera01Icon size={18} strokeWidth={2} />
            Take photo
          </button>
        </div>
        {displayError && (
          <p className="text-sm text-red-600 dark:text-red-400">
            {displayError}
          </p>
        )}
      </div>
    </motion.div>
  );
}
