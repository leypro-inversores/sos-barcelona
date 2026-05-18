import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Clock, Tag } from 'lucide-react';

export default function CourseCard({ course, index }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="overflow-hidden rounded-[28px] border border-border/60 bg-card shadow-[0_18px_55px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(0,0,0,0.12)]"
    >
      <div className="aspect-[4/3] overflow-hidden bg-muted">
        <img src={course.image} alt={course.title} className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
      </div>

      <div className="p-6 md:p-7">
        <h3 className="font-display text-2xl leading-tight text-foreground mb-4">{course.title}</h3>

        <div className="flex flex-wrap gap-2 mb-5">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary">
            <Tag className="h-3.5 w-3.5" /> {course.price}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5 text-xs font-semibold text-secondary-foreground">
            <Clock className="h-3.5 w-3.5" /> {course.duration}
          </span>
        </div>

        <p className="text-sm leading-relaxed text-muted-foreground mb-6">{course.intro}</p>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="group flex w-full items-center justify-between rounded-full border border-primary/25 bg-primary/10 px-5 py-3 text-sm font-semibold text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
        >
          Ver detalles del curso
          <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="mt-6 border-t border-border/70 pt-6 text-sm leading-relaxed text-foreground/75 space-y-4">
                {course.details.map((item, itemIndex) => (
                  Array.isArray(item) ? (
                    <ul key={itemIndex} className="space-y-2 pl-1">
                      {item.map((bullet) => (
                        <li key={bullet} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p key={itemIndex}>{item}</p>
                  )
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  );
}