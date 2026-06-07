export function Footer() {
  return (
    <footer className=" py-8  mt-16">
      <div className="border-t border-[var(--border)]  mx-10 mb-10" />
      <div className="max-w-[480px] mx-auto px-4 text-center">
        <p className="text-sm text-[#4a5c4a] dark:text-[#94b894]">
          Built with {"{ }"} for AgroTech — 2026 Hackathon
        </p>
        <p className="text-xs text-[#7a917a] dark:text-[#5a7a5a] mt-1">
          AI-powered crop disease detection for smallholder farmers
        </p>
      </div>
    </footer>
  );
}
