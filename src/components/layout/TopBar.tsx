import { Phone, Mail, Clock, Facebook, Instagram, Youtube } from "lucide-react";
import { motion } from "framer-motion";

const TopBar = () => {
  return (
    <motion.div
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-foreground text-background py-2 border-b border-background/10"
    >
      {/* Scroll wrapper for mobile */}
      <div className="w-full overflow-x-auto">
        <div className="container mx-auto px-4 min-w-max">
          <div className="flex items-center justify-between text-xs sm:text-sm gap-6">

            {/* Left Side */}
            <div className="flex items-center gap-4 sm:gap-6">
              <a
                href="tel:+919142015565"
                className="flex items-center gap-2 hover:text-primary transition-colors font-medium group whitespace-nowrap"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-primary-foreground" />
                </div>
                <span>+91 91420 15565</span>
              </a>

              <a
                href="mailto:bookwormkidsinfo@gmail.com"
                className="flex items-center gap-2 hover:text-primary transition-colors font-medium group whitespace-nowrap"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-secondary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-secondary-foreground" />
                </div>
                <span>bookwormkidsinfo@gmail.com</span>
              </a>

              <div className="flex items-center gap-2 font-medium whitespace-nowrap">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-accent rounded-full flex items-center justify-center">
                  <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-accent-foreground" />
                </div>
                <span>Mon - Sat: 9:00 AM - 1:00 PM</span>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-4 sm:gap-6">
              <div className="flex items-center gap-2 font-medium whitespace-nowrap">
                <b>Second Branch :</b>
                <span>VIP Colony, Nawada</span>
              </div>

              <div className="h-5 w-px bg-background/30" />

              <div className="flex items-center gap-2 sm:gap-3">
                <a
                  href="https://www.facebook.com/profile.php?id=61584851069762"
                  className="w-7 h-7 sm:w-8 sm:h-8 bg-background/10 hover:bg-primary rounded-full flex items-center justify-center transition-all hover:scale-110"
                >
                  <Facebook className="w-3 h-3 sm:w-4 sm:h-4" />
                </a>

                <a
                  href="https://www.instagram.com/bookwormkidsschool"
                  className="w-7 h-7 sm:w-8 sm:h-8 bg-background/10 hover:bg-accent rounded-full flex items-center justify-center transition-all hover:scale-110"
                >
                  <Instagram className="w-3 h-3 sm:w-4 sm:h-4" />
                </a>

                <a
                  href="#"
                  className="w-7 h-7 sm:w-8 sm:h-8 bg-background/10 hover:bg-secondary rounded-full flex items-center justify-center transition-all hover:scale-110"
                >
                  <Youtube className="w-3 h-3 sm:w-4 sm:h-4" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TopBar;
