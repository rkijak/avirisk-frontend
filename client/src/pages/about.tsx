import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Target, Users, Zap } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <main className="container mx-auto px-6 py-16 flex-1">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="text-primary">AviRisk</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Revolutionizing aviation insurance for the modern era.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          <Card className="bg-card/50 backdrop-blur-sm border-primary/10">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  AviRisk was born from a firsthand understanding of the aviation insurance industry's limitations. While working at an aviation brokerage, our founder identified a critical gap: outdated insurance systems that couldn't keep pace with modern regulations and the evolving needs of pilots.
                </p>
                <p>
                  The introduction of MOSAIC 2.0 changed everything. This landmark FAA regulation opened the door for pilots who previously faced medical barriers—like our founder—to finally pursue their dream of flying. MOSAIC 2.0 expanded the types of aircraft accessible to sport pilots and removed restrictions that had limited aspiring aviators for years.
                </p>
                <p>
                  But there was a problem: traditional insurance companies hadn't adapted. Their pricing models, claims processes, and rigid structures were built for a different era. We saw an opportunity to create something better—a platform that would serve the modern pilot with the efficiency, transparency, and fairness they deserve.
                </p>
                <p>
                  Leveraging blockchain technology, smart contracts, and real-world flight data, AviRisk is building the insurance platform that the aviation industry needs for the MOSAIC era and beyond.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-primary/10">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6">Leadership</h2>
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-2xl font-semibold mb-1">Robert Kijak</h3>
                    <p className="text-primary font-medium mb-4">Founder & CEO</p>
                  </div>
                  <div className="space-y-3 text-muted-foreground leading-relaxed">
                    <p>
                      Robert brings 9 years of combined experience in insurance and aviation to AviRisk. With 6 years in the insurance industry and 3 years specializing in aviation brokerage, he has deep insight into the challenges facing both pilots and insurers in today's market.
                    </p>
                    <p>
                      Currently pursuing his sport pilot license under the new MOSAIC regulations, Robert is not just building AviRisk for pilots—he is one. His personal journey mirrors that of thousands of aspiring aviators who were previously limited by medical requirements and outdated insurance frameworks.
                    </p>
                    <p>
                      "MOSAIC 2.0 didn't just expand what aircraft I could fly—it fundamentally changed what's possible for an entire generation of pilots. AviRisk exists to ensure the insurance industry evolves with these opportunities."
                    </p>
                  </div>
                  <div className="pt-4">
                    <a 
                      href="https://www.linkedin.com/in/robert-kijak/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors font-medium"
                    >
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6">Partnership with Etherisc</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  AviRisk is proud to partner with <span className="text-foreground font-semibold">Etherisc</span>, the leading decentralized platform for the future of insurance. This collaboration marks a significant milestone as we bring the Etherisc General Insurance Framework to the United States for the first time.
                </p>
                <p>
                  Etherisc's proven blockchain infrastructure powers our smart contract architecture, enabling transparent, efficient, and automated insurance workflows. Their expertise in decentralized insurance, combined with our deep aviation industry knowledge, creates a powerful foundation for modernizing flight risk coverage.
                </p>
                <div className="bg-background/50 rounded-lg p-6 mt-6">
                  <h3 className="font-semibold text-lg mb-3 text-foreground">Why Etherisc?</h3>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1.5">•</span>
                      <span>Industry-leading decentralized insurance framework</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1.5">•</span>
                      <span>Proven smart contract technology securing millions in coverage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1.5">•</span>
                      <span>Transparent, auditable, and regulatory-compliant infrastructure</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1.5">•</span>
                      <span>First US implementation of their General Insurance Framework</span>
                    </li>
                  </ul>
                </div>
                <p className="pt-4">
                  Learn more about Etherisc at <a href="https://etherisc.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors font-medium">etherisc.com</a>
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card/50 backdrop-blur-sm border-primary/10 hover-elevate">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Our Mission</h3>
                <p className="text-sm text-muted-foreground">
                  To provide transparent, efficient, and fair aviation insurance using blockchain technology.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-primary/10 hover-elevate">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Our Technology</h3>
                <p className="text-sm text-muted-foreground">
                  Smart contracts, tokenized risk pools, and blockchain verification for 10x efficiency.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-primary/10 hover-elevate">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Our Community</h3>
                <p className="text-sm text-muted-foreground">
                  Building the future of aviation insurance with the growing sport pilot community under MOSAIC 2.0.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-center">Why Blockchain?</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Blockchain technology isn't just a buzzword for us—it's the foundation that enables everything we do:
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1.5">•</span>
                    <span><strong className="text-foreground">Transparency:</strong> All policy terms are encoded in smart contracts—no hidden clauses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1.5">•</span>
                    <span><strong className="text-foreground">Efficiency:</strong> Automated processes reduce overhead by 40%, savings we pass to you</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1.5">•</span>
                    <span><strong className="text-foreground">Speed:</strong> 10x faster claims reporting and verification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1.5">•</span>
                    <span><strong className="text-foreground">Security:</strong> Distributed, encrypted data that's virtually unhackable</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <p className="text-muted-foreground mb-6">Join us in building the future of aviation insurance</p>
            <Link href="/">
              <Button size="lg" className="shadow-lg shadow-primary/30" data-testid="button-join">
                Sign Up Now
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
