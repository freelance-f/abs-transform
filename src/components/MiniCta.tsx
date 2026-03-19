import { motion } from "framer-motion";

const MiniCta = () => {
  return (
    <section className="py-16 px-4 bg-gradient-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 blur-[80px] rounded-full w-96 h-96 mx-auto my-auto" />
      <div className="container mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-primary-foreground/70 font-body text-lg mb-6">
            Ready to start your fitness journey?
          </p>
          <a
            href="https://wa.me/919505494477?text=I'd like to book a free trial session at ABS Fitness"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-primary text-primary-foreground px-10 py-4 rounded-lg font-heading text-lg tracking-wider hover:shadow-glow hover:scale-105 transition-all duration-300"
          >
            BOOK FREE TRIAL
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default MiniCta;
