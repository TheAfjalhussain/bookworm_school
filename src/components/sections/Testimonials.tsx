import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote, MessageSquare, ThumbsUp, Heart } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Mother of Aarav (Nursery)",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt7WoPzPf_BtvFmaxQVgEALG6Kvl2gUk-v7Q&s",
    content:
      "The transformation in my son has been incredible. He loves going to school every day and comes home excited to share what he learned. The teachers are so caring and attentive.",
    rating: 5,
    highlight: "Best Decision Ever!",
  },
  {
    id: 2,
    name: "Rahul Verma",
    role: "Father of Ananya (UKG)",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    content:
      "Bookworm Kids School has exceeded all our expectations. The curriculum is well-designed, and the focus on holistic development is exactly what we wanted for our daughter.",
    rating: 5,
    highlight: "Excellent Curriculum",
  },
  {
    id: 3,
    name: "Meera Patel",
    role: "Mother of Arjun (LKG)",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    content:
      "The safety measures and hygiene standards at the school are top-notch. As a parent, I feel completely at ease knowing my child is in such good hands.",
    rating: 5,
    highlight: "Safe & Hygienic",
  },
  {
    id: 4,
    name: "Amit Kumar",
    role: "Father of Ishaan (Playgroup)",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    content:
      "We were nervous about sending our toddler to school, but the teachers made the transition so smooth. The play-based learning approach is fantastic!",
    rating: 5,
    highlight: "Smooth Transition",
  },
  {
    id: 5,
    name: "Sneha Reddy",
    role: "Mother of Anika (Nursery)",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face",
    content:
      "The creative activities and art programs have really helped my daughter express herself. She has become more confident and social since joining Bookworm.",
    rating: 5,
    highlight: "Amazing Creativity",
  },
];

const trustBadges = [
  { label: "50+", subLabel: "Happy Families", icon: Heart },
  { label: "4.9/5", subLabel: "Parent Rating", icon: ThumbsUp },
  { label: "5+", subLabel: "Years Trusted", icon: MessageSquare },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      id="testimonials"
      className="section-padding bg-gradient-to-b from-pastel-mint/30 via-background to-pastel-peach/20 relative overflow-hidden"
      ref={ref}
    >
      {/* Background Decoration */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      
      {/* Decorative Quotes */}
      <div className="absolute top-20 right-20 opacity-5">
        <Quote className="w-48 h-48 text-primary" />
      </div>
      <div className="absolute bottom-20 left-20 opacity-5 rotate-180">
        <Quote className="w-36 h-36 text-secondary" />
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
            <MessageSquare className="w-4 h-4" />
            Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
            What <span className="text-gradient">Parents</span> Say About Us
          </h2>
          <p className="text-lg text-muted-foreground">
            Hear from families who have entrusted us with their most precious treasures.
          </p>
        </motion.div>

        {/* Testimonial Slider */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative bg-card rounded-3xl p-8 md:p-12 shadow-2xl border border-border overflow-hidden">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
            
            {/* Quote Icon */}
            <motion.div 
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: 0.4, type: "spring" }}
              className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-primary to-brand-green-light rounded-2xl flex items-center justify-center shadow-xl rotate-3"
            >
              <Quote className="w-8 h-8 text-white" />
            </motion.div>

            {/* Content */}
            <div className="relative text-center pt-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Highlight Badge */}
                  <motion.span
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-block bg-gradient-to-r from-primary/10 to-secondary/10 text-primary font-semibold text-sm px-4 py-1.5 rounded-full mb-6 border border-primary/20"
                  >
                    {testimonials[currentIndex].highlight}
                  </motion.span>

                  {/* Stars */}
                  <div className="flex justify-center gap-1 mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: i * 0.1, type: "spring" }}
                      >
                        <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-lg md:text-xl lg:text-2xl text-foreground leading-relaxed mb-8 font-medium">
                    "{testimonials[currentIndex].content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center justify-center gap-4">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full blur-sm opacity-50" />
                      <img
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        className="relative w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                      />
                    </motion.div>
                    <div className="text-left">
                      <div className="font-display font-bold text-foreground text-lg">
                        {testimonials[currentIndex].name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonials[currentIndex].role}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Arrows */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-muted/80 hover:bg-primary rounded-full flex items-center justify-center transition-colors group shadow-lg backdrop-blur-sm"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-foreground group-hover:text-primary-foreground transition-colors" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-muted/80 hover:bg-primary rounded-full flex items-center justify-center transition-colors group shadow-lg backdrop-blur-sm"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-foreground group-hover:text-primary-foreground transition-colors" />
            </motion.button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex(index);
                }}
                className={`h-3 rounded-full transition-all duration-500 ${
                  index === currentIndex
                    ? "w-10 bg-gradient-to-r from-primary to-secondary shadow-md"
                    : "w-3 bg-foreground/20 hover:bg-foreground/40"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 md:gap-6 mt-16"
        >
          {trustBadges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.7 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="flex items-center gap-3 px-6 py-4 bg-card rounded-2xl border border-border shadow-soft hover:shadow-xl transition-all"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                <badge.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="font-display text-xl font-bold text-primary">{badge.label}</div>
                <div className="text-xs text-muted-foreground">{badge.subLabel}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
