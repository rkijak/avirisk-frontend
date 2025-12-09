import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Zap, Lock, TrendingDown, Clock, Users } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "10x Faster Claims Reporting",
    description: "Blockchain technology accelerates claims documentation and reporting by 10x. Get verified reports in minutes, not weeks.",
    efficiency: "10x faster reporting",
  },
  {
    icon: TrendingDown,
    title: "Lower Operational Costs",
    description: "Decentralized systems eliminate middlemen and reduce overhead by up to 40%, savings we pass directly to you.",
    efficiency: "40% cost reduction",
  },
  {
    icon: Lock,
    title: "Transparent & Trustless",
    description: "All policy terms are encoded in smart contracts. No hidden clauses, no ambiguity - just clear, enforceable agreements.",
    efficiency: "100% transparency",
  },
  {
    icon: Shield,
    title: "Enhanced Security",
    description: "Your data is encrypted and distributed across the blockchain, making it virtually impossible to hack or tamper with.",
    efficiency: "Bank-level security",
  },
  {
    icon: Clock,
    title: "24/7 Automated Service",
    description: "Smart contracts work around the clock. Get coverage, submit claims reports, or make changes anytime, anywhere.",
    efficiency: "Always available",
  },
  {
    icon: Users,
    title: "Tokenized Risk Pools",
    description: "Insurers contribute to blockchain-based tokenized pools, creating efficient capital allocation and competitive rates.",
    efficiency: "Smart capital deployment",
  },
];

export default function DecentralizationSection() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-4">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Blockchain-Powered Insurance</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold">
            Decentralization That{" "}
            <span className="text-primary drop-shadow-[0_0_20px_rgba(34,211,238,0.5)]">
              Works for You
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Blockchain technology delivers 10x faster claims reporting and verification, eliminating inefficiencies and reducing costs for your aviation insurance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card 
                key={index} 
                className="bg-card/50 backdrop-blur-sm border-primary/10 hover-elevate"
                data-testid={`card-benefit-${index}`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-semibold text-primary uppercase tracking-wide">
                        {benefit.efficiency}
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-center">How You Benefit</h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">10x</div>
                  <div className="text-sm text-muted-foreground">Faster claims reporting and documentation with blockchain verification</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">$$$</div>
                  <div className="text-sm text-muted-foreground">Lower premiums from reduced operational overhead</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Always-on reporting and verification without delays</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
