import { motion } from "framer-motion";
import {
  Layers,
  Bot,
  TestTube2,
  GitBranch,
  Zap,
  Server,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import StatCard from "@/components/StatCard";
import { Aurora, AnimatedContent, SpotlightCard, TiltedCard, GradientText, CountUp } from "@/components/reactbits";

const architectureLayers = [
  { name: "Orchestration Layer", color: "from-primary to-secondary" },
  { name: "Agent Management", color: "from-[hsl(190,100%,60%)] to-primary" },
  { name: "Memory Systems", color: "from-accent to-[hsl(220,60%,60%)]" },
  { name: "Execution Engine", color: "from-[hsl(45,100%,60%)] to-[hsl(30,100%,50%)]" },
  { name: "Event Bus", color: "from-[hsl(340,80%,60%)] to-primary" },
  { name: "Integration Layer", color: "from-primary to-[hsl(190,100%,60%)]" },
  { name: "Storage Layer", color: "from-accent to-[hsl(150,60%,40%)]" },
  { name: "Infrastructure", color: "from-secondary to-primary" },
];

const pods = [
  { name: "CEO Pod", agents: 5, status: "active" },
  { name: "CTO Pod", agents: 8, status: "active" },
  { name: "CFO Pod", agents: 4, status: "active" },
  { name: "CMO Pod", agents: 6, status: "active" },
  { name: "COO Pod", agents: 5, status: "active" },
  { name: "Legal Pod", agents: 3, status: "active" },
];

const ProductTechnology = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Aurora />

      <PageHeader title="Product & Technology" subtitle="8-Layer Agentic AI Architecture" />

      <main className="relative z-10 container mx-auto px-4 py-8">
        {/* Key Stats */}
        <AnimatedContent direction="up" delay={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <StatCard title="AI Agents" value={120} suffix="+" icon={Bot} delay={0.1} />
            <StatCard title="Tests Passed" value={354} icon={TestTube2} delay={0.15} gradient="from-accent to-[hsl(220,60%,60%)]" />
            <StatCard title="Commits" value={170} suffix="+" icon={GitBranch} delay={0.2} gradient="from-[hsl(190,100%,60%)] to-primary" />
            <StatCard title="Architecture Layers" value={8} icon={Layers} delay={0.25} gradient="from-[hsl(45,100%,60%)] to-[hsl(30,100%,50%)]" />
          </div>
        </AnimatedContent>

        {/* Architecture Visual */}
        <AnimatedContent direction="up" delay={0.2}>
          <div className="glass-card rounded-2xl p-6 mb-8">
            <h2 className="text-xl font-bold font-display mb-6">
              <GradientText>8-Layer Architecture</GradientText>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {architectureLayers.map((layer, index) => (
                <motion.div
                  key={layer.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * index }}
                  className={`bg-gradient-to-r ${layer.color} p-4 rounded-xl text-center`}
                >
                  <span className="text-background font-semibold text-sm">{layer.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedContent>

        {/* Pod Status Grid */}
        <AnimatedContent direction="up" delay={0.3}>
          <h2 className="text-xl font-bold font-display mb-4">
            <GradientText>Pod Status Matrix</GradientText>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            {pods.map((pod, index) => (
              <motion.div
                key={pod.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * index }}
              >
                <TiltedCard tiltAmount={5}>
                  <SpotlightCard>
                    <div className="p-4 text-center">
                      <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                        <Bot className="w-5 h-5 text-background" />
                      </div>
                      <h3 className="font-semibold text-sm mb-1">{pod.name}</h3>
                      <p className="text-primary text-lg font-bold">{pod.agents}</p>
                      <p className="text-muted-foreground text-xs">Agents</p>
                    </div>
                  </SpotlightCard>
                </TiltedCard>
              </motion.div>
            ))}
          </div>
        </AnimatedContent>

        {/* Tech Stack */}
        <AnimatedContent direction="up" delay={0.4}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SpotlightCard>
              <div className="p-6">
                <h3 className="text-lg font-bold font-display mb-4 flex items-center gap-2">
                  <Server className="w-5 h-5 text-primary" />
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["Python", "FastAPI", "PostgreSQL", "Redis", "Kafka", "Neo4j", "MongoDB", "Docker"].map((tech) => (
                    <span key={tech} className="px-3 py-1 rounded-full bg-secondary text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </SpotlightCard>

            <SpotlightCard>
              <div className="p-6">
                <h3 className="text-lg font-bold font-display mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" />
                  Development Velocity
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Commits (4 days)</span>
                    <span className="font-bold"><CountUp end={170} />+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Test Coverage</span>
                    <span className="font-bold"><CountUp end={100} />%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Build Success</span>
                    <span className="font-bold text-accent">Passing</span>
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

export default ProductTechnology;
