import { motion } from "framer-motion";
import heroImg from "@/assets/hero-gym.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="ABS Fitness gym interior" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-secondary/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-secondary/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto text-center px-4 pt-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-primary font-heading text-lg md:text-xl tracking-[0.3em] mb-4"
        >
          SEETHAMMADARA, VISAKHAPATNAM
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-primary-foreground leading-[0.95] mb-6"
        >
          TRANSFORM YOUR
          <br />
          <span className="text-gradient">BODY.</span> REBUILD
          <br />
          YOUR <span className="text-gradient">CONFIDENCE.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-primary-foreground/60 font-body text-base md:text-lg max-w-2xl mx-auto mb-10"
        >
          Personalized training. Proven results. Premium fitness experience in Visakhapatnam.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contact"
            className="bg-gradient-primary text-primary-foreground px-8 py-4 rounded-lg font-heading text-lg tracking-wider hover:shadow-glow transition-all hover:scale-105"
          >
            START YOUR TRANSFORMATION
          </a>
          <a
            href="https://wa.me/919505494477?text=I'd like to book a free trial session"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-primary-foreground/20 text-primary-foreground px-8 py-4 rounded-lg font-heading text-lg tracking-wider hover:border-primary hover:text-primary transition-all"
          >
            BOOK FREE TRIAL
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
