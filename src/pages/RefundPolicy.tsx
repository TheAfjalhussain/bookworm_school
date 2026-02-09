import { motion } from "framer-motion";
import { ArrowLeft, Wallet, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-accent to-pink-500 py-20">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center gap-2 text-accent-foreground/80 hover:text-accent-foreground mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4"
          >
            <div className="w-16 h-16 bg-accent-foreground/20 rounded-2xl flex items-center justify-center">
              <Wallet className="w-8 h-8 text-accent-foreground" />
            </div>
            <div>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-accent-foreground">Refund Policy</h1>
              <p className="text-accent-foreground/80">Fee Refund Guidelines</p>
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
          className="max-w-4xl mx-auto"
        >
          {/* Important Notice */}
          <div className="bg-destructive/10 border border-destructive/20 rounded-2xl p-6 mb-10 flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-display font-bold text-foreground mb-2">Important Notice</h3>
              <p className="text-muted-foreground">
                Please read this refund policy carefully before making any payment. By paying the fees, you acknowledge that you have read, understood, and agreed to the terms outlined below.
              </p>
            </div>
          </div>

          <section className="mb-10">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">1. Non-Refundable Fees</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The following fees are strictly non-refundable under any circumstances:
            </p>
            <div className="bg-card rounded-2xl border border-border p-6">
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-destructive rounded-full" />
                  Registration Fee
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-destructive rounded-full" />
                  Admission Fee
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-destructive rounded-full" />
                  Development Fee
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-destructive rounded-full" />
                  Uniform and Books (once issued)
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">2. Tuition Fee Refund</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Tuition fees may be refunded according to the following schedule:
            </p>
            <div className="bg-card rounded-2xl border border-border overflow-hidden">
              <table className="w-full">
                <thead className="bg-primary/10">
                  <tr>
                    <th className="px-6 py-4 text-left font-display font-bold text-foreground">Withdrawal Time</th>
                    <th className="px-6 py-4 text-left font-display font-bold text-foreground">Refund Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-6 py-4 text-foreground">Before session starts</td>
                    <td className="px-6 py-4 text-primary font-semibold">100% of tuition fee</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-foreground">Within 15 days of session start</td>
                    <td className="px-6 py-4 text-primary font-semibold">75% of tuition fee</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-foreground">15-30 days after session start</td>
                    <td className="px-6 py-4 text-secondary font-semibold">50% of tuition fee</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-foreground">30-60 days after session start</td>
                    <td className="px-6 py-4 text-accent font-semibold">25% of tuition fee</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-foreground">After 60 days</td>
                    <td className="px-6 py-4 text-destructive font-semibold">No refund</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">3. Refund Process</h2>
            <div className="space-y-4">
              {[
                { step: 1, text: "Submit a written application to the school office" },
                { step: 2, text: "Provide reason for withdrawal and supporting documents (if any)" },
                { step: 3, text: "Return all school property (ID card, library books, etc.)" },
                { step: 4, text: "Clear all pending dues and obtain No Dues Certificate" },
                { step: 5, text: "Refund will be processed within 30 working days" },
              ].map((item) => (
                <div key={item.step} className="flex items-center gap-4 bg-card rounded-xl p-4 border border-border">
                  <div className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold text-sm">
                    {item.step}
                  </div>
                  <span className="text-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">4. Special Circumstances</h2>
            <p className="text-muted-foreground leading-relaxed">
              In case of medical emergencies, family relocation, or other extraordinary circumstances, the school management may consider special refund requests on a case-by-case basis. Such requests must be accompanied by relevant documentation and are subject to management approval.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">5. Mode of Refund</h2>
            <p className="text-muted-foreground leading-relaxed">
              All refunds will be processed through the original mode of payment. Bank transfers may take 7-10 working days. Cheque refunds are also available upon request. Cash refunds are not permitted.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">6. Contact for Queries</h2>
            <div className="bg-muted/50 rounded-xl p-6">
              <p className="text-foreground font-medium mb-2">Accounts Department</p>
              <p className="text-muted-foreground">Email: accounts@bookwormkids.com</p>
              <p className="text-muted-foreground">Phone: +91 98765 43210</p>
              <p className="text-muted-foreground">Office Hours: Mon-Sat, 9:00 AM - 4:00 PM</p>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default RefundPolicy;
