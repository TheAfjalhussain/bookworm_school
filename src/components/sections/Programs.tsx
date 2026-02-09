import { motion, useInView, type Easing } from "framer-motion";
import { useRef } from "react";
import { BookOpen, Palette, Music, Sparkles, GraduationCap, ArrowRight } from "lucide-react";

const easeOut: Easing = [0.0, 0.0, 0.2, 1];

const programs = [
  {
    name: "Playgroup",
    age: "1.5 - 2.5 Years",
    gradient: "from-brand-red/20 to-brand-red/5",
    iconBg: "bg-brand-red",
    icon: Sparkles,
    description: "Sensory exploration, motor skills development, and social bonding through guided play.",
    features: ["Sensory Play", "Motor Skills", "Social Bonding"],
    delay: 0,
  },
  {
    name: "Nursery",
    age: "2.5 - 3.5 Years",
    gradient: "from-brand-green/20 to-brand-green/5",
    iconBg: "bg-brand-green",
    icon: Palette,
    description: "Creative expression, language development, and foundational learning activities.",
    features: ["Creative Arts", "Language Skills", "Early Numeracy"],
    delay: 0.1,
  },
  {
    name: "LKG",
    age: "3.5 - 4.5 Years",
    gradient: "from-brand-blue/20 to-brand-blue/5",
    iconBg: "bg-brand-blue",
    icon: BookOpen,
    description: "Pre-reading skills, phonics introduction, and structured learning experiences.",
    features: ["Phonics", "Pre-Reading", "Basic Math"],
    delay: 0.2,
  },
  {
    name: "UKG",
    age: "4.5 - 5.5 Years",
    gradient: "from-purple-500/20 to-purple-500/5",
    iconBg: "bg-purple-500",
    icon: Music,
    description: "School readiness, advanced literacy, and holistic development programs.",
    features: ["Reading Skills", "Writing", "Critical Thinking"],
    delay: 0.3,
  },
  {
    name: "Class One",
    age: "5.5 - 6.5 Years",
    gradient: "from-amber-500/20 to-amber-500/5",
    iconBg: "bg-amber-500",
    icon: GraduationCap,
    description: "Comprehensive primary curriculum with focus on academic excellence and character building.",
    features: ["Full Curriculum", "Project Learning", "Life Skills"],
    delay: 0.4,
  },
];

const Programs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: easeOut }
    },
  };

  return (
    <section id="programs" className="section-padding bg-background relative overflow-hidden" ref={ref}>
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      {/* Decorative Pattern */}
      <div className="absolute top-20 left-10 opacity-10">
        <div className="grid grid-cols-5 gap-3">
          {[...Array(25)].map((_, i) => (
            <div key={i} className="w-2 h-2 bg-primary rounded-full" />
          ))}
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
          <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-4 bg-primary/10 px-4 py-2 rounded-full">
            Our Programs
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
            Nurturing <span className="text-gradient">Growth</span> at Every Stage
          </h2>
          <p className="text-lg text-muted-foreground">
            Age-appropriate programs designed to foster curiosity, creativity, and confidence
            in every child's unique learning journey.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {programs.map((program, index) => (
            <motion.div
              key={program.name}
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                transition: { duration: 0.3 } 
              }}
              className={`group relative bg-gradient-to-br ${program.gradient} rounded-3xl p-8 border border-white/50 shadow-soft hover:shadow-xl transition-all duration-500`}
            >
              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                className={`relative z-10 w-16 h-16 ${program.iconBg} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
              >
                <program.icon className="w-8 h-8 text-primary-foreground" />
              </motion.div>

              {/* Content */}
              <div className="relative z-10 space-y-4">
                <div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                    {program.name}
                  </h3>
                  <span className="inline-block text-sm font-semibold text-primary bg-primary/10 px-4 py-1.5 rounded-full">
                    Age: {program.age}
                  </span>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {program.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {program.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-xs font-medium text-foreground/70 bg-card/80 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-border/50"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Arrow */}
              <motion.div 
                initial={{ x: -10, opacity: 0 }}
                whileHover={{ x: 0, opacity: 1 }}
                className="absolute bottom-8 right-8 w-12 h-12 bg-primary rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg"
              >
                <ArrowRight className="w-5 h-5 text-primary-foreground" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6 text-lg">
            Not sure which program is right for your child?
          </p>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            href="#contact" 
            className="btn-secondary inline-flex items-center gap-2"
          >
            Schedule a Consultation
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Programs;
