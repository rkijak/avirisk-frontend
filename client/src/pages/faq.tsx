import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function FAQPage() {
  const faqs = [
    {
      question: "What is AviRisk?",
      answer: "AviRisk is a blockchain-powered aviation insurance platform built specifically for the MOSAIC 2.0 era. In partnership with Etherisc, we're bringing the first US implementation of the General Insurance Framework—using smart contracts, oracles, and real-time flight telemetry to deliver faster claims processing, transparent coverage, and fair usage-based pricing for modern pilots.",
    },
    {
      question: "How do I sign up? Do I need a special account?",
      answer: "No special account required! You can sign up using your existing Google or GitHub account. The sign-up process takes just seconds, and you'll have immediate access to your pilot dashboard where you can complete your profile with flight experience, certificates, and ratings needed for underwriting.",
    },
    {
      question: "Is the platform available now?",
      answer: "AviRisk is currently in preliminary development stages. We're building the infrastructure and regulatory framework needed to launch a compliant, secure platform. Create an account now to receive updates on our progress and get early access when we launch.",
    },
    {
      question: "How does usage-based pricing work?",
      answer: "You pay only when you fly—no annual minimums. Our smart contracts calculate premiums dynamically based on verified flight data including pilot experience, aircraft type, flight conditions, maintenance records, and safety metrics. The system adjusts pricing in real-time as risk factors change, ensuring truly fair, pay-as-you-fly coverage.",
    },
    {
      question: "What is MOSAIC 2.0 and why does it matter?",
      answer: "MOSAIC 2.0 is the FAA's modernization of sport pilot regulations, expanding access to larger, faster, and more capable aircraft for pilots who previously faced medical certification barriers. AviRisk was founded to serve this new generation of pilots—our founder is himself pursuing a sport pilot license under MOSAIC rules.",
    },
    {
      question: "How fast are claims actually processed?",
      answer: "Important clarification: AviRisk accelerates claims processing from weeks to days—not instant settlement. When an incident occurs, oracles verify flight data and smart contracts automatically initiate eligibility checks. This automation dramatically speeds up the reporting and verification process, but final adjudication still requires review to ensure accuracy and compliance.",
    },
    {
      question: "What role do oracles play?",
      answer: "Oracles are trusted data feeds that securely connect real-world information to our smart contracts. They verify pilot credentials, flight telemetry, weather conditions, maintenance logs, and incident reports—ensuring all policy and claims decisions are based on accurate, tamper-proof data from authoritative sources.",
    },
    {
      question: "Is my data secure on the blockchain?",
      answer: "Yes. All pilot, aircraft, and policy information is encrypted and stored on-chain with strict access controls. The decentralized architecture means there's no single point of failure, and all records are immutable and auditable. Your data is both secure and transparent—you control access while regulators can verify compliance.",
    },
    {
      question: "What is Etherisc and why partner with them?",
      answer: "Etherisc is the leading decentralized insurance platform, providing the proven blockchain infrastructure that powers AviRisk. Their General Insurance Framework enables transparent, automated insurance workflows and has secured millions in coverage globally. AviRisk is the first US implementation of their framework for aviation.",
    },
    {
      question: "What aircraft types will be covered?",
      answer: "We're focused on MOSAIC 2.0 compliant aircraft, including popular models across the light aircraft spectrum. Specific coverage details will be announced as we finalize partnerships with underwriters and complete regulatory approvals. Sign up for updates to stay informed.",
    },
    {
      question: "How can I invest in or partner with AviRisk?",
      answer: "We're actively seeking strategic investors and insurance partners who share our vision for modernizing aviation insurance. For investment opportunities or partnership inquiries, please contact our founder Robert Kijak directly at kijakrob@flyavirisk.com.",
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <main className="container mx-auto px-6 py-16 flex-1">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Frequently Asked <span className="text-primary">Questions</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about AviRisk aviation insurance.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card/50 backdrop-blur-sm border border-primary/10 rounded-lg px-6"
                data-testid={`accordion-item-${index}`}
              >
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">Still have questions?</p>
          <Link href="/contact">
            <Button size="lg" variant="outline" className="mr-4" data-testid="button-contact">
              Contact Us
            </Button>
          </Link>
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
