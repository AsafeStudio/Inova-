
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Ana Beatriz",
    role: "Paciente de Estética",
    text: "O atendimento na Inova+ superou todas as minhas expectativas. O resultado das minhas facetas ficou incrível e muito natural.",
    image: "https://picsum.photos/seed/patient1/200/200"
  },
  {
    name: "Roberto Silva",
    role: "Paciente de Reabilitação",
    text: "Recuperei minha confiança para sorrir e comer com o tratamento de implantes. A equipe é extremamente profissional e atenciosa.",
    image: "https://picsum.photos/seed/patient2/200/200"
  },
  {
    name: "Carla Mendes",
    role: "Ortodontia",
    text: "Estou usando os alinhadores invisíveis e o processo é super tranquilo. Recomendo a clínica para todos os meus amigos e familiares.",
    image: "https://picsum.photos/seed/patient3/200/200"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-[#FDFBF7]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-extrabold text-[#4A5D54]">O que nossos pacientes dizem</h2>
          <p className="text-lg text-[#6D7A73]">A satisfação de quem confia o sorriso à nossa equipe.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-8 rounded-[40px] shadow-sm hover:shadow-md transition-shadow">
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map(star => <Star key={star} className="w-4 h-4 fill-[#8EAC9B] text-[#8EAC9B]" />)}
              </div>
              <p className="text-[#6D7A73] italic leading-relaxed mb-8">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-extrabold text-[#4A5D54]">{t.name}</h4>
                  <p className="text-xs text-[#8EAC9B] font-extrabold">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
