import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Crown, Heart, HandHeart, Home, Zap } from 'lucide-react';

const values = [
{
  icon: Crown,
  title: "Jesús",
  desc: "Es el centro de todo lo que hacemos. Su amor y su verdad son el fundamento de nuestra fe."
},
{
  icon: HandHeart,
  title: "Misericordia",
  desc: "La misericordia de Dios nos alcanza cada día. Su gracia nos sostiene y nos recuerda que somos obra en proceso."
},
{
  icon: Heart,
  title: "Amor",
  desc: "El amor de Dios es lo que nos mueve, nos une y nos transforma como comunidad."
},
{
  icon: Home,
  title: "Servicio genuino que transforme familias",
  desc: "Vivimos para dar, no para recibir. El servicio es una expresión genuina del amor de Dios que restaura hogares."
},
{
  icon: Zap,
  title: "Poder",
  desc: "No vivimos de teor\xEDas, sino de Su presencia real y poderosa, que se mueve y act\xFAa en comuni\xF3n con la fe de sus hijos."
}];


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
            className="inline-block text-primary text-sm tracking-[0.25em] uppercase font-semibold mb-4">
            
            Cultura SOS
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-medium text-foreground leading-tight">
            
            Valores que guían cada acción
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {values.map((v, i) =>
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 + i * 0.13, ease: [0.22, 1, 0.36, 1] }}
            className="group relative rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1"
            style={{
              background: 'rgba(255,255,255,0.65)',
              backdropFilter: 'blur(18px)',
              border: '1px solid rgba(255,255,255,0.8)',
              boxShadow: '0 4px 24px rgba(0,0,0,0.07), 0 1px 4px rgba(0,0,0,0.04)'
            }}>
            
              {/* Top gradient line */}
              <div className="absolute top-0 left-6 right-6 h-px rounded-full"
            style={{ background: 'linear-gradient(90deg, transparent, hsl(var(--primary)), transparent)', opacity: 0.4 }} />

              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
            style={{ background: 'linear-gradient(135deg, hsla(var(--primary)/0.15), hsla(var(--accent)/0.12))' }}>
                <v.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-bold text-lg text-foreground mb-3 tracking-tight leading-snug">{v.title}</h3>
              <p className="text-muted-foreground font-light leading-relaxed text-sm">{v.desc}</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}