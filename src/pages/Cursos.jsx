import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';
import SOSLogo from '../components/landing/SOSLogo';
import CourseCard from '../components/courses/CourseCard';

const COURSES = [
  {
    id: 1,
    title: "Curso Prematrimonial — Construyendo un Matrimonio de Élite",
    image: "https://media.base44.com/images/public/69ea6ca06c4574e55a2de28d/e9cefa338_WhatsAppImage2026-05-13at2152321.jpg",
    price: "400€",
    duration: "4 semanas",
    intro: "En SOS Barcelona creemos que el matrimonio no solo es una decisión emocional, sino un pacto diseñado por Dios para construir una familia sana, fuerte y llena de propósito.",
    details: [
      "Nuestro Curso Prematrimonial ha sido creado para ayudar a las parejas a prepararse de manera práctica, emocional y espiritual antes de dar uno de los pasos más importantes de sus vidas. A través de principios bíblicos y herramientas científicas prácticas reales, aprenderán a fortalecer áreas fundamentales como:",
      [
        "Comunicación y resolución de conflictos",
        "Amor, compromiso y vida espiritual",
        "Temperamentos y diferencias en pareja",
        "Sexualidad bajo el diseño de Dios",
        "Finanzas y mayordomía familiar",
        "Sanidad emocional y pasión sostenida",
      ],
      "Más que un curso, es un proceso de crecimiento y preparación para formar un matrimonio sólido, guiado por Dios y basado en el amor, la verdad y el servicio mutuo. Porque un matrimonio fuerte no se construye solo con emociones… se construye con propósito, principios y la presencia de Dios en el centro del hogar. Si estás pensando en casarte o quieres fortalecer las bases de tu relación, este curso puede marcar un antes y un después en vuestra historia.",
    ],
  },
  {
    id: 2,
    title: "Reiniciando nuestro amor",
    image: "https://media.base44.com/images/public/69ea6ca06c4574e55a2de28d/11fccbe3a_CursoReiniciandonuestroamor.jpg",
    price: "290€",
    duration: "12 sábados",
    intro: "Reiniciar el amor es dar al pasado el valor correcto, es no permitir que este arruine nuestro destino...",
    details: [
      "...es permitir que Dios transforme el corazón para construir un hogar más experimentado, más fuerte, más sano y más lleno de propósito. En SOS creemos que ningún matrimonio está demasiado roto, ninguna familia está perdida y ningún corazón está lejos de la restauración. Cada crisis puede convertirse en un nuevo comienzo cuando el amor deja de ser solo emoción y se convierte en decisión, entrega y fe.",
      "Reiniciando Nuestro Amor no es solo un taller… es una oportunidad para sanar heridas, recuperar la intimidad, reconstruir la confianza y volver a mirar a tu familia como el proyecto más importante de tu vida y lograrlo acompañados de mentores experimentados. Porque cuando una pareja sana, una familia se transforma. Y cuando una familia se transforma, generaciones enteras cambian.",
    ],
  },
  {
    id: 3,
    title: "Escuela de Liderazgo — Cimientos 2026",
    image: "https://media.base44.com/images/public/69ea6ca06c4574e55a2de28d/9bf83bee7_image.png",
    price: "Inversión: $40.000",
    duration: "Ciclo #4",
    intro: "Inscripciones abiertas hasta el 20 de Mayo. Inicio de clases el 25 de Mayo.",
    details: [
      "Formación integral para el desarrollo del carácter y habilidades de liderazgo bajo principios del Reino. Modalidades disponibles para adaptarse a tu ritmo:",
      [
        "Presencial: Vivencia y comunidad en nuestro campus.",
        "Virtual: Clases en vivo con interacción directa.",
        "Asincrónica: Estudia a tu propio ritmo con material pregrabado de alta calidad.",
      ],
      "No dejes pasar la oportunidad de capacitarte y edificar tu vida sobre cimientos firmes.",
    ],
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

        <div className="grid gap-8 lg:grid-cols-3">
          {COURSES.map((course, i) => (
            <CourseCard key={course.id} course={course} index={i} />
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