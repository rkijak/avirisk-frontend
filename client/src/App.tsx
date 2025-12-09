import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useAuth } from "@/hooks/useAuth";
import LoadingAnimation from "@/components/LoadingAnimation";
import CookieBanner from "@/components/CookieBanner";
import LandingPage from "@/pages/landing";
import FeaturesPage from "@/pages/features";
import PricingPage from "@/pages/pricing";
import HowItWorksPage from "@/pages/how-it-works";
import FAQPage from "@/pages/faq";
import AboutPage from "@/pages/about";
import ContactPage from "@/pages/contact";
import PrivacyPage from "@/pages/privacy";
import TermsPage from "@/pages/terms";
import LearnPage from "@/pages/learn";
import PilotDashboard from "@/pages/pilot-dashboard";
import CfiDashboard from "@/pages/cfi-dashboard";
import NotFound from "@/pages/not-found";

function Router() {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return null;
  }

  return (
    <Switch>
      {/* Public routes */}
      <Route path="/features" component={FeaturesPage} />
      <Route path="/pricing" component={PricingPage} />
      <Route path="/how-it-works" component={HowItWorksPage} />
      <Route path="/faq" component={FAQPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/privacy" component={PrivacyPage} />
      <Route path="/terms" component={TermsPage} />
      <Route path="/learn" component={LearnPage} />
      
      {/* Protected routes */}
      <Route path="/dashboard" component={PilotDashboard} />
      <Route path="/cfi" component={CfiDashboard} />
      
      {/* Home route - show dashboard if authenticated, otherwise landing */}
      <Route path="/">
        {isAuthenticated ? <PilotDashboard /> : <LandingPage />}
      </Route>
      
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LoadingAnimation />
        <Toaster />
        <Router />
        <CookieBanner />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
