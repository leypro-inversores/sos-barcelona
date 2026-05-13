import React from 'react';
import { motion } from 'framer-motion';

const VIDEO_URL = "https://media.base44.com/videos/public/69ea6ca06c4574e55a2de28d/28f92cbb4_Video.mp4";

export default function HeroSection({ heroImage }) {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: 'brightness(1.4) saturate(1.1)', objectPosition: 'top', transform: 'scale(1.08)' }}
        src={VIDEO_URL}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <span className="w-10 h-px bg-white/40" />
          <span className="text-white/60 text-xs tracking-[0.35em] uppercase font-light">Barcelona · España</span>
          <span className="w-10 h-px bg-white/40" />
        </motion.div>

        <div className="inline-block mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold text-white leading-[1.05] tracking-tight mb-6"
            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.55)' }}
          >
            Aquí hay un hogar<br />
            <em className="not-italic" style={{ color: 'hsl(var(--primary))' }}>para ti y los tuyos</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.75, ease: 'easeOut' }}
            className="text-white/90 text-xl md:text-2xl font-light leading-relaxed max-w-2xl mx-auto tracking-wide"
            style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}
          >
            SOS para tu vida es la familia que te acompaña y te impulsa a vivir el propósito de Dios para ti.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contacto"
            className="relative overflow-hidden text-white px-10 py-4 rounded-full text-base font-semibold transition-all duration-300 hover:scale-105 text-center"
            style={{ background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))', boxShadow: '0 4px 24px hsla(var(--primary)/0.5)' }}
          >
            Quiero acercarme a Dios
          </a>
          <a
            href="#contacto"
            className="text-white px-10 py-4 rounded-full text-base font-semibold transition-all duration-300 text-center hover:bg-white/15"
            style={{ border: '1.5px solid rgba(255,255,255,0.45)', backdropFilter: 'blur(8px)', background: 'rgba(255,255,255,0.08)' }}
          >
            Planear mi visita
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/40 text-xs tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </section>
  );
}