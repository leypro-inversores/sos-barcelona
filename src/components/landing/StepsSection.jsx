import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const steps = [
{ number: "01", title: "Un lugar para ti", desc: "Desde el primer momento, eres bienvenido con amor y como parte de una familia." },
{ number: "02", title: "Conectas con personas reales", desc: "Personas genuinas que te reciben y caminan contigo." },
{ number: "03", title: "Escuchas un mensaje claro", desc: "Palabras prácticas que puedes aplicar a tu vida desde el primer día." },
{ number: "04", title: "Empiezas a conocer a Dios", desc: "A tu ritmo, de forma real y personal." }];


export default function StepsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="py-24 md:py-36 px-6 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, hsl(var(--background)) 0%, hsl(200 25% 96%) 50%, hsl(var(--background)) 100%)' }}
    >
      {/* Decorative glow */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, hsla(var(--primary)/0.06) 0%, transparent 70%)' }} />

      <div ref={ref} className="max-w-7xl mx-auto relative">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block text-primary text-sm tracking-[0.25em] uppercase font-semibold mb-6">
            Proceso
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight tracking-tight">
            Tu primer paso
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) =>
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative group p-7 rounded-2xl transition-all duration-300"
            style={{
              background: 'rgba(255,255,255,0.6)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(255,255,255,0.7)',
              boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
            }}
          >
              <span className="text-7xl font-bold block mb-5 font-display leading-none"
                style={{ background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', opacity: 0.25 }}>
                {step.number}
              </span>
              <h3 className="text-lg font-bold text-foreground mb-3 tracking-tight">{step.title}</h3>
              <p className="text-muted-foreground font-light leading-relaxed text-sm">{step.desc}</p>
              {i < steps.length - 1 &&
            <div className="hidden lg:block absolute top-12 -right-3 w-6 h-px bg-primary/20" />
            }
            </motion.div>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="text-center mt-16">
          <a
            href="#contacto"
            className="inline-flex items-center text-white px-10 py-4 rounded-full text-base font-semibold transition-all duration-300 hover:scale-105"
            style={{ background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))', boxShadow: '0 4px 24px hsla(var(--primary)/0.35)' }}
          >
            Quiero dar el primer paso
          </a>
        </motion.div>
      </div>
    </section>
  );
}