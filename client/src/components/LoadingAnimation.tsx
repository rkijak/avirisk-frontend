import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import aviRiskLogo from "@assets/AviRisk_logo2_1759802022987.png";

export default function LoadingAnimation() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if this is the first visit
    const hasVisited = sessionStorage.getItem("hasVisited");
    
    if (hasVisited) {
      setIsLoading(false);
      return;
    }

    // Show loading animation for first-time visitors
    const timer = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem("hasVisited", "true");
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] bg-background flex items-center justify-center"
        >
          <div className="relative">
            {/* Logo with pulse animation */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.2
              }}
              className="relative"
            >
              <img 
                src={aviRiskLogo} 
                alt="AviRisk" 
                className="h-32 md:h-40 w-auto drop-shadow-[0_0_40px_rgba(34,211,238,0.5)]"
              />
              
              {/* Pulsing glow effect */}
              <motion.div
                className="absolute inset-0 rounded-full bg-primary/20 blur-3xl"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 0.2, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>

            {/* Loading text */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-8 text-center"
            >
              <h2 className="text-xl font-semibold text-foreground mb-2">
                Initializing AviRisk
              </h2>
              <div className="flex items-center justify-center gap-2">
                <motion.span
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
                  className="text-sm text-muted-foreground"
                >
                  Smart Contracts
                </motion.span>
                <span className="text-primary">•</span>
                <motion.span
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                  className="text-sm text-muted-foreground"
                >
                  Aviation Insurance
                </motion.span>
                <span className="text-primary">•</span>
                <motion.span
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
                  className="text-sm text-muted-foreground"
                >
                  MOSAIC 2.0
                </motion.span>
              </div>
            </motion.div>

            {/* Progress bar */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20 origin-left"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}