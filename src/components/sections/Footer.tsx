import { motion } from "framer-motion";
import { Facebook, Instagram, Youtube, Twitter, Heart, ArrowUp, Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { createWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/whatsapp";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Programs", href: "#programs" },
    { name: "Facilities", href: "#facilities" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const programs = [
    { name: "Playgroup", href: "#programs" },
    { name: "Nursery", href: "#programs" },
    { name: "LKG", href: "#programs" },
    { name: "UKG", href: "#programs" },
    { name: "ONE", href: "#programs" },
  ];

  const policies = [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms-of-service" },
    { name: "Admission Policy", href: "/admission-policy" },
    { name: "Refund Policy", href: "/refund-policy" },
    { name: "Franchise", href: "/franchise" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61584851069762", label: "Facebook", color: "hover:bg-blue-600" },
    { icon: Instagram, href: "https://www.instagram.com/bookwormkidsschool", label: "Instagram", color: "hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500" },
    { icon: Youtube, href: "#", label: "Youtube", color: "hover:bg-red-600" },
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:bg-sky-500" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-primary-foreground relative overflow-hidden">
      {/* Decorative Top Wave */}
      <div className="absolute top-0 left-0 right-0 -translate-y-[99%]">
        <svg viewBox="0 0 1440 100" fill="none" className="w-full">
          <path 
            d="M0,50 C360,100 720,0 1440,50 L1440,100 L0,100 Z" 
            fill="currentColor" 
            className="text-foreground"
          />
        </svg>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-40 h-40 border-2 border-primary-foreground rounded-full" />
        <div className="absolute bottom-20 left-20 w-60 h-60 border-2 border-primary-foreground rounded-full" />
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ y: -5, scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-shadow z-10"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6 text-primary-foreground" />
      </motion.button>

      <div className="container mx-auto px-4 pt-24 pb-8 relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <motion.a 
              href="#home"
              whileHover={{ scale: 1.05 }}
              className="inline-block mb-6"
            >
              <img 
                src={logo} 
                alt="Bookworm Kids School" 
                className="h-24 w-auto drop-shadow-lg" 
              />
            </motion.a>
            <p className="text-primary-foreground/70 mb-6 leading-relaxed">
              Nurturing young minds through play-based learning, creativity, and love. India's leading play school chain.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ y: -3, scale: 1.1 }}
                  className={`w-11 h-11 bg-primary-foreground/10 ${social.color} rounded-xl flex items-center justify-center transition-all duration-300`}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
            
            {/* WhatsApp CTA */}
            <motion.a
              href={createWhatsAppUrl(WHATSAPP_MESSAGES.general)}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              className="mt-6 flex items-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white px-4 py-3 rounded-xl transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="font-medium">Chat with us on WhatsApp</span>
            </motion.a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-10 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <motion.li key={link.name} whileHover={{ x: 5 }}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-2 h-2 bg-primary/50 rounded-full group-hover:bg-primary transition-colors" />
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-10 h-1 bg-gradient-to-r from-secondary to-primary rounded-full" />
              Programs
            </h4>
            <ul className="space-y-3">
              {programs.map((link) => (
                <motion.li key={link.name} whileHover={{ x: 5 }}>
                  {link.href.startsWith('/') ? (
                    <Link
                      to={link.href}
                      className="text-primary-foreground/70 hover:text-secondary transition-colors inline-flex items-center gap-2 group"
                    >
                      <span className="w-2 h-2 bg-secondary/50 rounded-full group-hover:bg-secondary transition-colors" />
                      {link.name}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-primary-foreground/70 hover:text-secondary transition-colors inline-flex items-center gap-2 group"
                    >
                      <span className="w-2 h-2 bg-secondary/50 rounded-full group-hover:bg-secondary transition-colors" />
                      {link.name}
                    </a>
                  )}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-10 h-1 bg-gradient-to-r from-accent to-primary rounded-full" />
              Contact Info
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <span className="text-primary-foreground/70">
                  Par Nawada, Dobhra per, Near Bundelkhand,
                  Nawada, Bihar, India ( 805112 )
                </span>
              </li>
              <li>
                <a href="tel:+9191420 15565" className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors">
                  <div className="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  +91 91420 15565
                </a>
              </li>
              <li>
                <a href="mailto:bookwormkidsinfo@gmail.com" className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors">
                  <div className="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  bookwormkidsinfo@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/70">
                <div className="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center">
                  <Clock className="w-5 h-5 text-accent" />
                </div>
                Mon - Sat: 9:00 AM - 1:00 PM
              </li>
            </ul>
          </div>
        </div>

        {/* Policies */}
        <div className="border-t border-primary-foreground/10 pt-8 mb-8">
          <div className="flex flex-wrap justify-center gap-6">
            {policies.map((policy) => (
              <motion.div key={policy.name} whileHover={{ y: -2 }}>
                <Link
                  to={policy.href}
                  className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                >
                  {policy.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-primary-foreground/50 text-sm">
          <p className="flex items-center justify-center gap-1 flex-wrap">
            © {new Date().getFullYear()} Bookworm Kids School. Made with{" "}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-accent fill-accent" />
            </motion.span>{" "}
            for little learners.
          </p>
        </div>

        <a
          href="https://growthix.in"
          target="_blank"
          rel="noopener noreferrer"
          className="text-md text-gray-500 flex items-center justify-center flex-wrap hover:text- blue-800 "
        >
          <div className="mt-2">Designed & Created By :   <span className="font-medium">Growthix.in</span></div>
        </a>


      </div>
    </footer>
  );
};

export default Footer;