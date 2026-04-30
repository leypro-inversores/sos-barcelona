import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, MapPin, ChevronLeft } from 'lucide-react';
import SOSLogo from '../components/landing/SOSLogo';

const ACTIVITIES = [
{
  id: 1,
  title: "Reunión Dominical",
  desc: "Todos los domingos a las 11h. Un encuentro lleno de adoración, palabra y comunidad.",
  time: "Domingos · 11:00h",
  image: "https://media.base44.com/images/public/69ea6ca06c4574e55a2de28d/1dd8a621f_PREDICA.jpg"
},
{
  id: 2,
  title: "Reunión de Mujeres",
  desc: "Un espacio de encuentro, oración y comunidad para las mujeres de SOS Barcelona.",
  time: "Mensual · Por confirmar",
  image: "https://media.base44.com/images/public/69ea6ca06c4574e55a2de28d/c038d2c24_REUNINMUJERES.jpg"
},
{
  id: 3,
  title: "Reunión de Hombres",
  desc: "Un espacio real para hombres que quieren crecer, conectar y ser mejores.",
  time: "Mensual · Por confirmar",
  image: "https://media.base44.com/images/public/69ea6ca06c4574e55a2de28d/f9b036bd0_REUNINHOMBRES.jpg"
},
{
  id: 4,
  title: "Reunión de Parejas",
  desc: "Fortalecemos los matrimonios y familias desde la fe y el amor.",
  time: "Mensual · Por confirmar",
  image: "https://media.base44.com/images/public/69ea6ca06c4574e55a2de28d/dd2875175_REUNINPAREJAS.jpg"
},
{
  id: 5,
  title: "Reunión de Jóvenes",
  desc: "Una generación que no solo escucha, sino que vive lo que cree.",
  time: "Mensual · Por confirmar",
  image: "https://media.base44.com/images/public/69ea6ca06c4574e55a2de28d/ab8b3c041_JOVENES2.jpg",
  aspectRatio: "aspect-[3/4]"
},
{
  id: 6,
  title: "Área Financiera",
  desc: "Enseñanzas prácticas sobre finanzas desde una perspectiva bíblica y real.",
  time: "Ocasional · Por confirmar",
  image: "https://media.base44.com/images/public/69ea6ca06c4574e55a2de28d/3fc1280e6_WhatsAppImage2026-04-24at2013028.jpg"
},
{
  id: 7,
  title: "Reunión de Liderazgo",
  desc: "Formando líderes con carácter, visión y corazón de servicio.",
  time: "Mensual · Por confirmar",
  image: "https://media.base44.com/images/public/69ea6ca06c4574e55a2de28d/694483fa7_REUNINLIDERAZGO.jpg"
}];


