import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Cookie, Shield, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      // Delay showing the banner for better UX
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    localStorage.setItem("cookieConsentDate", new Date().toISOString());
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    localStorage.setItem("cookieConsentDate", new Date().toISOString());
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="container mx-auto">
            <div className="bg-card/95 backdrop-blur-md border border-primary/20 rounded-lg shadow-lg">
              <div className="p-4 md:p-6">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="p-2 rounded-full bg-primary/10">
                        <Cookie className="w-4 h-4 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground">Privacy & Cookies</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      We use essential cookies to ensure AviRisk works properly and analytics cookies to understand how you use our platform. 
                      Your data is encrypted and never shared with third parties. 
                      <a href="/privacy" className="text-primary hover:underline ml-1">
                        Learn more
                      </a>
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-3 w-full md:w-auto">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleDecline}
                      className="flex-1 md:flex-initial"
                      data-testid="button-cookie-decline"
                    >
                      Decline
                    </Button>
                    <Button
                      size="sm"
                      onClick={handleAccept}
                      className="flex-1 md:flex-initial"
                      data-testid="button-cookie-accept"
                    >
                      <Shield className="w-4 h-4 mr-2" />
                      Accept All
                    </Button>
                  </div>
                  
                  <button
                    onClick={handleDecline}
                    className="absolute top-4 right-4 p-1 rounded-md hover-elevate text-muted-foreground hover:text-foreground transition-colors md:hidden"
                    aria-label="Close cookie banner"
                    data-testid="button-cookie-close"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}