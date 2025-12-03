import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "@/context/AuthContext";

// Pages
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CompanyFactsheet from "./pages/CompanyFactsheet";
import ProductTechnology from "./pages/ProductTechnology";
import MarketBusiness from "./pages/MarketBusiness";
import FinancialProjections from "./pages/FinancialProjections";
import RiskGovernance from "./pages/RiskGovernance";
import TestResults from "./pages/TestResults";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Protected Route wrapper
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();
  
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  
  return <>{children}</>;
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/company-factsheet"
        element={
          <ProtectedRoute>
            <CompanyFactsheet />
          </ProtectedRoute>
        }
      />
      <Route
        path="/product-technology"
        element={
          <ProtectedRoute>
            <ProductTechnology />
          </ProtectedRoute>
        }
      />
      <Route
        path="/market-business"
        element={
          <ProtectedRoute>
            <MarketBusiness />
          </ProtectedRoute>
        }
      />
      <Route
        path="/financial-projections"
        element={
          <ProtectedRoute>
            <FinancialProjections />
          </ProtectedRoute>
        }
      />
      <Route
        path="/risk-governance"
        element={
          <ProtectedRoute>
            <RiskGovernance />
          </ProtectedRoute>
        }
      />
      <Route
        path="/test-results"
        element={
          <ProtectedRoute>
            <TestResults />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
