import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const IMAGES = [
  "https://media.base44.com/images/public/69ea6ca06c4574e55a2de28d/f409b915b_ACTIVIDADNIOS.jpg",
  "https://media.base44.com/images/public/69ea6ca06c4574e55a2de28d/864d17f6a_NIOS1.jpg",
  "https://media.base44.com/images/public/69ea6ca06c4574e55a2de28d/6c371c9c0_NIOS2.jpg",
  "https://media.base44.com/images/public/69ea6ca06c4574e55a2de28d/6e7f988ca_NIOBATERIA.jpg",
  "https://media.base44.com/images/public/69ea6ca06c4574e55a2de28d/037085c5f_NIOSACTIVIDAD.jpg",
  "https://media.base44.com/images/public/69ea6ca06c4574e55a2de28d/36bc00ad4_MATERIALKIDS1.jpg",
  "https://media.base44.com/images/public/69ea6ca06c4574e55a2de28d/03e8e2dc0_MATERIALKIDS2.jpg",
  "https://media.base44.com/images/public/69ea6ca06c4574e55a2de28d/c8825f346_WhatsAppImage2026-04-24at2013073.jpg",
];

export default function KidsGallery() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % IMAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden bg-foreground/5">
      <AnimatePresence mode="sync">
        <motion.img
          key={current}
          src={IMAGES[current]}
          alt="SOS Kids"
          className="absolute inset-0 w-full h-full object-cover md:object-contain"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          loading="lazy"
        />
      </AnimatePresence>

      {/* Subtle gradient overlay at the bottom */}
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/30 to-transparent" />

      {/* Dot indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              i === current ? 'bg-white w-4' : 'bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
}