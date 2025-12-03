import { motion } from "framer-motion";
import { SpotlightCard, TiltedCard } from "./reactbits";

interface InfoTileProps {
  title: string;
  items: { label: string; value: string }[];
  delay?: number;
}

const InfoTile = ({ title, items, delay = 0 }: InfoTileProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
    >
      <TiltedCard tiltAmount={5}>
        <SpotlightCard className="h-full">
          <div className="p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4 font-display">
              {title}
            </h3>
            <div className="space-y-3">
              {items.map((item, index) => (
                <div key={index} className="flex justify-between items-start gap-4">
                  <span className="text-muted-foreground text-sm">{item.label}</span>
                  <span className="text-foreground font-medium text-sm text-right">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </SpotlightCard>
      </TiltedCard>
    </motion.div>
  );
};

export default InfoTile;
