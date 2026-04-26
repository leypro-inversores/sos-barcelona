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
    <section className="relative w-full flex flex-col items-center">
      {/* Full image, no crop */}
      <div className="w-full relative">
        <img
          src={heroImage}
          alt="SOS Barcelona"
          className="w-full h-auto block"
        />
      </div>

      {/* Buttons below the image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex flex-col sm:flex-row gap-4 justify-center py-10 px-6 bg-background w-full"
      >
        <a
          href="#sobre"
          className="bg-primary text-primary-foreground px-10 py-4 rounded-full text-base font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105 text-center"
        >
          Quiero conocer más
        </a>
        <a
          href="#contacto"
          className="border-2 border-primary text-primary px-10 py-4 rounded-full text-base font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-center"
        >
          Planear mi visita
        </a>
      </motion.div>
    </section>
  );
}