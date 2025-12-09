import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  Users, 
  Smartphone,
  DollarSign,
  Shield,
  TrendingUp,
  ArrowRight,
  ArrowDown,
  Zap,
  Database,
  FileCheck
} from "lucide-react";
import { motion } from "framer-motion";

export default function PoolFlowDiagram() {
  return (
    <div className="w-full space-y-8">
      <div className="text-center space-y-2 mb-8">
        <h3 className="text-2xl font-bold" data-testid="heading-ecosystem-flow">
          How the AviRisk Ecosystem Works
        </h3>
        <p className="text-muted-foreground max-w-2xl mx-auto" data-testid="text-ecosystem-description">
          A complete insurance ecosystem powered by blockchain technology and smart contracts
        </p>
      </div>

      {/* Main Flow Diagram */}
      <div className="relative">
        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-3 gap-8 relative">
            {/* Column 1: Insurers/Investors */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <Card className="p-6 border-primary/20 bg-gradient-to-br from-primary/10 to-primary/5" data-testid="card-insurers-section">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-full bg-primary/20">
                      <Building2 className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Insurers & Investors</h4>
                      <Badge variant="secondary" className="text-xs">Capital Providers</Badge>
                    </div>
                  </div>
                  
                  <div className="space-y-3 pt-2">
                    <div className="flex items-start gap-2">
                      <DollarSign className="w-4 h-4 text-primary mt-0.5" />
                      <div className="text-sm">
                        <p className="font-medium">Fund Risk Pools</p>
                        <p className="text-xs text-muted-foreground">Commit capital to specific coverage categories</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Database className="w-4 h-4 text-primary mt-0.5" />
                      <div className="text-sm">
                        <p className="font-medium">Choose Pool Types</p>
                        <p className="text-xs text-muted-foreground">Sport pilots, students, commercial</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <TrendingUp className="w-4 h-4 text-primary mt-0.5" />
                      <div className="text-sm">
                        <p className="font-medium">Earn Returns</p>
                        <p className="text-xs text-muted-foreground">8-18% APY from premiums & yields</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Arrow pointing right */}
              <div className="hidden lg:flex justify-end pr-8">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  className="flex items-center gap-2 text-primary"
                >
                  <span className="text-sm font-medium">Creates Pool</span>
                  <ArrowRight className="w-5 h-5 animate-pulse" />
                </motion.div>
              </div>
            </motion.div>

            {/* Column 2: Smart Contract Platform */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <Card className="p-6 border-2 border-primary shadow-lg relative overflow-hidden" data-testid="card-platform-section">
                <div className="absolute top-0 right-0 p-2">
                  <Badge className="bg-primary text-primary-foreground">
                    Etherisc Powered
                  </Badge>
                </div>
                
                <div className="space-y-4 mt-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-full bg-primary">
                      <Shield className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">AviRisk Platform</h4>
                      <Badge variant="outline" className="text-xs">Smart Contract Engine</Badge>
                    </div>
                  </div>
                  
                  <div className="space-y-3 pt-2">
                    <div className="flex items-start gap-2">
                      <Database className="w-4 h-4 text-primary mt-0.5" />
                      <div className="text-sm">
                        <p className="font-medium">Manage Pools</p>
                        <p className="text-xs text-muted-foreground">Automated smart contract governance</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Zap className="w-4 h-4 text-primary mt-0.5" />
                      <div className="text-sm">
                        <p className="font-medium">Process Claims</p>
                        <p className="text-xs text-muted-foreground">Oracle-verified, fast settlement</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <FileCheck className="w-4 h-4 text-primary mt-0.5" />
                      <div className="text-sm">
                        <p className="font-medium">Issue Policies</p>
                        <p className="text-xs text-muted-foreground">Instant, blockchain-verified coverage</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-primary/20">
                    <p className="text-xs text-center text-muted-foreground">
                      Powered by Etherisc's General Insurance Framework
                    </p>
                  </div>
                </div>
              </Card>

              {/* Bidirectional arrows */}
              <div className="hidden lg:flex justify-between px-8">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                  className="flex items-center gap-2 text-primary"
                >
                  <ArrowRight className="w-5 h-5 animate-pulse rotate-180" />
                  <span className="text-sm font-medium">Returns</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                  className="flex items-center gap-2 text-primary"
                >
                  <span className="text-sm font-medium">Premiums</span>
                  <ArrowRight className="w-5 h-5 animate-pulse" />
                </motion.div>
              </div>
            </motion.div>

            {/* Column 3: Pilots */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4"
            >
              <Card className="p-6 border-primary/20 bg-gradient-to-br from-primary/10 to-primary/5" data-testid="card-pilots-section">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-full bg-primary/20">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Pilots</h4>
                      <Badge variant="secondary" className="text-xs">Coverage Buyers</Badge>
                    </div>
                  </div>
                  
                  <div className="space-y-3 pt-2">
                    <div className="flex items-start gap-2">
                      <Smartphone className="w-4 h-4 text-primary mt-0.5" />
                      <div className="text-sm">
                        <p className="font-medium">Mobile App Access</p>
                        <p className="text-xs text-muted-foreground">Purchase & manage coverage instantly</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <DollarSign className="w-4 h-4 text-primary mt-0.5" />
                      <div className="text-sm">
                        <p className="font-medium">Pay-As-You-Fly</p>
                        <p className="text-xs text-muted-foreground">Usage-based premiums, no minimums</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Zap className="w-4 h-4 text-primary mt-0.5" />
                      <div className="text-sm">
                        <p className="font-medium">Fast Claims</p>
                        <p className="text-xs text-muted-foreground">Streamlined processing & payment</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Arrow pointing left */}
              <div className="hidden lg:flex justify-start pl-8">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.4 }}
                  className="flex items-center gap-2 text-primary"
                >
                  <ArrowRight className="w-5 h-5 animate-pulse rotate-180" />
                  <span className="text-sm font-medium">Buys Coverage</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden space-y-6">
          {/* Insurers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-6 border-primary/20 bg-gradient-to-br from-primary/10 to-primary/5">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-full bg-primary/20">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Insurers & Investors</h4>
                    <Badge variant="secondary" className="text-xs">Capital Providers</Badge>
                  </div>
                </div>
                
                <div className="space-y-2 pt-2">
                  <p className="text-sm">• Fund risk pools</p>
                  <p className="text-sm">• Choose coverage types</p>
                  <p className="text-sm">• Earn 8-18% APY returns</p>
                </div>
              </div>
            </Card>
          </motion.div>

          <div className="flex justify-center">
            <ArrowDown className="w-6 h-6 text-primary animate-bounce" />
          </div>

          {/* Platform */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-6 border-2 border-primary shadow-lg relative">
              <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs">
                Etherisc
              </Badge>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-full bg-primary">
                    <Shield className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">AviRisk Platform</h4>
                    <Badge variant="outline" className="text-xs">Smart Contracts</Badge>
                  </div>
                </div>
                
                <div className="space-y-2 pt-2">
                  <p className="text-sm">• Manages insurance pools</p>
                  <p className="text-sm">• Processes claims automatically</p>
                  <p className="text-sm">• Issues instant policies</p>
                </div>
              </div>
            </Card>
          </motion.div>

          <div className="flex justify-center">
            <ArrowDown className="w-6 h-6 text-primary animate-bounce" />
          </div>

          {/* Pilots */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="p-6 border-primary/20 bg-gradient-to-br from-primary/10 to-primary/5">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-full bg-primary/20">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Pilots</h4>
                    <Badge variant="secondary" className="text-xs">Coverage Buyers</Badge>
                  </div>
                </div>
                
                <div className="space-y-2 pt-2">
                  <p className="text-sm">• Access via mobile app</p>
                  <p className="text-sm">• Pay-as-you-fly pricing</p>
                  <p className="text-sm">• Fast claims processing</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="text-center pt-6">
        <p className="text-sm text-muted-foreground" data-testid="text-learn-more">
          Learn more about the Etherisc insurance framework at{" "}
          <a 
            href="https://etherisc.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:underline"
            data-testid="link-etherisc"
          >
            etherisc.com
          </a>
        </p>
      </div>
    </div>
  );
}