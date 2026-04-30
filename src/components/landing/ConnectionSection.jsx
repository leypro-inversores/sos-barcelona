import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Heart, Search, Compass, RefreshCw, Sunrise } from 'lucide-react';

const items = [
{ icon: Search, text: "Si sientes que te falta algo" },
{ icon: Heart, text: "Si est\xE1s buscando paz en medio del caos" },
{ icon: Compass, text: "Si quieres acercarte a Dios pero no sabes cómo" },
{ icon: RefreshCw, text: "Si estás cansado de lo superficial" },
{ icon: Sunrise, text: "Si necesitas un nuevo comienzo" }];


export default function ConnectionSection({ image }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-32 px-6 bg-secondary/50">
      <div ref={ref} className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative">
            
            <div className="aspect-[4/5] rounded-2xl overflow-hidden relative">
              <img
                src="https://media.base44.com/images/public/69ea6ca06c4574e55a2de28d/4797824f0_WEB.jpg"
                alt="Comunidad SOS Barcelona"
                className="w-full h-full object-cover" />
              
              <div className="absolute inset-0 bg-black/15 rounded-2xl" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
          </motion.div>

          {/* Content */}
          <div>
            






            

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl font-medium text-foreground mb-12 leading-tight">
              
              Tal vez esto es para ti
            </motion.h2>

            <div className="space-y-6">
              {items.map((item, i) =>
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                className="flex items-center gap-5 group">
                
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-lg text-foreground/80 font-light">{item.text}</p>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>);

}