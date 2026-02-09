import { motion, useInView, type Easing } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Mail, Award, GraduationCap, Heart, Star, Quote, Users } from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const easeOut: Easing = [0.0, 0.0, 0.2, 1];

const director = {
  name: "Dr. Meena Krishnan",
  role: "Founder & Director",
  image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
  bio: "With over 25 years in early childhood education and a Ph.D. in Child Psychology, Dr. Meena founded Bookworm Kids School with a vision to create a nurturing space where every child's potential is recognized and cultivated.",
  qualifications: ["Ph.D. Child Psychology", "M.Ed. Early Childhood", "Montessori Certified"],
  quote: "Every child is a unique flower, and our job is to provide the right soil, sunlight, and love for them to bloom.",
};

const teachers = [
  {
    name: "Priya Menon",
    role: "Head Teacher - Nursery",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face",
    experience: "12 Years",
    specialization: "Montessori Methods",
  },
  {
    name: "Anita Sharma",
    role: "Senior Teacher - LKG/UKG",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=300&h=300&fit=crop&crop=face",
    experience: "10 Years",
    specialization: "Play-Based Learning",
  },
  {
    name: "Sunita Patel",
    role: "Teacher - Playgroup",
    image: "https://images.unsplash.com/photo-1548142813-c348350df52b?w=300&h=300&fit=crop&crop=face",
    experience: "8 Years",
    specialization: "Sensory Development",
  },
  {
    name: "Kavitha Nair",
    role: "Art & Craft Teacher",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face",
    experience: "6 Years",
    specialization: "Creative Arts",
  },
  {
    name: "Deepa Reddy",
    role: "Music & Movement",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=300&h=300&fit=crop&crop=face",
    experience: "7 Years",
    specialization: "Music Therapy",
  },
  {
    name: "Lakshmi Iyer",
    role: "Special Educator",
    image: "https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?w=300&h=300&fit=crop&crop=face",
    experience: "9 Years",
    specialization: "Inclusive Education",
  },
];

const stats = [
  { value: 10, suffix: "+", label: "Expert Teachers", icon: Users },
  { value: 100, suffix: "%", label: "Certified Staff", icon: Award },
  { value: 10, suffix: "+", label: "Avg. Experience", icon: Star },
  { value: 1, suffix: ":10", label: "Teacher Ratio", icon: Heart },
];

