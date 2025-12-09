import { Card, CardContent } from "@/components/ui/card";
import { TrendingDown, Globe, Shield, Sparkles } from "lucide-react";

export default function RegulatorySection() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-4">
            <Globe className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">MOSAIC 2.0 & Beyond</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold">
            Better Rates for the{" "}
            <span className="text-primary drop-shadow-[0_0_20px_rgba(34,211,238,0.5)]">
              New Aviation Era
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground">
            As MOSAIC 2.0 revolutionizes US aviation regulations—with Canada following suit—our blockchain-powered approach delivers the competitive rates pilots deserve.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          <Card className="bg-card/50 backdrop-blur-sm border-primary/10">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">MOSAIC 2.0 Opportunity</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    New FAA regulations expand what pilots can fly—from light sport to more capable aircraft. Traditional insurers haven't adapted their pricing models, leaving pilots overpaying for coverage.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-primary/10">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">North American Expansion</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Canada is following the US lead with similar regulatory modernization. Our blockchain infrastructure scales effortlessly across borders, bringing competitive rates to Canadian pilots too.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 backdrop-blur-sm max-w-5xl mx-auto">
          <CardContent className="p-8 md:p-12">
            <div className="flex items-start gap-6 mb-6">
              <div className="w-16 h-16 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                <TrendingDown className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3">How Blockchain Delivers Better Rates</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Our tokenized risk pools enable insurers to deploy capital more efficiently under new regulations, creating real savings for pilots:
                </p>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">15-30%</div>
                    <div className="text-sm text-muted-foreground">Lower premiums vs traditional carriers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">Real-Time</div>
                    <div className="text-sm text-muted-foreground">Dynamic pricing based on actual flight data</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">Future-Proof</div>
                    <div className="text-sm text-muted-foreground">Ready for evolving regulations</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-6 border-t border-primary/20">
              <Shield className="w-5 h-5 text-primary" />
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Regulatory Compliant:</strong> Fully aligned with MOSAIC 2.0 standards and Transport Canada requirements
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
