import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { X, Play, Camera, Calendar, Heart } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const galleryItems = [
  {
    id: 1,
    type: "image",
    src: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800",
    title: "Annual Day Celebration",
    category: "Events",
    size: "large",
  },
  {
    id: 2,
    type: "image",
    src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600",
    title: "Art & Craft Session",
    category: "Activities",
    size: "small",
  },
  {
    id: 3,
    type: "image",
    src: "https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=600",
    title: "Sports Day Fun",
    category: "Sports",
    size: "medium",
  },
  {
    id: 4,
    type: "video",
    src: "https://images.unsplash.com/photo-1526634332515-d56c5fd16991?w=600",
    title: "Music & Dance Class",
    category: "Learning",
    size: "small",
  },
  {
    id: 5,
    type: "image",
    src: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=800",
    title: "Outdoor Learning",
    category: "Activities",
    size: "large",
  },
  {
    id: 6,
    type: "image",
    src: "https://images.unsplash.com/photo-1560969184-10fe8719e047?w=600",
    title: "Friendship Day",
    category: "Celebrations",
    size: "medium",
  },
  {
    id: 7,
    type: "image",
    src: "https://images.unsplash.com/photo-1602827114685-efbb2717da9f?w=600",
    title: "Story Time",
    category: "Learning",
    size: "small",
  },
  {
    id: 8,
    type: "image",
    src: "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?w=800",
    title: "Independence Day",
    category: "Events",
    size: "medium",
  },
];

const categories = ["All", "Events", "Activities", "Learning", "Sports", "Celebrations"];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredItems = selectedCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const getSizeClasses = (size: string) => {
    switch (size) {
      case "large":
        return "col-span-2 row-span-2";
      case "medium":
        return "col-span-1 row-span-2";
      default:
        return "col-span-1 row-span-1";
    }
  };

  return (
    <section id="gallery" className="section-padding bg-gradient-to-b from-background via-pastel-lavender/20 to-background overflow-hidden">
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
            className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-5 py-2 rounded-full mb-6"
          >
            <Camera className="w-4 h-4" />
            <span className="text-sm font-semibold">Moments & Memories</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Our <span className="text-gradient">Gallery</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Capturing precious moments of joy, learning, and celebration at Bookworm Kids School
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
              className={`px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-card text-foreground/70 hover:bg-primary/10 hover:text-primary border border-border"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Masonry Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[220px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                onClick={() => setSelectedItem(item)}
                className={`relative rounded-2xl overflow-hidden cursor-pointer group ${getSizeClasses(item.size)}`}
              >
                {/* Image */}
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                {/* Video Play Icon */}
                {item.type === "video" && (
                  <div className="absolute top-4 right-4 w-10 h-10 bg-accent rounded-full flex items-center justify-center shadow-lg">
                    <Play className="w-5 h-5 text-accent-foreground fill-current" />
                  </div>
                )}

                {/* Content */}
                <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <span className="inline-flex items-center gap-1 text-xs text-primary-foreground/80 mb-2">
                    <Calendar className="w-3 h-3" />
                    {item.category}
                  </span>
                  <h3 className="text-lg md:text-xl font-bold text-primary-foreground">
                    {item.title}
                  </h3>
                </div>

                {/* Like Button */}
                <motion.button
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute top-4 left-4 w-10 h-10 bg-card/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Heart className="w-5 h-5 text-accent" />
                </motion.button>

                {/* Corner Accent */}
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-primary/30 to-transparent rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Stats with Animated Counters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16"
        >
          {[
            { number: 500, suffix: "+", label: "Photos" },
            { number: 50, suffix: "+", label: "Events" },
            { number: 1000, suffix: "+", label: "Happy Moments" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">
                <AnimatedCounter end={stat.number} suffix={stat.suffix} duration={2500} />
              </div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-card border-none">
          {selectedItem && (
            <div className="relative">
              <img
                src={selectedItem.src}
                alt={selectedItem.title}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-foreground/90 to-transparent">
                <span className="inline-flex items-center gap-1 text-xs text-primary-foreground/70 mb-2">
                  <Calendar className="w-3 h-3" />
                  {selectedItem.category}
                </span>
                <h3 className="text-2xl font-bold text-primary-foreground">
                  {selectedItem.title}
                </h3>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;
