import React from 'react';
import { motion } from 'framer-motion';

const VIDEO_URL = "https://media.base44.com/videos/public/69ea6ca06c4574e55a2de28d/a578f25b2_SOSBARCELONA.mp4";

export default function HeroSection({ heroImage }) {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ filter: 'brightness(1.4) saturate(1.1)' }}
        src={VIDEO_URL}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/25" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
          className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-tight mb-6"
        >
          Aquí hay un hogar para ti y los tuyos
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.7, ease: 'easeOut' }}
          className="text-white/80 text-xl md:text-2xl font-light leading-relaxed max-w-2xl mx-auto mb-12"
        >
          SOS para tu vida es la familia que te acompaña y te impulsa a vivir el propósito de Dios para ti.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contacto"
            className="bg-primary text-primary-foreground px-10 py-4 rounded-full text-base font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105 text-center"
          >
            Quiero acercarme a Dios
          </a>
          <a
            href="#contacto"
            className="border-2 border-white/60 text-white px-10 py-4 rounded-full text-base font-semibold hover:bg-white/10 transition-all duration-300 text-center"
          >
            Planear mi visita
          </a>
        </motion.div>
      </div>
    </section>
  );
}