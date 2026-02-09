import { Phone, Mail, Clock, MapPin, Facebook, Instagram, Youtube } from "lucide-react";
import { motion } from "framer-motion";

const TopBar = () => {
  return (
    <motion.div 
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-foreground text-background py-3 hidden md:block border-b border-background/10"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between text-sm">
          {/* Left Side - Contact Info */}
          <div className="flex items-center gap-6">
            <a 
              href="tel:+9191420 15565" 
              className="flex items-center gap-2 hover:text-primary transition-colors font-medium group"
            >
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone className="w-4 h-4 text-primary-foreground" />
              </div>
              <span>+91 91420 15565</span>
            </a>
            <a 
              href="mailto:bookwormkidsinfo@gmail.com" 
              className="flex items-center gap-2 hover:text-primary transition-colors font-medium group"
            >
              <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail className="w-4 h-4 text-secondary-foreground" />
              </div>
              <span>bookwormkidsinfo@gmail.com</span>
            </a>
            <div className="flex items-center gap-2 font-medium">
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                <Clock className="w-4 h-4 text-accent-foreground" />
              </div>
              <span>Mon - Sat: 9:00 AM - 1:00 PM</span>
            </div>
          </div>

          {/* Right Side - Location & Social */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 font-medium">
              <b>Second Branch : </b>
              <span>VIP Colony, Nawada</span>
            </div>
            <div className="h-5 w-px bg-background/30" />
            <div className="flex items-center gap-3">
              <a href="https://www.facebook.com/profile.php?id=61584851069762" className="w-8 h-8 bg-background/10 hover:bg-primary rounded-full flex items-center justify-center transition-all hover:scale-110">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/bookwormkidsschool" className="w-8 h-8 bg-background/10 hover:bg-accent rounded-full flex items-center justify-center transition-all hover:scale-110">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-background/10 hover:bg-secondary rounded-full flex items-center justify-center transition-all hover:scale-110">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TopBar;