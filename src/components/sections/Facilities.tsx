import { motion, useInView, type Easing } from "framer-motion";
import { useRef } from "react";
import { 
  Monitor, 
  Utensils, 
  Bus, 
  Shield, 
  TreePine, 
  Music, 
  Palette, 
  BookOpen,
  Sparkles,
  CheckCircle2
} from "lucide-react";
import playgroundImage from "@/assets/playground.jpg";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const easeOut: Easing = [0.0, 0.0, 0.2, 1];

const facilities = [
  {
    icon: TreePine,
    title: "Outdoor Playground",
    description: "Safe, colorful play equipment with soft flooring for endless fun",
    color: "from-brand-green to-teal-500",
  },
  {
    icon: Monitor,
    title: "Smart Classrooms",
    description: "Interactive learning with modern projectors and digital boards",
    color: "from-brand-blue to-indigo-500",
  },
  {
    icon: Utensils,
    title: "Hygienic Kitchen",
    description: "Nutritious meals prepared fresh daily by trained staff",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: Bus,
    title: "Safe Transport",
    description: "GPS-enabled buses with trained attendants and AC facilities",
    color: "from-purple-500 to-violet-500",
  },
  {
    icon: Shield,
    title: "24/7 Security",
    description: "CCTV surveillance, secure entry systems, and trained guards",
    color: "from-brand-red to-rose-500",
  },
  {
    icon: Music,
    title: "Music & Dance Room",
    description: "Dedicated space for performing arts with quality instruments",
    color: "from-pink-500 to-fuchsia-500",
  },
  {
    icon: Palette,
    title: "Art Studio",
    description: "Creative corner equipped with all art supplies for young artists",
    color: "from-orange-500 to-amber-500",
  },
  {
    icon: BookOpen,
    title: "Library",
    description: "Age-appropriate books and cozy reading nooks for story time",
    color: "from-teal-500 to-cyan-500",
  },
];

const highlights = [
  "10,000+ sq. ft. campus",
  "Child-safe furniture",
  "Purified drinking water",
  "First aid room",
  "Indoor play area",
  "Garden & nature zone",
];

const Facilities = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: easeOut }
    },
  };

  return (
    <section id="facilities" className="section-padding bg-gradient-to-b from-background via-pastel-mint/30 to-background relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-20 right-20">
          <svg width="200" height="200" viewBox="0 0 200 200" fill="currentColor">
            <circle cx="100" cy="100" r="80" className="text-primary" />
          </svg>
        </div>
        <div className="absolute bottom-20 left-20">
          <svg width="150" height="150" viewBox="0 0 150 150" fill="currentColor">
            <polygon points="75,0 150,150 0,150" className="text-secondary" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm tracking-wider uppercase mb-4 bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
            <Sparkles className="w-4 h-4" />
            Our Facilities
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
            World-Class <span className="text-gradient">Infrastructure</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            State-of-the-art facilities designed to provide a safe, stimulating, and joyful
            learning environment for your little ones.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Facilities Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid sm:grid-cols-2 gap-4"
          >
            {facilities.map((facility) => (
              <motion.div
                key={facility.title}
                variants={itemVariants}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  transition: { duration: 0.2 } 
                }}
                className="group bg-card border border-border rounded-2xl p-5 shadow-soft hover:shadow-xl transition-all duration-300"
              >
                <motion.div 
                  whileHover={{ rotate: 10 }}
                  className={`w-14 h-14 bg-gradient-to-br ${facility.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}
                >
                  <facility.icon className="w-7 h-7 text-white" />
                </motion.div>
                <h4 className="font-display font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {facility.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {facility.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Image & Stats */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative sticky top-32">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 rounded-3xl blur-xl" />
              
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50">
                <img
                  src={playgroundImage}
                  alt="Modern playground facilities"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/20 to-transparent" />
                
                {/* Overlay Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display text-2xl font-bold text-white mb-2">Premium Campus</h3>
                  <p className="text-white/80 text-sm">Designed for safety, learning, and endless play</p>
                </div>
              </div>

              {/* Floating Stat Card */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
                className="mt-6 glass-card p-6 shadow-xl"
              >
                <div className="grid grid-cols-3 gap-4 text-center">
                  <motion.div whileHover={{ scale: 1.1 }}>
                    <div className="font-display text-2xl md:text-3xl font-bold text-primary">
                      <AnimatedCounter end={10000} suffix="+" duration={2000} />
                    </div>
                    <div className="text-xs text-muted-foreground font-medium">Sq. Ft. Campus</div>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.1 }} className="border-x border-border px-4">
                    <div className="font-display text-2xl md:text-3xl font-bold text-secondary">
                      <AnimatedCounter end={12} duration={1500} />
                    </div>
                    <div className="text-xs text-muted-foreground font-medium">Classrooms</div>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.1 }}>
                    <div className="font-display text-2xl md:text-3xl font-bold text-accent">100%</div>
                    <div className="text-xs text-muted-foreground font-medium">Child Safe</div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 }}
                className="mt-6 bg-card rounded-2xl p-6 border border-border"
              >
                <h4 className="font-display font-bold text-foreground mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  Campus Highlights
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {highlights.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.9 + index * 0.05 }}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {item}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
