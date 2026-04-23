import React from 'react';
import { Instagram, MapPin, Clock, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold tracking-wider">S.O.S</span>
              <span className="text-xs font-light tracking-widest uppercase text-background/60">Barcelona</span>
            </div>
            <p className="text-background/60 font-light leading-relaxed">
              Una iglesia centrada en Jesús donde lo sobrenatural es natural. Ven y descubre una relación real con Dios.
            </p>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-semibold mb-4">Encuéntranos</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-background/60 font-light">C/ Teresa de Cofrents 23, Barcelona, España</p>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary shrink-0" />
                <p className="text-background/60 font-light">Domingos a las 11:00h</p>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Síguenos</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/somos_sosbarcelona"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@somoss.o.sbarcelona8475"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 text-center">
          <p className="text-background/40 text-sm font-light">
            © {new Date().getFullYear()} SOS Barcelona. Iglesia centrada en Jesús.
          </p>
        </div>
      </div>
    </footer>
  );
}