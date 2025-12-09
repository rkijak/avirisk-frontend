import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
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
import { User, LogOut, Menu, X, Sun, Moon } from "lucide-react";
import { useState } from "react";
import { useTheme } from "@/hooks/useTheme";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/learn", label: "Learn" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [location] = useLocation();
  const { user, isAuthenticated, logout, isLoading } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="border-b border-primary/10 bg-card/30 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          <Link href="/">
            <img 
              src={aviRiskLogo} 
              alt="AviRisk" 
              className="h-10 md:h-12 drop-shadow-[0_0_20px_rgba(34,211,238,0.3)] cursor-pointer"
              data-testid="link-logo"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <Button
                  variant="ghost"
                  size="sm"
                  className={location === link.href ? "text-primary" : "text-muted-foreground"}
                  data-testid={`nav-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </Button>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {isLoading ? (
              <div className="w-9 h-9 rounded-full bg-muted animate-pulse" />
            ) : isAuthenticated && user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button 
                    className="flex items-center gap-2 bg-background/50 border border-primary/20 rounded-full pr-3 hover-elevate transition-all"
                    data-testid="button-user-menu"
                  >
                    <Avatar className="w-9 h-9">
                      <AvatarImage src={user.profileImageUrl || undefined} alt={user.firstName || "User"} />
                      <AvatarFallback className="bg-primary/20 text-primary text-sm">
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
                  size="sm"
                  className="hidden sm:inline-flex"
                  data-testid="button-pilot-login"
                >
                  Sign Up / Log In
                </Button>
              </LoginModal>
            )}

            <button 
              onClick={toggleTheme}
              className="w-9 h-9 rounded-md bg-background/50 border border-primary/20 flex items-center justify-center hover-elevate active-elevate-2 transition-all group"
              data-testid="button-theme-toggle"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-primary/60 group-hover:text-primary transition-colors" />
              ) : (
                <Moon className="w-4 h-4 text-primary/60 group-hover:text-primary transition-colors" />
              )}
            </button>

            <button
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-md hover-elevate"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 border-t border-primary/10 mt-4 space-y-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <Button
                  variant="ghost"
                  className={`w-full justify-start ${location === link.href ? "text-primary" : "text-muted-foreground"}`}
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`nav-mobile-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </Button>
              </Link>
            ))}
            {!isAuthenticated && (
              <LoginModal returnTo="/dashboard">
                <Button className="w-full mt-2" onClick={() => setMobileMenuOpen(false)}>
                  Sign Up / Log In
                </Button>
              </LoginModal>
            )}
          </nav>
        )}
      </div>
    </header>
  );
}
