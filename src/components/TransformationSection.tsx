import { motion } from "framer-motion";
import { TrendingDown, Calendar } from "lucide-react";

const transformations = [
  {
    name: "Rajesh M.",
    result: "-14kg",
    duration: "11 weeks",
    desc: "Lost weight and gained confidence with structured training and nutrition guidance.",
  },
  {
    name: "Kavitha S.",
    result: "-9kg",
    duration: "8 weeks",
    desc: "Overcame back pain and transformed her body through personalized rehab and strength training.",
  },
  {
    name: "Arjun P.",
    result: "-11kg",
    duration: "10 weeks",
    desc: "Went from sedentary to strong with consistent coaching and accountability.",
  },
];

const TransformationSection = () => {
  return (
    <section className="py-24 md:py-32 px-4 bg-secondary">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-heading tracking-[0.3em] text-sm mb-3">TRANSFORMATIONS</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground">
            REAL PEOPLE. <span className="text-gradient">REAL RESULTS.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {transformations.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative bg-secondary-foreground/5 border border-secondary-foreground/10 rounded-2xl p-8 text-center hover:border-primary/30 transition-all duration-300 group"
            >
              {/* Big result number */}
              <div className="text-5xl md:text-6xl font-heading font-bold text-gradient mb-2">
                {t.result}
              </div>
              <div className="flex items-center justify-center gap-2 mb-6">
                <Calendar className="w-4 h-4 text-primary/70" />
                <p className="text-primary font-heading tracking-wider text-sm">in {t.duration}</p>
              </div>

              <p className="text-primary-foreground/50 font-body text-sm leading-relaxed mb-4">
                {t.desc}
              </p>

              <p className="text-primary-foreground/70 font-heading text-sm tracking-wider">— {t.name}</p>

              {/* Subtle glow on hover */}
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;
