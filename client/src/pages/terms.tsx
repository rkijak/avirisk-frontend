import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <main className="container mx-auto px-6 py-16 flex-1">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Terms of <span className="text-primary">Service</span>
          </h1>
          <p className="text-muted-foreground mb-8">
            Last updated: December 4, 2025
          </p>

          <Card className="bg-card/50 backdrop-blur-sm border-primary/10">
            <CardContent className="p-8 space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing or using AviRisk ("Service"), you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access the Service. AviRisk is operated by AviRisk Inc. ("we", "us", or "our").
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  AviRisk is a blockchain-powered aviation insurance platform currently in development. The Service provides:
                </p>
                <ul className="text-muted-foreground space-y-2 ml-6">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Information about our planned aviation insurance offerings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Account registration for early access</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Pilot profile creation and management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Educational content about MOSAIC 2.0 regulations and blockchain insurance</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">3. Account Registration</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To access certain features, you may register using third-party authentication providers (Google, GitHub). You are responsible for maintaining the confidentiality of your account and for all activities that occur under your account. You agree to provide accurate, current, and complete information during registration.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">4. User Conduct</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You agree not to:
                </p>
                <ul className="text-muted-foreground space-y-2 ml-6">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Provide false or misleading information about your pilot credentials or flight experience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Use the Service for any unlawful purpose</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Attempt to gain unauthorized access to any portion of the Service</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Interfere with or disrupt the Service or servers</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">5. Insurance Coverage Disclaimer</h2>
                <p className="text-muted-foreground leading-relaxed">
                  AviRisk is currently in development and does not currently provide active insurance coverage. Information presented on this platform is for informational purposes only and should not be construed as insurance advice. When our platform launches, coverage terms, conditions, and exclusions will be specified in individual policy documents. Always consult with a licensed insurance professional for coverage decisions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">6. Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The Service and its original content, features, and functionality are owned by AviRisk Inc. and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">7. Disclaimer of Warranties</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The Service is provided "as is" and "as available" without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">8. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  In no event shall AviRisk Inc., its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses arising from your use of the Service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">9. Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">10. Changes to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify these terms at any time. We will provide notice of significant changes by posting the new Terms of Service on this page with an updated revision date. Your continued use of the Service after any changes constitutes acceptance of those changes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">11. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have questions about these Terms, please contact us at{" "}
                  <a href="mailto:kijakrob@flyavirisk.com" className="text-primary hover:text-primary/80">
                    kijakrob@flyavirisk.com
                  </a>
                </p>
              </section>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
