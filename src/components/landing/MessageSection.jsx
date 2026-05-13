import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function MessageSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-28 md:py-44 px-6" id="mensaje">
      <div ref={ref} className="max-w-3xl mx-auto text-center">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.05 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-8">
          
          Una vida con Dios<br />lo cambia todo
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="w-12 h-0.5 bg-primary mx-auto mb-10 origin-center hidden" />
        

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="text-foreground/60 text-xl md:text-2xl font-light leading-relaxed mb-12">
          
          Conocerlo, caminar con Él y vivir una transformación real<br className="hidden md:block" /> desde adentro hacia afuera.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-foreground/35 text-sm font-light italic leading-relaxed">
          
          "Yo soy el camino, la verdad y la vida…"
          <span className="block mt-1 not-italic tracking-wider text-xs">— Juan 14:6</span>
        </motion.div>

      </div>
    </section>);

}