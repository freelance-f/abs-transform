import { motion } from "framer-motion";

const CtaSection = () => {
  return (
    <section className="py-24 md:py-32 px-4 bg-gradient-dark relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[80px]" />

      <div className="container mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-accent font-heading tracking-[0.3em] text-sm mb-3">🚨 LIMITED SLOTS</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6">
            ONLY 8 PERSONAL TRAINING<br />
            <span className="text-gradient">SLOTS LEFT THIS MONTH</span>
          </h2>
          <p className="text-primary-foreground/50 font-body text-lg max-w-xl mx-auto mb-12">
            Join now and get a FREE fitness assessment + trial session. Don't wait — slots fill up fast.
          </p>

          <a
            href="https://wa.me/919505494477?text=I'd like to claim my free trial session at ABS Fitness"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-primary text-primary-foreground px-12 py-6 rounded-lg font-heading text-xl md:text-2xl tracking-wider shadow-glow hover:scale-105 transition-all duration-300 animate-pulse-glow"
          >
            CLAIM YOUR FREE TRIAL NOW
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
