
import React, { useState } from 'react';
import { X, ChevronLeft, Calendar, User, Phone, CheckCircle2 } from 'lucide-react';

interface BookingModalProps {
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: '',
    name: '',
    contact: '',
    datePreference: ''
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-[#3D4B44]/20 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>
      
      <div className="relative w-full max-w-lg bg-[#FDFBF7] rounded-[40px] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-[#F5F1EA] transition-colors"
        >
          <X className="w-5 h-5 text-[#6D7A73]" />
        </button>

        <div className="p-8 md:p-12">
          {step < 4 && (
            <div className="mb-8 flex gap-2">
              {[1, 2, 3].map((i) => (
                <div 
                  key={i} 
                  className={`h-1.5 flex-1 rounded-full transition-colors ${i <= step ? 'bg-[#8EAC9B]' : 'bg-[#E8F3ED]'}`}
                ></div>
              ))}
            </div>
          )}

          {step === 1 && (
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-extrabold text-[#4A5D54]">O que você busca hoje?</h3>
                <p className="text-[#6D7A73]">Isso ajuda a gente a preparar o melhor atendimento.</p>
              </div>
              <div className="grid gap-3">
                {['Só um check-up de rotina', 'Deixar o sorriso mais bonito', 'Resolver uma dor ou incômodo', 'Aparelhos invisíveis'].map((item) => (
                  <button
                    key={item}
                    onClick={() => { setFormData({...formData, service: item}); nextStep(); }}
                    className="w-full text-left p-4 rounded-2xl border-2 border-[#E8F3ED] hover:border-[#8EAC9B] hover:bg-white transition-all font-bold text-[#4A5D54]"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <button onClick={prevStep} className="flex items-center gap-1 text-sm text-[#8EAC9B] font-extrabold">
                <ChevronLeft className="w-4 h-4" /> Voltar
              </button>
              <div className="space-y-2">
                <h3 className="text-2xl font-extrabold text-[#4A5D54]">Qual o melhor horário?</h3>
                <p className="text-[#6D7A73]">Escolha o período que fica mais fácil para você.</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {['Manhã', 'Tarde', 'Noite', 'Qualquer hora'].map((item) => (
                  <button
                    key={item}
                    onClick={() => { setFormData({...formData, datePreference: item}); nextStep(); }}
                    className="p-6 rounded-2xl border-2 border-[#E8F3ED] hover:border-[#8EAC9B] hover:bg-white transition-all font-bold text-[#4A5D54] flex flex-col items-center gap-2"
                  >
                    <Calendar className="w-5 h-5 opacity-40" />
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <form onSubmit={handleSubmit} className="space-y-6">
              <button onClick={prevStep} className="flex items-center gap-1 text-sm text-[#8EAC9B] font-extrabold">
                <ChevronLeft className="w-4 h-4" /> Voltar
              </button>
              <div className="space-y-2">
                <h3 className="text-2xl font-extrabold text-[#4A5D54]">Só mais um detalhe...</h3>
                <p className="text-[#6D7A73]">Como podemos te chamar e onde entramos em contato?</p>
              </div>
              <div className="space-y-4">
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6D7A73] opacity-40" />
                  <input 
                    type="text" 
                    required
                    placeholder="Seu nome completo"
                    className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white border-2 border-[#E8F3ED] focus:border-[#8EAC9B] outline-none transition-all"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6D7A73] opacity-40" />
                  <input 
                    type="tel" 
                    required
                    placeholder="WhatsApp para contato"
                    className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white border-2 border-[#E8F3ED] focus:border-[#8EAC9B] outline-none transition-all"
                    value={formData.contact}
                    onChange={(e) => setFormData({...formData, contact: e.target.value})}
                  />
                </div>
              </div>
              <button 
                type="submit"
                className="w-full bg-[#4A5D54] text-white py-4 rounded-full text-lg font-extrabold shadow-lg shadow-[#4A5D54]/10"
              >
                Tudo pronto, me chamem!
              </button>
            </form>
          )}

          {step === 4 && (
            <div className="text-center space-y-6 py-8">
              <div className="w-20 h-20 bg-[#E8F3ED] rounded-full flex items-center justify-center mx-auto text-[#8EAC9B]">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-extrabold text-[#4A5D54]">Perfeito, {formData.name.split(' ')[0]}!</h3>
                <p className="text-[#6D7A73] text-lg">
                  Já recebemos seu interesse. Em breve nossa equipe vai te mandar um "oi" no WhatsApp para combinarmos o melhor horário.
                </p>
              </div>
              <button 
                onClick={onClose}
                className="bg-[#E8F3ED] text-[#4A5D54] px-10 py-4 rounded-full font-extrabold"
              >
                Combinado!
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
