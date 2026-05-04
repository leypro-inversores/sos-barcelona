import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Target, Heart, BookOpen, Send } from 'lucide-react';

const pillars = [
  { icon: Target, word: "Ganar", desc: "Alcanzar a quienes aún no conocen a Dios." },
  { icon: Heart, word: "Consolidar", desc: "Fortalecer a cada persona en su fe y carácter." },
  { icon: BookOpen, word: "Discipular", desc: "Formar creyentes maduros que conozcan la Palabra." },
  { icon: Send, word: "Enviar", desc: "Movilizar al pueblo de Dios a cumplir su llamado." },
];

export default function PurposeSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 md:py-32 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block text-primary text-sm tracking-[0.25em] uppercase font-semibold mb-4"
          >
            Misión
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-medium text-foreground mb-4 leading-tight"
          >
            Nuestro propósito es
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-muted-foreground text-lg font-light"
          >
            La esencia de nuestra misión: estas son las cuatro palabras que impulsan nuestro corazón y le dan sentido a cada paso que damos como iglesia.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.12 }}
              className="bg-card border border-border/50 rounded-2xl p-8 text-center hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <p.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-foreground mb-3">{p.word}</h3>
              <p className="text-muted-foreground font-light text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}