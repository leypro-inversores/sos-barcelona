import React from 'react';
import Navbar from '../components/landing/Navbar';
import HeroSection from '../components/landing/HeroSection';
import MessageSection from '../components/landing/MessageSection';
import ConnectionSection from '../components/landing/ConnectionSection';
import ExperienceSection from '../components/landing/ExperienceSection';
import InstagramSection from '../components/landing/InstagramSection';
import AboutSection from '../components/landing/AboutSection';
import StepsSection from '../components/landing/StepsSection';
import TestimonialsSection from '../components/landing/TestimonialsSection';
import FinalCTASection from '../components/landing/FinalCTASection';
import ContactForm from '../components/landing/ContactForm';
import Footer from '../components/landing/Footer';

// Images
const IMAGES = {
  hero: "https://media.base44.com/images/public/69ea6ca06c4574e55a2de28d/9c0679f6d_generated_571a12d3.png",
  community: "https://media.base44.com/images/public/69ea6ca06c4574e55a2de28d/57e9f123a_PREDICAGENTE.jpg",
  unityHands: "https://media.base44.com/images/public/69ea6ca06c4574e55a2de28d/e9eeffbc0_generated_ddd6fbf8.png",
  worshipLeader: "https://media.base44.com/images/public/69ea6ca06c4574e55a2de28d/169bfcc55_generated_75067579.png",
  barcelona: "https://media.base44.com/images/public/69ea6ca06c4574e55a2de28d/7200835f6_generated_72d75865.png",
  worshipMoment: "https://media.base44.com/images/public/69ea6ca06c4574e55a2de28d/331a56c01_NICOLADORANDO.jpg",
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
      <Navbar />
      
      <HeroSection heroImage={IMAGES.hero} />
      
      <MessageSection />
      
      <ConnectionSection image={IMAGES.liberacion} />
      
      <ExperienceSection 
        images={[
          IMAGES.worshipLeader,
          IMAGES.pastorSpeaking,
          IMAGES.worshipMoment,
          IMAGES.community,
        ]} 
      />
      
      <InstagramSection 
        images={[
          IMAGES.hero,
          IMAGES.community,
          IMAGES.unityHands,
          IMAGES.churchEvent,
          IMAGES.friendsWalking,
        ]}
      />
      
      <AboutSection image={IMAGES.community} />
      
      <StepsSection />
      
      <TestimonialsSection 
        images={[
          IMAGES.testimonial1,
          IMAGES.testimonial2,
          IMAGES.testimonial3,
        ]} 
      />
      
      <FinalCTASection image={IMAGES.barcelona} />
      
      <ContactForm />
      
      <Footer />
    </div>
  );
}