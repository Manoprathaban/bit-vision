import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import Logo from "./Logo";
import { Button } from "./ui/button";
import { GradientText } from "./reactbits";

interface PageHeaderProps {
  title: string;
  subtitle: string;
}

const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  const navigate = useNavigate();

  return (
    <header className="relative z-10 border-b border-border/50 backdrop-blur-sm bg-card/50">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center gap-4">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate("/dashboard")}
              className="rounded-full"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </motion.div>
          
          <Logo size="md" />
          
          <div>
            <h1 className="text-xl sm:text-2xl font-bold font-display">
              <GradientText>{title}</GradientText>
            </h1>
            <p className="text-muted-foreground text-sm">{subtitle}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
