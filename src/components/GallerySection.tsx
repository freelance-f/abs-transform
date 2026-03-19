import { motion } from "framer-motion";
import galleryCardio from "@/assets/gallery-cardio.jpg";
import galleryFunctional from "@/assets/gallery-functional.jpg";
import galleryWeights from "@/assets/gallery-weights.jpg";
import galleryYoga from "@/assets/gallery-yoga.jpg";

const images = [
  { src: galleryCardio, alt: "Cardio zone at ABS Fitness" },
  { src: galleryFunctional, alt: "Functional training area" },
  { src: galleryWeights, alt: "Free weights section" },
  { src: galleryYoga, alt: "Yoga and stretching studio" },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="section-padding bg-secondary">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-heading tracking-[0.3em] text-sm mb-3">TAKE A LOOK</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground">
            OUR FACILITY
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group rounded-xl overflow-hidden aspect-square"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
