import { motion } from "framer-motion";
import {
  CheckCircle2,
  FileCode2,
  Clock,
  Layers,
  Database,
  Cpu,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import StatCard from "@/components/StatCard";
import { Aurora, AnimatedContent, SpotlightCard, TiltedCard, GradientText, CountUp } from "@/components/reactbits";

const testCategories = [
  { name: "Playbook Engine", passed: 45, total: 45, color: "from-primary to-secondary" },
  { name: "Memory Management", passed: 38, total: 38, color: "from-accent to-[hsl(220,60%,60%)]" },
  { name: "Workflow Orchestration", passed: 52, total: 52, color: "from-[hsl(190,100%,60%)] to-primary" },
  { name: "Agent Runtime", passed: 67, total: 67, color: "from-[hsl(45,100%,60%)] to-[hsl(30,100%,50%)]" },
  { name: "Event System", passed: 41, total: 41, color: "from-[hsl(340,80%,60%)] to-primary" },
  { name: "Infrastructure", passed: 111, total: 111, color: "from-secondary to-accent" },
];

const achievements = [
  { icon: "🎯", title: "100% Pass Rate", desc: "All 354 tests passing" },
  { icon: "⚡", title: "Fast Execution", desc: "56.1s total runtime" },
  { icon: "🔒", title: "Security Verified", desc: "All auth tests pass" },
  { icon: "📊", title: "Full Coverage", desc: "128 test files" },
];

const TestResults = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Aurora />

      <PageHeader title="Test Results" subtitle="Comprehensive Quality Assurance Report" />

      <main className="relative z-10 container mx-auto px-4 py-8">
        {/* Test Summary Stats */}
        <AnimatedContent direction="up" delay={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <StatCard title="Tests Passed" value={354} icon={CheckCircle2} delay={0.1} />
            <StatCard title="Test Files" value={128} icon={FileCode2} delay={0.15} gradient="from-accent to-[hsl(220,60%,60%)]" />
            <StatCard title="Duration" value={56.1} suffix="s" decimals={1} icon={Clock} delay={0.2} gradient="from-[hsl(190,100%,60%)] to-primary" />
            <StatCard title="Success Rate" value={100} suffix="%" icon={Layers} delay={0.25} gradient="from-[hsl(45,100%,60%)] to-[hsl(30,100%,50%)]" />
          </div>
        </AnimatedContent>

        {/* Achievements */}
        <AnimatedContent direction="up" delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.05 * index }}
                className="bg-gradient-to-br from-primary/10 to-accent/10 p-4 rounded-xl text-center border border-primary/20"
              >
                <span className="text-3xl mb-2 block">{achievement.icon}</span>
                <p className="font-semibold text-sm">{achievement.title}</p>
                <p className="text-muted-foreground text-xs">{achievement.desc}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedContent>

        {/* Test Coverage by Category */}
        <AnimatedContent direction="up" delay={0.3}>
          <div className="glass-card rounded-2xl p-6 mb-8">
            <h2 className="text-xl font-bold font-display mb-6">
              <GradientText>Test Coverage by Category</GradientText>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {testCategories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * index }}
                >
                  <TiltedCard tiltAmount={3}>
                    <SpotlightCard spotlightColor="rgba(36, 195, 154, 0.15)">
                      <div className="p-4">
                        <div className="flex items-center justify-between mb-3">
                          <span className="font-semibold text-sm">{category.name}</span>
                          <CheckCircle2 className="w-4 h-4 text-accent" />
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <div className="flex-1 h-3 bg-secondary rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: "100%" }}
                              transition={{ duration: 1, delay: 0.3 + 0.05 * index }}
                              className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                            />
                          </div>
                          <span className="text-sm font-bold text-accent">
                            <CountUp end={category.passed} />/{category.total}
                          </span>
                        </div>
                      </div>
                    </SpotlightCard>
                  </TiltedCard>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedContent>

        {/* Infrastructure Tests */}
        <AnimatedContent direction="up" delay={0.4}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SpotlightCard>
              <div className="p-6">
                <h3 className="text-lg font-bold font-display mb-4 flex items-center gap-2">
                  <Database className="w-5 h-5 text-primary" />
                  Infrastructure Tests
                </h3>
                <div className="space-y-3">
                  {["PostgreSQL", "Redis", "Kafka", "MongoDB", "Neo4j", "Weaviate"].map((db) => (
                    <div key={db} className="flex items-center justify-between">
                      <span className="text-muted-foreground">{db}</span>
                      <span className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-accent" />
                        <span className="font-medium text-accent">Passing</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </SpotlightCard>

            <SpotlightCard>
              <div className="p-6">
                <h3 className="text-lg font-bold font-display mb-4 flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-primary" />
                  Core Systems
                </h3>
                <div className="space-y-3">
                  {[
                    { name: "Workflow Orchestration", status: "✓" },
                    { name: "Memory Management", status: "✓" },
                    { name: "Event-Driven Architecture", status: "✓" },
                    { name: "Agent Runtime", status: "✓" },
                    { name: "API Gateway", status: "✓" },
                    { name: "Authentication", status: "✓" },
                  ].map((item) => (
                    <div key={item.name} className="flex items-center justify-between">
                      <span className="text-muted-foreground">{item.name}</span>
                      <span className="text-accent font-bold">{item.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          </div>
        </AnimatedContent>
      </main>
    </div>
  );
};

export default TestResults;
