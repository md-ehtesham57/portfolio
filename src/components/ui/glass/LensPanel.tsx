"use client";

import type { ReactNode } from "react";
import Lens from "./Lens";
import AmbientBackground from "@/components/animations/AmbientBackground";

type LensPanelProps = {
  children: ReactNode;
  tint?: string;
  radius?: number;
  className?: string;
  contentClassName?: string;
};

export default function LensPanel({
  children,
  tint = "rgba(9, 11, 20, 0.4)",
  radius = 26,
  className = "",
  contentClassName = "",
}: LensPanelProps) {
  return (
    <div className={`relative ${className}`}>
      <Lens
        aria-hidden="true"
        radius={radius}
        tint={tint}
        refract={<AmbientBackground />}
        behind="#05060b"
        className="absolute inset-0"
      />
      <div className={`relative z-10 ${contentClassName}`}>{children}</div>
    </div>
  );
}