const Team = () => {
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
    <section id="team" className="section-padding bg-gradient-to-b from-background via-pastel-lavender/30 to-background relative overflow-hidden" ref={ref}>
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      {/* Decorative Pattern */}
      <div className="absolute top-20 left-10 opacity-10">
        <div className="grid grid-cols-4 gap-3">
          {[...Array(16)].map((_, i) => (
            <motion.div 
              key={i} 
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: i * 0.03 }}
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
          <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm tracking-wider uppercase mb-4 bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
            <Users className="w-4 h-4" />
            Our Team
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
            Meet Our <span className="text-gradient">Dedicated</span> Educators
          </h2>
          <p className="text-lg text-muted-foreground">
            Passionate teachers who inspire, nurture, and guide your children on their learning journey.
          </p>
        </motion.div>

        {/* Director Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <div className="relative bg-card rounded-3xl p-8 md:p-12 shadow-xl border border-border overflow-hidden">
            {/* Gradient Accent */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-secondary to-accent" />
            
            <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
              {/* Image */}
              <div className="lg:col-span-2">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="relative"
                >
                  <div className="absolute -inset-3 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-3xl blur-lg" />
                  <img
                    src={director.image}
                    alt={director.name}
                    className="relative rounded-3xl w-full h-auto object-cover shadow-xl border-4 border-white/50"
                  />
                  
                  {/* Experience Badge */}
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="absolute -bottom-4 -right-4 glass-card p-4 shadow-xl"
                  >
                    <div className="flex items-center gap-2">
                      <Award className="w-8 h-8 text-primary" />
                      <div>
                        <div className="font-display font-bold text-foreground">25+ Years</div>
                        <div className="text-xs text-muted-foreground">Experience</div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>

              {/* Content */}
              <div className="lg:col-span-3 space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
                    {director.name}
                  </h3>
                  <p className="text-primary font-semibold text-lg">{director.role}</p>
                </div>

                <p className="text-muted-foreground text-lg leading-relaxed">
                  {director.bio}
                </p>

                {/* Qualifications */}
                <div className="flex flex-wrap gap-2">
                  {director.qualifications.map((qual, index) => (
                    <span 
                      key={index}
                      className="inline-flex items-center gap-2 text-sm font-medium text-foreground/80 bg-primary/10 px-4 py-2 rounded-full border border-primary/20"
                    >
                      <GraduationCap className="w-4 h-4 text-primary" />
                      {qual}
                    </span>
                  ))}
                </div>

                {/* Quote */}
                <div className="relative bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-6 border-l-4 border-primary">
                  <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
                  <p className="text-foreground italic text-lg pr-8">
                    "{director.quote}"
                  </p>
                </div>

                {/* Contact Links */}
                <div className="flex gap-3">
                  <motion.a
                    whileHover={{ y: -3, scale: 1.05 }}
                    href="#"
                    className="w-12 h-12 bg-primary/10 hover:bg-primary rounded-xl flex items-center justify-center transition-all group"
                  >
                    <Linkedin className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </motion.a>
                  <motion.a
                    whileHover={{ y: -3, scale: 1.05 }}
                    href="#"
                    className="w-12 h-12 bg-secondary/10 hover:bg-secondary rounded-xl flex items-center justify-center transition-all group"
                  >
                    <Mail className="w-5 h-5 text-secondary group-hover:text-secondary-foreground transition-colors" />
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Teachers Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h3 
            variants={itemVariants}
            className="font-display text-2xl md:text-3xl font-bold text-center text-foreground mb-10"
          >
            Our <span className="text-gradient">Teaching Staff</span>
          </motion.h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teachers.map((teacher) => (
              <motion.div
                key={teacher.name}
                variants={itemVariants}
                whileHover={{ 
                  y: -10, 
                  transition: { duration: 0.3 } 
                }}
                className="group bg-card rounded-2xl p-6 border border-border shadow-soft hover:shadow-xl transition-all duration-300 text-center"
              >
                {/* Avatar */}
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="relative w-28 h-28 mx-auto mb-4"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="relative w-full h-full rounded-full object-cover border-4 border-white shadow-lg"
                  />
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-br from-primary to-brand-green-light rounded-full flex items-center justify-center shadow-md"
                  >
                    <Heart className="w-5 h-5 text-white" />
                  </motion.div>
                </motion.div>

                {/* Info */}
                <h4 className="font-display font-bold text-lg text-foreground mb-1 group-hover:text-primary transition-colors">
                  {teacher.name}
                </h4>
                <p className="text-primary font-medium text-sm mb-3">
                  {teacher.role}
                </p>

                {/* Details */}
                <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Award className="w-3 h-3 text-primary" />
                    {teacher.experience}
                  </span>
                  <span className="w-1 h-1 bg-muted-foreground rounded-full" />
                  <span>{teacher.specialization}</span>
                </div>

                {/* Hover Actions */}
                <div className="flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    className="w-9 h-9 bg-primary/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors group/btn"
                  >
                    <Linkedin className="w-4 h-4 text-primary group-hover/btn:text-white" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    className="w-9 h-9 bg-secondary/10 hover:bg-secondary rounded-full flex items-center justify-center transition-colors group/btn"
                  >
                    <Mail className="w-4 h-4 text-secondary group-hover/btn:text-white" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 bg-card rounded-3xl p-8 md:p-12 border border-border shadow-xl"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.9 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="space-y-2"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center mx-auto">
                  <stat.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="font-display text-3xl md:text-4xl font-bold text-primary">
                  {stat.suffix === ":10" ? "1:10" : <AnimatedCounter end={stat.value} suffix={stat.suffix} duration={2000} />}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
