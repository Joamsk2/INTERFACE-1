import React from 'react';
import { SERVICES } from '../constants';
import { ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-16 px-4 max-w-7xl mx-auto bg-slate-50/50 rounded-[3rem] my-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-800">Nuestros Servicios</h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((service) => (
          <div 
            key={service.id} 
            className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col h-full border border-slate-100"
          >
            <div className={`w-12 h-12 ${service.bgColor} rounded-xl flex items-center justify-center mb-4`}>
              <service.icon className="w-6 h-6 text-slate-700" />
            </div>
            
            <h3 className="text-lg font-bold text-slate-800 mb-2">{service.title}</h3>
            <p className="text-slate-500 text-sm mb-6 flex-grow leading-relaxed">
              {service.description}
            </p>

            <button className={`${service.buttonColor} bg-opacity-70 hover:bg-opacity-100 text-slate-800 text-sm font-semibold py-2 px-4 rounded-full w-max transition-all flex items-center gap-2`}>
              Más información
              {/* <ArrowRight size={14} /> */}
            </button>
            
            {/* Visual anchor for the character illustration effect shown in the original image */}
            <div className="hidden hover:block absolute -right-2 -bottom-2 w-16 h-16 bg-transparent pointer-events-none">
                {/* This would be where the character peeking out goes */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
