import React from 'react';
import { motion } from 'framer-motion';

const BOOKS = [
  {
    title: 'Matrimonio animal: El espíritu del matrimonio',
    cover: 'https://media.base44.com/images/public/69ea6ca06c4574e55a2de28d/cbf4ee3a1_Capturadepantalla2026-05-19211906.png',
    link: 'https://amzn.eu/d/0f1x0hCk',
  },
  {
    title: 'Espíritu Santo: Relación, unción y poder',
    cover: 'https://media.base44.com/images/public/69ea6ca06c4574e55a2de28d/d760ede5b_Capturadepantalla2026-05-19211925.png',
    link: 'https://amzn.eu/d/0bAwPe2P',
  },
  {
    title: 'Un día en Su presencia: Devocional de 100 días para construir tu vida sobre la roca',
    cover: 'https://media.base44.com/images/public/69ea6ca06c4574e55a2de28d/af2c5ecf4_Capturadepantalla2026-05-19211948.png',
    link: 'https://amzn.eu/d/01Dd2rww',
  },
  {
    title: 'Espíritu Santo: El secreto de Su voz',
    cover: 'https://media.base44.com/images/public/69ea6ca06c4574e55a2de28d/77ad814b3_Capturadepantalla2026-05-19212002.png',
    link: 'https://amzn.eu/d/06C4aWB2',
  },
  {
    title: 'La fe lo es todo',
    cover: 'https://media.base44.com/images/public/69ea6ca06c4574e55a2de28d/6743a31a3_Capturadepantalla2026-05-19212036.png',
    link: 'https://amzn.eu/d/05FejENI',
  },
];

export default function BooksSection() {
  return (
    <section id="libros" className="scroll-mt-24 py-24 md:py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-primary text-sm tracking-[0.25em] uppercase font-semibold">Libros</span>
          <h2 className="font-display text-4xl md:text-6xl font-medium text-foreground mt-4">Libros de la iglesia</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
          {BOOKS.map((book, index) => (
            <motion.article
              key={book.link}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-card border border-border/60 rounded-2xl p-5 flex flex-col shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[3/4] rounded-xl border border-border/70 bg-secondary overflow-hidden mb-5">
                <img src={book.cover} alt={book.title} className="w-full h-full object-contain" />
              </div>

              <h3 className="font-bold text-foreground text-lg leading-tight text-center mb-6">{book.title}</h3>
              <a
                href={book.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto mx-auto inline-flex justify-center items-center bg-primary text-primary-foreground px-7 py-3 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors"
              >
                Adquirir libro
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}