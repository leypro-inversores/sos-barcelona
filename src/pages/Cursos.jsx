import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';
import SOSLogo from '../components/landing/SOSLogo';
import CoursesImageCarousel from '../components/courses/CoursesImageCarousel';
import CourseAccordionItem from '../components/courses/CourseAccordionItem';

const COURSE_IMAGES = [
  "https://media.base44.com/images/public/69ea6ca06c4574e55a2de28d/39d2d4895_WhatsAppImage2026-05-13at2152321.jpg",
  "https://media.base44.com/images/public/69ea6ca06c4574e55a2de28d/70143da25_WhatsAppImage2026-05-13at2152332.jpg",
  "https://media.base44.com/images/public/69ea6ca06c4574e55a2de28d/a708484f2_WhatsAppImage2026-05-13at2152334.jpg",
  "https://media.base44.com/images/public/69ea6ca06c4574e55a2de28d/a59463399_WhatsAppImage2026-05-13at2152336.jpg",
  "https://media.base44.com/images/public/69ea6ca06c4574e55a2de28d/6a8f9402d_WhatsAppImage2026-05-13at215336.jpg",
  "https://media.base44.com/images/public/69ea6ca06c4574e55a2de28d/3231f48f9_WhatsAppImage2026-05-13at2213151.jpg",
  "https://media.base44.com/images/public/69ea6ca06c4574e55a2de28d/e414f7109_WhatsAppImage2026-05-13at2213153.jpg",
  "https://media.base44.com/images/public/69ea6ca06c4574e55a2de28d/711837ffc_WhatsAppImage2026-05-13at221315.jpg",
  "https://media.base44.com/images/public/69ea6ca06c4574e55a2de28d/a1cf7862a_CursoReiniciandonuestroamor.jpg",
];

const COURSES = [
  {
    id: 1,
    label: "Curso 1",
    title: "Prematrimonial — Construyendo un Matrimonio de Élite",
    summary: "Principios bíblicos, comunicación, sexualidad y finanzas para construir una familia sana, fuerte y llena de propósito.",
    meta: ["400€", "4 semanas", "Acompañamiento durante todo el proceso"],
    details: [
      "En SOS Barcelona creemos que el matrimonio no solo es una decisión emocional, sino un pacto diseñado por Dios para construir una familia sana, fuerte y llena de propósito.",
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
    label: "Curso 2",
    title: "Reiniciando nuestro amor",
    summary: "Sanidad de heridas, reconstrucción de confianza y restauración familiar para volver a mirar la familia con propósito.",
    meta: ["290€", "12 sábados", "Taller privado: consultar precio"],
    details: [
      "Reiniciar el amor es dar al pasado el valor correcto, es no permitir que este arruine nuestro destino...",
      "...es permitir que Dios transforme el corazón para construir un hogar más experimentado, más fuerte, más sano y más lleno de propósito. En SOS creemos que ningún matrimonio está demasiado roto, ninguna familia está perdida y ningún corazón está lejos de la restauración. Cada crisis puede convertirse en un nuevo comienzo cuando el amor deja de ser solo emoción y se convierte en decisión, entrega y fe.",
      "Reiniciando Nuestro Amor no es solo un taller… es una oportunidad para sanar heridas, recuperar la intimidad, reconstruir la confianza y volver a mirar a tu familia como el proyecto más importante de tu vida y lograrlo acompañados de mentores experimentados. Porque cuando una pareja sana, una familia se transforma. Y cuando una familia se transforma, generaciones enteras cambian.",
    ],
  },
  {
    id: 3,
    label: "Curso 3",
    title: "Escuela de Liderazgo — Cimientos 2026",
    summary: "Carácter y habilidades de Reino para edificar tu vida sobre cimientos firmes. Modalidad virtual disponible.",
    meta: ["Inversión: $40.000 pesos colombianos", "Ciclo #4", "Modalidad: Virtual"],
    details: [
      "Inscripciones abiertas hasta el 20 de Mayo. Inicio de clases el 25 de Mayo.",
      "Formación integral para el desarrollo del carácter y habilidades de liderazgo bajo principios del Reino. Modalidad disponible para adaptarse a tu ritmo:",
      [
        "Virtual: Clases en vivo con interacción directa.",
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

      <div className="px-6 py-16 md:py-20" style={{ background: 'linear-gradient(135deg, hsl(40 35% 97%) 0%, hsl(38 45% 93%) 100%)' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-14">
            <span className="text-primary text-sm tracking-[0.25em] uppercase font-semibold block mb-4">Formación</span>
            <h1 className="font-display text-4xl md:text-6xl font-medium text-foreground mb-4">Cursos, Talleres y Eventos</h1>
            <p className="text-muted-foreground font-light text-lg max-w-2xl mx-auto">Crece en fe, carácter y propósito con procesos diseñados para matrimonios, familias y líderes.</p>
          </motion.div>

          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <CoursesImageCarousel images={COURSE_IMAGES} />

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="space-y-5"
            >
              {COURSES.map((course) => (
                <CourseAccordionItem key={course.id} course={course} />
              ))}
            </motion.div>
          </div>
        </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground font-light">¿Tienes preguntas sobre algún curso?</p>
            <Link to="/#contacto" className="text-primary font-semibold hover:underline">Contáctanos aquí</Link>
          </div>
        </div>
    </div>
  );
}