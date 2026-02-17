import { motion, useInView, type Easing } from "framer-motion";
import { useRef } from "react";
import { Check, Heart, Shield, Lightbulb, Smile, Award, Star, Users, Target, Play, Sparkles } from "lucide-react";
import classroomImage from "../../../public/images/school.png";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const features = [
  {
    icon: Heart,
    title: "Child-Centered Approach",
    description: "Every activity designed with your child's holistic development in mind.",
    color: "from-brand-red to-pink-500",
  },
  {
    icon: Shield,
    title: "Safe Environment",
    description: "CCTV monitoring, trained staff, and child-proofed spaces.",
    color: "from-brand-blue to-purple-500",
  },
  {
    icon: Lightbulb,
    title: "Play-Based Learning",
    description: "Montessori-inspired methods that make learning joyful.",
    color: "from-brand-green to-teal-500",
  },
  {
    icon: Smile,
    title: "Emotional Nurturing",
    description: "Building confidence, empathy, and social skills.",
    color: "from-secondary to-orange-500",
  },
];

const stats = [
  { value: 5, suffix: "+", label: "Years of Excellence", icon: Award },
  { value: 50, suffix: "+", label: "Happy Students", icon: Users },
  { value: 10, suffix: "+", label: "Expert Teachers", icon: Star },
  { value: 100, suffix: "%", label: "Parent Satisfaction", icon: Heart },
];

const checkpoints = [
  "Low student-to-teacher ratio (1:10)",
  "Trained & certified faculty",
  "Hygienic & sanitized campus",
  "Regular parent communication",
  "Activity-based learning modules",
  "Nutritious meals & snacks",
];

const easeOut: Easing = [0.0, 0.0, 0.2, 1];

const About = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: easeOut }
    },
  };

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-background via-pastel-peach/20 to-background relative overflow-hidden" ref={ref}>
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-primary/10 to-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-secondary/10 to-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      {/* Decorative Dots Pattern */}
      <div className="absolute top-32 right-20 opacity-10">
        <div className="grid grid-cols-8 gap-3">
          {[...Array(48)].map((_, i) => (
            <motion.div 
              key={i} 
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: i * 0.02 }}
              className="w-2 h-2 bg-primary rounded-full" 
            />
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
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="inline-flex items-center gap-2 text-primary font-semibold text-sm tracking-wider uppercase mb-4 bg-primary/10 px-5 py-2.5 rounded-full border border-primary/20"
          >
            <Target className="w-4 h-4" />
            About Us
          </motion.span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight">
            A Place Where <span className="text-gradient">Learning</span> Meets <span className="text-gradient">Love</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            At Bookworm Kids School, we believe every child is unique and deserves an education that
            nurtures their individual strengths through play, creativity, and discovery.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20"
        >
          {/* Image Section */}
          <motion.div variants={itemVariants} className="relative order-2 lg:order-1">
            <div className="relative z-10">
              {/* Main Image */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="relative"
              >
                <motion.div 
                  animate={{ 
                    scale: [1, 1.05, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{ duration: 8, repeat: Infinity }}
                  className="absolute -inset-4 bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/20 rounded-[2rem] blur-xl" 
                />
                <img
                  src={classroomImage}
                  alt="Modern Montessori classroom"
                  className="relative rounded-[2rem] shadow-2xl w-full object-cover border-4 border-white/60"
                />
                
                {/* Play Button Overlay */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-2xl group"
                >
                  <Play className="w-8 h-8 text-primary fill-primary ml-1" />
                  <motion.span 
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 rounded-full border-4 border-primary/30"
                  />
                </motion.button>
              </motion.div>
            </div>

            {/* Decorative Background */}
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-br from-primary/20 to-secondary/10 rounded-[2rem] -z-10" />
            
            {/* Experience Badge */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="absolute -bottom-8 -left-8 glass-card p-6 shadow-2xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-brand-green-light rounded-2xl flex items-center justify-center shadow-lg">
                  <Award className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-display text-4xl font-bold text-primary">
                    <AnimatedCounter end={15} suffix="+" duration={2000} />
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">Years of Excellence</div>
                </div>
              </div>
            </motion.div>

            {/* Certified Badge */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="absolute top-6 -right-4 bg-gradient-to-r from-brand-green to-brand-green-light text-primary-foreground px-5 py-3 rounded-2xl font-semibold text-sm shadow-xl flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              ISO Certified
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div variants={containerVariants} className="order-1 lg:order-2">
            <motion.p 
              variants={itemVariants}
              className="text-lg text-muted-foreground mb-8 leading-relaxed"
            >
              Our thoughtfully designed curriculum combines the best of modern pedagogy with 
              time-tested teaching methods. We focus on developing the whole child - intellectually, 
              emotionally, physically, and socially.
            </motion.p>

            {/* Features Grid */}
            <motion.div 
              variants={containerVariants}
              className="grid sm:grid-cols-2 gap-4 mb-8"
            >
              {features.map((feature) => (
                <motion.div
                  key={feature.title}
                  variants={itemVariants}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="group bg-card hover:bg-card/80 rounded-2xl p-5 shadow-soft hover:shadow-xl transition-all duration-300 border border-border/50"
                >
                  <motion.div 
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center shadow-lg mb-4`}
                  >
                    <feature.icon className="w-7 h-7 text-white" />
                  </motion.div>
                  <h4 className="font-display font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Key Points */}
            <motion.div 
              variants={itemVariants}
              className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-6 border border-primary/10"
            >
              <h4 className="font-display font-bold text-foreground mb-5 flex items-center gap-3">
                <span className="w-10 h-10 bg-gradient-to-br from-primary to-brand-green-light rounded-xl flex items-center justify-center shadow-md">
                  <Check className="w-5 h-5 text-primary-foreground" />
                </span>
                Why Parents Choose Us
              </h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {checkpoints.map((point, index) => (
                  <motion.div 
                    key={index} 
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 bg-primary/15 rounded-full flex items-center justify-center flex-shrink-0 border border-primary/20">
                      <Check className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <span className="text-foreground/80 text-sm">{point}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="bg-card rounded-3xl p-8 md:p-12 border border-border shadow-xl"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="font-display text-3xl md:text-4xl font-bold text-primary mb-1">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} duration={2000} />
                </div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
