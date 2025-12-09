import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Cpu, 
  Shield, 
  Plane, 
  FileText, 
  ExternalLink,
  CheckCircle,
  Zap,
  Clock,
  Users,
  Scale,
  Globe,
  BookOpen,
  Award,
  TrendingUp
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function LearnPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <main className="flex-1">
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">
                <BookOpen className="w-3 h-3 mr-1" />
                Education Center
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Learn About <span className="text-primary">AviRisk</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Understand how we're revolutionizing aviation insurance using AI, blockchain technology, and the opportunities created by MOSAIC 2.0.
              </p>
            </div>

            <Tabs defaultValue="technology" className="max-w-5xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
                <TabsTrigger value="technology" data-testid="tab-technology">
                  <Cpu className="w-4 h-4 mr-2" />
                  Technology
                </TabsTrigger>
                <TabsTrigger value="etherisc" data-testid="tab-etherisc">
                  <Shield className="w-4 h-4 mr-2" />
                  Etherisc
                </TabsTrigger>
                <TabsTrigger value="mosaic" data-testid="tab-mosaic">
                  <Plane className="w-4 h-4 mr-2" />
                  MOSAIC 2.0
                </TabsTrigger>
                <TabsTrigger value="resources" data-testid="tab-resources">
                  <FileText className="w-4 h-4 mr-2" />
                  Resources
                </TabsTrigger>
              </TabsList>

              <TabsContent value="technology" className="space-y-8">
                <Card className="bg-card/50 backdrop-blur-sm border-primary/10">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Cpu className="w-6 h-6 text-primary" />
                      How AI & Blockchain Power AviRisk
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold flex items-center gap-2">
                          <Zap className="w-5 h-5 text-primary" />
                          AI-Powered Risk Assessment
                        </h3>
                        <p className="text-muted-foreground">
                          Our AI analyzes flight telemetry data, weather patterns, pilot experience, and historical safety records to provide accurate, personalized risk assessments in real-time.
                        </p>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                            <span>Real-time flight data analysis from connected avionics</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                            <span>Weather pattern correlation with flight routes</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                            <span>Pilot behavior scoring based on safe flying practices</span>
                          </li>
                        </ul>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold flex items-center gap-2">
                          <Shield className="w-5 h-5 text-primary" />
                          Blockchain-Secured Policies
                        </h3>
                        <p className="text-muted-foreground">
                          Smart contracts on the blockchain ensure transparent, tamper-proof policy management and automated claims processing without intermediaries.
                        </p>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                            <span>Immutable policy records and claims history</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                            <span>Automated claims triggering via oracle data feeds</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                            <span>Transparent pricing with no hidden fees</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-primary/5 rounded-lg p-6 border border-primary/10">
                      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <Clock className="w-5 h-5 text-primary" />
                        The Claims Process: Days, Not Weeks
                      </h3>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="text-center p-4 bg-background/50 rounded-lg">
                          <div className="text-2xl font-bold text-primary mb-1">1</div>
                          <div className="text-sm font-medium">Incident Reported</div>
                          <div className="text-xs text-muted-foreground">Pilot submits claim via app</div>
                        </div>
                        <div className="text-center p-4 bg-background/50 rounded-lg">
                          <div className="text-2xl font-bold text-primary mb-1">2</div>
                          <div className="text-sm font-medium">Oracle Verification</div>
                          <div className="text-xs text-muted-foreground">Flight data verified automatically</div>
                        </div>
                        <div className="text-center p-4 bg-background/50 rounded-lg">
                          <div className="text-2xl font-bold text-primary mb-1">3</div>
                          <div className="text-sm font-medium">Smart Contract Payout</div>
                          <div className="text-xs text-muted-foreground">Funds released automatically</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="etherisc" className="space-y-8">
                <Card className="bg-card/50 backdrop-blur-sm border-primary/10">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="w-6 h-6 text-primary" />
                      Our Partnership with Etherisc
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-6 border border-primary/20">
                      <div className="flex flex-col md:flex-row items-start gap-6">
                        <div className="w-20 h-20 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0">
                          <Shield className="w-10 h-10 text-primary" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-xl font-bold">Etherisc</h3>
                            <Badge variant="secondary">Official Technology Partner</Badge>
                          </div>
                          <p className="text-muted-foreground mb-4">
                            AviRisk is the <strong>first US implementation</strong> of Etherisc's General Insurance Framework (GIF) for aviation. 
                            Etherisc is a pioneer in decentralized insurance, providing battle-tested blockchain infrastructure for transparent, 
                            efficient insurance products.
                          </p>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => window.open('https://etherisc.com', '_blank')}
                            data-testid="button-etherisc-website"
                          >
                            Visit Etherisc
                            <ExternalLink className="w-4 h-4 ml-2" />
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold">What Etherisc Provides</h3>
                        <ul className="space-y-3 text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                            <span><strong>Smart Contract Framework:</strong> Proven, audited contracts for policy management</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                            <span><strong>Oracle Integration:</strong> Secure data feeds for claims verification</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                            <span><strong>Tokenized Risk Pools:</strong> Efficient capital allocation for underwriters</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                            <span><strong>Regulatory Compliance:</strong> Framework designed for real-world insurance regulations</span>
                          </li>
                        </ul>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Etherisc Track Record</h3>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-background/50 rounded-lg p-4 text-center border border-primary/10">
                            <div className="text-2xl font-bold text-primary">$50M+</div>
                            <div className="text-sm text-muted-foreground">Secured Globally</div>
                          </div>
                          <div className="bg-background/50 rounded-lg p-4 text-center border border-primary/10">
                            <div className="text-2xl font-bold text-primary">15+</div>
                            <div className="text-sm text-muted-foreground">Countries</div>
                          </div>
                          <div className="bg-background/50 rounded-lg p-4 text-center border border-primary/10">
                            <div className="text-2xl font-bold text-primary">100K+</div>
                            <div className="text-sm text-muted-foreground">Policies Issued</div>
                          </div>
                          <div className="bg-background/50 rounded-lg p-4 text-center border border-primary/10">
                            <div className="text-2xl font-bold text-primary">Zero</div>
                            <div className="text-sm text-muted-foreground">Security Breaches</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="mosaic" className="space-y-8">
                <Card className="bg-card/50 backdrop-blur-sm border-primary/10">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Plane className="w-6 h-6 text-primary" />
                      Understanding MOSAIC 2.0
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="bg-primary/5 rounded-lg p-6 border border-primary/10">
                      <Badge className="mb-4">FAA Final Rule - July 2025</Badge>
                      <h3 className="text-xl font-bold mb-2">
                        Modernization of Special Airworthiness Certification (MOSAIC)
                      </h3>
                      <p className="text-muted-foreground">
                        MOSAIC represents the biggest transformation to recreational aviation in over 20 years. 
                        This landmark FAA rule dramatically expands what aircraft sport pilots can fly and creates 
                        new opportunities for the entire general aviation industry.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold flex items-center gap-2">
                          <TrendingUp className="w-5 h-5 text-primary" />
                          Key Changes for Sport Pilots
                        </h3>
                        <ul className="space-y-3 text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                            <span><strong>No Weight Limit:</strong> Stall speed (59 knots) replaces 1,320 lb max weight</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                            <span><strong>4-Seat Aircraft:</strong> Sport pilots can fly 4-seat planes (1 passenger limit remains)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                            <span><strong>Higher Speed:</strong> Max speed increased from 120 to 250 KCAS</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                            <span><strong>Retractable Gear:</strong> With proper endorsements</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                            <span><strong>Night Flying:</strong> Available with additional training</span>
                          </li>
                        </ul>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold flex items-center gap-2">
                          <Award className="w-5 h-5 text-primary" />
                          Aircraft Now Accessible
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          Approximately <strong>75% of the general aviation fleet</strong> becomes accessible to sport pilots, including popular models:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary">Cessna 150/152</Badge>
                          <Badge variant="secondary">Cessna 172</Badge>
                          <Badge variant="secondary">Cessna 182</Badge>
                          <Badge variant="secondary">Piper Cherokee</Badge>
                          <Badge variant="secondary">Piper Archer</Badge>
                          <Badge variant="secondary">Many More</Badge>
                        </div>
                      </div>
                    </div>

                    <div className="bg-background/50 rounded-lg p-6 border border-primary/10">
                      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <Scale className="w-5 h-5 text-primary" />
                        Why This Matters for Insurance
                      </h3>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="p-4 bg-primary/5 rounded-lg">
                          <Users className="w-6 h-6 text-primary mb-2" />
                          <h4 className="font-semibold mb-1">Growing Pilot Pool</h4>
                          <p className="text-sm text-muted-foreground">More pilots flying more aircraft means increased demand for flexible insurance</p>
                        </div>
                        <div className="p-4 bg-primary/5 rounded-lg">
                          <Globe className="w-6 h-6 text-primary mb-2" />
                          <h4 className="font-semibold mb-1">New Aircraft Types</h4>
                          <p className="text-sm text-muted-foreground">Electric and advanced LSAs need modern, data-driven coverage options</p>
                        </div>
                        <div className="p-4 bg-primary/5 rounded-lg">
                          <Zap className="w-6 h-6 text-primary mb-2" />
                          <h4 className="font-semibold mb-1">Fair Pricing Need</h4>
                          <p className="text-sm text-muted-foreground">Usage-based insurance that rewards safe pilots becomes essential</p>
                        </div>
                      </div>
                    </div>

                    <div className="text-center pt-4">
                      <Button 
                        variant="outline"
                        onClick={() => window.open('https://www.faa.gov/newsroom/us-transportation-secretary-sean-p-duffy-announces-improvements-recreational-aviation', '_blank')}
                        data-testid="button-faa-mosaic"
                      >
                        Read FAA MOSAIC Announcement
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="resources" className="space-y-8">
                <Card className="bg-card/50 backdrop-blur-sm border-primary/10">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="w-6 h-6 text-primary" />
                      Pilot Resources
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground">
                      Essential resources to help you understand aviation insurance and the changing regulatory landscape.
                    </p>

                    <div className="grid md:grid-cols-2 gap-4">
                      <a 
                        href="https://www.eaa.org/eaa/advocacy/top-issues/mosaic-aircraft-certificate"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                        data-testid="link-eaa-mosaic"
                      >
                        <Card className="h-full hover-elevate border-primary/10">
                          <CardContent className="p-6">
                            <div className="flex items-start gap-4">
                              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                <Plane className="w-6 h-6 text-primary" />
                              </div>
                              <div>
                                <h4 className="font-semibold mb-1">EAA MOSAIC Guide</h4>
                                <p className="text-sm text-muted-foreground">Comprehensive overview of MOSAIC from the Experimental Aircraft Association</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </a>

                      <a 
                        href="https://www.aopa.org/news-and-media/all-news/2025/august/14/mosaic-explained-faq"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                        data-testid="link-aopa-faq"
                      >
                        <Card className="h-full hover-elevate border-primary/10">
                          <CardContent className="p-6">
                            <div className="flex items-start gap-4">
                              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                <BookOpen className="w-6 h-6 text-primary" />
                              </div>
                              <div>
                                <h4 className="font-semibold mb-1">AOPA MOSAIC FAQ</h4>
                                <p className="text-sm text-muted-foreground">Frequently asked questions about MOSAIC from AOPA</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </a>

                      <a 
                        href="https://etherisc.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                        data-testid="link-etherisc-home"
                      >
                        <Card className="h-full hover-elevate border-primary/10">
                          <CardContent className="p-6">
                            <div className="flex items-start gap-4">
                              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                <Shield className="w-6 h-6 text-primary" />
                              </div>
                              <div>
                                <h4 className="font-semibold mb-1">Etherisc Protocol</h4>
                                <p className="text-sm text-muted-foreground">Learn about decentralized insurance infrastructure</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </a>

                      <a 
                        href="https://www.faa.gov/licenses_certificates/airmen_certification/sport_pilot"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                        data-testid="link-faa-sport-pilot"
                      >
                        <Card className="h-full hover-elevate border-primary/10">
                          <CardContent className="p-6">
                            <div className="flex items-start gap-4">
                              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                <Award className="w-6 h-6 text-primary" />
                              </div>
                              <div>
                                <h4 className="font-semibold mb-1">FAA Sport Pilot Info</h4>
                                <p className="text-sm text-muted-foreground">Official FAA sport pilot certification information</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </a>
                    </div>

                    <div className="bg-primary/5 rounded-lg p-6 border border-primary/10 mt-6">
                      <h3 className="font-semibold mb-2">Getting Started with AviRisk</h3>
                      <p className="text-muted-foreground mb-4">
                        Ready to experience modern aviation insurance? Create your account to get started with personalized coverage.
                      </p>
                      <Button 
                        onClick={() => window.location.href = '/api/login'}
                        data-testid="button-get-started-learn"
                      >
                        Create Your Account
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
