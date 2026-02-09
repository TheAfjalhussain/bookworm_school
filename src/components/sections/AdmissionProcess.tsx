import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  ClipboardList, 
  UserCheck, 
  CalendarCheck, 
  School, 
  CheckCircle2,
  ArrowRight,
  Phone,
  FileText,
  Sparkles
} from "lucide-react";

const steps = [
  {
    id: 1,
    icon: ClipboardList,
    title: "Submit Enquiry",
    description: "Fill out our simple online enquiry form or visit our campus to express your interest in enrolling your child.",
    details: ["Online form takes 2 minutes", "We respond within 24 hours", "No commitment required"],
    color: "bg-primary",
    duration: "Day 1",
  },
  {
    id: 2,
    icon: CalendarCheck,
    title: "Schedule Campus Visit",
    description: "Experience our world-class facilities, meet our teachers, and see how we nurture young minds every day.",
    details: ["Personal guided tour", "Meet the principal", "Observe classroom activities"],
    color: "bg-secondary",
    duration: "Day 2-3",
  },
  {
    id: 3,
    icon: UserCheck,
    title: "Child Assessment",
    description: "A friendly, play-based interaction to understand your child's unique learning style and developmental stage.",
    details: ["Age-appropriate activities", "No pressure environment", "Parent consultation included"],
    color: "bg-accent",
    duration: "Day 4-5",
  },
  {
    id: 4,
    icon: FileText,
    title: "Document Submission",
    description: "Submit the required documents and complete the admission formalities with our friendly admin team.",
    details: ["Birth certificate", "Photographs", "Address proof"],
    color: "bg-brand-green",
    duration: "Day 6-7",
  },
  {
    id: 5,
    icon: School,
    title: "Welcome to Bookworm!",
    description: "Congratulations! Your child is now part of the Bookworm family. Get ready for an amazing learning journey.",
    details: ["Orientation session", "Welcome kit", "First day celebration"],
    color: "bg-primary",
    duration: "Day 8+",
  },
];

const AdmissionProcess = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="admission" className="section-padding bg-gradient-to-b from-pastel-mint/30 via-background to-pastel-lavender/20 overflow-hidden">
      <div className="container mx-auto px-4" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-5 py-2 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold">Simple & Quick Process</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Admission <span className="text-gradient">Process</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join the Bookworm family in just a few simple steps. We've made the admission process as smooth as possible for busy parents.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-accent rounded-full hidden md:block" />
          
          {/* Mobile Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-accent rounded-full md:hidden" />

          {/* Steps */}
          <div className="space-y-8 md:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                className={`relative flex items-start gap-6 md:gap-0 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.15 }}
                    className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center shadow-lg`}
                  >
                    <step.icon className="w-8 h-8 text-primary-foreground" />
                  </motion.div>
                  
                  {/* Duration Badge */}
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.15 }}
                    className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-card border border-border px-3 py-1 rounded-full text-xs font-medium text-muted-foreground whitespace-nowrap shadow-sm"
                  >
                    {step.duration}
                  </motion.div>
                </div>

                {/* Content Card */}
                <div className={`ml-20 md:ml-0 md:w-[calc(50%-4rem)] ${index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left"}`}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-card rounded-2xl p-6 shadow-lg border border-border/50 card-hover"
                  >
                    <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                      <span className="text-4xl font-bold text-muted-foreground/20">0{step.id}</span>
                      <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">
                      {step.description}
                    </p>
                    
                    <ul className={`space-y-2 ${index % 2 === 0 ? "md:items-end" : "md:items-start"} flex flex-col`}>
                      {step.details.map((detail, i) => (
                        <li key={i} className={`flex items-center gap-2 text-sm text-foreground/70 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* Spacer for alternate side */}
                <div className="hidden md:block md:w-[calc(50%-4rem)]" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-20 text-center"
        >
          <div className="glass-card inline-block p-8 md:p-12 max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to Begin Your Child's Journey?
            </h3>
            <p className="text-muted-foreground mb-8">
              Admissions are open for the upcoming academic year. Limited seats available!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary flex items-center justify-center gap-2"
              >
                Start Application
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              <motion.a
                href="tel:+919876543210"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="btn-outline flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Us Now
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AdmissionProcess;
