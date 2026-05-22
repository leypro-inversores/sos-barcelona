import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import SOSLogo from '../components/landing/SOSLogo';

export default function PoliticaDePrivacidad() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border/60 bg-background/90 px-6 py-5 backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl items-center gap-4">
          <Link to="/" className="flex items-center gap-3">
            <SOSLogo size={42} />
            <div>
              <p className="font-bold leading-none">SOS Barcelona</p>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Legal</p>
            </div>
          </Link>

          <Link to="/" className="ml-auto inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            <ChevronLeft className="h-4 w-4" />
            Inicio
          </Link>
        </div>
      </header>

      <main className="px-6 py-16 md:py-24">
        <article className="mx-auto max-w-4xl rounded-3xl border border-border/70 bg-card p-8 shadow-sm md:p-12">
          <h1 className="font-display text-4xl font-semibold leading-tight text-foreground md:text-5xl">
            Términos de Uso y Política de Privacidad — SOS Barcelona
          </h1>

          <div className="mt-10 space-y-6 text-lg font-light leading-relaxed text-muted-foreground">
            <p>
              En SOS Barcelona nos tomamos muy en serio la privacidad de nuestra comunidad. Nuestro sitio web utiliza los servicios de la API de YouTube para incrustar e integrar las retransmisiones y vídeos de nuestras prédicas dominicales.
            </p>

            <p>
              Al navegar y utilizar esta sección de vídeos en nuestro sitio web, los usuarios aceptan expresamente quedar vinculados y cumplir con los Términos de Servicio de YouTube oficiales, los cuales pueden ser consultados de forma pública en el siguiente enlace:{' '}
              <a href="https://www.youtube.com/t/terms" target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline underline-offset-4">
                https://www.youtube.com/t/terms
              </a>
            </p>

            <p>
              Tratamiento de Datos de la API: Nuestro sistema únicamente accede y procesa datos públicos de la API de YouTube proporcionados por el canal institucional (títulos, miniaturas y enlaces de reproducción de los vídeos) con el único fin de mejorar la experiencia de usuario. No recopilamos, almacenamos, registramos, ni compartimos con terceros ninguna información personal, identificadores, ni datos analíticos relacionados con los usuarios que visualizan el contenido multimedia integrado.
            </p>

            <p>
              Para conocer más sobre cómo Google gestiona la seguridad y protección de la información general de los usuarios, le invitamos a revisar de forma directa la Política de Privacidad de Google disponible en el siguiente enlace oficial:{' '}
              <a href="http://www.google.com/policies/privacy" target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline underline-offset-4">
                http://www.google.com/policies/privacy
              </a>
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}