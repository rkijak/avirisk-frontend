import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { UserPlus, FileCheck, Shield, CheckCircle } from "lucide-react";
import aircraftImage from "@assets/generated_images/Piper_Cherokee_on_tarmac_94dc09d0.png";

const steps = [
  {
    id: "signup",
    number: "1",
    icon: UserPlus,
    title: "Sign Up",
    shortDescription: "Create your account and connect your flight data in minutes.",
    details: [
      "Create your free pilot account in under 2 minutes",
      "Connect your flight tracking devices (ADS-B, ForeFlight, etc.)",
      "Import your FAA pilot credentials securely",
      "Set up your aircraft profile with tail number and specs",
    ],
  },
  {
    id: "quote",
    number: "2",
    icon: FileCheck,
    title: "Get Quote",
    shortDescription: "Receive your personalized quote based on your actual flying habits.",
    details: [
      "AI analyzes your flight history and proficiency data",
      "Get instant pricing based on actual risk, not assumptions",
      "See exactly how your flying habits affect your rates",
      "Compare coverage options side-by-side",
    ],
  },
  {
    id: "fly",
    number: "3",
    icon: Shield,
    title: "Fly Protected",
    shortDescription: "Activate coverage when you fly, track your savings, and build your safety record.",
    details: [
      "Pay only for the hours you actually fly",
      "Automatic claims processing via blockchain smart contracts",
      "Build your proficiency score to unlock premium discounts",
      "Track savings in real-time on your dashboard",
    ],
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Getting started is simple. Follow these three easy steps to modernize your aviation insurance.
          </p>
        </div>

        <Tabs defaultValue="signup" className="max-w-5xl mx-auto mb-16">
          <TabsList className="grid w-full grid-cols-3 h-auto p-1 bg-muted/50">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <TabsTrigger
                  key={step.id}
                  value={step.id}
                  className="flex flex-col md:flex-row items-center gap-2 py-4 px-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  data-testid={`tab-step-${step.id}`}
                >
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold">
                      {step.number}
                    </span>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-medium text-sm md:text-base">{step.title}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <TabsContent
                key={step.id}
                value={step.id}
                className="mt-8"
                data-testid={`content-step-${step.id}`}
              >
                <Card className="bg-card/50 backdrop-blur-sm border-primary/10">
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div className="space-y-6">
                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                            <Icon className="w-7 h-7 text-primary" />
                          </div>
                          <div>
                            <span className="text-sm font-medium text-primary">Step {step.number}</span>
                            <h3 className="text-2xl font-bold">{step.title}</h3>
                          </div>
                        </div>
                        <p className="text-lg text-muted-foreground">
                          {step.shortDescription}
                        </p>
                        <ul className="space-y-3">
                          {step.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-foreground/80">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="relative">
                        <img
                          src={aircraftImage}
                          alt="Piper Cherokee on tarmac"
                          className="rounded-xl shadow-xl shadow-primary/10 border border-primary/10 w-full"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent rounded-xl" />
                        <div className="absolute bottom-4 left-4 right-4 text-center">
                          <span className="text-sm font-medium text-primary">
                            Aviation Insurance Reimagined
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
}
