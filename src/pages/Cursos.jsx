import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, ShoppingCart, Star, Clock, Users, Heart } from 'lucide-react';
import SOSLogo from '../components/landing/SOSLogo';

const COURSES = [
  {
    id: 1,
    title: "Fundamentos de Fe",
    subtitle: "Taller de bases bíblicas",
    desc: "Descubre los fundamentos esenciales de la fe cristiana. Ideal para nuevos creyentes o quienes quieran profundizar.",
    price: "Gratis",
    duration: "4 semanas",
    sessions: "8 sesiones",
    category: "Formación",
    emoji: "📖",
    color: "bg-blue-50 border-blue-100",
    badgeColor: "bg-blue-100 text-blue-700",
  },
  {
    id: 2,
    title: "Retiro de Parejas",
    subtitle: "Construyendo juntos",
    desc: "Un fin de semana especial para parejas casadas o de novios. Herramientas prácticas para fortalecer la relación.",
    price: "€149 por pareja",
    duration: "1 fin de semana",
    sessions: "Junio 6-8",
    category: "Parejas",
    emoji: "💑",
    color: "bg-pink-50 border-pink-100",
    badgeColor: "bg-pink-100 text-pink-700",
  },
  {
    id: 3,
    title: "Escuela de Liderazgo",
    subtitle: "Desarrolla tu potencial",
    desc: "Formación intensiva para líderes y servidores. Aprende a liderar con carácter, visión y amor.",
    price: "€89",
    duration: "6 semanas",
    sessions: "12 sesiones",
    category: "Liderazgo",
    emoji: "🌟",
    color: "bg-amber-50 border-amber-100",
    badgeColor: "bg-amber-100 text-amber-700",
  },
  {
    id: 4,
    title: "Noche de Adoración Especial",
    subtitle: "Encuentro con Dios",
    desc: "Una noche de adoración profunda con música en vivo, ministración y presencia del Espíritu Santo.",
    price: "€15",
    duration: "1 noche",
    sessions: "Mayo 10",
    category: "Evento",
    emoji: "✨",
    color: "bg-purple-50 border-purple-100",
    badgeColor: "bg-purple-100 text-purple-700",
  },
  {
    id: 5,
    title: "Taller: Propósito de Vida",
    subtitle: "Descubre tu llamado",
    desc: "¿Para qué estás aquí? Este taller te ayudará a descubrir y activar el propósito que Dios puso en ti.",
    price: "€49",
    duration: "2 días",
    sessions: "Julio 11-12",
    category: "Taller",
    emoji: "🧭",
    color: "bg-green-50 border-green-100",
    badgeColor: "bg-green-100 text-green-700",
  },
  {
    id: 6,
    title: "Familia Bendecida",
    subtitle: "Taller para familias",
    desc: "Un taller práctico para construir familias saludables, llenas de amor, comunicación y fe.",
    price: "€65 por familia",
    duration: "3 días",
    sessions: "Agosto",
    category: "Familia",
    emoji: "🏠",
    color: "bg-orange-50 border-orange-100",
    badgeColor: "bg-orange-100 text-orange-700",
  },
];

export default function Cursos() {
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
          <span className="text-primary text-sm tracking-[0.25em] uppercase font-semibold block mb-4">Formación</span>
          <h1 className="font-display text-4xl md:text-5xl font-medium text-foreground mb-4">Cursos, Talleres y Eventos</h1>
          <p className="text-muted-foreground font-light text-lg max-w-xl mx-auto">Crece en fe, carácter y propósito con nuestros programas de formación y eventos especiales.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COURSES.map((course, i) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`rounded-2xl border p-6 flex flex-col ${course.color} hover:shadow-lg transition-all duration-300`}
            >
              <div className="text-4xl mb-4">{course.emoji}</div>
              <span className={`text-xs font-semibold px-3 py-1 rounded-full w-fit mb-4 ${course.badgeColor}`}>
                {course.category}
              </span>
              <h3 className="text-xl font-bold text-foreground mb-1">{course.title}</h3>
              <p className="text-sm font-medium text-muted-foreground mb-3">{course.subtitle}</p>
              <p className="text-sm text-foreground/70 font-light leading-relaxed mb-6 flex-1">{course.desc}</p>

              <div className="flex gap-4 text-xs text-muted-foreground mb-6">
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{course.duration}</span>
                <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" />{course.sessions}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-foreground">{course.price}</span>
                <button className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-primary/90 transition-all duration-200">
                  <ShoppingCart className="w-4 h-4" />
                  Inscribirse
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground font-light">¿Tienes preguntas sobre algún curso?</p>
          <Link to="/#contacto" className="text-primary font-semibold hover:underline">Contáctanos aquí</Link>
        </div>
      </div>
    </div>
  );
}