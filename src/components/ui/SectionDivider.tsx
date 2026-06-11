export default function SectionDivider() {
  return (
    <div className="relative h-px w-full max-w-6xl mx-auto px-6">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-violet-400/10 to-transparent blur-sm" />
    </div>
  );
}
