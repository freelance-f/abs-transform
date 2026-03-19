import { motion } from "framer-motion";
import { Star } from "lucide-react";
import heroImg from "@/assets/hero-gym.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="ABS Fitness gym interior" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-secondary/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/40 to-secondary/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/50 via-transparent to-secondary/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto text-center px-4 pt-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-primary font-heading text-lg md:text-xl tracking-[0.3em] mb-6"
        >
          SEETHAMMADARA, VISAKHAPATNAM
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-heading font-bold text-primary-foreground leading-[0.92] mb-8"
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
          className="text-primary-foreground/60 font-body text-base md:text-lg max-w-2xl mx-auto mb-12"
        >
          Personalized training. Proven results. Premium fitness experience in Visakhapatnam.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-5 justify-center mb-8"
        >
          <a
            href="#contact"
            className="bg-gradient-primary text-primary-foreground px-10 py-5 rounded-lg font-heading text-lg md:text-xl tracking-wider shadow-glow hover:shadow-[0_0_40px_hsl(18_100%_56%/0.6)] hover:scale-105 transition-all duration-300"
          >
            START YOUR TRANSFORMATION
          </a>
          <a
            href="https://wa.me/919505494477?text=I'd like to book a free trial session"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-primary-foreground/20 text-primary-foreground px-10 py-5 rounded-lg font-heading text-lg tracking-wider hover:border-primary hover:text-primary transition-all duration-300"
          >
            BOOK FREE TRIAL
          </a>
        </motion.div>

        {/* Trust line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex items-center justify-center gap-2"
        >
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-primary text-primary" />
            ))}
          </div>
          <p className="text-primary-foreground/60 font-body text-sm">
            <span className="text-primary-foreground font-medium">4.7 Rating</span> · 140+ Happy Members
          </p>
        </motion.div>
      </div>

    </section>
  );
};

export default HeroSection;
