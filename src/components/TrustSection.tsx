import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  { text: "Lost 5kg in 2 months with expert guidance. The trainers really know what they're doing!", author: "Ravi K." },
  { text: "Best trainers & motivating environment. Coach Satish helped me recover from my back pain.", author: "Priya M." },
  { text: "Premium facility with clean equipment. Feels like a high-end gym in a metro city.", author: "Arjun D." },
];

const TrustSection = () => {
  return (
    <section className="py-24 md:py-32 px-4 bg-secondary">
      <div className="container mx-auto">
        {/* Rating bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 mb-16"
        >
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-primary text-primary" />
            ))}
          </div>
          <p className="text-primary-foreground/80 font-body text-lg">
            <span className="font-semibold text-primary-foreground">4.7 Rating</span> · 140+ Happy Members
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-secondary-foreground/5 border border-secondary-foreground/10 rounded-2xl p-8 hover:border-primary/20 transition-all duration-300"
            >
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-primary-foreground/70 font-body leading-relaxed mb-4">"{t.text}"</p>
              <p className="text-primary font-heading tracking-wider text-sm">— {t.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
