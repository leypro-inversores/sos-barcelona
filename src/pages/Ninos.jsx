import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, Star, BookOpen, Smile, Shield, Music, Heart } from 'lucide-react';
import SOSLogo from '../components/landing/SOSLogo';
import KidsGallery from '../components/landing/KidsGallery';

const FEATURES = [
{ icon: Shield, title: "Espacio Seguro", desc: "Ambientes seguros y supervisados por adultos capacitados y con vocación por los niños." },
{ icon: BookOpen, title: "Enseñanza Bíblica", desc: "Clases dinámicas con historias bíblicas adaptadas a cada edad de forma creativa y divertida." },
{ icon: Music, title: "Música y Alabanza", desc: "Los niños aprenden a adorar a Dios con canciones, bailes y actividades musicales." },
{ icon: Smile, title: "Juego y Comunidad", desc: "Fomentamos amistades reales y momentos de alegría que marcan la infancia." },
{ icon: Star, title: "Formación por Edades", desc: "Grupos divididos por etapas: bebés (0-2), párvulos (3-5), primaria (6-9) y preadolescentes (10-12)." },
{ icon: Heart, title: "Con Amor", desc: "Cada niño es especial y único. Los tratamos con amor, paciencia y alegría en cada reunión." }];


const AGES = [
{ range: "0–2 años", name: "Semillitas", emoji: "🌱", color: "bg-green-100 text-green-700" },
{ range: "3–5 años", name: "Exploradores", emoji: "🔍", color: "bg-blue-100 text-blue-700" },
{ range: "6–9 años", name: "Aventureros", emoji: "⭐", color: "bg-yellow-100 text-yellow-700" },
{ range: "10–12 años", name: "Preadolescentes", emoji: "🚀", color: "bg-purple-100 text-purple-700" }];


export default function Ninos() {
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

      {/* Hero */}
      <div
        className="relative aspect-[16/10] h-auto min-h-0 w-full px-6 overflow-hidden bg-white bg-contain bg-top bg-no-repeat flex items-end justify-center md:aspect-auto md:min-h-[680px] md:bg-cover md:bg-center"
        style={{ backgroundImage: "url('https://media.base44.com/images/public/69ea6ca06c4574e55a2de28d/904504f23_image.png')" }}>
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
        <div className="relative z-10 w-full h-auto md:min-h-[680px]">
          








          
        </div>
      </div>

      {/* Gallery */}
      <div className="w-full md:max-w-6xl md:mx-auto md:px-6 pt-0 md:pt-12 pb-4 overflow-hidden">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="grid md:grid-cols-2 gap-0 md:gap-6 items-stretch">
          <div className="w-screen -mx-0 aspect-[9/16] md:w-full md:mx-0 md:aspect-auto md:h-full md:rounded-2xl overflow-hidden bg-black">
            <video
              src="https://media.base44.com/videos/public/69ea6ca06c4574e55a2de28d/4ac968ec3_2026051919352.mp4"
              className="w-full h-full object-cover md:object-contain bg-black"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              poster="https://media.base44.com/images/public/69ea6ca06c4574e55a2de28d/f409b915b_ACTIVIDADNIOS.jpg"
            />
          </div>
          <div className="w-full h-full px-6 pt-8 md:px-0 md:pt-0">
            <KidsGallery />
          </div>
        </motion.div>
      </div>

      <section className="bg-white px-6 py-16 md:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl font-medium text-foreground text-center mb-6">Ministerio infantil</h2>
          <p className="text-muted-foreground font-light text-lg md:text-xl leading-relaxed">
            Un espacio lleno de amor, creatividad y diversión donde los niños descubren a Jesús de forma auténtica, divertida y a su nivel.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Age Groups */}
        <div className="mb-16">
          <h2 className="font-display text-3xl font-medium text-foreground text-center mb-10">Grupos por Edad</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {AGES.map((age, i) =>
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-center bg-card border border-border/50 rounded-2xl p-6 hover:shadow-md transition-all">
              
                <div className="text-4xl mb-4">{age.emoji}</div>
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${age.color}`}>{age.range}</span>
                <h3 className="font-semibold text-foreground mt-3 text-lg">{age.name}</h3>
              </motion.div>
            )}
          </div>
        </div>

        {/* Features */}
        <div className="mb-16">
          <h2 className="font-display text-3xl font-medium text-foreground text-center mb-10">Lo que ofrecemos</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {FEATURES.map((feat, i) =>
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="bg-card border border-border/50 rounded-2xl p-6 hover:shadow-md transition-all">
              
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <feat.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feat.title}</h3>
                <p className="text-muted-foreground font-light text-sm leading-relaxed">{feat.desc}</p>
              </motion.div>
            )}
          </div>
        </div>

        {/* Schedule */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-primary text-primary-foreground rounded-2xl p-8 text-center">
          
          <h3 className="font-display text-3xl font-medium mb-4">¡Los esperamos cada Domingo!</h3>
          <p className="text-primary-foreground/80 font-light text-lg mb-2">Horario SOS Kids: <strong className="text-primary-foreground">11:00h</strong></p>
          <p className="text-primary-foreground/80 font-light">Calle Teresa de Cofrents 23, Barcelona</p>
          <div className="mt-6 flex justify-center gap-4 flex-wrap">
            <Link to="/#contacto" className="bg-primary-foreground text-primary px-8 py-3 rounded-full font-semibold hover:bg-primary-foreground/90 transition-all">
              Más Información
            </Link>
          </div>
        </motion.div>
      </div>
    </div>);

}