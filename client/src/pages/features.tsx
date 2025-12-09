import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Zap, TrendingDown, Lock, Users, Database, FileCheck, CheckCircle, AlertCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function FeaturesPage() {
  const features = [
    {
      icon: Database,
      title: "Trusted Aviation Data Integration",
      description: "Real-time aggregation of flight activity, pilot licensing, maintenance logs, and environmental conditions for accurate risk scoring and compliance.",
    },
    {
      icon: Zap,
      title: "Automated Claims Workflows",
      description: "Smart contracts automatically initiate claims when verified incidents occur, reducing processing time from weeks to days through automated eligibility checks.",
    },
    {
      icon: FileCheck,
      title: "Transparent, Auditable Process",
      description: "Every policy and claims decision is stored on-chain, providing complete traceable records for policyholders and regulators alike.",
    },
    {
      icon: TrendingDown,
      title: "Pay-As-You-Fly Premiums",
      description: "Dynamic pricing adapts to real-time risk metrics and pilot profiles, ensuring fair, usage-based coverage that reflects your actual flying.",
    },
    {
      icon: Lock,
      title: "Secure Data Storage & Updates",
      description: "All pilot, aircraft, and policy information securely stored in a unified database with records updated in seconds—no manual form entry required.",
    },
    {
      icon: Users,
      title: "Decentralized Oracle Network",
      description: "Industry-leading oracles verify pilot credentials, flight telemetry, weather conditions, and maintenance records for accurate, tamper-proof data.",
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <main className="container mx-auto px-6 py-16 flex-1">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Platform <span className="text-primary">Features</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Cutting-edge blockchain technology meets aviation insurance. Here's what makes AviRisk different.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="bg-card/50 backdrop-blur-sm border-primary/10 hover-elevate"
                data-testid={`card-feature-${index}`}
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-20 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              AviRisk vs <span className="text-muted-foreground">Legacy Insurers</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              See how blockchain technology transforms the insurance experience
            </p>
          </div>

          <Card className="bg-card/50 backdrop-blur-sm border-primary/10">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-primary/10">
                      <th className="text-left p-6 font-semibold">Feature</th>
                      <th className="text-center p-6 font-semibold text-primary">AviRisk</th>
                      <th className="text-center p-6 font-semibold text-muted-foreground">Traditional Carriers</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-primary/10">
                      <td className="p-6 font-medium">Claims Processing Time</td>
                      <td className="p-6 text-center">
                        <div className="flex items-center justify-center gap-2 text-primary">
                          <CheckCircle className="w-5 h-5" />
                          <span className="font-semibold">Days</span>
                        </div>
                      </td>
                      <td className="p-6 text-center text-muted-foreground">
                        <div className="flex items-center justify-center gap-2">
                          <AlertCircle className="w-5 h-5" />
                          <span>Weeks</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-primary/10">
                      <td className="p-6 font-medium">Transparency</td>
                      <td className="p-6 text-center">
                        <div className="flex items-center justify-center gap-2 text-primary">
                          <CheckCircle className="w-5 h-5" />
                          <span className="font-semibold">Full on-chain audit trail</span>
                        </div>
                      </td>
                      <td className="p-6 text-center text-muted-foreground">
                        <div className="flex items-center justify-center gap-2">
                          <AlertCircle className="w-5 h-5" />
                          <span>Black box processes</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-primary/10">
                      <td className="p-6 font-medium">Data Integration</td>
                      <td className="p-6 text-center">
                        <div className="flex items-center justify-center gap-2 text-primary">
                          <CheckCircle className="w-5 h-5" />
                          <span className="font-semibold">Real-time telemetry & oracles</span>
                        </div>
                      </td>
                      <td className="p-6 text-center text-muted-foreground">
                        <div className="flex items-center justify-center gap-2">
                          <AlertCircle className="w-5 h-5" />
                          <span>Manual reports & paperwork</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-primary/10">
                      <td className="p-6 font-medium">Pricing Model</td>
                      <td className="p-6 text-center">
                        <div className="flex items-center justify-center gap-2 text-primary">
                          <CheckCircle className="w-5 h-5" />
                          <span className="font-semibold">Pay-as-you-fly, usage-based</span>
                        </div>
                      </td>
                      <td className="p-6 text-center text-muted-foreground">
                        <div className="flex items-center justify-center gap-2">
                          <AlertCircle className="w-5 h-5" />
                          <span>Fixed annual premiums</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-primary/10">
                      <td className="p-6 font-medium">Policy Updates</td>
                      <td className="p-6 text-center">
                        <div className="flex items-center justify-center gap-2 text-primary">
                          <CheckCircle className="w-5 h-5" />
                          <span className="font-semibold">Instant via smart contract</span>
                        </div>
                      </td>
                      <td className="p-6 text-center text-muted-foreground">
                        <div className="flex items-center justify-center gap-2">
                          <AlertCircle className="w-5 h-5" />
                          <span>Days of paperwork</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-6 font-medium">Data Security</td>
                      <td className="p-6 text-center">
                        <div className="flex items-center justify-center gap-2 text-primary">
                          <CheckCircle className="w-5 h-5" />
                          <span className="font-semibold">Decentralized & encrypted</span>
                        </div>
                      </td>
                      <td className="p-6 text-center text-muted-foreground">
                        <div className="flex items-center justify-center gap-2">
                          <AlertCircle className="w-5 h-5" />
                          <span>Centralized databases</span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-20 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Platform <span className="text-primary">Preview</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              A glimpse into the AviRisk decentralized insurance platform (in development)
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card/50 backdrop-blur-sm border-primary/10">
              <CardHeader>
                <CardTitle>Smart Contract Dashboard</CardTitle>
                <CardDescription>View and manage your tokenized policies in real-time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-background/80 rounded-lg p-6 border border-primary/20">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Policy ID</span>
                      <span className="font-mono text-sm text-primary">0x7f8e...a3c9</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Coverage Status</span>
                      <span className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                        Active
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Flight Hours (Month)</span>
                      <span className="font-semibold">12.3 hrs</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Current Premium</span>
                      <span className="font-semibold text-primary">$184.50</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-primary/10">
              <CardHeader>
                <CardTitle>Oracle Data Verification</CardTitle>
                <CardDescription>Real-time flight data integrated from trusted sources</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-background/80 rounded-lg p-6 border border-primary/20">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Flight Telemetry</span>
                      <span className="flex items-center gap-2 text-sm text-primary">
                        <CheckCircle className="w-4 h-4" />
                        Verified
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Pilot Credentials</span>
                      <span className="flex items-center gap-2 text-sm text-primary">
                        <CheckCircle className="w-4 h-4" />
                        Verified
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Weather Data</span>
                      <span className="flex items-center gap-2 text-sm text-primary">
                        <CheckCircle className="w-4 h-4" />
                        Real-time
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Maintenance Logs</span>
                      <span className="flex items-center gap-2 text-sm text-primary">
                        <CheckCircle className="w-4 h-4" />
                        Current
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8">
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4 text-center">How Claims Processing Works</h3>
                <div className="grid md:grid-cols-4 gap-6 mt-6">
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                      <span className="text-primary font-bold">1</span>
                    </div>
                    <h4 className="font-semibold mb-2">Incident Occurs</h4>
                    <p className="text-sm text-muted-foreground">Event detected via oracle data or pilot report</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                      <span className="text-primary font-bold">2</span>
                    </div>
                    <h4 className="font-semibold mb-2">Auto Verification</h4>
                    <p className="text-sm text-muted-foreground">Smart contract verifies policy & event details</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                      <span className="text-primary font-bold">3</span>
                    </div>
                    <h4 className="font-semibold mb-2">Eligibility Check</h4>
                    <p className="text-sm text-muted-foreground">Automated review reduces processing time</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                      <span className="text-primary font-bold">4</span>
                    </div>
                    <h4 className="font-semibold mb-2">Days, Not Weeks</h4>
                    <p className="text-sm text-muted-foreground">Adjudication completed in days vs weeks</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">Ready to experience the future of aviation insurance?</p>
          <Link href="/">
            <Button size="lg" className="shadow-lg shadow-primary/30" data-testid="button-get-started">
              Get Started
            </Button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
