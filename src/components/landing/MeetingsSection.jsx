import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, Users, Star } from 'lucide-react';

const stats = [
  { icon: Calendar, label: "Reuniones", value: "1 a la semana" },
  { icon: Star, label: "Transformando vidas", value: "2 años" },
  { icon: Users, label: "Domingos", value: "11:00h" },
];

export default function MeetingsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 md:py-32 px-6 bg-secondary/40" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block text-primary text-sm tracking-[0.25em] uppercase font-semibold mb-4"
          >
            Este Domingo
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-medium text-foreground mb-6 leading-tight"
          >
            Súmate a una experiencia auténtica
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-muted-foreground text-lg font-light max-w-xl mx-auto"
          >
            Te recibimos con los brazos abiertos en SOS. Lo sobrenatural es nuestra realidad de cada día.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="bg-card border border-border/50 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-2xl font-bold text-foreground mb-1">{s.value}</p>
              <p className="text-muted-foreground font-light text-sm">{s.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground font-light">
            <span className="font-medium text-foreground">C/ Teresa de Cofrents 23</span> · Barcelona, España
          </p>
        </motion.div>
      </div>
    </section>
  );
}