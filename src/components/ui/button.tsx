import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-bold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-primary to-accent-pink text-white shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-105",
        outline:
          "border-2 border-primary/50 bg-transparent hover:border-primary hover:bg-primary/10",
        ghost:
          "hover:bg-primary/10 hover:text-primary",
        maximalist:
          "relative overflow-hidden bg-gradient-to-r from-primary via-accent-pink to-accent-cyan text-white shadow-2xl shadow-primary/50 hover:shadow-accent-pink/50 hover:scale-105 before:absolute before:inset-0 before:bg-gradient-to-r before:from-accent-cyan before:via-primary before:to-accent-pink before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500",
      },
      size: {
        default: "h-12 px-8 py-3",
        sm: "h-9 px-4 py-2 text-sm",
        lg: "h-14 px-10 py-4 text-lg",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };