import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, Instagram, Youtube, Heart } from 'lucide-react';
import SOSLogo from '../components/landing/SOSLogo';

const PASTORES = [
{
  id: 1,
  name: "Mauricio Rodr\xEDguez\nPastor Principal ",
  role: "Pastor Principal — SOS Barcelona",
  bio: "Mauricio Rodríguez es el pastor principal de SOS Barcelona. Su vida es en sí misma un testimonio del poder transformador de Dios: criado en un ambiente marcado por el dolor y la búsqueda de identidad, fue en un encuentro real con Jesús donde todo cambió. Desde ese momento, su vida tomó un rumbo radicalmente diferente — del vacío a la plenitud, de la confusión al propósito. Hoy lidera SOS Barcelona con la misma pasión que vivió esa transformación, convencido de que lo sobrenatural no es solo posible, sino normal cuando te acercas a Dios. Cada domingo, predica con autoridad y corazón abierto, invitando a cada persona a experimentar lo que él mismo vivió: un encuentro real con el Padre.",
  verse: '"De modo que si alguno está en Cristo, nueva criatura es; las cosas viejas pasaron; he aquí todas son hechas nuevas." — 2 Corintios 5:17',
  photo: "https://media.base44.com/images/public/69ea6ca06c4574e55a2de28d/896529113_PASTORMAURICIO6.jpg",
  location: "Barcelona, España"
},
{
  id: 2,
  name: "M\xF3nica Rend\xF3n\nPastora",
  role: "Pastora — SOS Barcelona",
  bio: "Junto a Mauricio, Mónica Rendón es co-pastora de SOS Barcelona y una de las voces más poderosas del ministerio. Apasionada por ver familias restauradas y matrimonios que reflejen el amor de Dios, lidera con la Palabra en mano y el corazón abierto. Cree firmemente que el hogar es el primer lugar donde se manifiesta la gloria de Dios, y su ministerio está enfocado en sanar, fortalecer y transformar familias enteras para el Reino de Dios.",
  verse: '"El amor nunca deja de ser..." — 1 Corintios 13:8',
  photo: "https://media.base44.com/images/public/69ea6ca06c4574e55a2de28d/7d6326a3f_PASTORAWEB.jpg",
  location: "Barcelona, España"
},
{
  id: 3,
  name: "Nicole Rodr\xEDguez\nL\xEDder de J\xF3venes",
  role: "Liderando la nueva generación en Barcelona",
  bio: "Acompaña a jóvenes a descubrir su propósito, acercarse a Dios y vivir una fe real en medio de su día a día. Cree en una generación que no solo escucha, sino que vive lo que cree.",
  verse: '"Que nadie te subestime por ser joven…" — 1 Timoteo 4:12',
  photo: "https://media.base44.com/images/public/69ea6ca06c4574e55a2de28d/6a22c2536_NICOL.jpg",
  location: "Barcelona, España"
},
{
  id: 4,
  name: "Liz Daza\nLíder de mujeres",
  role: "Líder de mujeres — SOS Barcelona",
  bio: "Liz Daza lidera el ministerio de mujeres en SOS Barcelona con un corazón profundamente apasionado por ver a cada mujer caminar en su verdadera identidad y valor en Cristo. Convencida de que una mujer sanada por Dios levanta hogares firmes y transforma entornos enteros, acompaña a las mujeres de la comunidad a superar heridas del pasado, descubrir su propósito eterno y liderar con gracia, fe y fortaleza en su día a día.",
  verse: '"Dios está en medio de ella; no será conmovida. Dios la ayudará al clarear la mañana." — Salmos 46:5',
  photo: "https://media.base44.com/images/public/69ea6ca06c4574e55a2de28d/89bf0b87d_LIZDAZA.png",
  location: "Barcelona, España"
},
{
  id: 5,
  name: "Santiago Vega\nLíder de jóvenes",
  role: "Líder de jóvenes — SOS Barcelona",
  bio: "Junto a Nicole, Santiago Vega lidera a la juventud de SOS Barcelona con la visión clara de levantar una generación apasionada, íntegra y radical por Jesús. Su enfoque se centra en desafiar a los jóvenes a salir de lo superficial, equipándolos con herramientas prácticas y espirituales para que descubran su diseño divino y se conviertan en agentes de cambio con una fe real, madura e inconmovible.",
  verse: '"¿Con qué limpiará el joven su camino? Con guardar tu palabra." — Salmos 119:9',
  photo: "https://media.base44.com/images/public/69ea6ca06c4574e55a2de28d/cf3fbc8d5_SantiagoVega.jpg",
  location: "Barcelona, España"
}];


export default function Pastores() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-foreground text-background py-6 px-6">
        <div className="max-w-6xl mx-auto flex items-center gap-4">
          <Link to="/" className="flex items-center gap-3">
            <SOSLogo size={44} />
            <div>
              <p className="font-bold text-lg leading-none">SOS</p>
              <p className="text-xs text-background/60 tracking-widest uppercase">Barcelona</p>
            </div>
          </Link>
          <Link to="/" className="ml-auto flex items-center gap-1 text-background/40 hover:text-background text-sm transition-colors">
            <ChevronLeft className="w-4 h-4" /> Inicio
          </Link>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <span className="text-primary text-sm tracking-[0.25em] uppercase font-semibold block mb-4">Liderazgo</span>
          <h1 className="font-display text-4xl md:text-5xl font-medium text-foreground mb-4">Nuestros Pastores</h1>
          <p className="text-muted-foreground font-light text-lg max-w-xl mx-auto">Personas reales con un llamado real — guiando la familia de SOS con amor, carácter y fe.</p>
        </motion.div>

        <div className="space-y-16">
          {PASTORES.map((pastor, i) =>
          <motion.div
            key={pastor.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
            
              {/* Photo */}
              <div className={`${i % 2 === 1 ? 'md:col-start-2' : ''}`}>
                <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                  {pastor.photo ? (
                    <img src={pastor.photo} alt={pastor.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-secondary text-center">
                      <span className="px-8 text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">Foto pendiente</span>
                    </div>
                  )}
                </div>
              </div>
              {/* Info */}
              <div className={`${i % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}>
                <span className="text-xs font-semibold text-primary tracking-widest uppercase block mb-4">{pastor.location}</span>
                <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground mb-2">{pastor.name}</h2>
                
                <p className="text-muted-foreground font-light leading-relaxed text-lg mb-8">{pastor.bio}</p>
                <div className="border-l-4 border-primary pl-5">
                  <p className="text-foreground/70 font-light italic text-base leading-relaxed">{pastor.verse}</p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>);

}