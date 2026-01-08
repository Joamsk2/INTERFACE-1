import React from 'react';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-slate-800">¿Por qué elegir Sintonía Mental?</h2>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {FEATURES.map((feature) => (
          <div 
            key={feature.id} 
            className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col items-center text-center transition-transform hover:-translate-y-1 duration-300"
          >
            <div className={`p-4 rounded-full mb-6 ${feature.color}`}>
              <feature.icon className="w-8 h-8 text-slate-700" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">{feature.title}</h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              {feature.description}
            </p>
            
            {/* Decorative mini illustrations - simulated with circles for simplicity in code */}
            <div className="mt-6 flex -space-x-2">
               {[1,2,3].map(i => (
                 <div key={i} className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white"></div>
               ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
