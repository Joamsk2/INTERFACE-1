import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-blue-200/60 rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
        <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
          
          {/* Illustration Area */}
          <div className="order-2 md:order-1 relative">
             {/* Using a placeholder that resembles the style: diverse group of people illustration */}
             <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-lg transform -rotate-1 hover:rotate-0 transition-transform duration-500">
               <img 
                 src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                 alt="Grupo de personas diversas" 
                 className="w-full h-full object-cover opacity-90 mix-blend-multiply"
               />
               <div className="absolute inset-0 bg-blue-500/10"></div>
             </div>
             
             {/* Decorative abstract blobs mimicking the illustration style */}
             <div className="absolute -top-10 -left-10 w-24 h-24 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
             <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
          </div>

          {/* Text Content */}
          <div className="order-1 md:order-2 text-left space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
              Acompañamos tu desarrollo cognitivo en cada etapa
            </h1>
            <p className="text-lg text-slate-700 leading-relaxed max-w-lg">
              Soy Karen Jensen, Lic. en Psicopedagogía y Máster en Neuropedagogía. 
              Te ofrezco un abordaje integral con empatía, respeto y creatividad.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <button className="bg-accent-purple hover:bg-accent-purpleHover text-purple-900 font-semibold py-3 px-8 rounded-full shadow-sm transition-all transform hover:scale-105">
                Reservar Consulta
              </button>
              <button className="bg-white/50 border border-slate-300 hover:bg-white text-slate-700 font-semibold py-3 px-8 rounded-full shadow-sm transition-all transform hover:scale-105">
                Test Vocacional
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
