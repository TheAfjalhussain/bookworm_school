import { motion } from "framer-motion";
import { ArrowLeft, GraduationCap, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const AdmissionPolicy = () => {
  const steps = [
    { step: 1, title: "Enquiry", description: "Submit an enquiry form online or visit our campus" },
    { step: 2, title: "Campus Tour", description: "Schedule a guided tour of our facilities" },
    { step: 3, title: "Application", description: "Complete the application form with required documents" },
    { step: 4, title: "Interaction", description: "Parent-child interaction session with our team" },
    { step: 5, title: "Admission", description: "Confirmation and fee payment to secure the seat" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-brand-blue to-purple-500 py-20">
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
              <GraduationCap className="w-8 h-8 text-primary-foreground" />
            </div>
            <div>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">Admission Policy</h1>
              <p className="text-primary-foreground/80">Academic Year 2025-26</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Admission Process */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <h2 className="font-display text-2xl font-bold text-foreground mb-8 text-center">Admission Process</h2>
            <div className="grid md:grid-cols-5 gap-4">
              {steps.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative bg-card rounded-2xl p-6 border border-border text-center"
                >
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-display font-bold text-lg">
                    {item.step}
                  </div>
                  <h3 className="font-display font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-primary/30" />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Age Criteria */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-12"
          >
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">Age Criteria</h2>
            <div className="bg-card rounded-2xl border border-border overflow-hidden">
              <table className="w-full">
                <thead className="bg-primary/10">
                  <tr>
                    <th className="px-6 py-4 text-left font-display font-bold text-foreground">Program</th>
                    <th className="px-6 py-4 text-left font-display font-bold text-foreground">Age Group</th>
                    <th className="px-6 py-4 text-left font-display font-bold text-foreground">Timing</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-6 py-4 text-foreground">Playgroup</td>
                    <td className="px-6 py-4 text-muted-foreground">1.5 - 2.5 Years</td>
                    <td className="px-6 py-4 text-muted-foreground">9:00 AM - 12:00 PM</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-foreground">Nursery</td>
                    <td className="px-6 py-4 text-muted-foreground">2.5 - 3.5 Years</td>
                    <td className="px-6 py-4 text-muted-foreground">9:00 AM - 12:30 PM</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-foreground">LKG</td>
                    <td className="px-6 py-4 text-muted-foreground">3.5 - 4.5 Years</td>
                    <td className="px-6 py-4 text-muted-foreground">8:30 AM - 1:00 PM</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-foreground">UKG</td>
                    <td className="px-6 py-4 text-muted-foreground">4.5 - 5.5 Years</td>
                    <td className="px-6 py-4 text-muted-foreground">8:30 AM - 1:30 PM</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.section>

          {/* Required Documents */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">Required Documents</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Birth Certificate (Original + Copy)",
                "Aadhar Card (Child & Parents)",
                "Passport Size Photos (6 copies)",
                "Immunization Record",
                "Address Proof",
                "Previous School TC (if applicable)",
                "Medical Fitness Certificate",
                "Blood Group Certificate",
              ].map((doc, index) => (
                <motion.div
                  key={doc}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.05 }}
                  className="flex items-center gap-3 bg-card rounded-xl p-4 border border-border"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{doc}</span>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Important Notes */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">Important Notes</h2>
            <div className="bg-primary/5 rounded-2xl p-6 border-l-4 border-primary">
              <ul className="space-y-3 text-muted-foreground">
                <li>• Admissions are on a first-come, first-served basis subject to seat availability</li>
                <li>• Sibling preference is given during the admission process</li>
                <li>• All documents must be submitted within 7 days of admission confirmation</li>
                <li>• The school reserves the right to verify all submitted documents</li>
                <li>• Admission fee once paid is non-refundable</li>
                <li>• Parents must attend the orientation program scheduled after admission</li>
              </ul>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default AdmissionPolicy;
