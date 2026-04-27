import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function AboutSection({ image }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="py-20 md:py-32 px-6 bg-secondary/50">
      <div ref={ref} className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-block text-primary text-sm tracking-[0.25em] uppercase font-semibold mb-6"
            >
              Quiénes somos
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl font-medium text-foreground mb-8 leading-tight"
            >
              Una iglesia centrada en Jesús
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-muted-foreground text-lg font-light leading-relaxed mb-6"
            >
              No somos solo un lugar al que vienes en Barcelona, somos una comunidad donde puedes encontrarte con Dios de verdad.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-muted-foreground text-lg font-light leading-relaxed mb-8"
            >
              Creemos en un Dios cercano, que habla, restaura, transforma y cambia vidas. Y cuando nos reunimos, no es casualidad… algo sucede.
            </motion.p>

            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="border-l-2 border-primary/30 pl-5 mb-10"
            >
              <p className="text-foreground/40 text-base font-light italic leading-relaxed">
                "Porque donde dos o tres se reúnen en mi nombre, allí estoy yo en medio de ellos."
              </p>
              <cite className="text-foreground/30 text-sm not-italic tracking-wide mt-1 block">— Mateo 18:20</cite>
            </motion.blockquote>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-8"
            >
              <div>
                <p className="text-3xl font-bold text-foreground">Domingos</p>
                <p className="text-muted-foreground font-light">11:00h</p>
              </div>
              <div className="w-px bg-border hidden sm:block" />
              <div>
                <p className="text-lg font-medium text-foreground">C/ Teresa de Cofrents 23</p>
                <p className="text-muted-foreground font-light">Barcelona, España</p>
              </div>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src={image}
                alt="Comunidad SOS Barcelona"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}