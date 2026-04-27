import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const ALL_IMAGES = [
  "https://media.base44.com/images/public/69ea6ca06c4574e55a2de28d/e372e3868_ALABARADIOS.jpg",
  "https://media.base44.com/images/public/69ea6ca06c4574e55a2de28d/008666904_CENANAVIDAD.jpg",
  "https://media.base44.com/images/public/69ea6ca06c4574e55a2de28d/0d4494408_COMPROMISO.jpg",
  "https://media.base44.com/images/public/69ea6ca06c4574e55a2de28d/c889e7178_LIBERACIN2.jpg",
  "https://media.base44.com/images/public/69ea6ca06c4574e55a2de28d/9b30f4ae6_LIBERACIN3.jpg",
  "https://media.base44.com/images/public/69ea6ca06c4574e55a2de28d/fda781bfd_MATRIMONIO2.jpg",
  "https://media.base44.com/images/public/69ea6ca06c4574e55a2de28d/998d2aa90_MATRIMONIO.jpg",
  "https://media.base44.com/images/public/69ea6ca06c4574e55a2de28d/9b139975d_PREDICAGENTE.jpg",
  "https://media.base44.com/images/public/69ea6ca06c4574e55a2de28d/9e182142d_WhatsAppImage2026-04-24at2013027.jpg",
  "https://media.base44.com/images/public/69ea6ca06c4574e55a2de28d/c7b1ac399_WhatsAppImage2026-04-24at2013032.jpg",
];

// Layout: 5 cells — [big-left, top-right, mid-right, bottom-right-a, bottom-right-b]
// We show 5 images at a time, cycling one cell at a time
const CELL_COUNT = 5;

function getInitialSet() {
  return ALL_IMAGES.slice(0, CELL_COUNT);
}

export default function InstagramSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  // Each cell has its own current image index into ALL_IMAGES
  const [cellIndices, setCellIndices] = useState(() =>
    Array.from({ length: CELL_COUNT }, (_, i) => i)
  );
  const [fadingCell, setFadingCell] = useState(null);
  const [nextIndex, setNextIndex] = useState(CELL_COUNT); // next image index in pool

  useEffect(() => {
    // Rotate one random cell every 3.5s
    const interval = setInterval(() => {
      const cellToUpdate = Math.floor(Math.random() * CELL_COUNT);
      setFadingCell(cellToUpdate);

      setTimeout(() => {
        setCellIndices(prev => {
          const updated = [...prev];
          updated[cellToUpdate] = nextIndex % ALL_IMAGES.length;
          return updated;
        });
        setNextIndex(prev => (prev + 1) % ALL_IMAGES.length);
        setFadingCell(null);
      }, 700);
    }, 3500);

    return () => clearInterval(interval);
  }, [nextIndex]);

  const imgs = cellIndices.map(i => ALL_IMAGES[i]);

  return (
    <section ref={ref} className="bg-[#111] py-16 px-4 md:px-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="text-center mb-10"
      >
        <p className="text-primary text-sm tracking-[0.2em] uppercase font-semibold mb-3 flex items-center justify-center gap-2">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
          </svg>
          @somos_sosbarcelona
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-medium text-white">
          Así se ve una vida con Dios
        </h2>
      </motion.div>

      {/* Collage Grid */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-6xl mx-auto grid gap-2"
        style={{
          display: 'grid',
          gridTemplateColumns: '3fr 2fr 2fr',
          gridTemplateRows: '280px 280px',
          gap: '8px',
        }}
      >
        {/* Cell 0 — big left, spans 2 rows */}
        <CollageCell
          src={imgs[0]}
          fading={fadingCell === 0}
          style={{ gridColumn: '1', gridRow: '1 / 3', borderRadius: '16px' }}
        />
        {/* Cell 1 — top center */}
        <CollageCell
          src={imgs[1]}
          fading={fadingCell === 1}
          style={{ gridColumn: '2', gridRow: '1', borderRadius: '16px' }}
        />
        {/* Cell 2 — top right */}
        <CollageCell
          src={imgs[2]}
          fading={fadingCell === 2}
          style={{ gridColumn: '3', gridRow: '1', borderRadius: '16px' }}
        />
        {/* Cell 3 — bottom center */}
        <CollageCell
          src={imgs[3]}
          fading={fadingCell === 3}
          style={{ gridColumn: '2', gridRow: '2', borderRadius: '16px' }}
        />
        {/* Cell 4 — bottom right */}
        <CollageCell
          src={imgs[4]}
          fading={fadingCell === 4}
          style={{ gridColumn: '3', gridRow: '2', borderRadius: '16px' }}
        />
      </motion.div>
    </section>
  );
}

function CollageCell({ src, fading, style }) {
  return (
    <div className="overflow-hidden relative" style={style}>
      <AnimatePresence mode="wait">
        <motion.img
          key={src}
          src={src}
          alt=""
          className="w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: fading ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: 'easeInOut' }}
          style={{ position: 'absolute', inset: 0 }}
        />
      </AnimatePresence>
    </div>
  );
}