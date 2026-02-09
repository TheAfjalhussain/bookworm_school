import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";
import { Link } from "react-router-dom";

interface NavbarProps {
  onEnquiryClick: () => void;
}

const Navbar = ({ onEnquiryClick }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const leftNavLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Programs", href: "#programs" },
    { name: "Facilities", href: "#facilities" },
  ];

  const rightNavLinks = [
    { name: "Gallery", href: "#gallery" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
    { name: "Franchise", href: "/franchise" },
  ];

  const allLinks = [...leftNavLinks, ...rightNavLinks];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      const sections = allLinks.map(link => link.href.slice(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`fixed left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? "top-0 bg-card shadow-2xl py-3 border-b border-border"
          : "top-[52px] bg-card/95 backdrop-blur-md py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Left Navigation - Desktop */}
          <div className="hidden lg:flex items-center gap-1 flex-1 justify-end">
            {leftNavLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ y: -2 }}
                className={`relative px-4 py-2.5 font-semibold text-sm transition-all duration-300 rounded-xl ${
                  activeSection === link.href.slice(1)
                    ? "text-primary"
                    : scrolled 
                      ? "text-foreground/80 hover:text-primary"
                      : "text-foreground hover:text-primary"
                }`}
              >
                {link.name}
                {activeSection === link.href.slice(1) && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute inset-0 bg-primary/10 rounded-xl -z-10 border border-primary/20"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.a>
            ))}
          </div>

          {/* Center Logo */}
          <motion.a 
            href="#home" 
            className="flex-shrink-0 mx-6 lg:mx-12"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <img
              src={logo}
              alt="Bookworm Kids School"
              className={`transition-all duration-300 ${scrolled ? "h-12 md:h-14" : "h-14 md:h-18 lg:h-20"}`}
            />
          </motion.a>

          {/* Right Navigation - Desktop */}
          <div className="hidden lg:flex items-center gap-1 flex-1">
            {rightNavLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ y: -2 }}
                className={`relative px-4 py-2.5 font-semibold text-sm transition-all duration-300 rounded-xl ${
                  activeSection === link.href.slice(1)
                    ? "text-primary"
                    : scrolled 
                      ? "text-foreground/80 hover:text-primary"
                      : "text-foreground hover:text-primary"
                }`}
              >
                {link.name}
                {activeSection === link.href.slice(1) && (
                  <motion.div
                    layoutId="activeSection2"
                    className="absolute inset-0 bg-primary/10 rounded-xl -z-10 border border-primary/20"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.a>
            ))}
            
            {/* Enquiry Button */}
            <motion.button
              onClick={onEnquiryClick}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="ml-4 relative overflow-hidden group bg-gradient-to-r from-accent to-accent/80 text-accent-foreground text-sm font-bold py-3 px-6 rounded-full shadow-lg"
            >
              <span className="relative z-10 flex items-center gap-2">
                Enquire Now
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-accent/80 to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </motion.button>
          </div>

          {/* Mobile Menu Toggle */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2.5 rounded-xl transition-colors ${
              scrolled ? "bg-muted hover:bg-primary/10" : "bg-card/80 backdrop-blur-sm hover:bg-primary/10"
            }`}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6 text-foreground" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6 text-foreground" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden mt-4"
            >
              <div className="bg-card/98 backdrop-blur-xl rounded-2xl p-6 space-y-2 shadow-xl border border-border">
                {allLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={`flex items-center gap-3 py-3 px-4 rounded-xl font-medium transition-all ${
                      activeSection === link.href.slice(1)
                        ? "text-primary bg-primary/10 border border-primary/20"
                        : "text-foreground/80 hover:text-primary hover:bg-muted"
                    }`}
                  >
                    {activeSection === link.href.slice(1) && (
                      <motion.div
                        layoutId="mobileActiveSection"
                        className="w-1.5 h-1.5 bg-primary rounded-full"
                      />
                    )}
                    {link.name}
                  </motion.a>
                ))}
                <div className="pt-4 border-t border-border">
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      onEnquiryClick();
                      setIsOpen(false);
                    }}
                    className="w-full bg-gradient-to-r from-accent to-accent/80 text-accent-foreground font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-lg"
                  >
                    <Sparkles className="w-4 h-4" />
                    Enquire Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;