import { motion } from "framer-motion";
import {
  TrendingUp,
  Wallet,
  Target,
  BarChart3,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import StatCard from "@/components/StatCard";
import { Aurora, AnimatedContent, SpotlightCard, GradientText, CountUp } from "@/components/reactbits";

const fundAllocation = [
  { category: "Product Development", percentage: 40, amount: "₹1.6 Cr" },
  { category: "Talent Acquisition", percentage: 30, amount: "₹1.2 Cr" },
  { category: "Marketing & Sales", percentage: 15, amount: "₹0.6 Cr" },
  { category: "Operations & Buffer", percentage: 15, amount: "₹0.6 Cr" },
];

const milestones = [
  { quarter: "Q1 2025", goal: "MVP Launch", status: "completed" },
  { quarter: "Q2 2025", goal: "10 Beta Customers", status: "in-progress" },
  { quarter: "Q3 2025", goal: "₹25L MRR", status: "upcoming" },
  { quarter: "Q4 2025", goal: "50 Customers", status: "upcoming" },
  { quarter: "Q1 2026", goal: "₹75L MRR", status: "upcoming" },
  { quarter: "Q4 2026", goal: "Series A", status: "upcoming" },
];

const FinancialProjections = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Aurora />

      <PageHeader title="Financial Projections" subtitle="18-Month Runway & Series A Path" />

      <main className="relative z-10 container mx-auto px-4 py-8">
        {/* Key Financial Stats */}
        <AnimatedContent direction="up" delay={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <StatCard title="Pre-Seed Raise" value={4} prefix="₹" suffix=" Cr" icon={Wallet} delay={0.1} />
            <StatCard title="Runway" value={18} suffix=" months" icon={TrendingUp} delay={0.15} gradient="from-accent to-[hsl(220,60%,60%)]" />
            <StatCard title="Year 1 Target" value={50} prefix="₹" suffix="L ARR" icon={Target} delay={0.2} gradient="from-[hsl(190,100%,60%)] to-primary" />
            <StatCard title="Year 3 Target" value={15} prefix="₹" suffix=" Cr" icon={BarChart3} delay={0.25} gradient="from-[hsl(45,100%,60%)] to-[hsl(30,100%,50%)]" />
          </div>
        </AnimatedContent>

        {/* Use of Funds */}
        <AnimatedContent direction="up" delay={0.2}>
          <div className="glass-card rounded-2xl p-6 mb-8">
            <h2 className="text-xl font-bold font-display mb-6">
              <GradientText>Use of Funds (₹4 Cr)</GradientText>
            </h2>
            
            <div className="space-y-4">
              {fundAllocation.map((item, index) => (
                <motion.div
                  key={item.category}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-center gap-4"
                >
                  <div className="w-32 text-muted-foreground text-sm">{item.category}</div>
                  <div className="flex-1 h-8 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${item.percentage}%` }}
                      transition={{ duration: 1, delay: 0.2 + 0.1 * index }}
                      className="h-full bg-gradient-to-r from-primary to-[hsl(190,100%,60%)] rounded-full"
                    />
                  </div>
                  <div className="w-20 text-right font-semibold">
                    <CountUp end={item.percentage} suffix="%" />
                  </div>
                  <div className="w-20 text-right text-muted-foreground text-sm">
                    {item.amount}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedContent>

        {/* Series A Milestones */}
        <AnimatedContent direction="up" delay={0.3}>
          <div className="glass-card rounded-2xl p-6">
            <h2 className="text-xl font-bold font-display mb-6">
              <GradientText>Path to Series A</GradientText>
            </h2>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-border" />
              
              <div className="space-y-6">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.quarter}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-center gap-4 relative"
                  >
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center z-10 ${
                        milestone.status === "completed"
                          ? "bg-accent"
                          : milestone.status === "in-progress"
                          ? "bg-primary animate-pulse"
                          : "bg-secondary"
                      }`}
                    >
                      <span className="text-xs font-bold text-background">
                        {index + 1}
                      </span>
                    </div>
                    
                    <SpotlightCard className="flex-1">
                      <div className="p-4 flex items-center justify-between">
                        <div>
                          <p className="font-semibold">{milestone.goal}</p>
                          <p className="text-muted-foreground text-sm">{milestone.quarter}</p>
                        </div>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            milestone.status === "completed"
                              ? "bg-accent/20 text-accent"
                              : milestone.status === "in-progress"
                              ? "bg-primary/20 text-primary"
                              : "bg-secondary text-muted-foreground"
                          }`}
                        >
                          {milestone.status === "completed" ? "Done" : milestone.status === "in-progress" ? "Active" : "Upcoming"}
                        </span>
                      </div>
                    </SpotlightCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedContent>
      </main>
    </div>
  );
};

export default FinancialProjections;
