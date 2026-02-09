import { motion } from "framer-motion";
import { ArrowLeft, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-brand-green-light py-20">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4"
          >
            <div className="w-16 h-16 bg-primary-foreground/20 rounded-2xl flex items-center justify-center">
              <Shield className="w-8 h-8 text-primary-foreground" />
            </div>
            <div>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">Privacy Policy</h1>
              <p className="text-primary-foreground/80">Last updated: February 2025</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto prose prose-lg"
        >
          <section className="mb-10">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">1. Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed">
              At Bookworm Kids School, we collect information that you voluntarily provide to us when you express interest in obtaining information about us or our services. This includes:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-4">
              <li>Personal Information: Name, email address, phone number, address</li>
              <li>Child Information: Child's name, date of birth, health information for enrollment purposes</li>
              <li>Payment Information: Billing details for fee processing</li>
              <li>Communication Records: Records of your communications with us</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">2. How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed">We use the information we collect to:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-4">
              <li>Process admissions and enrollment</li>
              <li>Communicate with parents about their child's progress</li>
              <li>Send important updates about school activities and events</li>
              <li>Process payments and maintain financial records</li>
              <li>Ensure the safety and well-being of all children</li>
              <li>Improve our services and educational programs</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">3. Information Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes encrypted data storage, secure communication channels, and restricted access to personal data.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">4. Sharing of Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              We do not sell, trade, or rent your personal information to third parties. We may share information only in the following circumstances:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-4">
              <li>With your explicit consent</li>
              <li>To comply with legal obligations</li>
              <li>To protect the safety of children and staff</li>
              <li>With authorized educational and healthcare professionals when necessary</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">5. Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed">You have the right to:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-4">
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data (subject to legal requirements)</li>
              <li>Opt-out of marketing communications</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">6. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <div className="bg-muted/50 rounded-xl p-6 mt-4">
              <p className="text-foreground font-medium">Bookworm Kids School</p>
              <p className="text-muted-foreground">VIP Colony, 123 Education Lane</p>
              <p className="text-muted-foreground">Knowledge City, State - 123456</p>
              <p className="text-muted-foreground">Email: privacy@bookwormkids.com</p>
              <p className="text-muted-foreground">Phone: +91 98765 43210</p>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
