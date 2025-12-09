import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <main className="container mx-auto px-6 py-16 flex-1">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Privacy <span className="text-primary">Policy</span>
          </h1>
          <p className="text-muted-foreground mb-8">
            Last updated: December 4, 2025
          </p>

          <Card className="bg-card/50 backdrop-blur-sm border-primary/10">
            <CardContent className="p-8 space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  AviRisk Inc. ("we", "us", or "our") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We collect information that you provide directly to us, including:
                </p>
                <ul className="text-muted-foreground space-y-2 ml-6">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span><strong>Account Information:</strong> Name, email address, and profile picture from OAuth providers (Google, GitHub)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span><strong>Pilot Profile Data:</strong> Flight experience, certificates, ratings, medical information, and other underwriting-related data you choose to provide</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span><strong>Contact Information:</strong> Email, phone number, and address for account registration and inquiries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span><strong>Usage Data:</strong> Information about how you interact with our website and services</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="text-muted-foreground space-y-2 ml-6">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Create and manage your account</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Process account registrations and notify you of platform updates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Prepare pilot profiles for future insurance underwriting (when the platform launches)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Communicate with you about our services, updates, and promotional offers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Improve our website and services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Comply with legal obligations</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">4. Data Storage and Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Your data is stored securely in encrypted databases. We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. When our blockchain-based platform launches, policy and claims data will be stored on-chain with additional security and transparency benefits.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">5. Information Sharing</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We do not sell your personal information. We may share your information with:
                </p>
                <ul className="text-muted-foreground space-y-2 ml-6">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span><strong>Service Providers:</strong> Third parties that help us operate our platform (hosting, analytics)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span><strong>Insurance Partners:</strong> When our platform launches, pilot profile data may be shared with underwriters to provide insurance quotes (with your consent)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span><strong>Legal Requirements:</strong> When required by law or to protect our rights</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">6. Third-Party Authentication</h2>
                <p className="text-muted-foreground leading-relaxed">
                  When you sign in using Google or GitHub, we receive basic profile information from these services. We do not have access to your passwords for these accounts. Please review the privacy policies of these third-party services for information about their data practices.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">7. Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Depending on your location, you may have the right to:
                </p>
                <ul className="text-muted-foreground space-y-2 ml-6">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Access the personal information we hold about you</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Request correction of inaccurate data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Request deletion of your data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Opt out of marketing communications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Data portability</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">8. Cookies and Tracking</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use cookies and similar technologies to maintain your session, remember your preferences, and analyze site usage. You can control cookie settings through your browser preferences.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">9. Data Retention</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this policy, unless a longer retention period is required by law. You may request deletion of your account and data at any time.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">10. Children's Privacy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children. If you become aware that a child has provided us with personal information, please contact us.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">11. Changes to This Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">12. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have questions about this Privacy Policy or our data practices, please contact us at{" "}
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
