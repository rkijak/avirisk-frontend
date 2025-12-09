import aviRiskLogo from "@assets/AviRisk_logo2_1759802022987.png";

export default function Footer() {
  return (
    <footer className="border-t border-primary/10 bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <img 
              src={aviRiskLogo} 
              alt="AviRisk" 
              className="h-12 mb-4 drop-shadow-[0_0_20px_rgba(34,211,238,0.3)]"
            />
            <p className="text-sm text-muted-foreground max-w-md mb-4">
              Smart contract aviation insurance provider offering fair, fast, and flexible coverage for modern pilots.
            </p>
            <p className="text-xs text-muted-foreground">
              FAA Compliant • MOSAIC 2.0 Ready
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/features" className="hover:text-primary transition-colors" data-testid="link-features">Features</a></li>
              <li><a href="/pricing" className="hover:text-primary transition-colors" data-testid="link-pricing">Pricing</a></li>
              <li><a href="/how-it-works" className="hover:text-primary transition-colors" data-testid="link-how-it-works">How It Works</a></li>
              <li><a href="/faq" className="hover:text-primary transition-colors" data-testid="link-faq">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/about" className="hover:text-primary transition-colors" data-testid="link-about">About</a></li>
              <li><a href="/contact" className="hover:text-primary transition-colors" data-testid="link-contact">Contact</a></li>
              <li><a href="/privacy" className="hover:text-primary transition-colors" data-testid="link-privacy">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-primary transition-colors" data-testid="link-terms">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © 2025 AviRisk. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a 
                href="https://x.com/flyavirisk" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-x"
              >
                X
              </a>
              <a 
                href="https://www.linkedin.com/company/avirisk" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-linkedin"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
