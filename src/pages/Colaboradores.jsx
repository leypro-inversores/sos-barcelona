import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, Heart, Music, Users, BookOpen, Camera, Coffee } from 'lucide-react';
import SOSLogo from '../components/landing/SOSLogo';

const AREAS = [
  { icon: Music, name: "Alabanza & Adoración", color: "bg-purple-100 text-purple-700" },
  { icon: Users, name: "Bienvenida & Protocolo", color: "bg-blue-100 text-blue-700" },
  { icon: BookOpen, name: "Escuela de Niños", color: "bg-green-100 text-green-700" },
  { icon: Camera, name: "Medios & Tecnología", color: "bg-orange-100 text-orange-700" },
  { icon: Coffee, name: "Hospitalidad", color: "bg-amber-100 text-amber-700" },
  { icon: Heart, name: "Intercesión", color: "bg-pink-100 text-pink-700" },
];

const COLABORADORES = [
  { name: "Ana Martínez", role: "Líder de Alabanza", area: "Alabanza & Adoración", photo: "https://media.base44.com/images/public/69ea6ca06c4574e55a2de28d/c58f199e3_generated_e7d53658.png" },
  { name: "Carlos Ruiz", role: "Coordinador de Medios", area: "Medios & Tecnología", photo: "https://media.base44.com/images/public/69ea6ca06c4574e55a2de28d/fca46ef15_generated_ade8d6a9.png" },
  { name: "Laura Gómez", role: "Líder de Bienvenida", area: "Bienvenida & Protocolo", photo: "https://media.base44.com/images/public/69ea6ca06c4574e55a2de28d/8da471a00_generated_2e762c51.png" },
  { name: "David López", role: "Líder de Jóvenes", area: "Alabanza & Adoración", photo: "https://media.base44.com/images/public/69ea6ca06c4574e55a2de28d/20eb32156_generated_00136330.png" },
  { name: "María Torres", role: "Maestra de Niños", area: "Escuela de Niños", photo: "https://media.base44.com/images/public/69ea6ca06c4574e55a2de28d/c58f199e3_generated_e7d53658.png" },
  { name: "José Fernández", role: "Intercesor", area: "Intercesión", photo: "https://media.base44.com/images/public/69ea6ca06c4574e55a2de28d/fca46ef15_generated_ade8d6a9.png" },
];

export default function Colaboradores() {
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
          <span className="text-primary text-sm tracking-[0.25em] uppercase font-semibold block mb-4">Equipo</span>
          <h1 className="font-display text-4xl md:text-5xl font-medium text-foreground mb-4">Colaboradores y Servidores</h1>
          <p className="text-muted-foreground font-light text-lg max-w-xl mx-auto">Personas comprometidas que hacen posible la misión de SOS. Cada uno sirve con amor y excelencia.</p>
        </motion.div>

        {/* Areas */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {AREAS.map((area, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.08 }}
              className="flex flex-col items-center gap-3 p-4 bg-card rounded-2xl border border-border/50 text-center hover:shadow-md transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${area.color}`}>
                <area.icon className="w-6 h-6" />
              </div>
              <p className="text-xs font-medium text-foreground leading-tight">{area.name}</p>
            </motion.div>
          ))}
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {COLABORADORES.map((col, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="bg-card rounded-2xl border border-border/50 overflow-hidden hover:shadow-lg transition-all duration-300 group"
            >
              <div className="aspect-square overflow-hidden">
                <img src={col.photo} alt={col.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-foreground text-lg">{col.name}</h3>
                <p className="text-primary text-sm font-medium mb-1">{col.role}</p>
                <p className="text-muted-foreground text-xs">{col.area}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 bg-primary/5 border border-primary/10 rounded-2xl p-8 text-center"
        >
          <Heart className="w-10 h-10 text-primary mx-auto mb-4" />
          <h3 className="font-display text-2xl font-medium text-foreground mb-3">¿Quieres servir?</h3>
          <p className="text-muted-foreground font-light mb-6">Cada persona tiene un don que puede cambiar vidas. Únete a nuestro equipo de servidores.</p>
          <Link to="/#contacto" className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-all">
            Quiero Servir
          </Link>
        </motion.div>
      </div>
    </div>
  );
}