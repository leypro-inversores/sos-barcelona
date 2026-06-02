import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Play, ExternalLink, Loader2, AlertCircle, Youtube } from 'lucide-react';

const CHANNEL_ID = 'UCHPgrvFRfAD9U7Bb6NWkvGQ';
const API_KEY = 'AIzaSyD7BqqPqyBMbYoKsS_d8_UhuPib2jbYJNw';

async function fetchLatestVideos() {
  const uniqueVideos = [];
  const seenVideoIds = new Set();
  let pageToken = '';

  while (uniqueVideos.length < 6) {
    const streamsRes = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&eventType=completed&type=video&order=date&maxResults=25&key=${API_KEY}${pageToken ? `&pageToken=${pageToken}` : ''}`
    );
    const streamsData = await streamsRes.json();
    if (!streamsData.items) throw new Error(streamsData.error?.message || 'Sin videos');

    streamsData.items.forEach((item) => {
      const videoId = item.id?.videoId;
      if (!videoId || seenVideoIds.has(videoId) || uniqueVideos.length >= 6) return;

      seenVideoIds.add(videoId);
      uniqueVideos.push({
        id: videoId,
        title: item.snippet.title,
        publishedAt: item.snippet.publishedAt,
        thumbnail:
          item.snippet.thumbnails?.high?.url ||
          item.snippet.thumbnails?.medium?.url ||
          item.snippet.thumbnails?.default?.url,
      });
    });

    if (!streamsData.nextPageToken) break;
    pageToken = streamsData.nextPageToken;
  }

  return uniqueVideos.slice(0, 6);
}

function VideoCard({ video, index, isInView }) {
  const [playing, setPlaying] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.05 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden bg-white/85 backdrop-blur-xl cursor-pointer"
      style={{
        borderRadius: '16px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
        transform: 'translateY(0) scale(1)',
        transition: 'transform 0.35s ease-in-out, box-shadow 0.35s ease-in-out',
      }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px) scale(1.03)'; e.currentTarget.style.boxShadow = '0 18px 45px rgba(0,0,0,0.14)'; }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0) scale(1)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)'; }}
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
          className="aspect-video relative overflow-hidden"
          style={{ borderRadius: '16px' }}
          onClick={() => setPlaying(true)}
        >
          {/* Skeleton loader */}
          {!imgLoaded && <div className="absolute inset-0 bg-foreground/10 animate-pulse" />}
          <img
            src={video.thumbnail}
            alt={video.title}
            onLoad={() => setImgLoaded(true)}
            className={`w-full h-full object-cover group-hover:scale-105 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
            style={{ transition: 'opacity 0.5s ease, transform 0.5s ease-in-out' }}
          />
          {/* Multi-layer gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent" />

          {/* Play button with glow */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-18 h-18 w-[72px] h-[72px] rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
              style={{
                background: 'rgba(255,255,255,0.15)',
                backdropFilter: 'blur(12px)',
                border: '1.5px solid rgba(255,255,255,0.35)',
                boxShadow: '0 0 0 0 rgba(255,255,255,0)',
              }}
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center group-hover:opacity-100 transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))',
                  boxShadow: '0 0 32px 4px hsla(var(--primary)/0.5)',
                }}
              >
                <Play className="w-5 h-5 text-white fill-white ml-0.5" />
              </div>
            </div>
          </div>

          {/* Bottom title */}
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <p className="text-white font-semibold text-sm leading-snug line-clamp-2 drop-shadow-lg tracking-wide">
              {video.title}
            </p>
          </div>
        </div>
      )}

      {!playing && (
        <div className="p-4 bg-card/90 border-t border-white/5">
          <p className="text-foreground font-semibold text-sm leading-snug line-clamp-1 tracking-tight">{video.title}</p>
          <p className="text-muted-foreground text-xs mt-1">SOS Barcelona</p>
        </div>
      )}
    </motion.div>
  );
}

export default function VideosSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchLatestVideos()
      .then(setVideos)
      .catch((err) => setError(err.message || 'No se pudieron cargar los videos.'))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section
      className="py-24 md:py-36 px-6 relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, hsl(var(--background)) 0%, hsl(200 20% 96%) 50%, hsl(var(--background)) 100%)' }}
      ref={ref}
    >
      {/* Subtle radial glow top-left */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, hsla(var(--primary)/0.07) 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20 rounded-[28px] p-8 md:p-10"
          style={{
            background: 'rgba(255,255,255,0.55)',
            backdropFilter: 'blur(22px)',
            border: '1px solid rgba(255,255,255,0.75)',
            boxShadow: '0 12px 40px rgba(0,0,0,0.06)',
          }}
        >
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-5"
            >
              <div className="w-6 h-6 rounded-lg flex items-center justify-center"
                style={{ background: '#FF0000' }}>
                <Youtube className="w-6 h-6 text-white" />
              </div>
              <span className="text-primary text-sm tracking-[0.25em] uppercase font-semibold">Prédicas</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.12] tracking-tight"
            >
              <span style={{ background: 'linear-gradient(135deg, hsl(var(--foreground)) 0%, hsl(var(--primary)) 55%, hsl(var(--accent)) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Mensajes que transforman
              </span>
            </motion.h2>
          </div>
          <motion.a
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            href="https://www.youtube.com/@somoss.o.sbarcelona8475/videos"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-sm font-semibold text-primary hover:opacity-70 transition-all duration-300 shrink-0"
          >
            Ver todos los mensajes
            <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.a>
        </div>

        {loading && (
          <div className="flex justify-center items-center py-28">
            <Loader2 className="w-8 h-8 text-primary animate-spin" />
          </div>
        )}

        {error && (
          <div className="flex flex-col items-center gap-3 py-20 text-muted-foreground">
            <AlertCircle className="w-8 h-8" />
            <p className="text-sm text-center max-w-xs">{error}</p>
          </div>
        )}

        {!loading && !error && videos.length > 0 && (
          <>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
              {videos.slice(0, 6).map((video, i) => (
                <VideoCard key={`${video.id}-${i}`} video={video} index={i} isInView={isInView} />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="text-center mt-16"
            >
              <a
                href="https://www.youtube.com/@somoss.o.sbarcelona8475"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-9 py-4 rounded-full font-semibold text-sm transition-all duration-300 relative overflow-hidden"
                style={{
                  border: '1.5px solid hsla(var(--primary)/0.4)',
                  color: 'hsl(var(--foreground))',
                }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'hsl(var(--primary))'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'hsla(var(--primary)/0.4)'}
              >
                <Youtube className="w-6 h-6 text-[#FF0000]" />
                Suscríbete al canal
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: 'linear-gradient(135deg, hsla(var(--primary)/0.06), hsla(var(--accent)/0.06))' }} />
              </a>
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
}