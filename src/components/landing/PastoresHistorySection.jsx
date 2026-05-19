import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const values = [
  { label: "Obediencia, perseverancia y fe", desc: "Los pilares que sostienen cada paso de su ministerio." },
  { label: "Testimonios reales", desc: "Historias de sanidad y restauración que dan vida a la visión." },
  { label: "Una visión que nació de la prueba", desc: "Y que sigue creciendo de la mano de Dios." },
];

export default function PastoresHistorySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 md:py-32 px-6 bg-secondary/40" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src="https://media.base44.com/images/public/69ea6ca06c4574e55a2de28d/bb2bd5d31_PASTORES8.jpg"
                alt="Pastores Mauricio y Mónica Rodríguez"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
          </motion.div>

          {/* Content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-block text-primary text-sm tracking-[0.25em] uppercase font-semibold mb-4"
            >
              Nuestra historia
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl font-medium text-foreground mb-6 leading-tight"
            >
              Mauricio y Mónica Rodríguez
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-muted-foreground text-lg font-light leading-relaxed mb-10"
            >
              Un solo instante en un encuentro personal con Dios fue suficiente para que los pastores Mauricio y Mónica Rodríguez comprendieran el propósito divino para sus vidas. Desde aquel momento, el fuego de su llamado arde en sus corazones y los impulsa a superar cualquier obstáculo hasta ver la gloria de Dios manifiesta. Sus vidas, aunque marcadas por un pasado tormentoso, han sido plenamente restauradas a través de la obediencia, la perseverancia y, sobre todo, la inmerecida gracia de Dios.
            </motion.p>

            <div className="grid gap-4">
              {values.map((v, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.35 + i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">{v.label}</p>
                    <p className="text-muted-foreground font-light text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}