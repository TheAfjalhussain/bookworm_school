import { motion } from "framer-motion";
import { ArrowLeft, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-secondary to-orange-400 py-20">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center gap-2 text-secondary-foreground/80 hover:text-secondary-foreground mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4"
          >
            <div className="w-16 h-16 bg-secondary-foreground/20 rounded-2xl flex items-center justify-center">
              <FileText className="w-8 h-8 text-secondary-foreground" />
            </div>
            <div>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-secondary-foreground">Terms of Service</h1>
              <p className="text-secondary-foreground/80">Last updated: February 2025</p>
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
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By enrolling your child at Bookworm Kids School or using our services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not proceed with enrollment.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">2. Enrollment and Admission</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Admission is subject to availability and completion of all required documentation</li>
              <li>Parents must provide accurate and complete information during enrollment</li>
              <li>The school reserves the right to deny or revoke admission based on policy violations</li>
              <li>Age verification documents are mandatory for program placement</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">3. Fees and Payments</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>All fees must be paid according to the fee schedule provided at enrollment</li>
              <li>Late payments may incur additional charges as per school policy</li>
              <li>Fee structure is subject to annual revision with prior notice</li>
              <li>Registration fees and admission fees are non-refundable</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">4. School Timings and Attendance</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Regular attendance is essential for your child's development</li>
              <li>Parents must inform the school in advance of any planned absences</li>
              <li>Children must be picked up within 15 minutes of school closing time</li>
              <li>Late pickup fees may apply for repeated delays</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">5. Health and Safety</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Children with contagious illnesses must stay home until fully recovered</li>
              <li>Updated medical records and emergency contacts are required</li>
              <li>The school must be notified of any allergies or special health needs</li>
              <li>Only authorized persons may pick up children from school</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">6. Conduct and Discipline</h2>
            <p className="text-muted-foreground leading-relaxed">
              We maintain a positive, nurturing environment. Aggressive behavior, bullying, or actions that endanger others will be addressed through our behavioral guidance policy. Repeated violations may result in suspension or expulsion.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">7. Communication</h2>
            <p className="text-muted-foreground leading-relaxed">
              Parents are expected to maintain open communication with teachers and staff. Regular parent-teacher meetings, school circulars, and updates will be shared through official channels.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">8. Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed">
              All curriculum materials, teaching methods, and branding elements are the intellectual property of Bookworm Kids School and may not be reproduced without written permission.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">9. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              While we take every precaution to ensure safety, the school is not liable for accidents or injuries that occur despite reasonable care. Parents are advised to maintain appropriate insurance coverage.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">10. Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify these terms at any time. Parents will be notified of significant changes, and continued enrollment constitutes acceptance of updated terms.
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;
