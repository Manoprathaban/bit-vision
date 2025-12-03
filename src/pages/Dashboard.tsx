import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FileText,
  Cpu,
  BarChart3,
  Wallet,
  Shield,
  CheckCircle2,
  LogOut,
  User,
} from "lucide-react";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import {
  SpotlightCard,
  GradientText,
  CountUp,
  AnimatedContent,
  Aurora,
  TiltedCard,
} from "@/components/reactbits";

const dashboardTiles = [
  {
    id: "factsheet",
    title: "Company Fact Sheet",
    icon: FileText,
    path: "/company-factsheet",
    gradient: "from-primary to-secondary",
  },
  {
    id: "product",
    title: "Product & Technology",
    icon: Cpu,
    path: "/product-technology",
    gradient: "from-[hsl(190,100%,60%)] to-primary",
  },
  {
    id: "market",
    title: "Market & Business",
    icon: BarChart3,
    path: "/market-business",
    gradient: "from-accent to-[hsl(220,60%,60%)]",
  },
  {
    id: "financial",
    title: "Financial Projections",
    icon: Wallet,
    path: "/financial-projections",
    gradient: "from-[hsl(45,100%,60%)] to-[hsl(30,100%,50%)]",
  },
  {
    id: "risk",
    title: "Risk & Governance",
    icon: Shield,
    path: "/risk-governance",
    gradient: "from-[hsl(340,80%,60%)] to-primary",
  },
  {
    id: "tests",
    title: "Test Results",
    icon: CheckCircle2,
    path: "/test-results",
    gradient: "from-accent to-[hsl(150,60%,40%)]",
  },
];

const stats = [
  { value: 354, label: "Tests Passed", suffix: "" },
  { value: 120, label: "AI Agents", suffix: "+" },
  { value: 7000, label: "TAM (₹Cr)", prefix: "₹" },
  { value: 100, label: "Success Rate", suffix: "%" },
];

const Dashboard = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Aurora />

      {/* Header */}
      <header className="relative z-10 border-b border-border/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Logo size="lg" />
              <div>
                <h1 className="text-2xl font-bold font-display">
                  <GradientText>Investor Dashboard</GradientText>
                </h1>
                <p className="text-muted-foreground text-sm">
                  MindFleet Series A Prep Room
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden sm:block text-right">
                <p className="text-sm text-muted-foreground">{user?.email}</p>
                <p className="text-xs text-muted-foreground/60 capitalize">
                  {user?.role}
                </p>
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-semibold">
                {user?.email?.charAt(0).toUpperCase() || <User className="w-5 h-5" />}
              </div>
              <Button variant="ghost" size="icon" onClick={handleLogout}>
                <LogOut className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Bar */}
      <AnimatedContent direction="up" delay={0.1} className="relative z-10">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="glass-card rounded-xl p-4 text-center"
              >
                <div className="text-3xl font-bold text-primary">
                  {stat.prefix}
                  <CountUp end={stat.value} duration={2000} />
                  {stat.suffix}
                </div>
                <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedContent>

      {/* Dashboard Tiles */}
      <main className="relative z-10 container mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dashboardTiles.map((tile, index) => (
            <AnimatedContent key={tile.id} direction="up" delay={0.1 + index * 0.05}>
              <TiltedCard tiltAmount={8}>
                <SpotlightCard
                  className="h-full cursor-pointer group"
                  spotlightColor="rgba(161, 110, 255, 0.2)"
                >
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={() => navigate(tile.path)}
                    className="p-6 h-full flex flex-col"
                  >
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${tile.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <tile.icon className="w-7 h-7 text-background" />
                    </div>

                    <h3 className="text-xl font-semibold text-foreground mb-2 font-display">
                      {tile.title}
                    </h3>

                    <div className="mt-auto pt-4">
                      <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                        View Details
                        <motion.span
                          initial={{ x: 0 }}
                          whileHover={{ x: 4 }}
                        >
                          →
                        </motion.span>
                      </span>
                    </div>
                  </motion.div>
                </SpotlightCard>
              </TiltedCard>
            </AnimatedContent>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
