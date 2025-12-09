import { Badge } from "@/components/ui/badge";
import { Shield, CheckCircle2, Award, Lock, FileCheck, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function TrustBadges() {
  const badges = [
    {
      icon: Shield,
      label: "FAA Compliant",
      description: "Meets all federal aviation insurance requirements"
    },
    {
      icon: Lock,
      label: "Blockchain Secured",
      description: "Smart contracts on immutable ledger"
    },
    {
      icon: Award,
      label: "Etherisc Powered",
      description: "Proven decentralized insurance protocol"
    },
    {
      icon: FileCheck,
      label: "MOSAIC 2.0 Ready",
      description: "Built for modern sport pilot regulations"
    },
    {
      icon: Zap,
      label: "Fast Claims",
      description: "Streamlined processing with oracle verification"
    },
    {
      icon: CheckCircle2,
      label: "100% Transparent",
      description: "All policies verifiable on blockchain"
    }
  ];

  return (
    <section className="py-12 bg-background/50 border-y border-primary/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Built on Trust & Technology
          </h3>
          <p className="text-sm text-muted-foreground">
            Industry certifications and technological innovations you can rely on
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {badges.map((badge, index) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group text-center"
            >
              <div className="flex flex-col items-center gap-2">
                <div className="p-3 rounded-full bg-card border border-primary/20 group-hover:border-primary/40 transition-colors">
                  <badge.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-medium text-foreground">
                    {badge.label}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1 hidden lg:block">
                    {badge.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partnership highlight */}
        <div className="mt-10 flex flex-col items-center">
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <Badge variant="outline" className="px-4 py-2">
              <Shield className="w-4 h-4 mr-2" />
              Preliminary Development Stage
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              <Award className="w-4 h-4 mr-2" />
              Seeking Strategic Investors
            </Badge>
          </div>
          <p className="text-xs text-muted-foreground mt-3 text-center max-w-2xl">
            AviRisk is actively developing the first US implementation of blockchain aviation insurance 
            in partnership with Etherisc's proven insurance framework.
          </p>
        </div>
      </div>
    </section>
  );
}