import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { UserPlus, FileCheck, Shield, Plane } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function HowItWorksPage() {
  const steps = [
    {
      number: "1",
      icon: UserPlus,
      title: "Sign Up & Connect",
      description: "Create your account in minutes. Connect your flight data sources securely through our blockchain-verified system.",
      details: [
        "Quick account setup",
        "Secure data connection",
        "Flight history verification",
      ],
    },
    {
      number: "2",
      icon: FileCheck,
      title: "Get Your Quote",
      description: "Our smart contracts analyze your flight patterns and safety record to generate a personalized quote.",
      details: [
        "Real-time risk assessment",
        "Dynamic pricing calculation",
        "Transparent cost breakdown",
      ],
    },
    {
      number: "3",
      icon: Shield,
      title: "Activate Coverage",
      description: "Activate your policy instantly when you're ready to fly. Pay only for the coverage you use.",
      details: [
        "Instant activation",
        "Usage-based billing",
        "Flexible coverage options",
      ],
    },
    {
      number: "4",
      icon: Plane,
      title: "Fly Protected",
      description: "Track your coverage, submit claims reports instantly, and build your safety record for better rates.",
      details: [
        "Real-time coverage dashboard",
        "Days-not-weeks claims processing",
        "Safety score tracking",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <main className="container mx-auto px-6 py-16 flex-1">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            How It <span className="text-primary">Works</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Getting started with AviRisk is simple. Follow these four easy steps.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card 
                key={index} 
                className="bg-card/50 backdrop-blur-sm border-primary/10 hover-elevate"
                data-testid={`card-step-${index}`}
              >
                <CardHeader>
                  <div className="flex items-start gap-6">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold shadow-lg shadow-primary/30">
                        {step.number}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <CardTitle className="text-2xl">{step.title}</CardTitle>
                      </div>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {step.description}
                      </p>
                      <ul className="space-y-2">
                        {step.details.map((detail, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">Ready to get started?</p>
          <Link href="/">
            <Button size="lg" className="shadow-lg shadow-primary/30" data-testid="button-get-started">
              Sign Up Now
            </Button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
