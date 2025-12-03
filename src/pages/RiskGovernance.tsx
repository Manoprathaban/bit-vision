import { motion } from "framer-motion";
import {
  Shield,
  AlertTriangle,
  CheckCircle2,
  TrendingDown,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { Aurora, AnimatedContent, SpotlightCard, TiltedCard, GradientText, CountUp } from "@/components/reactbits";

const risks = [
  { category: "Technical", level: "Medium", mitigated: true, items: ["LLM dependency", "Scalability"] },
  { category: "Market", level: "Low", mitigated: true, items: ["Competition", "Timing"] },
  { category: "Execution", level: "Low", mitigated: true, items: ["Team hiring", "Product delays"] },
  { category: "Financial", level: "Medium", mitigated: true, items: ["Runway", "Revenue ramp"] },
  { category: "Regulatory", level: "Low", mitigated: true, items: ["Data privacy", "AI regulations"] },
];

const llmRoadmap = [
  { phase: "Phase 1", period: "Now", coverage: 85, dependency: "High" },
  { phase: "Phase 2", period: "Q2 2025", coverage: 60, dependency: "Medium" },
  { phase: "Phase 3", period: "Q4 2025", coverage: 30, dependency: "Low" },
  { phase: "Phase 4", period: "Q2 2026", coverage: 15, dependency: "Minimal" },
];

const RiskGovernance = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Aurora />

      <PageHeader title="Risk & Governance" subtitle="Comprehensive Risk Analysis" />

      <main className="relative z-10 container mx-auto px-4 py-8">
        {/* Risk Matrix */}
        <AnimatedContent direction="up" delay={0.1}>
          <div className="glass-card rounded-2xl p-6 mb-8">
            <h2 className="text-xl font-bold font-display mb-6 flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              <GradientText>Risk Matrix</GradientText>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {risks.map((risk, index) => (
                <motion.div
                  key={risk.category}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.05 * index }}
                >
                  <TiltedCard tiltAmount={5}>
                    <SpotlightCard>
                      <div className="p-4">
                        <div className="flex items-center justify-between mb-3">
                          <span className="font-semibold">{risk.category}</span>
                          {risk.mitigated ? (
                            <CheckCircle2 className="w-4 h-4 text-accent" />
                          ) : (
                            <AlertTriangle className="w-4 h-4 text-[hsl(45,100%,60%)]" />
                          )}
                        </div>
                        <span
                          className={`inline-block px-2 py-1 rounded text-xs font-medium mb-3 ${
                            risk.level === "Low"
                              ? "bg-accent/20 text-accent"
                              : risk.level === "Medium"
                              ? "bg-[hsl(45,100%,60%)]/20 text-[hsl(45,100%,60%)]"
                              : "bg-destructive/20 text-destructive"
                          }`}
                        >
                          {risk.level} Risk
                        </span>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          {risk.items.map((item) => (
                            <li key={item}>• {item}</li>
                          ))}
                        </ul>
                      </div>
                    </SpotlightCard>
                  </TiltedCard>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedContent>

        {/* LLM Dependency Reduction */}
        <AnimatedContent direction="up" delay={0.2}>
          <div className="glass-card rounded-2xl p-6 mb-8">
            <h2 className="text-xl font-bold font-display mb-6 flex items-center gap-2">
              <TrendingDown className="w-5 h-5 text-accent" />
              <GradientText>LLM Dependency Reduction Roadmap</GradientText>
            </h2>
            
            <div className="space-y-4">
              {llmRoadmap.map((phase, index) => (
                <motion.div
                  key={phase.phase}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-center gap-4"
                >
                  <div className="w-24 shrink-0">
                    <p className="font-semibold text-sm">{phase.phase}</p>
                    <p className="text-muted-foreground text-xs">{phase.period}</p>
                  </div>
                  
                  <div className="flex-1 h-8 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${100 - phase.coverage}%` }}
                      transition={{ duration: 1, delay: 0.2 + 0.1 * index }}
                      className="h-full bg-gradient-to-r from-accent to-primary rounded-full"
                    />
                  </div>
                  
                  <div className="w-24 shrink-0 text-right">
                    <p className="font-bold text-sm">
                      <CountUp end={100 - phase.coverage} />% SLM
                    </p>
                    <p className="text-muted-foreground text-xs">{phase.dependency}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedContent>

        {/* Governance */}
        <AnimatedContent direction="up" delay={0.3}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SpotlightCard>
              <div className="p-6">
                <h3 className="text-lg font-bold font-display mb-4">
                  AGORA Protocol
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Agent Governance & Oversight for Responsible AI
                </p>
                <div className="space-y-2">
                  {["Accountability Framework", "Audit Trail", "Human Override", "Ethics Guidelines"].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </SpotlightCard>

            <SpotlightCard>
              <div className="p-6">
                <h3 className="text-lg font-bold font-display mb-4">
                  Mitigation Status
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Risks Identified</span>
                    <span className="font-bold">5</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Fully Mitigated</span>
                    <span className="font-bold text-accent">5/5</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">High Risk</span>
                    <span className="font-bold">0</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Governance Score</span>
                    <span className="font-bold text-primary">A+</span>
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

export default RiskGovernance;
