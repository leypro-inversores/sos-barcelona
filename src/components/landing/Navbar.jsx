import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SOSLogo from './SOSLogo';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
  { label: 'Sobre Nosotros', href: '/#sobre-nosotros' },
  { label: 'Actividades', href: '/calendario' },
  { label: 'Cursos', href: '/cursos' },
  { label: 'Pastores', href: '/pastores' },
  { label: 'Niños', href: '/ninos' },
  { label: 'Libros', href: 'https://sos-barcelona.com/#libros' },
  { label: 'Contacto', href: '/#contacto' }];

  const handleAnchorClick = (event, href) => {
    setMobileOpen(false);

    const sectionId = href.split('#')[1];
    if (!sectionId) return;

    event.preventDefault();

    const targetPath = href.startsWith('http') ? new URL(href).pathname : href.split('#')[0] || '/';
    const scrollToTarget = (attempts = 0) => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
      if (attempts < 10) setTimeout(() => scrollToTarget(attempts + 1), 80);
    };

    if (location.pathname !== targetPath) {
      navigate(`${targetPath}#${sectionId}`);
      setTimeout(scrollToTarget, 80);
      return;
    }

    window.history.pushState(null, '', `${targetPath}#${sectionId}`);
    scrollToTarget();
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[9999] h-auto border-b border-border/70 bg-background shadow-lg backdrop-blur-2xl transition-all duration-500">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2.5">
            <SOSLogo size={40} />
            <div>
              
              
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) =>
            link.href.includes('#') ?
            <a
              key={link.href}
              href={link.href}
              onClick={(event) => handleAnchorClick(event, link.href)}
              className="pointer-events-auto text-sm font-medium tracking-wide text-foreground/70 transition-colors duration-300 hover:text-primary">
              
                  {link.label}
                </a> :

            <Link
              key={link.href}
              to={link.href}
              className="pointer-events-auto text-sm font-medium tracking-wide text-foreground/70 transition-colors duration-300 hover:text-primary">
              
                  {link.label}
                </Link>

            )}

          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="pointer-events-auto md:hidden text-foreground transition-colors hover:text-primary">
            
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen &&
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border">
          
            <div className="px-6 py-6 space-y-4">
              {links.map((link) =>
            link.href.includes('#') ?
            <a
              key={link.href}
              href={link.href}
              onClick={(event) => handleAnchorClick(event, link.href)}
              className="pointer-events-auto block text-base font-medium text-foreground/80 hover:text-primary transition-colors">
              
                  {link.label}
                </a> :
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setMobileOpen(false)}
              className="pointer-events-auto block text-base font-medium text-foreground/80 hover:text-primary transition-colors">
              
                  {link.label}
                </Link>
            )}
              <a
              href="/#contacto"
              onClick={(event) => handleAnchorClick(event, '/#contacto')}
              className="pointer-events-auto block bg-primary text-primary-foreground px-6 py-3 rounded-full text-center text-sm font-semibold">
              
                Planear mi visita
              </a>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </nav>);

}