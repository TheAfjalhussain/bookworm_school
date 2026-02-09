import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, Award, Users, GraduationCap, Star } from "lucide-react";
import heroImage from "@/assets/hero-children.jpg";
import classroomImage from "@/assets/classroom.jpg";
import playgroundImage from "@/assets/playground.jpg";

interface HeroProps {
  onEnquiryClick: () => void;
}

const slides = [
  {
    image: heroImage,
    tagline: "🌟 Welcome to Bookworm Kids School",
    title: "Nurturing Young Minds",
    highlight: "with Love & Care",
    description: "Where every child's journey begins with wonder, discovery, and endless possibilities",
  },
  {
    image: classroomImage,
    tagline: "🎓 100+ Happy Students",
    title: "India's Leading",
    highlight: "Play School Chain",
    description: "Building tomorrow's leaders through innovative and playful learning methods",
  },
  {
    image: playgroundImage,
    tagline: "🏆 5+ Years of Excellence",
    title: "Where Learning",
    highlight: "Meets Fun",
    description: "Expert teachers, world-class facilities, and a nurturing environment for your child",
  },
];

const Hero = ({ onEnquiryClick }: HeroProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const stats = [
    { icon: Users, value: "100+", label: "Happy Students", color: "bg-primary" },
    { icon: Award, value: "5+", label: "Years Experience", color: "bg-secondary" },
    { icon: GraduationCap, value: "10+", label: "Expert Teachers", color: "bg-accent" },
  ];

  return (
    <section id="home" className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Full Screen Banner Slider */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="w-full h-full object-cover"
            />
            {/* Premium Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-foreground/30" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Animated Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-32 right-[15%] w-40 h-40 bg-primary/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-32 left-[10%] w-56 h-56 bg-secondary/25 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 right-[25%] w-32 h-32 bg-accent/25 rounded-full blur-2xl"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 pt-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-left">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.6 }}
                >
                  {/* Tagline Badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center gap-2 bg-card/20 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground px-5 py-2 rounded-full mb-6"
                  >
                    <Star className="w-4 h-4 text-primary fill-primary" />
                    <span className="text-sm font-semibold tracking-wide">{slides[currentSlide].tagline}</span>
                  </motion.div>

                  {/* Main Title */}
                  <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-primary-foreground leading-[1.1] mb-6">
                    {slides[currentSlide].title}
                    <br />
                    <span className="relative inline-block mt-2">
                      <span className="text-primary">{slides[currentSlide].highlight}</span>
                      <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 200 12" fill="none">
                        <path d="M2 10C50 2 150 2 198 10" stroke="hsl(var(--primary))" strokeWidth="4" strokeLinecap="round"/>
                      </svg>
                    </span>
                  </h1>

                  {/* Description */}
                  <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl leading-relaxed">
                    {slides[currentSlide].description}
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <motion.button
                      onClick={onEnquiryClick}
                      whileHover={{ scale: 1.05, y: -3 }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full font-bold text-lg shadow-2xl shadow-primary/30 transition-all flex items-center justify-center gap-2"
                    >
                      <span>Admission Enquiry</span>
                      <ChevronRight className="w-5 h-5" />
                    </motion.button>
                    <motion.a
                      href="#franchise"
                      whileHover={{ scale: 1.05, y: -3 }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-full font-bold text-lg shadow-2xl shadow-accent/30 transition-all flex items-center justify-center gap-2"
                    >
                      <span>Franchise Enquiry</span>
                      <ChevronRight className="w-5 h-5" />
                    </motion.a>
                  </div>

                  {/* Watch Video Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-4 group"
                  >
                    <span className="w-14 h-14 bg-primary-foreground rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 text-primary fill-primary ml-1" />
                    </span>
                    <span className="text-primary-foreground font-semibold text-lg group-hover:text-primary transition-colors">
                      Watch Our Story
                    </span>
                  </motion.button>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right - Stats Cards */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="hidden lg:block"
            >
              <div className="relative">
                {/* Floating Stats Cards */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-0 right-0 bg-card/95 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-border/50 w-52"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center">
                      <Users className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <div className="font-display text-3xl font-bold text-foreground">100+</div>
                      <div className="text-sm text-muted-foreground">Happy Students</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute top-32 left-0 bg-card/95 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-border/50 w-52"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-secondary/20 rounded-xl flex items-center justify-center">
                      <Award className="w-7 h-7 text-secondary" />
                    </div>
                    <div>
                      <div className="font-display text-3xl font-bold text-foreground">5+</div>
                      <div className="text-sm text-muted-foreground">Years Experience</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute top-64 right-8 bg-card/95 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-border/50 w-52"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center">
                      <GraduationCap className="w-7 h-7 text-accent" />
                    </div>
                    <div>
                      <div className="font-display text-3xl font-bold text-foreground">50+</div>
                      <div className="text-sm text-muted-foreground">Expert Teachers</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Slide Navigation - Bottom Center */}
      <div className="absolute bottom-32 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4">
        <motion.button
          onClick={prevSlide}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-12 h-12 bg-card/80 backdrop-blur-sm hover:bg-primary rounded-full flex items-center justify-center transition-all shadow-xl group"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 text-foreground group-hover:text-primary-foreground" />
        </motion.button>
        
        <div className="flex items-center gap-2">
          {slides.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentSlide(index)}
              whileHover={{ scale: 1.2 }}
              className={`transition-all duration-500 rounded-full ${
                index === currentSlide
                  ? "w-10 h-3 bg-primary"
                  : "w-3 h-3 bg-primary-foreground/40 hover:bg-primary-foreground/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <motion.button
          onClick={nextSlide}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-12 h-12 bg-card/80 backdrop-blur-sm hover:bg-primary rounded-full flex items-center justify-center transition-all shadow-xl group"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 text-foreground group-hover:text-primary-foreground" />
        </motion.button>
      </div>

      {/* Mobile Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="absolute bottom-4 left-4 right-4 z-20 lg:hidden"
      >
        <div className="bg-card/95 backdrop-blur-lg rounded-2xl p-4 shadow-2xl border border-border/50">
          <div className="grid grid-cols-3 divide-x divide-border">
            {stats.map((stat, index) => (
              <div key={index} className="text-center px-2">
                <div className={`inline-flex items-center justify-center w-10 h-10 ${stat.color}/20 rounded-lg mb-2`}>
                  <stat.icon className={`w-5 h-5 ${stat.color === 'bg-primary' ? 'text-primary' : stat.color === 'bg-secondary' ? 'text-secondary' : 'text-accent'}`} />
                </div>
                <div className="font-display text-xl font-bold text-foreground">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 100" fill="none" className="w-full" preserveAspectRatio="none">
          <path
            d="M0,50 C360,100 720,0 1080,50 C1260,75 1380,25 1440,50 L1440,100 L0,100 Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;