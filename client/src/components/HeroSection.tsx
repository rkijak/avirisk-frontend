import { Button } from "@/components/ui/button";
import { Plane, ArrowRight, User, LogOut, Sun, Moon } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import heroImage from "@assets/generated_images/Cessna_172_golden_hour_flight_c02dc319.png";
import aviRiskLogo from "@assets/AviRisk_logo2_1759802022987.png";
import { LoginModal } from "@/components/LoginModal";
import { useAuth } from "@/hooks/useAuth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/hooks/useTheme";

export default function HeroSection() {
  const { user, isAuthenticated, logout, isLoading } = useAuth();
  const { theme, toggleTheme } = useTheme();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute top-8 left-8 z-20"
      >
        <img 
          src={aviRiskLogo} 
          alt="AviRisk" 
          className="h-16 md:h-20 drop-shadow-[0_0_30px_rgba(34,211,238,0.4)]"
        />
      </motion.div>

      <div className="absolute top-8 right-8 z-20 flex gap-2 items-center">
        {isLoading ? (
          <div className="w-10 h-10 rounded-full bg-background/20 backdrop-blur-sm animate-pulse" />
        ) : isAuthenticated && user ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button 
                className="flex items-center gap-2 bg-background/20 backdrop-blur-sm border border-primary/20 rounded-full pr-3 hover-elevate transition-all"
                data-testid="button-user-menu"
              >
                <Avatar className="w-10 h-10">
                  <AvatarImage src={user.profileImageUrl || undefined} alt={user.firstName || "User"} />
                  <AvatarFallback className="bg-primary/20 text-primary">
                    {user.firstName?.[0] || user.email?.[0] || "U"}
                  </AvatarFallback>
                </Avatar>
                <span className="text-sm hidden sm:inline">{user.firstName}</span>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem asChild>
                <Link href="/dashboard" className="flex items-center gap-2 cursor-pointer">
                  <User className="w-4 h-4" />
                  Dashboard
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={logout} className="flex items-center gap-2 cursor-pointer text-destructive">
                <LogOut className="w-4 h-4" />
                Sign Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <LoginModal returnTo="/dashboard">
            <Button
              variant="outline"
              className="bg-background/20 backdrop-blur-sm border-primary/20"
              data-testid="button-pilot-login"
            >
              Sign Up / Log In
            </Button>
          </LoginModal>
        )}
        
        <button 
          onClick={toggleTheme}
          className="w-10 h-10 rounded-md bg-background/20 backdrop-blur-sm border border-primary/20 flex items-center justify-center hover-elevate active-elevate-2 transition-all group"
          data-testid="button-theme-toggle"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? (
            <Sun className="w-5 h-5 text-primary/60 group-hover:text-primary transition-colors" />
          ) : (
            <Moon className="w-5 h-5 text-primary/60 group-hover:text-primary transition-colors" />
          )}
        </button>
      </div>

      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm"
            >
              <Plane className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">MOSAIC 2.0 Ready</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              Modern Insurance for{" "}
              <span className="text-primary drop-shadow-[0_0_20px_rgba(34,211,238,0.5)]">
                Modern Pilots
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-xl md:text-2xl text-muted-foreground leading-relaxed"
            >
              Fair, fast, and flexible insurance that actually makes sense for pilots.
              Get covered instantly and pay only when you fly.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              {isAuthenticated ? (
                <Link href="/dashboard">
                  <Button 
                    size="lg" 
                    className="text-lg px-8 shadow-lg shadow-primary/30 group"
                    data-testid="button-go-dashboard"
                  >
                    Go to Dashboard
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              ) : (
                <LoginModal returnTo="/dashboard">
                  <Button 
                    size="lg" 
                    className="text-lg px-8 shadow-lg shadow-primary/30 group"
                    data-testid="button-signup-hero"
                  >
                    Sign Up Now
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </LoginModal>
              )}
              <Link href="/learn">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-lg px-8 bg-background/50 backdrop-blur-sm"
                  data-testid="button-learn-more"
                >
                  Learn More
                </Button>
              </Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap gap-8 pt-4"
            >
              <div>
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
                  className="text-3xl font-bold text-primary"
                >
                  7,300+
                </motion.div>
                <div className="text-sm text-muted-foreground">Active Sport Pilots</div>
              </div>
              <div>
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.7, type: "spring", stiffness: 100 }}
                  className="text-3xl font-bold text-primary"
                >
                  10x
                </motion.div>
                <div className="text-sm text-muted-foreground">Faster Claims Processing</div>
              </div>
              <div>
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
                  className="text-3xl font-bold text-primary"
                >
                  100%
                </motion.div>
                <div className="text-sm text-muted-foreground">Transparent Coverage</div>
              </div>
            </motion.div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent blur-3xl" />
            <img
              src={heroImage}
              alt="Cessna 172 in flight"
              className="relative rounded-2xl shadow-2xl shadow-primary/20 border border-primary/10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
