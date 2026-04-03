import type { HTMLAttributes } from "react";

type BadgeVariant = "default" | "secondary" | "outline" | "destructive";

interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-primary text-primary-foreground hover:bg-primary/80",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  outline: "text-foreground border",
  destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/80",
};

export function Badge({ variant = "default", className = "", children, ...props }: BadgeProps) {
  return (
    <div
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
