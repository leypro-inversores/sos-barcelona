import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "María González",
    quote: "Llegué a SOS Barcelona sin esperanza, buscando algo que llenara un vacío que nada podía llenar. Encontré a Dios y mi vida cambió completamente. Hoy tengo propósito, paz y una familia espiritual que me apoya.",
  },
  {
    name: "Carlos Mendoza",
    quote: "Nunca fui religioso y tenía muchos prejuicios con las iglesias. Pero cuando vine a SOS descubrí que no se trata de religión, se trata de una relación real con Dios. Fue lo mejor que me ha pasado.",
  },
  {
    name: "Ana Ruiz",
    quote: "Dios me encontró en mi peor momento. A través de esta comunidad aprendí que su amor es real y transformador. Hoy soy una persona completamente diferente, llena de fe y esperanza.",
  },
];

export default function TestimonialsSection({ images }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonios" className="py-20 md:py-32 px-6 bg-secondary/50">
      <div ref={ref} className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block text-primary text-sm tracking-[0.25em] uppercase font-semibold mb-6"
          >
            Testimonios
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-medium text-foreground leading-tight"
          >
            Historias reales
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="bg-card rounded-2xl p-8 border border-border/50 hover:shadow-lg transition-all duration-500"
            >
              <Quote className="w-8 h-8 text-primary/30 mb-6" />
              <p className="text-foreground/80 font-light leading-relaxed mb-8 text-base">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img
                    src={images[i]}
                    alt={t.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">Miembro de SOS Barcelona</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}