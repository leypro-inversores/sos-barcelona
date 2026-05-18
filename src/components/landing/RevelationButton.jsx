import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function RevelationButton({ item, index, isInView, onClick }) {
  const Icon = item.icon;

  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.12 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      onClick={onClick}
      className="group relative min-h-[112px] overflow-hidden rounded-[26px] border border-cyan-300/20 bg-white/8 p-5 text-left backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:border-cyan-300/55 hover:bg-white/12"
      style={{ boxShadow: '0 22px 70px rgba(0, 0, 0, 0.24)' }}
    >
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: 'radial-gradient(circle at top right, rgba(34,211,238,0.18), transparent 45%), radial-gradient(circle at bottom left, rgba(245,196,93,0.14), transparent 38%)' }}
      />
      <div className="relative flex h-full items-center justify-between gap-5">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/35 bg-cyan-300/12 text-cyan-200 transition-all duration-500 group-hover:scale-110 group-hover:text-white"
          style={{ boxShadow: '0 0 32px rgba(34,211,238,0.18)' }}
        >
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="relative flex-1 text-lg font-semibold leading-tight text-white md:text-xl">
          {item.title}
        </h3>
        <ArrowUpRight className="h-5 w-5 shrink-0 text-amber-200/70 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-amber-200" />
      </div>
    </motion.button>
  );
}