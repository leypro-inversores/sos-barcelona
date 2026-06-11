import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, MapPin, Clock, Phone } from 'lucide-react';
import OfficialYouTubeLogo from '../brand/OfficialYouTubeLogo';
import SOSLogo from './SOSLogo';

export default function Footer() {
  return (
    <footer className="text-background py-16 px-6" style={{ background: 'linear-gradient(160deg, hsl(220 20% 10%) 0%, hsl(220 25% 7%) 100%)' }}>
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
            <div className="flex flex-col gap-3">
              <a href="https://www.youtube.com/@somoss.o.sbarcelona8475" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 bg-background/10 hover:bg-background/20 transition-all duration-300 rounded-xl px-4 py-3">
                <OfficialYouTubeLogo variant="red" />
                <div>
                  <p className="text-background text-sm font-semibold leading-none mb-0.5">YouTube</p>
                  <p className="text-background/50 text-xs">@somoss.o.sbarcelona8475</p>
                </div>
              </a>
              <a href="https://www.tiktok.com/@sos.barcelona" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 bg-background/10 hover:bg-background/20 transition-all duration-300 rounded-xl px-4 py-3">
                <div className="w-9 h-9 rounded-lg bg-black flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/></svg>
                </div>
                <div>
                  <p className="text-background text-sm font-semibold leading-none mb-0.5">TikTok</p>
                  <p className="text-background/50 text-xs">@sos.barcelona</p>
                </div>
              </a>
              <a href="https://instagram.com/somos_sosbarcelona" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 bg-background/10 hover:bg-background/20 transition-all duration-300 rounded-xl px-4 py-3">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)'}}>
                  <Instagram className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-background text-sm font-semibold leading-none mb-0.5">Instagram</p>
                  <p className="text-background/50 text-xs">@somos_sosbarcelona</p>
                </div>
              </a>
              <a href="https://www.facebook.com/sosbarcelona" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 bg-background/10 hover:bg-background/20 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 rounded-xl px-4 py-3">
                <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </div>
                <div>
                  <p className="text-background text-sm font-semibold leading-none mb-0.5">Facebook</p>
                  <p className="text-background/50 text-xs">Sos Barcelona</p>
                </div>
              </a>
              <a href="https://wa.me/34685947756" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 bg-background/10 hover:bg-background/20 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#25D366]/10 transition-all duration-300 rounded-xl px-4 py-3">
                <div className="w-9 h-9 rounded-lg bg-[#25D366] flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.885 3.488"/></svg>
                </div>
                <div>
                  <p className="text-background text-sm font-semibold leading-none mb-0.5">WhatsApp</p>
                  <p className="text-background/50 text-xs">+34 685 94 77 56</p>
                </div>
              </a>
              <a href="https://www.threads.net/@somos_sosbarcelona" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 bg-background/10 hover:bg-background/20 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-white/10 transition-all duration-300 rounded-xl px-4 py-3">
                <div className="w-9 h-9 rounded-lg bg-zinc-950 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.7 11.04c-.12-.06-.25-.12-.38-.18-.22-4.08-2.45-6.42-6.2-6.45h-.05c-2.24 0-4.1.96-5.24 2.71l2.05 1.41c.85-1.3 2.18-1.58 3.2-1.58h.03c1.23.01 2.16.37 2.77 1.06.44.5.74 1.19.9 2.06-1.1-.19-2.29-.25-3.55-.18-3.55.2-5.83 2.27-5.68 5.15.08 1.46.8 2.72 2.04 3.55 1.05.7 2.4 1.04 3.81.97 1.87-.1 3.34-.82 4.36-2.14.78-1 1.27-2.3 1.49-3.94.9.54 1.56 1.25 1.92 2.1.61 1.44.65 3.81-1.28 5.73-1.7 1.68-3.74 2.41-6.83 2.43-3.43-.03-6.03-1.13-7.72-3.28-1.59-2.01-2.42-4.92-2.45-8.65.03-3.73.86-6.64 2.45-8.65C5.03 1.13 7.63.03 11.06 0c3.45.03 6.09 1.14 7.85 3.3.86 1.06 1.51 2.39 1.93 3.96l2.42-.65c-.51-1.9-1.31-3.53-2.39-4.85C18.62-.91 15.32-2.29 11.07-2.32h-.02C6.82-2.29 3.56-.9 1.37 1.8-.58 4.25-1.57 7.63-1.6 11.84v.02c.03 4.21 1.02 7.59 2.97 10.04 2.19 2.7 5.45 4.09 9.68 4.12h.02c3.75-.03 6.4-.99 8.59-3.12 2.87-2.83 2.78-6.38 1.84-8.58-.67-1.57-1.98-2.7-3.8-3.28Zm-6.43 6c-1.57.09-3.2-.62-3.28-2.14-.06-1.13.8-2.39 3.38-2.53.3-.02.59-.03.88-.03.95 0 1.84.09 2.65.27-.3 3.72-2.04 4.35-3.63 4.43Z"/></svg>
                </div>
                <div>
                  <p className="text-background text-sm font-semibold leading-none mb-0.5">Threads</p>
                  <p className="text-background/50 text-xs">@somos_sosbarcelona</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 text-center">
          <p className="text-background/40 text-sm font-light">
            © {new Date().getFullYear()} SOS Barcelona. Iglesia centrada en Jesús.
          </p>
          <Link to="/politica-de-privacidad" className="mt-3 inline-block text-xs font-light text-background/35 transition-colors hover:text-background/60">
            Política de privacidad
          </Link>
        </div>
      </div>
    </footer>);

}