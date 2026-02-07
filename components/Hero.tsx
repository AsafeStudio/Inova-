
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onBookingClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookingClick }) => {
  return (
    <section id="inicio" className="relative min-h-[100vh] flex items-center pt-28 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-20 -right-20 w-[500px] h-[500px] bg-[#E8F3ED] rounded-full blur-[120px] opacity-60 z-0"></div>
      <div className="absolute bottom-20 -left-20 w-[500px] h-[500px] bg-[#F5F1EA] rounded-full blur-[120px] opacity-60 z-0"></div>

      {/* Hero Image - Desktop - Visível apenas em telas grandes (lg: 1024px+) */}
      <img 
        src="https://i.imgur.com/nswAEUK.jpeg" 
        alt="Nossa Clínica Moderna" 
        className="absolute bottom-0 right-0 lg:right-[2%] w-full lg:w-[65%] h-[90%] object-contain object-bottom z-10 hidden lg:block opacity-100 mix-blend-multiply transition-all duration-700"
      />
      
      {/* Container de Informações - Centralizado em mobile/tablet, alinhado à esquerda em desktop */}
      <div className="max-w-6xl mx-auto px-6 relative z-20 w-full flex flex-col items-center text-center lg:items-start lg:text-left">
        <div className="w-full lg:w-[50%] space-y-8 lg:-mt-24 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-[#4A5D54] leading-[1.1] drop-shadow-sm">
            O sorriso que você <span className="text-[#8EAC9B]">merece</span>, hoje.
          </h1>
          
          <p className="text-xl text-[#6D7A73] leading-relaxed max-w-lg mx-auto lg:mx-0">
            Equipamentos de última geração e profissionais altamente qualificados para transformar a sua saúde bucal na Dente+.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button 
              onClick={onBookingClick}
              className="bg-[#4A5D54] text-white px-10 py-4 rounded-full text-lg font-extrabold shadow-xl shadow-[#4A5D54]/10 hover:bg-[#3D4B44] transition-all flex items-center justify-center gap-2 group"
            >
              Marcar minha consulta
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a 
              href="#servicos"
              className="px-8 py-4 rounded-full text-lg font-extrabold text-[#4A5D54] hover:bg-white/50 transition-all text-center flex items-center justify-center"
            >
              Ver tratamentos
            </a>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-4 pt-4 lg:justify-start">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <img 
                  key={i} 
                  src={`https://picsum.photos/seed/${i + 150}/100/100`} 
                  className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" 
                  alt="Paciente satisfeito"
                />
              ))}
            </div>
            <p className="text-sm text-[#6D7A73] font-bold">
              Junte-se a mais de <span className="font-extrabold text-[#4A5D54]">5.000 pessoas</span> felizes.
            </p>
          </div>
        </div>
      </div>

      {/* Background image for mobile - Removida conforme solicitado para focar no conteúdo centralizado */}
    </section>
  );
};

export default Hero;
