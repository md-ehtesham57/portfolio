import Link from "next/link";
import type { ReactNode } from "react";

type GlassButtonProps = {
  children: ReactNode;
  href?: string;
  external?: boolean;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
  variant?: "primary" | "ghost";
  className?: string;
};

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-60";

const variants = {
  primary:
    "glass-strong sheen text-foreground hover:border-white/25 bg-[linear-gradient(135deg,rgba(152,163,255,0.34),rgba(94,234,212,0.16)_60%,rgba(255,255,255,0.05))]",
  ghost:
    "glass-subtle glass-hover text-muted-foreground hover:text-foreground",
} as const;

export default function GlassButton({
  children,
  href,
  external = false,
  type = "button",
  onClick,
  disabled = false,
  variant = "primary",
  className = "",
}: GlassButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href && external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  }

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
