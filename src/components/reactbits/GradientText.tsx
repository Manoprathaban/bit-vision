import { cn } from "@/lib/utils";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  colors?: string[];
  animationSpeed?: number;
  showBorder?: boolean;
}

const GradientText = ({
  children,
  className = "",
  colors = ["#a16eff", "#3c1c6e", "#49c6ff", "#a16eff"],
  animationSpeed = 8,
  showBorder = false,
}: GradientTextProps) => {
  const gradientStyle = {
    backgroundImage: `linear-gradient(90deg, ${colors.join(", ")})`,
    backgroundSize: "300% 100%",
    animation: `gradient-shift ${animationSpeed}s linear infinite`,
  };

  return (
    <>
      <style>{`
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
      <span
        className={cn(
          "bg-clip-text text-transparent inline-block",
          showBorder && "border-b-2 border-primary/30",
          className
        )}
        style={gradientStyle}
      >
        {children}
      </span>
    </>
  );
};

export default GradientText;
