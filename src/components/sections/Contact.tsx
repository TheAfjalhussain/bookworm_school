import { motion, useInView, type Easing } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, ArrowRight, MessageCircle } from "lucide-react";
import { createWhatsAppUrl } from "@/lib/whatsapp";

const easeOut: Easing = [0.0, 0.0, 0.2, 1];

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    content: ["Par Nawada, Dobhra per, Near Bundelkhand, Nawada, Bihar, India (805112)"],
    color: "bg-brand-red",
  },
  {
    icon: Phone,
    title: "Call Us",
    content: ["+91 9142015565"],
    color: "bg-brand-green",
  },
  {
    icon: Mail,
    title: "Email Us",
    content: ["bookwormkidsinfo@gmail.com"],
    color: "bg-brand-blue",
  },
  {
    icon: Clock,
    title: "School Hours",
    content: ["Mon - Sat: 9:00 AM - 1:00 PM", "Office: 10:00 AM - 2:00 PM"],
    color: "bg-purple-500",
  },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    parentName: "",
    childName: "",
    phone: "",
    email: "",
    program: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create WhatsApp message with form data
    const programName = formData.program ? formData.program.replace('playgroup', 'Playgroup (1.5-2.5 Years)')
      .replace('nursery', 'Nursery (2.5-3.5 Years)')
      .replace('lkg', 'LKG (3.5-4.5 Years)')
      .replace('ukg', 'UKG (4.5-5.5 Years)')
      .replace('class1', 'Class One (5.5-6.5 Years)') : 'Not specified';
    
    const message = `🎓 *Admission Enquiry*\n\n👨‍👩‍👧 Parent: ${formData.parentName}\n👶 Child: ${formData.childName}\n📱 Phone: ${formData.phone}\n📧 Email: ${formData.email || 'Not provided'}\n📚 Program: ${programName}\n💬 Message: ${formData.message || 'N/A'}\n\nPlease share the admission details.`;
    
    // Open WhatsApp with the message
    window.open(createWhatsAppUrl(message), '_blank');
    
    await new Promise(resolve => setTimeout(resolve, 500));
    
    setIsSubmitting(false);
    setFormData({
      parentName: "",
      childName: "",
      phone: "",
      email: "",
      program: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: easeOut }
    },
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 gradient-hero opacity-60" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-2xl" />

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-4 bg-primary/10 px-4 py-2 rounded-full">
            Contact Us
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
            Begin Your Child's <span className="text-gradient">Journey</span> Today
          </h2>
          <p className="text-lg text-muted-foreground">
            Schedule a campus visit or get in touch with us to learn more about our programs.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-2 space-y-6"
          >
            <motion.div variants={itemVariants}>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                Get In Touch
              </h3>
              <p className="text-muted-foreground mb-8">
                We'd love to hear from you! Reach out to us for admissions, queries, or to
                schedule a campus tour.
              </p>
            </motion.div>

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  className="flex gap-4 p-4 bg-card/80 backdrop-blur-sm rounded-2xl border border-border shadow-soft"
                >
                  <div className={`flex-shrink-0 w-12 h-12 ${item.color} rounded-xl flex items-center justify-center shadow-md`}>
                    <item.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-foreground">{item.title}</h4>
                    {item.content.map((line, i) => (
                      <p key={i} className="text-muted-foreground text-sm">
                        {line}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-card rounded-3xl p-8 md:p-10 shadow-xl border border-border relative overflow-hidden"
            >
              {/* Gradient Accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent" />
              
              <h3 className="font-display text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Send className="w-5 h-5 text-primary" />
                </span>
                Admission Enquiry
              </h3>

              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Parent's Name *
                  </label>
                  <input
                    type="text"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleChange}
                    required
                    className="input-premium"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Child's Name *
                  </label>
                  <input
                    type="text"
                    name="childName"
                    value={formData.childName}
                    onChange={handleChange}
                    required
                    className="input-premium"
                    placeholder="Child's name"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="input-premium"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="input-premium"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="mb-5">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Program Interested In *
                </label>
                <select
                  name="program"
                  value={formData.program}
                  onChange={handleChange}
                  required
                  className="input-premium"
                >
                  <option value="">Select a program</option>
                  <option value="playgroup">Playgroup (1.5 - 2.5 Years)</option>
                  <option value="nursery">Nursery (2.5 - 3.5 Years)</option>
                  <option value="lkg">LKG (3.5 - 4.5 Years)</option>
                  <option value="ukg">UKG (4.5 - 5.5 Years)</option>
                  <option value="class1">Class One (5.5 - 6.5 Years)</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message (Optional)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="input-premium resize-none"
                  placeholder="Any specific questions or requirements..."
                />
              </div>

              <motion.button 
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

              <p className="text-xs text-muted-foreground text-center mt-4">
                🔒 Your information is secure and will never be shared.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