const EVENTS = [
{ id: 1, date: "2026-05-04", day: "4", month: "MAY", title: "Reunión Dominical", time: "11:00h", location: "Calle Teresa de Cofrents 23, Barcelona", category: "Reunión", color: "bg-primary/10 text-primary border-primary/20" },
{ id: 2, date: "2026-05-10", day: "10", month: "MAY", title: "Noche de Adoración", time: "19:00h", location: "Calle Teresa de Cofrents 23, Barcelona", category: "Adoración", color: "bg-purple-100 text-purple-700 border-purple-200" },
{ id: 3, date: "2026-05-11", day: "11", month: "MAY", title: "Reunión Dominical", time: "11:00h", location: "Calle Teresa de Cofrents 23, Barcelona", category: "Reunión", color: "bg-primary/10 text-primary border-primary/20" },
{ id: 4, date: "2026-05-17", day: "17", month: "MAY", title: "Encuentro de Jóvenes", time: "17:00h", location: "Calle Teresa de Cofrents 23, Barcelona", category: "Jóvenes", color: "bg-green-100 text-green-700 border-green-200" },
{ id: 5, date: "2026-05-18", day: "18", month: "MAY", title: "Reunión Dominical", time: "11:00h", location: "Calle Teresa de Cofrents 23, Barcelona", category: "Reunión", color: "bg-primary/10 text-primary border-primary/20" },
{ id: 6, date: "2026-05-23", day: "23", month: "MAY", title: "Cumpleaños de la Iglesia", time: "18:00h", location: "Calle Teresa de Cofrents 23, Barcelona", category: "Especial", color: "bg-orange-100 text-orange-700 border-orange-200" },
{ id: 7, date: "2026-05-25", day: "25", month: "MAY", title: "Reunión Dominical", time: "11:00h", location: "Calle Teresa de Cofrents 23, Barcelona", category: "Reunión", color: "bg-primary/10 text-primary border-primary/20" },
{ id: 8, date: "2026-06-06", day: "6", month: "JUN", title: "Retiro de Parejas", time: "Todo el día", location: "Por confirmar", category: "Parejas", color: "bg-pink-100 text-pink-700 border-pink-200" },
{ id: 9, date: "2026-06-14", day: "14", month: "JUN", title: "Noche de Milagros", time: "19:00h", location: "Calle Teresa de Cofrents 23, Barcelona", category: "Especial", color: "bg-orange-100 text-orange-700 border-orange-200" }];


export default function Calendario() {
  const [filter, setFilter] = useState('Todos');
  const categories = ['Todos', 'Reunión', 'Adoración', 'Jóvenes', 'Especial', 'Parejas'];
  const filtered = filter === 'Todos' ? EVENTS : EVENTS.filter((e) => e.category === filter);

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
        {/* Title */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16">
          
          <h1 className="font-display text-4xl md:text-5xl font-medium text-foreground mb-4">Nuestras Actividades</h1>
          <p className="text-muted-foreground font-light text-lg">Todos los eventos y reuniones de SOS Barcelona</p>
        </motion.div>

        {/* Activity Cards */}
        <div className="mb-20">
          






          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {ACTIVITIES.map((act, i) =>
            <motion.div
              key={act.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group bg-card rounded-2xl border border-border/50 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              
                {/* Image */}
                <div className={`${act.aspectRatio || 'aspect-[4/3]'} overflow-hidden`}>
                  <img
                  src={act.image}
                  alt={act.title}
                  className="w-full h-full object-contain bg-black group-hover:scale-105 transition-transform duration-500" />
                
                </div>
                {/* Content */}
                <div className="p-5">
                  <h3 className="font-semibold text-foreground text-base mb-2">{act.title}</h3>
                  <p className="text-muted-foreground text-sm font-light leading-relaxed mb-3">{act.desc}</p>
                  <span className="flex items-center gap-1.5 text-xs text-primary font-medium">
                    <Clock className="w-3.5 h-3.5" />{act.time}
                  </span>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Upcoming Events */}
        <div>
          






          

          {/* Filter */}
          <div className="flex flex-wrap gap-3 mb-8">
            {categories.map((cat) =>
            <button
              key={cat}
              onClick={() => setFilter(cat)} className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 bg-primary text-primary-foreground hidden">




              
              
                {cat}
              </button>
            )}
          </div>

          <div className="space-y-4">
            {filtered.map((event, i) =>
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }} className="bg-card rounded-2xl border border-border/50 p-6 flex items-start gap-6 hover:shadow-md transition-all duration-300 hidden">

              
                <div className="text-center min-w-[60px]">
                  <p className="text-3xl font-bold text-primary leading-none">{event.day}</p>
                  <p className="text-xs font-semibold text-muted-foreground tracking-widest mt-1">{event.month}</p>
                </div>
                <div className="w-px bg-border self-stretch" />
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-foreground">{event.title}</h3>
                    <span className={`text-xs font-medium px-3 py-1 rounded-full border ${event.color}`}>
                      {event.category}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{event.time}</span>
                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" />{event.location}</span>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>);

}