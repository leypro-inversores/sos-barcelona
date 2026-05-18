import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Heart, Search, Compass, RefreshCw, Sunrise } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import RevelationButton from './RevelationButton';

const revelations = [
  {
    icon: Search,
    title: 'Si sientes que algo te falta',
    content: `Si sientes que te falta algo, quizá no sea porque Dios te haya abandonado, sino porque tu alma fue creada para algo más profundo. Muchas veces buscamos llenar vacíos con cosas temporales, pero nada puede satisfacer la necesidad más profunda del corazón.

A veces, lo que falta no es algo… es Alguien.

En SOS Barcelona creemos en vidas restauradas, familias transformadas y personas reales que descubrieron que Dios sigue haciendo milagros. Aquí encontrarás una familia y un lugar donde caminar acompañado.

Tu historia aún no termina. Lo mejor que Dios tiene para ti puede comenzar hoy`
  },
  {
    icon: Heart,
    title: 'Si estás buscando paz en medio del caos',
    content: `Si estás buscando paz en medio del caos, necesitas saber algo importante: la paz verdadera no nace de la ausencia de problemas, sino de la presencia de Dios en medio de ellos.

Muchos intentan apagar la ansiedad controlándolo todo o aparentando estar bien, pero Dios no nos creó para cargar solos con el peso de la vida. Aun en medio de la tormenta, Él sigue teniendo el control.

La paz que tanto buscas no es un lugar… es una relación con Jesús.

Y queremos invitarte a vivirlo junto a nosotros en SOS Barcelona. Aquí creemos que nadie llega por casualidad y que Dios sigue cambiando vidas. Hay un lugar para ti.

Tu paz puede comenzar hoy`
  },
  {
    icon: Compass,
    title: 'Si quieres acercarte a Dios pero no sabes cómo',
    content: `Si quieres acercarte a Dios pero no sabes cómo, necesitas saber algo: Dios ya dio el primer paso hacia ti.

Muchos creen que primero deben arreglar su vida o ser perfectos para acercarse a Él, pero Jesús vino por personas cansadas, heridas y necesitadas de esperanza. Acercarse a Dios no empieza con religión, empieza con una relación.

Quizá ese vacío o inquietud que sientes sea un llamado a recordar que fuiste creado para caminar con Él. No necesitas tener todas las respuestas para comenzar. Solo necesitas dar un paso.

Y queremos invitarte a darlo junto a nosotros en SOS Barcelona. Aquí creemos que Dios sigue restaurando corazones, transformando vidas y dando un nuevo propósito. Hay una familia lista para caminar contigo.

Dios todavía transforma vidas… y la tuya también puede ser una de ellas.`
  },
  {
    icon: RefreshCw,
    title: 'Si estás cansado de lo superficial',
    content: `Si estás cansado de lo superficial, quizá tu alma ya entendió algo: nada vacío puede llenar un corazón eterno. Vivimos rodeados de apariencias y distracciones, pero cuando la vida se construye solo sobre lo externo, el corazón tarde o temprano comienza a sentirse vacío.

Dios no te creó para vivir distraído, sino para vivir con propósito. Tal vez ese cansancio que sientes no sea debilidad, sino el alma recordándote que fue creada para algo más grande.

Hay una vida más profunda y auténtica esperándote.

Y queremos invitarte a descubrirla con nosotros en SOS Barcelona. Aquí creemos en personas reales, corazones restaurados, familias sanadas y vidas transformadas por Jesús.

No fuiste creado para vivir vacío. Fuiste creado para vivir lleno de propósito, fe y esperanza.`
  },
  {
    icon: Sunrise,
    title: 'Si necesitas un nuevo comienzo',
    content: `Si necesitas un nuevo comienzo, recuerda algo: Dios es especialista en restaurar lo que parecía perdido.

A veces cargamos culpa, cansancio, heridas y la sensación de que ya es tarde para cambiar. Pero mientras Dios siga obrando, nunca es el final de tu historia. Él no solo perdona; restaura, levanta y da nuevas oportunidades.

No importa cuántas veces hayas caído. En Cristo siempre existe la posibilidad de volver a empezar.

Y queremos invitarte a vivir ese nuevo comienzo junto a nosotros en SOS Barcelona. Aquí creemos en segundas oportunidades y hemos sido testigos de vidas transformadas, familias restauradas y personas encontrando esperanza en Jesús.

Tu pasado no tiene la última palabra. Dios todavía puede escribir una nueva historia contigo.`
  }
];

export default function ConnectionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selected, setSelected] = useState(null);
  const SelectedIcon = selected?.icon;

  return (
    <section className="relative overflow-hidden px-6 py-24 md:py-36" style={{ background: 'linear-gradient(145deg, #05142f 0%, #08214d 52%, #020817 100%)' }}>
      <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-cyan-300/15 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-amber-300/10 blur-3xl" />

      <div ref={ref} className="relative mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-3xl text-center md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="mb-5 inline-block text-sm font-semibold uppercase tracking-[0.32em] text-cyan-200"
          >
            Revela tu siguiente paso
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl font-semibold leading-tight text-white md:text-6xl"
          >
            Tal vez esto es para ti
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg font-light leading-relaxed text-cyan-50/75"
          >
            Elige la frase que más conecta contigo y descubre una palabra de esperanza para este momento.
          </motion.p>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[32px] border border-cyan-300/20 bg-white/8 p-2 backdrop-blur-xl" style={{ boxShadow: '0 26px 80px rgba(0,0,0,0.32)' }}>
              <img
                src="https://media.base44.com/images/public/69ea6ca06c4574e55a2de28d/0c14075e4_WEB.jpg"
                alt="Dos mujeres interactuando felices en SOS Barcelona"
                className="h-full max-h-[620px] w-full rounded-[24px] object-cover object-center"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 h-32 w-32 rounded-[28px] border border-amber-200/20 bg-amber-300/10 blur-sm" />
          </motion.div>

          <div className="grid gap-4">
            {revelations.map((item, index) => (
              <RevelationButton
                key={item.title}
                item={item}
                index={index}
                isInView={isInView}
                onClick={() => setSelected(item)}
              />
            ))}
          </div>
        </div>
      </div>

      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-h-[88vh] max-w-3xl overflow-y-auto border border-cyan-200/25 bg-white/10 p-0 text-white shadow-2xl backdrop-blur-2xl duration-500 sm:rounded-[32px]">
          {selected && (
            <div className="relative overflow-hidden p-7 md:p-10" style={{ background: 'linear-gradient(145deg, rgba(8,33,77,0.78), rgba(2,8,23,0.82))' }}>
              <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-cyan-300/20 blur-3xl" />
              <div className="absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-amber-300/15 blur-3xl" />
              <div className="relative">
                <DialogHeader>
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-300/35 bg-cyan-300/15 text-cyan-100" style={{ boxShadow: '0 0 36px rgba(34,211,238,0.22)' }}>
                    {SelectedIcon && <SelectedIcon className="h-7 w-7" />}
                  </div>
                  <DialogTitle className="font-display text-3xl font-semibold leading-tight text-white md:text-4xl">
                    {selected.title}
                  </DialogTitle>
                </DialogHeader>
                <div className="mt-7 space-y-5 text-base font-light leading-relaxed text-cyan-50/85 md:text-lg">
                  {selected.content.split('\n\n').map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}