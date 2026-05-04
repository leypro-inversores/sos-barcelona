import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function WelcomeSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-28 md:py-44 px-6 bg-background" ref={ref}>
      <div className="max-w-3xl mx-auto text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="inline-block text-primary text-sm tracking-[0.25em] uppercase font-semibold mb-6"
        >
          Bienvenido
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-8"
        >
          Aquí hay un hogar para ti y los tuyos
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="w-12 h-0.5 bg-primary mx-auto mb-10 origin-center"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-foreground/60 text-xl md:text-2xl font-light leading-relaxed mb-16"
        >
          SOS para tu vida es la familia que te acompaña y te impulsa a vivir el propósito de Dios para ti.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="w-full max-w-2xl mx-auto"
        >
          <img
            src="https://media.base44.com/images/public/69ea6ca06c4574e55a2de28d/1a972d5ac_FINALPORTADA.png"
            alt="Familia SOS Barcelona"
            className="w-full h-auto object-contain rounded-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}