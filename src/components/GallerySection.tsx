import { motion } from "framer-motion";
import galleryCardio from "@/assets/gallery-cardio.jpg";
import galleryFunctional from "@/assets/gallery-functional.jpg";
import galleryWeights from "@/assets/gallery-weights.jpg";
import galleryYoga from "@/assets/gallery-yoga.jpg";

const images = [
  { src: galleryWeights, alt: "Strength zone at ABS Fitness", caption: "Strength Zone" },
  { src: galleryCardio, alt: "Cardio area at ABS Fitness", caption: "Cardio Area" },
  { src: galleryFunctional, alt: "Functional training area", caption: "Functional Training" },
  { src: galleryYoga, alt: "Yoga and stretching studio", caption: "Yoga & Mobility" },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-24 md:py-32 px-4 bg-secondary">
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

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group rounded-xl overflow-hidden aspect-square relative cursor-pointer"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Dark overlay on hover */}
              <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/60 transition-all duration-500 flex items-end justify-center pb-6">
                <p className="text-primary-foreground font-heading tracking-wider text-sm md:text-base opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  {img.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
