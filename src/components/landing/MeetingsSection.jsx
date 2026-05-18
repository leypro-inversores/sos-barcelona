import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, Users, Star, MapPin } from 'lucide-react';

const stats = [
  { icon: Calendar, label: "Reuniones", value: "1 a la semana" },
  { icon: Star, label: "Transformando vidas", value: "2 años" },
  { icon: Users, label: "Domingos", value: "11:00h" },
];

export default function MeetingsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 md:py-36 px-6 relative overflow-hidden" ref={ref}
      style={{ background: 'linear-gradient(180deg, hsl(200 25% 96%) 0%, hsl(var(--background)) 100%)' }}
    >
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
            className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground mb-8 leading-[1.12] tracking-tight"
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
              transition={{ duration: 0.7, delay: 0.2 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-1"
              style={{
                background: 'rgba(255,255,255,0.65)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(255,255,255,0.8)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
              }}
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
            <a
              href="https://www.google.com/maps/search/?api=1&query=Carrer+de+Teresa+de+Cofrents+23+Barcelona"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 font-medium text-foreground transition-colors duration-300 hover:text-primary"
            >
              <MapPin className="h-4 w-4 text-primary transition-transform duration-300 group-hover:-translate-y-0.5" />
              <span className="underline decoration-transparent underline-offset-4 transition-colors duration-300 group-hover:decoration-primary">C/ Teresa de Cofrents 23</span>
            </a>{' '}
            · Barcelona, España
          </p>
        </motion.div>
      </div>
    </section>
  );
}