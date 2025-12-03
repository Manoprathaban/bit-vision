import { motion } from "framer-motion";
import {
  Globe,
  Building,
  Target,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import StatCard from "@/components/StatCard";
import { Aurora, AnimatedContent, SpotlightCard, TiltedCard, GradientText, CountUp } from "@/components/reactbits";

const problems = [
  { title: "Founder Burnout", stat: "73%", desc: "founders report execution drag" },
  { title: "Missed Deadlines", stat: "68%", desc: "startups miss key milestones" },
  { title: "Resource Waste", stat: "40%", desc: "time lost on coordination" },
  { title: "Tool Fatigue", stat: "15+", desc: "apps used by avg. startup" },
];

const solutions = [
  { title: "AI-First Operations", icon: "🤖" },
  { title: "Unified Platform", icon: "🔗" },
  { title: "Automated Execution", icon: "⚡" },
  { title: "Real-time Insights", icon: "📊" },
];

const MarketBusiness = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Aurora />

      <PageHeader title="Market & Business Model" subtitle="₹7,000 Cr TAM • First-Mover Advantage" />

      <main className="relative z-10 container mx-auto px-4 py-8">
        {/* Market Size Stats */}
        <AnimatedContent direction="up" delay={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <StatCard title="TAM" value={7000} prefix="₹" suffix=" Cr" icon={Globe} delay={0.1} />
            <StatCard title="Indian Startups" value={1.6} suffix="L+" icon={Building} delay={0.15} gradient="from-accent to-[hsl(220,60%,60%)]" />
            <StatCard title="SAM Focus" value={16000} suffix="+" icon={Target} delay={0.2} gradient="from-[hsl(190,100%,60%)] to-primary" />
            <StatCard title="Market Growth" value={25} suffix="% YoY" icon={TrendingUp} delay={0.25} gradient="from-[hsl(45,100%,60%)] to-[hsl(30,100%,50%)]" />
          </div>
        </AnimatedContent>

        {/* Problem Statement */}
        <AnimatedContent direction="up" delay={0.2}>
          <div className="glass-card rounded-2xl p-6 mb-8">
            <h2 className="text-xl font-bold font-display mb-2 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-[hsl(45,100%,60%)]" />
              <GradientText>The Execution Drag Problem</GradientText>
            </h2>
            <p className="text-muted-foreground mb-6">Why startups fail to execute at speed</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {problems.map((problem, index) => (
                <motion.div
                  key={problem.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <TiltedCard tiltAmount={5}>
                    <SpotlightCard spotlightColor="rgba(255, 180, 100, 0.15)">
                      <div className="p-4 text-center">
                        <p className="text-3xl font-bold text-primary mb-1">
                          {problem.stat}
                        </p>
                        <p className="font-semibold text-sm mb-1">{problem.title}</p>
                        <p className="text-muted-foreground text-xs">{problem.desc}</p>
                      </div>
                    </SpotlightCard>
                  </TiltedCard>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedContent>

        {/* Solution */}
        <AnimatedContent direction="up" delay={0.3}>
          <div className="glass-card rounded-2xl p-6 mb-8">
            <h2 className="text-xl font-bold font-display mb-2 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-accent" />
              <GradientText>MindFleet Solution</GradientText>
            </h2>
            <p className="text-muted-foreground mb-6">AI-Native Operating System for Startups</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {solutions.map((solution, index) => (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="bg-gradient-to-br from-primary/10 to-accent/10 p-4 rounded-xl text-center border border-primary/20"
                >
                  <span className="text-4xl mb-2 block">{solution.icon}</span>
                  <p className="font-semibold text-sm">{solution.title}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedContent>

        {/* Business Model */}
        <AnimatedContent direction="up" delay={0.4}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SpotlightCard>
              <div className="p-6">
                <h3 className="text-lg font-bold font-display mb-4">
                  Revenue Model
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                    <span>Starter</span>
                    <span className="font-bold">₹15K/mo</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-primary/20 rounded-lg border border-primary/30">
                    <span>Growth</span>
                    <span className="font-bold text-primary">₹40K/mo</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                    <span>Enterprise</span>
                    <span className="font-bold">Custom</span>
                  </div>
                </div>
              </div>
            </SpotlightCard>

            <SpotlightCard>
              <div className="p-6">
                <h3 className="text-lg font-bold font-display mb-4">
                  Unit Economics
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">CAC</span>
                    <span className="font-bold">₹25,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">LTV</span>
                    <span className="font-bold">₹3,60,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">LTV:CAC</span>
                    <span className="font-bold text-accent">14.4x</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Gross Margin</span>
                    <span className="font-bold"><CountUp end={80} />%</span>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </div>
        </AnimatedContent>
      </main>
    </div>
  );
};

export default MarketBusiness;
