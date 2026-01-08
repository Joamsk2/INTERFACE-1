import React from 'react';

const About: React.FC = () => {
  return (
    <section id="sobre-mi" className="py-20 px-4 max-w-7xl mx-auto">
      <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
        <div className="grid md:grid-cols-12 gap-8 items-center">
          
          {/* Portrait Image */}
          <div className="md:col-span-4 relative">
            <div className="bg-purple-100 absolute inset-0 rounded-[2rem] transform rotate-3 scale-105 -z-10"></div>
            <div className="bg-blue-100 absolute inset-0 rounded-[2rem] transform -rotate-2 scale-105 -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Karen Jensen" 
              className="w-full h-80 object-cover rounded-[2rem] shadow-sm"
            />
          </div>

          {/* Text Content */}
          <div className="md:col-span-8 md:pl-8 space-y-6">
            <h2 className="text-3xl font-bold text-slate-800">Sobre Karen Jensen</h2>
            
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Soy Karen Jensen, Lic. en Psicopedagogía y Máster en Neuropedagogía. 
                Te ofrezco un abordaje integral con empatía, profesionalismo y dedicación constante.
              </p>
              <p>
                Experiencia en clínica psicopedagógica y Master en Neuropsicología. 
                Mi objetivo es potenciar las habilidades de aprendizaje de cada individuo, 
                respetando sus tiempos y particularidades.
              </p>
            </div>

            <div className="pt-4 flex items-center gap-6">
              <button className="bg-accent-purple hover:bg-accent-purpleHover text-purple-900 font-semibold py-3 px-8 rounded-full shadow-sm transition-all">
                Conocer más
              </button>
              
              {/* Illustration of two people talking (Placeholder) */}
              <div className="hidden md:flex items-end ml-auto opacity-70">
                 <img 
                    src="https://picsum.photos/seed/talk/200/100" 
                    alt="Conversación" 
                    className="w-32 h-24 object-cover rounded-xl opacity-60 mix-blend-multiply"
                 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
