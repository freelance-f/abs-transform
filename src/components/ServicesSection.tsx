import { motion } from "framer-motion";
import { Dumbbell, Flame, Activity, UserCheck, Zap } from "lucide-react";

const services = [
  { icon: Dumbbell, title: "Strength Training", desc: "Build muscle with structured programs and progressive overload techniques." },
  { icon: Flame, title: "Weight Loss Programs", desc: "Burn fat the right way with structured workouts, expert guidance, and real accountability." },
  { icon: Activity, title: "Mobility & Rehab", desc: "Fix stiffness, pain & flexibility issues with guided recovery programs." },
  { icon: UserCheck, title: "Personal Training", desc: "1-on-1 expert coaching tailored to your goals, body type, and fitness level." },
  { icon: Zap, title: "Functional & HIIT", desc: "Battle ropes, sleds, conditioning — high-intensity workouts that deliver results." },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 px-4 bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-heading tracking-[0.3em] text-sm mb-3">WHAT WE OFFER</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground">
            OUR SERVICES
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-300 border border-border hover:border-primary/30 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <s.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-card-foreground mb-3">{s.title}</h3>
              <p className="text-muted-foreground font-body leading-relaxed text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
