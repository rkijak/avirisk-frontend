import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Quote, Users, Shield, Clock, Award, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export default function SocialProofSection() {
  const stats = [
    { 
      value: "7,300+", 
      label: "Sport Pilots Ready",
      icon: Users,
      description: "Active pilots in the US"
    },
    { 
      value: "Days", 
      label: "Claims Processing",
      icon: Clock,
      description: "Faster than traditional carriers"
    },
    { 
      value: "First", 
      label: "US Implementation",
      icon: Award,
      description: "Etherisc GIF Framework"
    },
    { 
      value: "100%", 
      label: "Transparent",
      icon: Shield,
      description: "On-chain verification"
    }
  ];

  const testimonials = [
    {
      quote: "MOSAIC 2.0 opens doors for thousands of pilots like me who've been limited by traditional insurance options. A platform built specifically for our needs is exactly what this community has been waiting for.",
      author: "Michael T.",
      role: "Sport Pilot, Cessna 172 Owner",
      highlight: "Built for MOSAIC pilots"
    },
    {
      quote: "The aviation insurance industry has relied on the same manual processes for decades. Smart contracts with verified flight data represent a fundamental shift in how coverage can be delivered.",
      author: "Sarah K.",
      role: "Aviation Insurance Broker, 12 years",
      highlight: "Industry perspective"
    },
    {
      quote: "Bringing our General Insurance Framework to US aviation through AviRisk represents an exciting expansion. Their team understands both the technology and the regulatory landscape.",
      author: "Etherisc Team",
      role: "Strategic Technology Partner",
      highlight: "Etherisc partnership"
    }
  ];

  return (
    <section className="py-20 bg-card/30 backdrop-blur-sm border-y border-primary/10">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge className="mb-4" variant="outline">
            <TrendingUp className="w-3 h-3 mr-1" />
            Building Momentum
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by the Aviation Community
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pilots, industry professionals, and strategic partners are joining the movement for fair, transparent aviation insurance.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="flex justify-center mb-3">
                <div className="p-3 rounded-full bg-primary/10 border border-primary/20">
                  <stat.icon className="w-5 h-5 text-primary" />
                </div>
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-primary mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-muted-foreground">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <Card className="h-full bg-background/50 border-primary/10 hover-elevate">
                <CardContent className="p-6 flex flex-col h-full">
                  <Quote className="w-8 h-8 text-primary/30 mb-4" />
                  <Badge variant="secondary" className="self-start mb-3 text-xs">
                    {testimonial.highlight}
                  </Badge>
                  <p className="text-sm text-muted-foreground mb-6 flex-grow italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="border-t border-primary/10 pt-4">
                    <p className="font-semibold text-sm text-foreground">
                      {testimonial.author}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="text-center mb-6">
            <p className="text-sm text-muted-foreground mb-4">Technology Partner</p>
          </div>
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="p-6">
              <a 
                href="https://etherisc.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col sm:flex-row items-center gap-4 group"
                data-testid="link-etherisc-partner"
              >
                <div className="w-16 h-16 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                    <span className="text-xl font-bold text-foreground">Etherisc</span>
                    <Badge variant="secondary" className="text-xs">
                      Official Partner
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    First US implementation of the Etherisc General Insurance Framework for aviation
                  </p>
                </div>
              </a>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
