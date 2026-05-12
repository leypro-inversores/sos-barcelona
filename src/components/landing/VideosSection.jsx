import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Play, ExternalLink } from 'lucide-react';

const videos = [
  {
    id: "d7JXOofvrRg",
    title: "Reunión 15 de Marzo",
    duration: "1:06:51",
  },
  {
    id: "WcwWq3EXX34",
    title: "Reunión Navidad — 4 Enero",
    duration: "49:54",
  },
  {
    id: "M-_Irgcm7R8",
    title: "Reunión Navidad — 28 Diciembre",
    duration: "51:11",
  },
  {
    id: "js_lPeFB728",
    title: "Reunión 30 de Noviembre — Santiago Vega",
    duration: "36:00",
  },
  {
    id: "SPS5D20hxFQ",
    title: "Reunión Domingo 31 de Agosto",
    duration: "58:33",
  },
  {
    id: "sKOKz6KWsl8",
    title: "Pacto de amor de Dios con la iglesia",
    duration: "46:32",
  },
];

function VideoCard({ video, index, isInView }) {
  const [playing, setPlaying] = useState(false);
  const thumb = `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
      className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-black"
    >
      {playing ? (
        <div className="aspect-video w-full">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : (
        <div
          className="aspect-video relative cursor-pointer overflow-hidden"
          onClick={() => setPlaying(true)}
        >
          {/* Thumbnail */}
          <img
            src={thumb}
            alt={video.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            onError={(e) => {
              e.target.src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
            }}
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Duration badge */}
          <span className="absolute top-3 right-3 bg-black/70 text-white text-xs font-medium px-2.5 py-1 rounded-md backdrop-blur-sm">
            {video.duration}
          </span>

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center group-hover:bg-primary/80 group-hover:border-primary transition-all duration-300 group-hover:scale-110">
              <Play className="w-6 h-6 text-white fill-white ml-1" />
            </div>
          </div>

          {/* Title overlay at bottom */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <p className="text-white font-semibold text-sm leading-snug line-clamp-2 drop-shadow-md">
              {video.title}
            </p>
          </div>
        </div>
      )}

      {/* Card footer (shown when not playing) */}
      {!playing && (
        <div className="p-4 bg-card border-t border-border/40">
          <p className="text-foreground font-semibold text-sm leading-snug line-clamp-1">{video.title}</p>
          <p className="text-muted-foreground text-xs mt-1 font-light">SOS Barcelona</p>
        </div>
      )}
    </motion.div>
  );
}

export default function VideosSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 md:py-32 px-6 bg-foreground/[0.02]" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-block text-primary text-sm tracking-[0.25em] uppercase font-semibold mb-4"
            >
              Prédicas
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl font-medium text-foreground leading-tight"
            >
              Mensajes que transforman
            </motion.h2>
          </div>
          <motion.a
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            href="https://www.youtube.com/@somoss.o.sbarcelona8475/videos"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary font-semibold text-sm hover:opacity-80 transition-opacity shrink-0 group"
          >
            Ver todos los mensajes
            <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.a>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, i) => (
            <VideoCard key={video.id} video={video} index={i} isInView={isInView} />
          ))}
        </div>

        {/* CTA bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-14"
        >
          <a
            href="https://www.youtube.com/@somoss.o.sbarcelona8475"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border-2 border-primary/30 text-foreground px-8 py-4 rounded-full font-semibold hover:border-primary hover:text-primary transition-all duration-300"
          >
            <Play className="w-4 h-4 fill-current" />
            Suscríbete al canal de YouTube
          </a>
        </motion.div>
      </div>
    </section>
  );
}