import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, MapPin, Clock, Youtube, Phone } from 'lucide-react';
import SOSLogo from './SOSLogo';

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-5">
              <SOSLogo size={48} />
              <div>
                
                
              </div>
            </Link>
            <p className="text-background/60 font-light leading-relaxed mb-4">
              Una iglesia centrada en Jesús donde lo sobrenatural es natural. Ven y descubre una relación real con Dios.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <Link to="/calendario" className="text-background/50 hover:text-primary transition-colors">Sobre Nosotros</Link>
              <Link to="/cursos" className="text-background/50 hover:text-primary transition-colors">Actividades</Link>
              <Link to="/pastores" className="text-background/50 hover:text-primary transition-colors">Cursos</Link>
              <Link to="/colaboradores" className="text-background/50 hover:text-primary transition-colors">Pastores</Link>
              <Link to="/ninos" className="text-background/50 hover:text-primary transition-colors">Niños</Link>
            </div>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-semibold mb-4">Encuéntranos</h4>
            <div className="space-y-4">
              <div>
                <p className="text-xs text-primary font-semibold tracking-widest uppercase mb-2">SEDE BARCELONA</p>
                <div className="flex items-start gap-3 mb-2">
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-background/60 font-light">C/ Teresa de Cofrents 23, Barcelona, España</p>
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="w-5 h-5 text-primary shrink-0" />
                  <p className="text-background/60 font-light">Domingos a las 11:00h</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary shrink-0" />
                  <p className="text-background/60 font-light">+34 685 947 756</p>
                </div>
              </div>
              <div>
                <p className="text-xs text-primary font-semibold tracking-widest uppercase mb-2">SEDE MEDELLÍN</p>
                <div className="flex items-start gap-3 mb-2">
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-background/60 font-light">Cra. 47F # 79 sur 37, S</p>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary shrink-0" />
                  <p className="text-background/60 font-light">Oración virtual: Martes y Jueves 6:00am (hora Colombia)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Síguenos</h4>
            <div className="flex flex-wrap gap-4">
              <a href="https://instagram.com/somos_sosbarcelona" target="_blank" rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/sosbarcelona" target="_blank" rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              </a>
              <a href="https://www.tiktok.com/@sosbarcelona" target="_blank" rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" /></svg>
              </a>
              <a href="https://www.youtube.com/@somoss.o.sbarcelona8475" target="_blank" rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300">
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
    </footer>);

}