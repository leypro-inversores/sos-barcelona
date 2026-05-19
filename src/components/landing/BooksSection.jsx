import React from 'react';
import { motion } from 'framer-motion';

const BOOKS = [
  {
    title: 'Matrimonio animal',
    subtitle: 'El espíritu del matrimonio por Mauricio Rodríguez',
    description: 'Una mirada profunda y práctica sobre el diseño espiritual del matrimonio.',
    link: 'https://amzn.eu/d/0f1x0hCk',
  },
  {
    title: 'Espíritu Santo',
    subtitle: 'Relación, unción y poder',
    description: 'Un libro para crecer en intimidad, dependencia y vida guiada por el Espíritu Santo.',
    link: 'https://amzn.eu/d/0bAwPe2P',
  },
  {
    title: 'Un día en Su presencia',
    subtitle: 'Devocional de 100 días',
    description: 'Cien días para construir una vida firme sobre la roca de la presencia de Dios.',
    link: 'https://amzn.eu/d/01Dd2rww',
  },
  {
    title: 'Espíritu Santo',
    subtitle: 'El secreto de Su voz',
    description: 'Una invitación a escuchar, reconocer y seguir la voz del Espíritu Santo.',
    link: 'https://amzn.eu/d/06C4aWB2',
  },
  {
    title: 'La fe lo es todo',
    subtitle: 'Por Mauricio Rodríguez',
    description: 'Un mensaje de fe para afirmar el corazón y caminar con confianza en Dios.',
    link: 'https://amzn.eu/d/05FejENI',
  },
];

export default function BooksSection() {
  return (
    <section id="libros" className="py-24 md:py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-sm tracking-[0.25em] uppercase font-semibold">Libros</span>
          <h2 className="font-display text-4xl md:text-6xl font-medium text-foreground mt-4 mb-5">Recursos para crecer</h2>
          <p className="text-muted-foreground font-light text-lg leading-relaxed">
            Libros escritos para fortalecer tu fe, tu familia y tu relación con Dios.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {BOOKS.map((book, index) => (
            <motion.article
              key={book.link}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-card border border-border/60 rounded-2xl p-5 flex flex-col shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-[3/4] rounded-xl border border-border/70 bg-gradient-to-br from-secondary via-white to-primary/10 mb-5 flex items-center justify-center text-center p-5">
                <div>
                  <p className="font-display text-2xl font-semibold text-foreground leading-tight">{book.title}</p>
                  <p className="text-muted-foreground text-sm mt-3 leading-snug">{book.subtitle}</p>
                </div>
              </div>

              <div className="flex-1 flex flex-col text-center">
                <h3 className="font-bold text-foreground text-lg leading-tight mb-2">{book.title}</h3>
                <p className="text-muted-foreground text-sm font-light leading-relaxed mb-6">{book.description}</p>
                <a
                  href={book.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex justify-center items-center bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors"
                >
                  Adquirir libro
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}