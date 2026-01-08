import React from 'react';
import { MessageCircle } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="px-4 max-w-7xl mx-auto mb-16">
      <div className="bg-blue-200/60 rounded-[3rem] py-12 px-6 md:px-20 text-center relative overflow-hidden">
        
        {/* Decorative background circles */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-white/20 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-purple-200/30 rounded-full blur-2xl translate-x-1/3 translate-y-1/3"></div>

        <div className="relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">
            ¿Tienes dudas sobre qué elegir en Sintonía Mental?
          </h2>
          <p className="text-slate-700 mb-8 max-w-2xl mx-auto">
            Soy Karen Jensen, Lic. en Psicopedagogía y Máster en Neuropsicología. Contáctanos hoy mismo.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-accent-purple hover:bg-accent-purpleHover text-purple-900 font-semibold py-3 px-8 rounded-full shadow-sm transition-all">
              Reservar Turno
            </button>
            <button className="bg-accent-green hover:bg-accent-greenHover text-green-900 font-semibold py-3 px-8 rounded-full shadow-sm transition-all flex items-center justify-center gap-2">
              <MessageCircle size={20} />
              WhatsApp Directo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
