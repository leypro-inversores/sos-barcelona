import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function MessageSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-28 md:py-40 px-6" id="mensaje">
      <div ref={ref} className="max-w-4xl mx-auto text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="inline-block text-primary text-sm tracking-[0.25em] uppercase font-semibold mb-6"
        >
          Lo que creemos
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-8 leading-tight"
        >
          No se trata de religión
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-16 h-0.5 bg-primary mx-auto mb-10"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-muted-foreground text-xl md:text-2xl font-light leading-relaxed max-w-3xl mx-auto"
        >
          Se trata de conocer a Dios de verdad. De descubrir propósito, encontrar paz y vivir una vida transformada desde adentro hacia afuera.
        </motion.p>
      </div>
    </section>
  );
}