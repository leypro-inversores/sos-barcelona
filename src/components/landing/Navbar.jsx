import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Instagram } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SOSLogo from './SOSLogo';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Sobre Nosotros', href: '#sobre' },
    { label: 'Actividades', href: '/calendario' },
    { label: 'Cursos', href: '/cursos' },
    { label: 'Pastores', href: '/pastores' },
    { label: 'Niños', href: '/ninos' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-background/90 backdrop-blur-xl shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2.5">
            {scrolled && <SOSLogo size={40} />}
            <div>
              <span className={`block text-sm font-bold tracking-widest transition-colors duration-500 leading-none ${scrolled ? 'text-foreground' : 'text-white'}`}>SOS</span>
              <span className={`block text-xs font-light tracking-widest uppercase transition-colors duration-500 ${scrolled ? 'text-muted-foreground' : 'text-white/70'}`}>Barcelona</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map(link => (
              link.href.startsWith('#') ? (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-primary ${scrolled ? 'text-foreground/70' : 'text-white/80'}`}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-primary ${scrolled ? 'text-foreground/70' : 'text-white/80'}`}
                >
                  {link.label}
                </Link>
              )
            ))}
            <a
              href="https://instagram.com/somos_sosbarcelona"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors duration-300 hover:text-primary ${
                scrolled ? 'text-foreground/70' : 'text-white/80'
              }`}
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#contacto"
              className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-primary/90 transition-all duration-300"
            >
              Planear mi visita
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden transition-colors ${scrolled ? 'text-foreground' : 'text-white'}`}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border"
          >
            <div className="px-6 py-6 space-y-4">
              {links.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-base font-medium text-foreground/80 hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contacto"
                onClick={() => setMobileOpen(false)}
                className="block bg-primary text-primary-foreground px-6 py-3 rounded-full text-center text-sm font-semibold"
              >
                Planear mi visita
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}