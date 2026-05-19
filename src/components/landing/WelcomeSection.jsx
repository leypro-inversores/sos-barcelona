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
          className="inline-block text-primary text-sm tracking-[0.25em] uppercase font-semibold mb-6">
          
          Bienvenido
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight mb-8 normal-case">
          
          ¡Queremos conocerte! En SOS tenemos un lugar para ti
        </motion.h2>

        



        
        

        






        

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="w-full max-w-2xl mx-auto">
          
          <img src="https://media.base44.com/images/public/69ea6ca06c4574e55a2de28d/e0f58a8e2_NUEVA_PORTADA.png"

          alt="Familia SOS Barcelona"
          className="w-full h-auto object-contain rounded-2xl px-2 py-2 mx-6" />
          
        </motion.div>
      </div>
    </section>);

}