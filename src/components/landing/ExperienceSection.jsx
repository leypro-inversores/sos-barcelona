import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sparkles, BookOpen, Music, Users } from 'lucide-react';

const experiences = [
  {
    icon: Sparkles,
    title: "Presencia real de Dios",
    desc: "Momentos donde lo sobrenatural se vuelve natural y puedes experimentar su presencia de forma tangible.",
  },
  {
    icon: BookOpen,
    title: "Mensajes claros y aplicables",
    desc: "Enseñanzas que conectan la Palabra de Dios con tu vida diaria de manera práctica y relevante.",
  },
  {
    icon: Music,
    title: "Música en vivo",
    desc: "Adoración genuina que te lleva a un encuentro profundo con Dios a través de la música.",
  },
  {
    icon: Users,
    title: "Comunidad auténtica",
    desc: "Personas reales que caminan juntas, se apoyan y crecen en fe como familia.",
  },
];

export default function ExperienceSection({ images }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experiencia" className="py-20 md:py-32 px-6">
      <div ref={ref} className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block text-primary text-sm tracking-[0.25em] uppercase font-semibold mb-6"
          >
            Experiencia
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-medium text-foreground leading-tight"
          >
            Esto es lo que vivirás
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border/50 hover:border-primary/20 transition-all duration-500 hover:shadow-lg"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={images[i]}
                  alt={exp.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <exp.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{exp.title}</h3>
                <p className="text-muted-foreground font-light leading-relaxed">{exp.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}