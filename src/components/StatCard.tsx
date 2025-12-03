import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { CountUp, SpotlightCard } from "./reactbits";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: number;
  suffix?: string;
  prefix?: string;
  icon: LucideIcon;
  gradient?: string;
  delay?: number;
  decimals?: number;
}

const StatCard = ({
  title,
  value,
  suffix = "",
  prefix = "",
  icon: Icon,
  gradient = "from-primary to-secondary",
  delay = 0,
  decimals = 0,
}: StatCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
    >
      <SpotlightCard className="h-full">
        <div className="p-5 flex items-center gap-4">
          <div
            className={cn(
              "w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center shrink-0",
              gradient
            )}
          >
            <Icon className="w-6 h-6 text-background" />
          </div>
          <div>
            <p className="text-muted-foreground text-sm">{title}</p>
            <p className="text-2xl font-bold text-foreground">
              {prefix}
              <CountUp end={value} decimals={decimals} />
              {suffix}
            </p>
          </div>
        </div>
      </SpotlightCard>
    </motion.div>
  );
};

export default StatCard;
