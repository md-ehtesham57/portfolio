import type { ReactNode } from "react";

type SectionHeaderProps = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  className?: string;
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`mx-auto max-w-2xl space-y-4 text-center ${className}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="h-section text-balance text-foreground">{title}</h2>
      {description && (
        <p className="mx-auto max-w-xl text-balance text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}
