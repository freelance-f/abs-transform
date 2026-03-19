import { motion } from "framer-motion";
import { Award, Users, HeartPulse } from "lucide-react";
import coachImg from "@/assets/coach-satish.jpg";

const highlights = [
  { icon: Award, text: "Certified Fitness Trainer" },
  { icon: Users, text: "140+ Transformations" },
  { icon: HeartPulse, text: "Pain Recovery Specialist" },
];

const TrainerSection = () => {
  return (
    <section className="py-24 md:py-32 px-4 bg-secondary">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-heading tracking-[0.3em] text-sm mb-3">EXPERT GUIDANCE</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground">
            MEET YOUR <span className="text-gradient">COACH</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-glow/20">
              <img
                src={coachImg}
                alt="Coach Satish - Head Trainer at ABS Fitness"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Accent border */}
            <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-primary/30 rounded-2xl -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-heading tracking-[0.2em] text-sm mb-2">HEAD TRAINER</p>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
              COACH SATISH
            </h3>
            <p className="text-primary-foreground/60 font-body text-lg leading-relaxed mb-8">
              Helping members lose weight, recover from pain, and build strength. With years of experience in personal training, Coach Satish brings dedication and expertise to every session.
            </p>

            <div className="space-y-4">
              {highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <h.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-primary-foreground/80 font-body">{h.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrainerSection;
