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
    <section className="py-24 md:py-36 px-6 relative overflow-hidden" ref={ref}
      style={{ background: 'linear-gradient(180deg, hsl(var(--background)) 0%, hsl(200 25% 96%) 100%)' }}
    >
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
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 + i * 0.13, ease: [0.22, 1, 0.36, 1] }}
              className="group relative rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-1"
              style={{
                background: 'rgba(255,255,255,0.6)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(255,255,255,0.75)',
                boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
              }}
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5"
                style={{ background: 'linear-gradient(135deg, hsla(var(--primary)/0.15), hsla(var(--accent)/0.1))' }}>
                <p.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-3 tracking-tight">{p.word}</h3>
              <p className="text-muted-foreground font-light text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}