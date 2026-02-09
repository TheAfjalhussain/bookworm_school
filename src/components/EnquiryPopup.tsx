import { X, Send, Sparkles, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createWhatsAppUrl } from "@/lib/whatsapp";

interface EnquiryPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const EnquiryPopup = ({ isOpen, onClose }: EnquiryPopupProps) => {
  const [formData, setFormData] = useState({
    parentName: "",
    childName: "",
    phone: "",
    program: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create WhatsApp message with form data
    const message = `🎓 *Admission Enquiry*\n\n👨‍👩‍👧 Parent: ${formData.parentName}\n👶 Child: ${formData.childName}\n📱 Phone: ${formData.phone}\n📚 Program: ${formData.program}\n\nPlease share the admission details.`;
    
    // Open WhatsApp with the message
    window.open(createWhatsAppUrl(message), '_blank');
    
    await new Promise(resolve => setTimeout(resolve, 500));
    
    setIsSubmitting(false);
    onClose();
    setFormData({ parentName: "", childName: "", phone: "", program: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Prevent body scroll when popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-foreground/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Popup */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative bg-card rounded-3xl p-8 max-w-md w-full shadow-2xl z-10 overflow-hidden"
          >
            {/* Gradient Top Border */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-secondary to-accent" />
            
            {/* Decorative Shapes */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-secondary/10 rounded-full blur-2xl" />
            
            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.95 }}
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 bg-muted hover:bg-destructive rounded-full flex items-center justify-center transition-colors group z-10"
            >
              <X className="w-5 h-5 text-foreground group-hover:text-destructive-foreground" />
            </motion.button>

            {/* Header */}
            <div className="text-center mb-6 relative">
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg"
              >
                <Sparkles className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="font-display text-2xl font-bold text-foreground">
                Quick Enquiry
              </h3>
              <p className="text-muted-foreground text-sm mt-2">
                Fill this form and we'll send your enquiry via WhatsApp!
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 relative">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <input
                  type="text"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleChange}
                  required
                  className="input-premium"
                  placeholder="Parent's Name *"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 }}
              >
                <input
                  type="text"
                  name="childName"
                  value={formData.childName}
                  onChange={handleChange}
                  required
                  className="input-premium"
                  placeholder="Child's Name *"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="input-premium"
                  placeholder="Phone Number *"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25 }}
              >
                <select
                  name="program"
                  value={formData.program}
                  onChange={handleChange}
                  required
                  className="input-premium"
                >
                  <option value="">Select Program *</option>
                  <option value="Playgroup (1.5 - 2.5 Years)">Playgroup (1.5 - 2.5 Years)</option>
                  <option value="Nursery (2.5 - 3.5 Years)">Nursery (2.5 - 3.5 Years)</option>
                  <option value="LKG (3.5 - 4.5 Years)">LKG (3.5 - 4.5 Years)</option>
                  <option value="UKG (4.5 - 5.5 Years)">UKG (4.5 - 5.5 Years)</option>
                  <option value="Class One (5.5 - 6.5 Years)">Class One (5.5 - 6.5 Years)</option>
                </select>
              </motion.div>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-colors disabled:opacity-70"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <MessageCircle className="w-5 h-5" />
                    Send via WhatsApp
                  </>
                )}
              </motion.button>
            </form>

            {/* Trust Note */}
            <p className="text-xs text-center text-muted-foreground mt-4">
              🔒 Your information is secure and will never be shared.
            </p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default EnquiryPopup;
