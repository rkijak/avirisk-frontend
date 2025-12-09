import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Check } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <main className="container mx-auto px-6 py-16 flex-1">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Pay-As-You-Fly <span className="text-primary">Pricing</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Dynamic premiums based on real-time risk metrics and actual usage
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl mb-2">Usage-Based Insurance Model</CardTitle>
              <CardDescription className="text-lg">
                Pricing that adapts to your actual flying—not rigid premiums that ignore your unique profile
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="text-center pb-6 border-b border-primary/20">
                <p className="text-lg text-muted-foreground mb-4">
                  AviRisk's smart contract technology enables truly fair, data-driven pricing
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="font-semibold text-xl mb-6">Pricing Factors</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-primary">Pilot-Specific Metrics</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-primary mt-1 shrink-0" />
                        <span>Flight experience level & certifications</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-primary mt-1 shrink-0" />
                        <span>Safety record & incident history</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-primary mt-1 shrink-0" />
                        <span>Recency of flight hours</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-primary">Flight-Specific Factors</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-primary mt-1 shrink-0" />
                        <span>Aircraft type & performance specs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-primary mt-1 shrink-0" />
                        <span>Weather & environmental conditions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-primary mt-1 shrink-0" />
                        <span>Maintenance records & compliance</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <Card className="bg-background/50 border-primary/20">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Sample Pricing Scenarios</h3>
                  <div className="space-y-4">
                    <div className="pb-4 border-b border-primary/10">
                      <p className="font-medium mb-2">Student Pilot - Low Flight Hours</p>
                      <p className="text-sm text-muted-foreground">Limited experience, training flights in basic LSA aircraft, optimal weather conditions</p>
                      <p className="text-sm text-primary mt-2">Premium adjusts based on supervised training hours and safety metrics</p>
                    </div>
                    <div className="pb-4 border-b border-primary/10">
                      <p className="font-medium mb-2">Experienced Pilot - Regular Flyer</p>
                      <p className="text-sm text-muted-foreground">500+ hours, consistent flying schedule, modern MOSAIC-compliant aircraft, clean record</p>
                      <p className="text-sm text-primary mt-2">Lower risk profile results in competitive pay-per-flight rates</p>
                    </div>
                    <div>
                      <p className="font-medium mb-2">Commercial Operator - High Volume</p>
                      <p className="text-sm text-muted-foreground">Multiple aircraft, high flight hours, advanced safety systems, professional maintenance</p>
                      <p className="text-sm text-primary mt-2">Volume discounts and fleet optimization through tokenized risk pools</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-4">
                <h3 className="font-semibold text-lg">What's Included:</h3>
                {[
                  "Pay only when you fly - no annual minimums",
                  "Real-time pricing adjustments based on verified flight data",
                  "Automated claims processing (days vs. weeks)",
                  "24/7 coverage activation via smart contract",
                  "Transparent, on-chain policy documentation",
                  "MOSAIC 2.0 compliant aircraft coverage",
                  "Access to tokenized risk pools for competitive rates",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-primary/20">
                <div className="bg-primary/5 rounded-lg p-6 text-center">
                  <p className="text-sm font-semibold text-foreground mb-2">Platform in Development</p>
                  <p className="text-sm text-muted-foreground mb-6">
                    AviRisk is currently in preliminary stages. Create an account now to receive early access benefits and updates when pricing becomes available.
                  </p>
                  <Link href="/">
                    <Button size="lg" className="shadow-lg shadow-primary/30" data-testid="button-signup">
                      Sign Up for Early Access
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>

          <p className="text-center text-sm text-muted-foreground">
            <strong>Note:</strong> Actual pricing will be determined by smart contract algorithms analyzing verified flight data, pilot credentials, and real-time risk factors. Details will be available upon platform launch.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
