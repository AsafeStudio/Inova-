
import React from 'react';
import { Sparkles, Shield, Star, Smile, Wind, Heart } from 'lucide-react';

const services = [
  {
    icon: <Wind className="w-6 h-6" />,
    title: "Clínica Geral",
    description: "Tratamentos preventivos, limpezas e restaurações com foco na saúde duradoura do seu sorriso."
  },
  {
    icon: <Smile className="w-6 h-6" />,
    title: "Estética Dental",
    description: "Lentes de contato e facetas de porcelana para um sorriso harmônico e radiante."
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Clareamento",
    description: "Técnicas modernas para devolver a cor natural dos seus dentes com total segurança."
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Implantodontia",
    description: "Reabilitação oral completa com implantes de alta qualidade e rápida recuperação."
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: "Ortodontia",
    description: "Alinhadores invisíveis e aparelhos modernos para corrigir o seu sorriso discretamente."
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Periodontia",
    description: "Cuidados especializados para a saúde das gengivas e tecidos de suporte dental."
  }
];

const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl font-extrabold text-[#4A5D54]">Tratamentos Especializados</h2>
          <p className="text-lg text-[#6D7A73]">
            Oferecemos uma gama completa de serviços odontológicos com tecnologia de ponta.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-8 rounded-[32px] bg-[#FDFBF7] border border-transparent hover:border-[#E8F3ED] hover:bg-white hover:shadow-xl hover:shadow-[#E8F3ED]/40 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <div className="text-[#8EAC9B]">{service.icon}</div>
              </div>
              <h3 className="text-xl font-extrabold text-[#4A5D54] mb-3">{service.title}</h3>
              <p className="text-[#6D7A73] leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
