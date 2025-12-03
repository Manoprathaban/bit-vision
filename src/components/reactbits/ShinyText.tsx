import { cn } from "@/lib/utils";

interface ShinyTextProps {
  children: React.ReactNode;
  className?: string;
  shimmerWidth?: number;
}

const ShinyText = ({
  children,
  className = "",
  shimmerWidth = 100,
}: ShinyTextProps) => {
  return (
    <span
      className={cn(
        "relative inline-block bg-clip-text text-transparent",
        "bg-gradient-to-r from-foreground via-primary to-foreground",
        "animate-shimmer bg-[length:200%_100%]",
        className
      )}
      style={{
        backgroundSize: `${shimmerWidth}% 100%`,
      }}
    >
      {children}
    </span>
  );
};

export default ShinyText;
