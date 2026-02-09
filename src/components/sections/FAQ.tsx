import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, GraduationCap, IndianRupee, BookOpen, Shield } from "lucide-react";

const faqCategories = [
  {
    icon: GraduationCap,
    title: "Admissions",
    color: "bg-primary",
    questions: [
      {
        q: "What is the admission process at Bookworm Kids School?",
        a: "Our admission process includes: 1) Fill an enquiry form or contact us via WhatsApp, 2) Schedule a campus visit, 3) Submit required documents (birth certificate, photos, address proof), 4) Pay registration fee, 5) Receive confirmation and welcome kit. The entire process typically takes 3-5 working days."
      },
      {
        q: "What is the age criteria for different programs?",
        a: "Playgroup: 1.5 - 2.5 years, Nursery: 2.5 - 3.5 years, LKG: 3.5 - 4.5 years, UKG: 4.5 - 5.5 years, Class One: 5.5 - 6.5 years. Age is calculated as of 31st March of the academic year."
      },
      {
        q: "When do admissions open for the new academic year?",
        a: "Admissions for the new academic year typically open in November and continue until seats are filled. We recommend applying early as seats are limited and allocated on a first-come, first-served basis."
      },
    ],
  },
  {
    icon: IndianRupee,
    title: "Fees & Payments",
    color: "bg-secondary",
    questions: [
      {
        q: "What is the fee structure at Bookworm Kids School?",
        a: "Our fee structure varies by program and includes admission fee, tuition fee, and annual charges. Please contact our admissions team via WhatsApp or visit our campus for detailed fee information and available payment plans."
      },
      {
        q: "What payment methods are accepted?",
        a: "We accept payments via cash, cheque, bank transfer (NEFT/RTGS), UPI, and all major debit/credit cards. We also offer quarterly and half-yearly payment options for your convenience."
      },
      {
        q: "Is there a sibling discount available?",
        a: "Yes, we offer a sibling discount for families with more than one child enrolled at our school. Please speak with our admissions team for specific details about the discount percentage and eligibility criteria."
      },
    ],
  },
  {
    icon: BookOpen,
    title: "Curriculum & Learning",
    color: "bg-accent",
    questions: [
      {
        q: "What curriculum does Bookworm Kids School follow?",
        a: "We follow a play-based, activity-oriented curriculum that blends the best of Montessori and traditional learning methods. Our curriculum focuses on cognitive development, language skills, numeracy, motor skills, and social-emotional learning through interactive activities."
      },
      {
        q: "What are the school timings?",
        a: "School timings are Monday to Saturday, 8:00 AM to 2:00 PM. Half-day programs for Playgroup run from 9:00 AM to 12:00 PM. Office hours are 8:00 AM to 5:00 PM for parent queries and administrative matters."
      },
      {
        q: "What extracurricular activities are offered?",
        a: "We offer a variety of activities including dance, music, art & craft, yoga, storytelling, clay modeling, and outdoor sports. Special events like annual day, sports day, and cultural celebrations are also part of our calendar."
      },
    ],
  },
  {
    icon: Shield,
    title: "Safety & Facilities",
    color: "bg-purple-500",
    questions: [
      {
        q: "What safety measures are in place at the school?",
        a: "Safety is our top priority. We have CCTV surveillance across campus, trained security personnel, child-safe furniture, fire safety equipment, first-aid trained staff, and strict visitor protocols. All staff undergo background verification."
      },
      {
        q: "Is transportation facility available?",
        a: "Yes, we provide safe and comfortable transportation with GPS-enabled vehicles, trained drivers, female attendants on every bus, and door-to-door pickup/drop facility. Routes cover major areas of the city."
      },
      {
        q: "What is the student-teacher ratio?",
        a: "We maintain a low student-teacher ratio of 15:1 for regular classes and 10:1 for Playgroup to ensure personalized attention and care for every child."
      },
    ],
  },
];

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" className="section-padding bg-muted/30 relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm tracking-wider uppercase mb-4 bg-primary/10 px-4 py-2 rounded-full">
            <HelpCircle className="w-4 h-4" />
            FAQ
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about admissions, fees, curriculum, and more.
          </p>
        </motion.div>

        {/* FAQ Categories Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {faqCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-card rounded-3xl p-6 md:p-8 shadow-soft border border-border"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 ${category.color} rounded-xl flex items-center justify-center shadow-md`}>
                  <category.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground">
                  {category.title}
                </h3>
              </div>

              {/* Questions Accordion */}
              <Accordion type="single" collapsible className="space-y-2">
                {category.questions.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`${category.title}-${index}`}
                    className="border border-border rounded-xl px-4 bg-muted/30 data-[state=open]:bg-primary/5"
                  >
                    <AccordionTrigger className="text-left text-sm font-medium hover:no-underline py-4">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-4">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Still have questions? We're here to help!
          </p>
          <a
            href="https://wa.me/message/HY45MHONMMM6C1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Chat with Us on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
