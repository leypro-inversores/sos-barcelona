import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function FinalCTASection({ image }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 md:py-44 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt="Barcelona"
          className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/55 to-black/60" />
      </div>

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-8 leading-tight">
          No estás aquí por casualidad
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white/75 text-xl md:text-2xl font-light leading-relaxed max-w-2xl mx-auto mb-12">
          Dios sigue llamando a las personas… y puede estar llamándote a ti.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contacto"
            className="bg-primary text-primary-foreground px-10 py-4 rounded-full text-base font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105 text-center">
            Quiero acercarme a Dios
          </a>
          <a
            href="#contacto"
            className="border-2 border-white/60 text-white px-10 py-4 rounded-full text-base font-semibold hover:bg-white/10 transition-all duration-300 text-center">
            Planear mi visita
          </a>
        </motion.div>
      </div>
    </section>
  );
}