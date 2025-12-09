import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, FileText, DollarSign } from "lucide-react";

const problems = [
  {
    icon: DollarSign,
    title: "Slow & Expensive",
    description: "Old insurance is slow and expensive, with outdated processes that don't fit modern flying.",
  },
  {
    icon: FileText,
    title: "Rigid Pricing Models",
    description: "Traditional carriers use broad categories that don't reflect your individual experience, safety record, or how you actually fly.",
  },
  {
    icon: Clock,
    title: "Too Much Paperwork",
    description: "Getting coverage takes weeks of paperwork and back-and-forth with agents.",
  },
];

export default function ProblemSection() {
  return (
    <section id="problem-section" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">The Problem</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            New FAA rules mean more pilots can fly bigger, faster planes - but insurance hasn't caught up yet.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <Card 
                key={index} 
                className="bg-card/50 backdrop-blur-sm border-primary/10 hover-elevate"
                data-testid={`card-problem-${index}`}
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{problem.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {problem.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
