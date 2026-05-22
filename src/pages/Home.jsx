import React from 'react';
import HeroSection from '../components/landing/HeroSection';
import WelcomeSection from '../components/landing/WelcomeSection';
import MessageSection from '../components/landing/MessageSection';
import ConnectionSection from '../components/landing/ConnectionSection';
import MeetingsSection from '../components/landing/MeetingsSection';
import ExperienceSection from '../components/landing/ExperienceSection';
import InstagramSection from '../components/landing/InstagramSection';
import PurposeSection from '../components/landing/PurposeSection';
import PastoresHistorySection from '../components/landing/PastoresHistorySection';
import CultureSection from '../components/landing/CultureSection';
import AboutSection from '../components/landing/AboutSection';
import StepsSection from '../components/landing/StepsSection';
import FinalCTASection from '../components/landing/FinalCTASection';
import ContactForm from '../components/landing/ContactForm';
import VideosSection from '../components/landing/VideosSection';
import BooksSection from '../components/landing/BooksSection';
import Footer from '../components/landing/Footer';

// Images
const IMAGES = {
  hero: "https://media.base44.com/images/public/69ea6ca06c4574e55a2de28d/1e0143059_FINALPORTADA.png",
  community: "https://media.base44.com/images/public/69ea6ca06c4574e55a2de28d/0666827bd_COMPARTIR.jpg",
  jesus: "https://media.base44.com/images/public/69ea6ca06c4574e55a2de28d/e0e7ed36a_JESUS.jpg",
  unityHands: "https://media.base44.com/images/public/69ea6ca06c4574e55a2de28d/e9eeffbc0_generated_ddd6fbf8.png",
  alabar: "https://media.base44.com/images/public/69ea6ca06c4574e55a2de28d/1ccd327d8_ALABARADIOS.jpg",
  cenaNavidad: "https://media.base44.com/images/public/69ea6ca06c4574e55a2de28d/a6a2e3ce9_CENANAVIDAD.jpg",
  compromiso: "https://media.base44.com/images/public/69ea6ca06c4574e55a2de28d/6b4633ea8_COMPROMISO.jpg",
  liberacion2: "https://media.base44.com/images/public/69ea6ca06c4574e55a2de28d/81b01163a_LIBERACIN2.jpg",
  matrimonio2: "https://media.base44.com/images/public/69ea6ca06c4574e55a2de28d/b8501f5a9_MATRIMONIO2.jpg",
  matrimonio: "https://media.base44.com/images/public/69ea6ca06c4574e55a2de28d/497f374a6_MATRIMONIO.jpg",
  worshipLeader: "https://media.base44.com/images/public/69ea6ca06c4574e55a2de28d/e42bd6466_ADORACIN.jpg",
  barcelona: "https://media.base44.com/images/public/69ea6ca06c4574e55a2de28d/7200835f6_generated_72d75865.png",
  worshipMoment: "https://media.base44.com/images/public/69ea6ca06c4574e55a2de28d/0d2cfd681_NICOLADORANDO.jpg",
  liberacion: "https://media.base44.com/images/public/69ea6ca06c4574e55a2de28d/f506d1201_LIBERACIN.jpg",
  testimonial1: "https://media.base44.com/images/public/69ea6ca06c4574e55a2de28d/c58f199e3_generated_e7d53658.png",
  testimonial2: "https://media.base44.com/images/public/69ea6ca06c4574e55a2de28d/fca46ef15_generated_ade8d6a9.png",
  testimonial3: "https://media.base44.com/images/public/69ea6ca06c4574e55a2de28d/8da471a00_generated_2e762c51.png",
  churchEvent: "https://media.base44.com/images/public/69ea6ca06c4574e55a2de28d/01a878e69_generated_0952ff08.png",
  friendsWalking: "https://media.base44.com/images/public/69ea6ca06c4574e55a2de28d/ec953c79c_generated_e81df812.png",
  pastorSpeaking: "https://media.base44.com/images/public/69ea6ca06c4574e55a2de28d/2af86ab37_PASTORMAURICIO5.jpg",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* 1. HERO — video fullscreen */}
      <HeroSection heroImage={IMAGES.hero} />

      {/* 2. BIENVENIDA */}
      <WelcomeSection />

      {/* 3. IDENTIFICACIÓN — "Tal vez esto es para ti" */}
      <ConnectionSection image={IMAGES.liberacion} />

      {/* 4. TRANSFORMACIÓN — "Una vida con Dios lo cambia todo" */}
      <MessageSection />

      {/* 5. REUNIONES — "Este Domingo" */}
      <MeetingsSection />

      {/* 6. EXPERIENCIA — "Esto es lo que vivirás" */}
      <ExperienceSection
        images={[
          IMAGES.worshipLeader,
          IMAGES.pastorSpeaking,
          IMAGES.worshipMoment,
          IMAGES.community,
        ]}
      />

      {/* 7. PROPÓSITO — Ganar, Consolidar, Discipular, Enviar */}
      <PurposeSection />

      {/* 8. HISTORIA — Pastores Mauricio y Mónica */}
      <PastoresHistorySection />

      {/* 9. CULTURA SOS — Valores */}
      <CultureSection />

      {/* 10. SOBRE NOSOTROS — identidad de la iglesia */}
      <div id="sobre-nosotros" className="scroll-mt-24">
        <AboutSection image={IMAGES.jesus} />
      </div>

      {/* 11. PASOS — Tu primer paso */}
      <StepsSection />

      {/* 12. LIBROS */}
      <div id="libros" className="scroll-mt-24">
        <BooksSection />
      </div>

      {/* 13. INSTAGRAM */}
      <InstagramSection />

      {/* 13. CIERRE FINAL */}
      <FinalCTASection image={IMAGES.barcelona} />

      {/* 15. VIDEOS — Prédicas */}
      <VideosSection />

      {/* 16. CONTACTO */}
      <div id="contacto" className="scroll-mt-24">
        <ContactForm />
      </div>

      <Footer />
    </div>
  );
}