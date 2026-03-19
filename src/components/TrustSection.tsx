import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    text: "I joined after serious mobility issues following chickengunya fever, along with back and heel pain. Training under Mr Satish for two months has been truly transforming. He has immense patience and deep experience, guiding me step by step with great care.",
    author: "Bhupathiraju Subbaraju",
    highlight: "Mobility & pain recovery",
  },
  {
    text: "I have been training with Mr. Satish for 2 months and it has been a great experience. Under his guidance, I have successfully lost weight and improved my overall fitness. His encouragement and positive attitude keep me consistent and confident.",
    author: "Benny Kolisi",
    highlight: "Weight loss & consistency",
  },
  {
    text: "When I started, I was over 80 kilos, and with his consistent guidance, I cut over 5 kg. He helped me cultivate the mindset of a fighter — the most valuable part of this journey. He designed a personalised workout routine with systematic planning.",
    author: "M V Sai Krishna",
    highlight: "-5kg transformation",
  },
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
              className="bg-secondary-foreground/5 border border-secondary-foreground/10 rounded-2xl p-8 hover:border-primary/20 transition-all duration-300 flex flex-col"
            >
              <div className="flex gap-0.5 mb-2">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-primary/80 font-heading text-xs tracking-wider mb-4">{t.highlight}</span>
              <p className="text-primary-foreground/70 font-body leading-relaxed mb-6 flex-1">"{t.text}"</p>
              <p className="text-primary font-heading tracking-wider text-sm">— {t.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
