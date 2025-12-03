import { motion } from "framer-motion";
import {
  Building2,
  Users,
  Scale,
  TrendingUp,
  IndianRupee,
  Calendar,
  Shield,
  CheckCircle2,
  Clock,
  User,
  Award,
  Target,
  Briefcase,
  Code,
  FileText,
  Zap,
  UserPlus,
  Gavel,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import StatCard from "@/components/StatCard";
import { Aurora, AnimatedContent, CountUp, GradientText, SpotlightCard, TiltedCard, DecryptedText } from "@/components/reactbits";

const CompanyFactsheet = () => {
  const shareholdingData = [
    { name: "Ganesan Anand", role: "Founder", shares: 950, percent: 95, amount: "₹9,500", color: "bg-primary" },
    { name: "Senthilkumar Anu", role: "Co-founder", shares: 50, percent: 5, amount: "₹500", color: "bg-accent" },
  ];

  const complianceItems = [
    { label: "ROC Compliance", status: "completed", detail: "INC-20A filed Nov 7, 2025" },
    { label: "GST Registration", status: "pending", detail: "Pre-revenue" },
    { label: "Bank Account", status: "completed", detail: "IDFC First Bank" },
    { label: "Debt/Liabilities", status: "completed", detail: "None" },
  ];

  const founderMetrics = [
    { label: "Bootstrapped", value: "₹35L+", icon: IndianRupee },
    { label: "Iterations", value: "40+", icon: Target },
    { label: "Commits/Day", value: "42", icon: Code },
    { label: "Agents Built", value: "60", icon: Zap },
    { label: "Tests Passing", value: "354", icon: CheckCircle2 },
    { label: "Documentation", value: "1,500+", icon: FileText },
  ];

  const teamMembers = [
    { name: "Anand Ganesan", role: "Founder & CEO", commitment: "100%", bg: "15+ yrs BPO, Six Sigma" },
    { name: "Anu Senthilkumar", role: "Co-founder & Ops", commitment: "25%", bg: "6 yrs DevOps @ Nokia" },
    { name: "Developer 1", role: "Full-Stack (Intern)", commitment: "100%", bg: "Masters in AI" },
    { name: "Developer 2", role: "Full-Stack (Intern)", commitment: "100%", bg: "Masters in AI" },
  ];

  const boardMembers = [
    { name: "Ganesan Anand", din: "09679985", designation: "Director", since: "Sep 2025" },
    { name: "Senthilkumar Anu", din: "11303185", designation: "Director", since: "Sep 2025" },
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Aurora />

      <PageHeader title="Company Fact Sheet" subtitle="Quintuple Technology Private Limited" />

      <main className="relative z-10 container mx-auto px-4 py-8 space-y-8">
        {/* Corporate Identity Stats */}
        <AnimatedContent direction="up" delay={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard
              title="Incorporated"
              value={2025}
              icon={Calendar}
              gradient="from-primary to-secondary"
              delay={0.1}
            />
            <StatCard
              title="Authorized Capital"
              value={1}
              prefix="₹"
              suffix="L"
              icon={IndianRupee}
              gradient="from-accent to-[hsl(220,60%,60%)]"
              delay={0.15}
            />
            <StatCard
              title="Paid Up Capital"
              value={10000}
              prefix="₹"
              icon={Scale}
              gradient="from-[hsl(190,100%,60%)] to-primary"
              delay={0.2}
            />
            <StatCard
              title="Total Shares"
              value={1000}
              icon={TrendingUp}
              gradient="from-[hsl(45,100%,60%)] to-[hsl(30,100%,50%)]"
              delay={0.25}
            />
          </div>
        </AnimatedContent>

        {/* Corporate Identity Card */}
        <AnimatedContent direction="up" delay={0.15}>
          <TiltedCard tiltAmount={3}>
            <SpotlightCard className="p-6">
              <h2 className="text-xl font-bold font-display mb-4">
                <GradientText>Corporate Identity</GradientText>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { label: "CIN", value: "U62011TN2025PTC184587" },
                  { label: "PAN", value: "AABCQ1684L" },
                  { label: "TAN", value: "CHEQ03833E" },
                  { label: "Company Type", value: "Private Limited" },
                  { label: "State", value: "Tamil Nadu" },
                  { label: "Regulatory", value: "Not regulated" },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center p-3 rounded-lg bg-secondary/30">
                    <span className="text-muted-foreground text-sm">{item.label}</span>
                    <span className="text-foreground font-mono text-sm">{item.value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 rounded-lg bg-secondary/30">
                <span className="text-muted-foreground text-sm block mb-1">Registered Office</span>
                <span className="text-foreground text-sm">4/608, V.O.C. Street, Ground Floor, Neelankarai, Chennai 600041</span>
              </div>
            </SpotlightCard>
          </TiltedCard>
        </AnimatedContent>

        {/* Shareholding Pattern */}
        <AnimatedContent direction="up" delay={0.2}>
          <div className="glass-card rounded-2xl p-6">
            <h2 className="text-xl font-bold font-display mb-6">
              <GradientText>Shareholding Pattern</GradientText>
            </h2>
            
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Pie Chart */}
              <div className="relative w-48 h-48 flex-shrink-0">
                <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                  <circle
                    cx="50" cy="50" r="40"
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="20"
                    strokeDasharray="239 251"
                  />
                  <circle
                    cx="50" cy="50" r="40"
                    fill="none"
                    stroke="hsl(var(--accent))"
                    strokeWidth="20"
                    strokeDasharray="12 251"
                    strokeDashoffset="-239"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-3xl font-bold"><CountUp end={1000} /></p>
                    <p className="text-muted-foreground text-xs">Shares</p>
                  </div>
                </div>
              </div>

              {/* Shareholders */}
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {shareholdingData.map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="p-4 rounded-xl bg-secondary/50"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-4 h-4 rounded-full ${s.color}`} />
                      <div>
                        <p className="font-semibold">{s.name}</p>
                        <p className="text-muted-foreground text-xs">{s.role}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 mt-3 text-center">
                      <div className="p-2 rounded bg-background/50">
                        <p className="text-lg font-bold">{s.shares}</p>
                        <p className="text-xs text-muted-foreground">Shares</p>
                      </div>
                      <div className="p-2 rounded bg-background/50">
                        <p className="text-lg font-bold">{s.percent}%</p>
                        <p className="text-xs text-muted-foreground">Ownership</p>
                      </div>
                      <div className="p-2 rounded bg-background/50">
                        <p className="text-lg font-bold">{s.amount}</p>
                        <p className="text-xs text-muted-foreground">Paid</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedContent>

        {/* Compliance Status */}
        <AnimatedContent direction="up" delay={0.25}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {complianceItems.map((item, i) => (
              <TiltedCard key={i} tiltAmount={5}>
                <SpotlightCard className="p-4 h-full">
                  <div className="flex items-center gap-2 mb-2">
                    {item.status === "completed" ? (
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                    ) : (
                      <Clock className="w-5 h-5 text-yellow-500" />
                    )}
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{item.detail}</p>
                </SpotlightCard>
              </TiltedCard>
            ))}
          </div>
        </AnimatedContent>

        {/* Founder Profile Section */}
        <AnimatedContent direction="up" delay={0.3}>
          <div className="glass-card rounded-2xl p-6">
            <h2 className="text-xl font-bold font-display mb-6">
              <GradientText>Founder Profile</GradientText>
            </h2>
            
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Founder Info */}
              <div className="lg:w-1/3">
                <TiltedCard tiltAmount={5}>
                  <SpotlightCard className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                        <User className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">
                          <DecryptedText text="Anand Ganesan" speed={30} />
                        </h3>
                        <p className="text-muted-foreground text-sm">Founder & CEO</p>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-primary" />
                        <span>15+ yrs BPO & Process Excellence</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-primary" />
                        <span>Six Sigma Certified</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Target className="w-4 h-4 text-primary" />
                        <span>Founded Quintuple Solutions</span>
                      </div>
                    </div>
                  </SpotlightCard>
                </TiltedCard>
              </div>

              {/* Execution Metrics */}
              <div className="lg:w-2/3 grid grid-cols-2 sm:grid-cols-3 gap-3">
                {founderMetrics.map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + i * 0.05 }}
                    className="p-4 rounded-xl bg-secondary/50 text-center"
                  >
                    <m.icon className="w-6 h-6 mx-auto mb-2 text-primary" />
                    <p className="text-2xl font-bold">{m.value}</p>
                    <p className="text-xs text-muted-foreground">{m.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedContent>

        {/* Team Composition */}
        <AnimatedContent direction="up" delay={0.35}>
          <div className="glass-card rounded-2xl p-6">
            <h2 className="text-xl font-bold font-display mb-6">
              <GradientText>Team Composition</GradientText>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {teamMembers.map((member, i) => (
                <TiltedCard key={i} tiltAmount={5}>
                  <SpotlightCard className="p-4 h-full">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/50 to-accent/50 flex items-center justify-center">
                        <Users className="w-5 h-5 text-foreground" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm">{member.name}</p>
                        <p className="text-xs text-muted-foreground">{member.role}</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Commitment</span>
                        <span className="font-medium text-primary">{member.commitment}</span>
                      </div>
                      <div className="text-xs text-muted-foreground">{member.bg}</div>
                    </div>
                  </SpotlightCard>
                </TiltedCard>
              ))}
            </div>

            {/* AI-First Model Highlight */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-6 p-4 rounded-xl bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30"
            >
              <div className="flex items-center gap-3 mb-3">
                <Zap className="w-6 h-6 text-primary" />
                <h3 className="font-bold">AI-First Development Model</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-primary">5X</p>
                  <p className="text-xs text-muted-foreground">Productivity Boost</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">12</p>
                  <p className="text-xs text-muted-foreground">Agents/Day/Dev</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">₹13K</p>
                  <p className="text-xs text-muted-foreground">Cost/Dev/Month</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">85%</p>
                  <p className="text-xs text-muted-foreground">Cost Savings</p>
                </div>
              </div>
            </motion.div>
          </div>
        </AnimatedContent>

        {/* Corporate Governance */}
        <AnimatedContent direction="up" delay={0.4}>
          <div className="glass-card rounded-2xl p-6">
            <h2 className="text-xl font-bold font-display mb-6">
              <GradientText>Corporate Governance</GradientText>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Board of Directors */}
              <TiltedCard tiltAmount={3}>
                <SpotlightCard className="p-5 h-full">
                  <div className="flex items-center gap-2 mb-4">
                    <Gavel className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold">Board of Directors</h3>
                  </div>
                  <div className="space-y-3">
                    {boardMembers.map((b, i) => (
                      <div key={i} className="p-3 rounded-lg bg-secondary/30">
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-medium">{b.name}</span>
                          <span className="text-xs text-primary">{b.designation}</span>
                        </div>
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>DIN: {b.din}</span>
                          <span>Since: {b.since}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </SpotlightCard>
              </TiltedCard>

              {/* Entity Independence */}
              <TiltedCard tiltAmount={3}>
                <SpotlightCard className="p-5 h-full">
                  <div className="flex items-center gap-2 mb-4">
                    <Shield className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold">Entity Independence</h3>
                  </div>
                  <div className="space-y-2">
                    {[
                      "No connection with Quintuple Solutions Pvt Ltd",
                      "No shared liabilities or IP transfers",
                      "Clean cap table - founder shareholders only",
                      "No existing debt or encumbrances",
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </SpotlightCard>
              </TiltedCard>
            </div>
          </div>
        </AnimatedContent>

        {/* Prior Funding Highlight */}
        <AnimatedContent direction="up" delay={0.45}>
          <motion.div
            className="p-6 rounded-2xl bg-gradient-to-r from-primary/20 via-accent/10 to-primary/20 border border-primary/30"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-primary/30 flex items-center justify-center">
                  <IndianRupee className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <p className="text-3xl font-bold">₹35L+</p>
                  <p className="text-muted-foreground">Bootstrapped Investment</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <p className="text-xl font-bold">Pre-revenue</p>
                  <p className="text-xs text-muted-foreground">Beta Launch: Jan 2026</p>
                </div>
                <div className="text-center">
                  <p className="text-xl font-bold">9 Months</p>
                  <p className="text-xs text-muted-foreground">MVP Development</p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatedContent>
      </main>
    </div>
  );
};

export default CompanyFactsheet;
