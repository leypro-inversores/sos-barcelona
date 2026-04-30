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
    <section className="py-20 md:py-32 px-6">
      <div ref={ref} className="max-w-7xl mx-auto">
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
            className="font-display text-4xl md:text-5xl font-medium text-foreground leading-tight">
            
            Tu primer paso
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) =>
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
            className="relative">
            
              <span className="text-6xl font-bold text-primary/10 block mb-4 font-display">
                {step.number}
              </span>
              <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground font-light leading-relaxed">{step.desc}</p>
              {i < steps.length - 1 &&
            <div className="hidden lg:block absolute top-8 right-0 translate-x-1/2 w-12 h-px bg-border" />
            }
            </motion.div>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16">
          
          <a
            href="#contacto" className="inline-flex bg-primary text-primary-foreground px-10 py-4 rounded-full text-base font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105">Quiero dar el primer paso



          </a>
        </motion.div>
      </div>
    </section>);

}