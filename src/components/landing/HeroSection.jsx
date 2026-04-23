import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const headlines = [
  "Conocer a Dios puede cambiarlo todo",
  "Barcelona necesita esperanza. Empieza contigo.",
  "No es religión. Es una relación con Dios.",
  "Dios sigue transformando vidas hoy",
];

export default function HeroSection({ heroImage }) {
  const [currentHeadline, setCurrentHeadline] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeadline(prev => (prev + 1) % headlines.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Comunidad SOS Barcelona adorando juntos"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-6"
        >
          <span className="inline-block text-white/60 text-sm tracking-[0.3em] uppercase font-medium">
            Iglesia SOS Barcelona
          </span>
        </motion.div>

        <div className="h-32 sm:h-28 md:h-24 flex items-center justify-center mb-8">
          <motion.h1
            key={currentHeadline}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-medium leading-tight"
          >
            {headlines[currentHeadline]}
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-white/75 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed"
        >
          En SOS Barcelona creemos que Dios es real, cercano y capaz de transformar cualquier vida. Este puede ser tu comienzo.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#sobre"
            className="bg-primary text-primary-foreground px-10 py-4 rounded-full text-base font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105"
          >
            Quiero conocer más
          </a>
          <a
            href="#contacto"
            className="border-2 border-white/30 text-white px-10 py-4 rounded-full text-base font-semibold hover:bg-white/10 transition-all duration-300"
          >
            Planear mi visita
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="w-6 h-6 text-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}