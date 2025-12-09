import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingDown, Zap, CreditCard } from "lucide-react";
import cockpitImage from "@assets/generated_images/Modern_cockpit_avionics_display_16c76785.png";

const solutions = [
  {
    icon: TrendingDown,
    title: "Fair Pricing",
    description: "We use your actual flight data to set fair prices - safer pilots get rewarded.",
  },
  {
    icon: Zap,
    title: "Instant Coverage",
    description: "Get covered instantly through our simple app - no weeks of waiting.",
  },
  {
    icon: CreditCard,
    title: "Pay When You Fly",
    description: "Pay only when you actually fly - no more paying for coverage you don't use.",
  },
];

export default function SolutionSection() {
  return (
    <section className="py-24 md:py-32 bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Our Solution</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            MOSAIC 2.0 is opening doors for pilots everywhere, and we're building the insurance that makes sense for this new era.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-16">
          <div className="order-2 lg:order-1">
            <img
              src={cockpitImage}
              alt="Modern aviation cockpit"
              className="rounded-2xl shadow-2xl shadow-primary/20 border border-primary/10"
            />
          </div>
          
          <div className="space-y-6 order-1 lg:order-2">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <Card 
                  key={index} 
                  className="bg-background/50 backdrop-blur-sm border-primary/10 hover-elevate"
                  data-testid={`card-solution-${index}`}
                >
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{solution.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {solution.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
