import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Crown, Heart, HandHeart, Home } from 'lucide-react';

const values = [
  {
    icon: Crown,
    title: "Jesús",
    desc: "Es el centro de todo lo que hacemos. Su amor y su verdad son el fundamento de nuestra Fe.",
  },
  {
    icon: HandHeart,
    title: "Misericordia",
    desc: "La misericordia de Dios nos alcanza cada día. Su gracia nos sostiene y nos recuerda que somos obra en proceso.",
  },
  {
    icon: Heart,
    title: "Amor",
    desc: "El amor de Dios es lo que nos mueve, nos une y nos transforma como comunidad.",
  },
  {
    icon: Home,
    title: "Servicio genuino que transforme familias",
    desc: "Vivimos para dar, no para recibir. El servicio es una expresión genuina del amor de Dios que restaura hogares.",
  },
];

export default function CultureSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 md:py-32 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block text-primary text-sm tracking-[0.25em] uppercase font-semibold mb-4"
          >
            Cultura SOS
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-medium text-foreground leading-tight"
          >
            Valores que guían cada acción
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="bg-card border border-border/50 rounded-2xl p-8 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <v.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-xl text-foreground mb-3">{v.title}</h3>
              <p className="text-muted-foreground font-light leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}