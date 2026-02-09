import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { createWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/whatsapp";

const FloatingButtons = () => {
  return (
    <motion.div 
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-6 right-6 z-50 flex flex-col gap-3"
    >
      {/* WhatsApp Button */}
      <motion.a
        href={createWhatsAppUrl(WHATSAPP_MESSAGES.admission)}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="group relative w-14 h-14 bg-[#25D366] hover:bg-[#128C7E] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        {/* Pulse Animation */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
        <MessageCircle className="relative w-7 h-7 text-white fill-white" />
        
        {/* Tooltip */}
        <span className="absolute right-full mr-3 px-4 py-2 bg-foreground text-primary-foreground text-sm font-medium rounded-lg whitespace-nowrap shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Chat with us
        </span>
      </motion.a>

      {/* Call Button */}
      <motion.a
        href="tel:+919142015565"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="group relative w-14 h-14 bg-secondary hover:bg-secondary/90 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
        aria-label="Call us"
      >
        <Phone className="w-6 h-6 text-secondary-foreground" />
        
        {/* Tooltip */}
        <span className="absolute right-full mr-3 px-4 py-2 bg-foreground text-primary-foreground text-sm font-medium rounded-lg whitespace-nowrap shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Call now
        </span>
      </motion.a>
    </motion.div>
  );
};

export default FloatingButtons;
