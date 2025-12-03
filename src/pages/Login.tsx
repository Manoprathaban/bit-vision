import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Briefcase, Globe, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Logo from "@/components/Logo";
import { useAuth } from "@/context/AuthContext";
import {
  Aurora,
  GradientText,
  AnimatedContent,
  Particles,
} from "@/components/reactbits";

const Login = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = (role: "founder" | "investor" | "public") => {
    if (!email && role === "founder") {
      return;
    }
    
    login({
      email: email || `${role}@mindfleet.ai`,
      phone,
      role,
      savedAt: new Date().toISOString(),
    });
    
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-background">
      {/* Left Panel - Login Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center p-6 sm:p-12 lg:p-16 bg-card relative">
        <AnimatedContent direction="up" delay={0}>
          <div className="flex items-center gap-3 mb-8">
            <Logo size="md" />
            <GradientText className="text-2xl font-bold font-display">
              MindFleet
            </GradientText>
          </div>
        </AnimatedContent>

        <AnimatedContent direction="up" delay={0.1}>
          <div className="max-w-md">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2 font-display">
              Welcome Back
            </h1>
            <p className="text-muted-foreground mb-8">
              Access the investor data room
            </p>

            <div className="space-y-4 mb-6">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleLogin("investor")}
                className="w-full flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-foreground font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-background/20 flex items-center justify-center">
                  <Briefcase className="w-5 h-5" />
                </div>
                <span>Sign in as Investor</span>
                <ArrowRight className="w-5 h-5 ml-auto" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleLogin("public")}
                className="w-full flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-accent to-[hsl(220,60%,60%)] text-background font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-background/20 flex items-center justify-center">
                  <Globe className="w-5 h-5" />
                </div>
                <span>Sign in as Public</span>
                <ArrowRight className="w-5 h-5 ml-auto" />
              </motion.button>
            </div>

            <div className="flex items-center gap-4 my-6">
              <div className="flex-1 h-px bg-border" />
              <span className="text-muted-foreground text-sm">Or</span>
              <div className="flex-1 h-px bg-border" />
            </div>

            <div className="space-y-4">
              <Input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                type="tel"
                placeholder="Phone (optional)"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <Button
                variant="hero"
                size="lg"
                className="w-full"
                onClick={() => handleLogin("founder")}
                disabled={!email}
              >
                Continue as Founder
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

            <p className="text-muted-foreground text-sm mt-6">
              Don't have an account?{" "}
              <a href="#" className="text-primary font-semibold hover:underline">
                Sign up free
              </a>
            </p>
          </div>
        </AnimatedContent>

        <AnimatedContent direction="up" delay={0.3}>
          <p className="text-muted-foreground/60 text-sm mt-12">
            © 2025 MindFleet. All rights reserved.
          </p>
        </AnimatedContent>
      </div>

      {/* Right Panel - Hero Visual */}
      <div className="hidden lg:flex w-1/2 relative overflow-hidden bg-background items-center justify-center p-12">
        <Aurora />
        <Particles quantity={30} color="#a16eff" />
        
        <AnimatedContent direction="left" delay={0.2} className="relative z-10 text-center max-w-lg">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 text-sm mb-6"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span>New Release</span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl font-bold font-display mb-4">
            <GradientText colors={["#d8a1ff", "#a16eff", "#49c6ff", "#d8a1ff"]}>
              Discover MindFleet 2.0
            </GradientText>
          </h2>
          
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Experience our AI agent marketplace with{" "}
            <span className="text-primary font-semibold">200+</span> specialized agents
          </p>
          
          <Button variant="cyan" size="lg">
            Explore the Hub
            <ArrowRight className="w-4 h-4" />
          </Button>
        </AnimatedContent>
      </div>
    </div>
  );
};

export default Login;
