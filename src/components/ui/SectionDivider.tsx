export default function SectionDivider() {
  return (
    <div className="relative w-full py-8">
      <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-4">
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
        <div className="relative">
          <div className="w-3 h-3 rounded-full bg-primary pulse-glow-maxi" />
          <div className="absolute inset-0 w-3 h-3 rounded-full bg-primary blur-lg pulse-glow-maxi" />
        </div>
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-accent-pink to-transparent" />
      </div>
    </div>
  );
}