import { cn } from "@/lib/utils";

interface AuroraProps {
  className?: string;
  colors?: string[];
}

const Aurora = ({
  className = "",
  colors = ["#a16eff", "#3c1c6e", "#49c6ff", "#24c39a"],
}: AuroraProps) => {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      <style>{`
        @keyframes aurora-1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(50px, -30px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(30px, 40px) scale(1.05); }
        }
        @keyframes aurora-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(-40px, 30px) scale(0.95); }
          50% { transform: translate(30px, -20px) scale(1.1); }
          75% { transform: translate(-20px, -40px) scale(1); }
        }
        @keyframes aurora-3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(25px, 25px) scale(1.05); }
          66% { transform: translate(-30px, -15px) scale(0.95); }
        }
      `}</style>
      
      <div
        className="absolute w-[600px] h-[600px] rounded-full blur-[100px] opacity-30"
        style={{
          background: `radial-gradient(circle, ${colors[0]} 0%, transparent 70%)`,
          top: "-20%",
          right: "-10%",
          animation: "aurora-1 15s ease-in-out infinite",
        }}
      />
      
      <div
        className="absolute w-[500px] h-[500px] rounded-full blur-[80px] opacity-25"
        style={{
          background: `radial-gradient(circle, ${colors[1]} 0%, transparent 70%)`,
          bottom: "-10%",
          left: "-5%",
          animation: "aurora-2 18s ease-in-out infinite",
        }}
      />
      
      <div
        className="absolute w-[400px] h-[400px] rounded-full blur-[60px] opacity-20"
        style={{
          background: `radial-gradient(circle, ${colors[2]} 0%, transparent 70%)`,
          top: "30%",
          left: "50%",
          transform: "translateX(-50%)",
          animation: "aurora-3 12s ease-in-out infinite",
        }}
      />
    </div>
  );
};

export default Aurora;
