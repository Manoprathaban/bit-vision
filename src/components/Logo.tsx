import { cn } from "@/lib/utils";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const Logo = ({ size = "md", className }: LogoProps) => {
  const sizeClasses = {
    sm: "w-10 h-10 text-sm",
    md: "w-12 h-12 text-base",
    lg: "w-16 h-16 text-xl",
  };

  return (
    <div
      className={cn(
        "rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-bold text-primary-foreground shadow-lg",
        sizeClasses[size],
        className
      )}
    >
      MF
    </div>
  );
};

export default Logo;
