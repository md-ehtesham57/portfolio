"use client";

import { Glass, type GlassProps } from "@samasante/liquid-glass";

export type LensProps = GlassProps & {
  tint?: string;
};

export default function Lens({
  tint = "rgba(12, 14, 26, 0.42)",
  children,
  style,
  ...rest
}: LensProps) {
  return (
    <Glass
      filterResolution={2}
      style={{ background: tint, ...style }}
      {...rest}
    >
      {children}
    </Glass>
  );
}
