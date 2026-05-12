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
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 text-white/60 text-xs tracking-[0.3em] uppercase font-light mb-8"
        >
          <span className="w-8 h-px bg-white/40" />
          Bienvenido a SOS para tu vida
          <span className="w-8 h-px bg-white/40" />
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-white mb-8 leading-tight">
          Un lugar donde <em className="text-primary not-italic">lo sobrenatural es natural.</em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white/75 text-lg md:text-xl font-light tracking-[0.2em] uppercase mb-12">
          Ganar · Consolidar · Discipular · Enviar
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contacto"
            className="text-white px-10 py-4 rounded-full text-base font-semibold transition-all duration-300 hover:scale-105 text-center"
            style={{ background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))', boxShadow: '0 4px 32px hsla(var(--primary)/0.5)' }}>
            Quiero acercarme a Dios
          </a>
          <a
            href="#contacto"
            className="text-white px-10 py-4 rounded-full text-base font-semibold transition-all duration-300 hover:bg-white/15 text-center"
            style={{ border: '1.5px solid rgba(255,255,255,0.4)', backdropFilter: 'blur(8px)', background: 'rgba(255,255,255,0.08)' }}>
            Planear mi visita
          </a>
        </motion.div>
      </div>
    </section>
  );
}