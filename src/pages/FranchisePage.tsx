import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowLeft, Building2, CheckCircle2, TrendingUp, Users, Award, Phone, MapPin, Send, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { createWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/whatsapp";
import logo from "@/assets/logo.png";

const benefits = [
  { icon: TrendingUp, title: "No Royalty Model", description: "Keep 100% of your profits with our zero royalty franchise model" },
  { icon: Building2, title: "Complete Setup", description: "End-to-end support for infrastructure, interiors, and equipment" },
  { icon: Users, title: "Training Support", description: "Comprehensive training for owners and teaching staff" },
  { icon: Award, title: "Brand Recognition", description: "Leverage 15+ years of trusted brand value" },
];

const requirements = [
  "Minimum 2000-3000 sq. ft. built-up area",
  "Investment range: ₹15-25 Lakhs",
  "Passion for early childhood education",
  "Prime location in residential area",
  "Commitment to quality education",
  "Clear legal documentation",
];

const investmentDetails = [
  { item: "Franchise Fee", amount: "₹5,00,000" },
  { item: "Infrastructure Setup", amount: "₹8-12 Lakhs" },
  { item: "Equipment & Materials", amount: "₹3-5 Lakhs" },
  { item: "Marketing Launch", amount: "₹1-2 Lakhs" },
  { item: "Working Capital", amount: "₹2-3 Lakhs" },
];

const FranchisePage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    investment: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create WhatsApp message with form data
    const message = `🏫 *Franchise Enquiry*\n\n👤 Name: ${formData.name}\n📧 Email: ${formData.email}\n📱 Phone: ${formData.phone}\n🏙️ City: ${formData.city}\n💰 Investment Budget: ${formData.investment}\n📝 Message: ${formData.message || 'N/A'}`;
    
    // Open WhatsApp with the message
    window.open(createWhatsAppUrl(message), '_blank');
    
    await new Promise(resolve => setTimeout(resolve, 500));
    
    toast({
      title: "Enquiry Sent! 🎉",
      description: "Thank you for your interest! Our team will contact you within 24 hours.",
    });
    
    setIsSubmitting(false);
    setFormData({ name: "", email: "", phone: "", city: "", investment: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-background" ref={ref}>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary via-brand-green-light to-secondary py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-40 h-40 border-4 border-primary-foreground rounded-full" />
          <div className="absolute bottom-20 right-20 w-60 h-60 border-4 border-primary-foreground rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border-2 border-primary-foreground rounded-full" />
        </div>

        <div className="container mx-auto px-4 relative">
          <Link to="/" className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center gap-2 bg-primary-foreground/20 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                Franchise Opportunity
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Start Your Own <br />
                <span className="text-yellow-300">Bookworm Kids School</span>
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
                Join India's fastest-growing preschool chain with our unique No Royalty model. 
                Transform lives through quality early childhood education.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#enquiry-form" 
                  className="btn-secondary inline-flex items-center gap-2"
                >
                  Apply for Franchise
                </a>
                <a 
                  href={createWhatsAppUrl(WHATSAPP_MESSAGES.franchise)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-3 rounded-xl font-semibold inline-flex items-center gap-2 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  WhatsApp Us
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-primary-foreground/10 rounded-3xl blur-xl" />
                <img 
                  src={logo} 
                  alt="Bookworm Kids School" 
                  className="relative w-full max-w-md mx-auto drop-shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-4 bg-primary/10 px-4 py-2 rounded-full">
              Why Partner With Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
              Benefits of <span className="text-gradient">Bookworm Franchise</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-card rounded-2xl p-6 border border-border shadow-soft hover:shadow-xl transition-all text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment & Requirements */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Investment Details */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              <h3 className="font-display text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-primary-foreground" />
                </span>
                Investment Breakdown
              </h3>
              <div className="bg-card rounded-2xl border border-border overflow-hidden">
                {investmentDetails.map((item, index) => (
                  <div key={item.item} className={`flex justify-between p-4 ${index !== investmentDetails.length - 1 ? 'border-b border-border' : ''}`}>
                    <span className="text-foreground">{item.item}</span>
                    <span className="font-semibold text-primary">{item.amount}</span>
                  </div>
                ))}
                <div className="flex justify-between p-4 bg-primary/10">
                  <span className="font-bold text-foreground">Total Investment</span>
                  <span className="font-bold text-primary">₹15-25 Lakhs</span>
                </div>
              </div>
            </motion.div>

            {/* Requirements */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              <h3 className="font-display text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-secondary-foreground" />
                </span>
                Requirements
              </h3>
              <div className="space-y-3">
                {requirements.map((req, index) => (
                  <motion.div
                    key={req}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.05 }}
                    className="flex items-center gap-3 bg-card rounded-xl p-4 border border-border"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{req}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section id="enquiry-form" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="text-center mb-12"
            >
              <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-4 bg-primary/10 px-4 py-2 rounded-full">
                Get Started
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-4">
                Franchise <span className="text-gradient">Enquiry Form</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Fill out the form below and our team will contact you within 24 hours
              </p>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              onSubmit={handleSubmit}
              className="bg-card rounded-3xl p-8 md:p-12 border border-border shadow-xl"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input-premium"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input-premium"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Phone Number *</label>
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
                  <label className="block text-sm font-medium text-foreground mb-2">City/Location *</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="input-premium"
                    placeholder="Your city"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-foreground mb-2">Investment Budget *</label>
                  <select
                    name="investment"
                    value={formData.investment}
                    onChange={handleChange}
                    required
                    className="input-premium"
                  >
                    <option value="">Select your budget range</option>
                    <option value="15-20">₹15-20 Lakhs</option>
                    <option value="20-25">₹20-25 Lakhs</option>
                    <option value="25-30">₹25-30 Lakhs</option>
                    <option value="30+">₹30+ Lakhs</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-foreground mb-2">Additional Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="input-premium resize-none"
                    placeholder="Tell us about your background and why you're interested in the franchise..."
                  />
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full mt-8 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Submit Franchise Enquiry
                  </>
                )}
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Contact Bar */}
      <section className="py-12 bg-primary">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-primary-foreground">
              <MapPin className="w-6 h-6" />
              <span>VIP Colony, Knowledge City | Mon-Sat: 9 AM - 6 PM</span>
            </div>
            <div className="flex gap-4">
              <a 
                href="tel:+919876543210" 
                className="bg-primary-foreground/20 hover:bg-primary-foreground/30 text-primary-foreground px-6 py-3 rounded-xl font-semibold inline-flex items-center gap-2 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <a 
                href={createWhatsAppUrl(WHATSAPP_MESSAGES.franchise)}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-3 rounded-xl font-semibold inline-flex items-center gap-2 transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FranchisePage;
