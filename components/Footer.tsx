import React from 'react';
import { Facebook, Twitter, Instagram, Brain } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-100/50 pt-16 pb-8 border-t border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Col */}
          <div className="col-span-2 md:col-span-1">
             <div className="flex items-center gap-2 mb-4">
                <Brain className="w-6 h-6 text-blue-600" />
                <span className="font-bold text-slate-800">Sintonía Mental</span>
             </div>
             <p className="text-sm text-slate-500 mb-4">
               Acompañando tu desarrollo cognitivo con ciencia y empatía.
             </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold text-slate-800 mb-4">Navegación</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-blue-600">Sobre Mí</a></li>
              <li><a href="#" className="hover:text-blue-600">Servicios</a></li>
              <li><a href="#" className="hover:text-blue-600">Test Vocacional</a></li>
              <li><a href="#" className="hover:text-blue-600">Blog</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-slate-800 mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>Soy Karen Jensen</li>
              <li>(555) 123-4567</li>
              <li>info@sintoniamental.com</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold text-slate-800 mb-4">Social</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-600 hover:text-blue-600"><Facebook size={20} /></a>
              <a href="#" className="text-slate-600 hover:text-blue-400"><Twitter size={20} /></a>
              <a href="#" className="text-slate-600 hover:text-pink-600"><Instagram size={20} /></a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-blue-200 text-center text-xs text-slate-500">
          <p>© 2024 Inter - Sintonía Mental. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
