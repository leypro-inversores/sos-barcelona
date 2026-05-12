import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { base44 } from '@/api/base44Client';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';

export default function ContactForm() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: '', email: '', phone: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    await base44.entities.Contact.create({
      ...form,
      source: 'landing_footer',
    });
    await base44.integrations.Core.SendEmail({
      to: 'sos.barcelonaa@gmail.com',
      subject: `Nuevo contacto desde la web: ${form.name}`,
      body: `Has recibido un nuevo mensaje desde el formulario de contacto de la web:\n\nNombre: ${form.name}\nEmail: ${form.email}\nTeléfono: ${form.phone || 'No proporcionado'}\n\nPuedes responderle directamente a: ${form.email}`,
    });
    setStatus('success');
  };

  return (
    <section id="contacto" className="py-20 md:py-32 px-6">
      <div ref={ref} className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block text-primary text-sm tracking-[0.25em] uppercase font-semibold mb-6"
          >
            Contacto
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-medium text-foreground mb-4 leading-tight"
          >
            Da el primer paso
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-muted-foreground text-lg font-light"
          >
            Déjanos tus datos y te contactaremos para ayudarte a planear tu primera visita.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {status === 'success' ? (
            <div className="text-center py-16 bg-card rounded-2xl border border-border/50">
              <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-foreground mb-3">¡Gracias!</h3>
              <p className="text-muted-foreground font-light">
                Hemos recibido tu información. Nos pondremos en contacto contigo pronto.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl border border-border/50 p-8 md:p-12 space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Nombre</label>
                <Input
                  required
                  placeholder="Tu nombre"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="h-12 bg-background border-border/50 rounded-xl"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <Input
                  required
                  type="email"
                  placeholder="tu@email.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="h-12 bg-background border-border/50 rounded-xl"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Teléfono</label>
                <Input
                  placeholder="+34 600 000 000"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="h-12 bg-background border-border/50 rounded-xl"
                />
              </div>
              <Button
                type="submit"
                disabled={status === 'loading'}
                className="w-full h-14 rounded-full bg-primary text-primary-foreground text-base font-semibold hover:bg-primary/90 transition-all duration-300"
              >
                {status === 'loading' ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    Quiero más información
                    <Send className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}