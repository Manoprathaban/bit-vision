import { motion } from "framer-motion";
import {
  Building2,
  Users,
  Scale,
  TrendingUp,
  IndianRupee,
  Calendar,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import StatCard from "@/components/StatCard";
import InfoTile from "@/components/InfoTile";
import { Aurora, AnimatedContent, CountUp, GradientText } from "@/components/reactbits";

const CompanyFactsheet = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Aurora />

      <PageHeader title="Company Fact Sheet" subtitle="Quintuple Technology Private Limited" />

      <main className="relative z-10 container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <AnimatedContent direction="up" delay={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <StatCard
              title="Authorized Capital"
              value={25}
              prefix="₹"
              suffix="L"
              icon={IndianRupee}
              gradient="from-primary to-secondary"
              delay={0.1}
            />
            <StatCard
              title="Paid Up Capital"
              value={1}
              prefix="₹"
              suffix="L"
              icon={Scale}
              gradient="from-accent to-[hsl(220,60%,60%)]"
              delay={0.15}
            />
            <StatCard
              title="Total Shares"
              value={10000}
              icon={TrendingUp}
              gradient="from-[hsl(190,100%,60%)] to-primary"
              delay={0.2}
            />
            <StatCard
              title="Founded"
              value={2024}
              icon={Calendar}
              gradient="from-[hsl(45,100%,60%)] to-[hsl(30,100%,50%)]"
              delay={0.25}
            />
          </div>
        </AnimatedContent>

        {/* Shareholding Visual */}
        <AnimatedContent direction="up" delay={0.2}>
          <div className="glass-card rounded-2xl p-6 mb-8">
            <h2 className="text-xl font-bold font-display mb-6">
              <GradientText>Shareholding Pattern</GradientText>
            </h2>
            
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Pie Chart Visual */}
              <div className="relative w-48 h-48">
                <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="20"
                    strokeDasharray="201 251"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="hsl(var(--accent))"
                    strokeWidth="20"
                    strokeDasharray="50 251"
                    strokeDashoffset="-201"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-3xl font-bold">
                      <CountUp end={10000} />
                    </p>
                    <p className="text-muted-foreground text-sm">Shares</p>
                  </div>
                </div>
              </div>

              {/* Legend */}
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50"
                >
                  <div className="w-4 h-4 rounded-full bg-primary" />
                  <div>
                    <p className="font-semibold">Anand Ganesan</p>
                    <p className="text-muted-foreground text-sm">8,000 shares (80%)</p>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50"
                >
                  <div className="w-4 h-4 rounded-full bg-accent" />
                  <div>
                    <p className="font-semibold">Shanmugam Ganesan</p>
                    <p className="text-muted-foreground text-sm">2,000 shares (20%)</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </AnimatedContent>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <InfoTile
            title="Company Details"
            items={[
              { label: "CIN", value: "U72900TN2024PTC173007" },
              { label: "Type", value: "Private Limited" },
              { label: "Status", value: "Active" },
              { label: "Location", value: "Chennai, TN" },
            ]}
            delay={0.3}
          />
          
          <InfoTile
            title="Compliance Status"
            items={[
              { label: "ROC Filing", value: "Up to date" },
              { label: "GST", value: "Applied" },
              { label: "Bank Account", value: "Yes" },
              { label: "Debt", value: "₹0" },
            ]}
            delay={0.35}
          />
          
          <InfoTile
            title="Founder Profile"
            items={[
              { label: "Name", value: "Anand Ganesan" },
              { label: "Role", value: "Founder & CEO" },
              { label: "Experience", value: "15+ Years" },
              { label: "Background", value: "Tech Leadership" },
            ]}
            delay={0.4}
          />
        </div>
      </main>
    </div>
  );
};

export default CompanyFactsheet;
