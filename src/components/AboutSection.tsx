import { motion } from "framer-motion";
import storefrontImg from "@/assets/abs-fitness-storefront.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 px-4 bg-secondary">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-2xl overflow-hidden shadow-card group">
              <img src={storefrontImg} alt="ABS Fitness storefront" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-heading tracking-[0.3em] text-sm mb-3">WHO WE ARE</p>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground mb-6 leading-tight">
              MORE THAN A GYM —<br />
              <span className="text-gradient">A TRANSFORMATION HUB</span>
            </h2>
            <p className="text-primary-foreground/60 font-body leading-relaxed mb-6">
              We help people overcome pain, lose weight, and rebuild confidence through structured fitness programs and expert coaching.
            </p>
            <p className="text-primary-foreground/60 font-body leading-relaxed mb-8">
              Located in Seethammadara, ABS Fitness combines modern equipment with real guidance — not guesswork. Our trainers, led by Coach Satish, are dedicated to your transformation journey.
            </p>

            <div className="grid grid-cols-3 gap-6">
              {[
                { num: "140+", label: "Members" },
                { num: "5+", label: "Expert Trainers" },
                { num: "4.7", label: "Google Rating" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="text-2xl md:text-3xl font-heading font-bold text-primary">{stat.num}</p>
                  <p className="text-primary-foreground/50 text-xs uppercase tracking-wider mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
