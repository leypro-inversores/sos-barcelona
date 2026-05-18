import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function CoursesImageCarousel({ images }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, 3500);

    return () => window.clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative min-h-[520px] overflow-hidden rounded-[36px] bg-foreground shadow-[0_28px_90px_rgba(0,0,0,0.18)] lg:min-h-[720px]">
      <AnimatePresence mode="wait">
        <motion.img
          key={images[activeIndex]}
          src={images[activeIndex]}
          alt="Cursos SOS Barcelona"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 1.1, ease: 'easeInOut' }}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/70">Academia Family</p>
        <h2 className="font-display text-4xl leading-tight md:text-5xl">Formación para parejas, familias y líderes</h2>
      </div>

      <div className="absolute right-6 top-6 flex gap-2">
        {images.map((image, index) => (
          <button
            key={image}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${index === activeIndex ? 'w-8 bg-white' : 'w-2.5 bg-white/45'}`}
            aria-label={`Ver imagen ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}