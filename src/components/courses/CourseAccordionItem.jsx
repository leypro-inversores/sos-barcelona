import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function CourseAccordionItem({ course }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className="rounded-[26px] border border-[#d6b76d]/25 bg-white/80 p-6 shadow-[0_14px_45px_rgba(24,35,55,0.08)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_60px_rgba(24,35,55,0.12)]">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#b6913c]">{course.label}</p>
          <h3 className="font-display text-2xl leading-tight text-[#17233d]">{course.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{course.summary}</p>
        </div>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#17233d] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-primary hover:shadow-lg hover:shadow-primary/20"
        >
          Ver detalles
          <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.42, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="mt-6 space-y-4 border-t border-[#d6b76d]/25 pt-6 text-sm leading-relaxed text-foreground/75">
              <div className="flex flex-wrap gap-2">
                {course.meta.map((item) => (
                  <span key={item} className="rounded-full bg-[#f6efe0] px-3 py-1.5 text-xs font-semibold text-[#17233d]">
                    {item}
                  </span>
                ))}
              </div>

              {course.details.map((item, index) => (
                Array.isArray(item) ? (
                  <ul key={index} className="space-y-2">
                    {item.map((bullet) => (
                      <li key={bullet} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#b6913c]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p key={index}>{item}</p>
                )
              ))}

              {course.cta && (
                <a
                  href={course.cta.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-primary px-7 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white shadow-lg shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/40 sm:w-auto"
                >
                  {course.cta.label}
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}