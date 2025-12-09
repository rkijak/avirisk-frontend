import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/hooks/useAuth";
import { SiGoogle, SiGithub } from "react-icons/si";
import { Loader2, Plane, Mail, Eye, EyeOff } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLocation } from "wouter";

interface LoginModalProps {
  children: React.ReactNode;
  returnTo?: string;
}

export function LoginModal({ children, returnTo }: LoginModalProps) {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<"login" | "register">("register");
  const [loadingProvider, setLoadingProvider] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const { providers, loginWithGoogle, loginWithGitHub, refetchUser } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });
  const [error, setError] = useState<string | null>(null);

  const handleGoogleLogin = () => {
    setLoadingProvider("google");
    loginWithGoogle(returnTo);
  };

  const handleGitHubLogin = () => {
    setLoadingProvider("github");
    loginWithGitHub(returnTo);
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoadingProvider("email");

    try {
      const endpoint = mode === "register" ? "/api/auth/register" : "/api/auth/login";
      const body = mode === "register" 
        ? formData 
        : { email: formData.email, password: formData.password };

      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
        credentials: "include",
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Authentication failed");
        setLoadingProvider(null);
        return;
      }

      await refetchUser();
      setOpen(false);
      
      toast({
        title: mode === "register" ? "Welcome to AviRisk!" : "Welcome back!",
        description: mode === "register" 
          ? "Your account has been created. Check your email for a welcome message."
          : "You have successfully signed in.",
      });

      setLocation(data.redirect || returnTo || "/dashboard");
    } catch (err) {
      setError("Something went wrong. Please try again.");
      setLoadingProvider(null);
    }
  };

  const hasOAuthProviders = providers?.google || providers?.github;

  const resetForm = () => {
    setFormData({ email: "", password: "", firstName: "", lastName: "" });
    setError(null);
    setLoadingProvider(null);
  };

  const toggleMode = () => {
    setMode(mode === "login" ? "register" : "login");
    resetForm();
  };

  return (
    <Dialog open={open} onOpenChange={(isOpen) => {
      setOpen(isOpen);
      if (!isOpen) resetForm();
    }}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md" data-testid="dialog-login">
        <DialogHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <Plane className="w-8 h-8 text-primary" />
            </div>
          </div>
          <DialogTitle className="text-2xl font-bold text-center">
            {mode === "register" ? "Create your account" : "Welcome back"}
          </DialogTitle>
          <DialogDescription className="text-center text-muted-foreground">
            {mode === "register" 
              ? "Join AviRisk to access your pilot dashboard and manage your aviation insurance."
              : "Sign in to access your pilot dashboard."}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleEmailSubmit} className="space-y-4 mt-6">
          {mode === "register" && (
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  type="text"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  disabled={!!loadingProvider}
                  required
                  data-testid="input-firstName"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  type="text"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  disabled={!!loadingProvider}
                  required
                  data-testid="input-lastName"
                />
              </div>
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="pl-10"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                disabled={!!loadingProvider}
                required
                data-testid="input-email"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder={mode === "register" ? "At least 8 characters" : "Enter your password"}
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                disabled={!!loadingProvider}
                required
                minLength={mode === "register" ? 8 : undefined}
                data-testid="input-password"
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7"
                onClick={() => setShowPassword(!showPassword)}
                tabIndex={-1}
                data-testid="button-toggle-password"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </Button>
            </div>
          </div>

          {error && (
            <p className="text-sm text-destructive text-center" data-testid="text-error">
              {error}
            </p>
          )}

          <Button
            type="submit"
            className="w-full h-12 text-base"
            disabled={!!loadingProvider}
            data-testid="button-submit-email"
          >
            {loadingProvider === "email" ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : mode === "register" ? (
              "Create Account"
            ) : (
              "Sign In"
            )}
          </Button>
        </form>

        <div className="text-center mt-2">
          <button
            type="button"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            onClick={toggleMode}
            disabled={!!loadingProvider}
            data-testid="button-toggle-mode"
          >
            {mode === "register" 
              ? "Already have an account? Sign in" 
              : "Don't have an account? Create one"}
          </button>
        </div>

        {hasOAuthProviders && (
          <>
            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="flex gap-3">
              {providers?.google && (
                <Button
                  variant="outline"
                  className="flex-1 h-11 gap-2"
                  onClick={handleGoogleLogin}
                  disabled={!!loadingProvider}
                  data-testid="button-login-google"
                >
                  {loadingProvider === "google" ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <SiGoogle className="w-4 h-4" />
                  )}
                  Google
                </Button>
              )}

              {providers?.github && (
                <Button
                  variant="outline"
                  className="flex-1 h-11 gap-2"
                  onClick={handleGitHubLogin}
                  disabled={!!loadingProvider}
                  data-testid="button-login-github"
                >
                  {loadingProvider === "github" ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <SiGithub className="w-4 h-4" />
                  )}
                  GitHub
                </Button>
              )}
            </div>
          </>
        )}

        <div className="mt-4 pt-4 border-t">
          <p className="text-xs text-center text-muted-foreground">
            By continuing, you agree to our{" "}
            <a href="/terms" className="underline hover:text-foreground">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="/privacy" className="underline hover:text-foreground">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
