import { motion } from "framer-motion";
import { Trophy, Brain, Sparkles, Target } from "lucide-react";

const reasons = [
  { icon: Trophy, title: "Real Results", desc: "Members lose weight, gain strength, and recover mobility with proven programs." },
  { icon: Brain, title: "Expert Trainers", desc: "Guidance from experienced coaches who understand your body and goals." },
  { icon: Sparkles, title: "Premium Facility", desc: "Well-maintained, hygienic environment with top-grade equipment." },
  { icon: Target, title: "Personalized Plans", desc: "No generic workouts — every plan is designed specifically for you." },
];

const WhyChooseSection = () => {
  return (
    <section className="py-24 md:py-32 px-4 bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-heading tracking-[0.3em] text-sm mb-3">THE DIFFERENCE</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground">
            WHY CHOOSE ABS FITNESS
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-8 rounded-2xl bg-card border border-border hover:border-primary/20 hover:-translate-y-1 transition-all duration-300 shadow-card hover:shadow-glow"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <r.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-card-foreground mb-2">{r.title}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
