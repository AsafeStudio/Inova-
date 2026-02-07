
import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  Clock, 
  Menu, 
  X, 
  ShieldCheck 
} from 'lucide-react';
import Hero from './components/Hero';
import Services from './components/Services';
import BookingModal from './components/BookingModal';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleBooking = () => setIsBookingOpen(!isBookingOpen);

  const Logo = () => (
    <div className="flex items-center">
      <img src="https://i.imgur.com/0HtyACs.png" alt="Dente+" className="h-9 w-auto object-contain" />
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col selection:bg-[#E8F3ED] selection:text-[#3D4B44]">
      {/* Navigation */}
      <nav className={`fixed w-full z-40 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <Logo />

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#inicio" className="text-sm font-bold hover:text-[#8EAC9B] transition-colors">Início</a>
            <a href="#sobre" className="text-sm font-bold hover:text-[#8EAC9B] transition-colors">Sobre nós</a>
            <a href="#servicos" className="text-sm font-bold hover:text-[#8EAC9B] transition-colors">Tratamentos</a>
            <button 
              onClick={toggleBooking}
              className="bg-[#E8F3ED] text-[#4A5D54] px-6 py-2.5 rounded-full text-sm font-bold hover:bg-[#D5E6DC] transition-all flex items-center gap-2"
            >
              Marcar consulta
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white p-8 flex flex-col gap-8 md:hidden">
          <div className="flex justify-between items-center">
             <Logo />
             <button onClick={() => setIsMenuOpen(false)}><X /></button>
          </div>
          <div className="flex flex-col gap-6 text-xl font-bold">
            <a href="#inicio" onClick={() => setIsMenuOpen(false)}>Início</a>
            <a href="#sobre" onClick={() => setIsMenuOpen(false)}>Sobre nós</a>
            <a href="#servicos" onClick={() => setIsMenuOpen(false)}>Tratamentos</a>
          </div>
          <button 
            onClick={() => { setIsMenuOpen(false); toggleBooking(); }}
            className="w-full bg-[#E8F3ED] text-[#4A5D54] py-4 rounded-2xl text-lg font-bold"
          >
            Agendar agora
          </button>
        </div>
      )}

      <main>
        <Hero onBookingClick={toggleBooking} />
        
        <section id="sobre" className="py-20 px-6 bg-[#F5F1EA]">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#4A5D54]">
              Cuidando do seu sorriso com tecnologia e carinho.
            </h2>
            <p className="text-lg md:text-xl text-[#6D7A73] leading-relaxed max-w-2xl mx-auto">
              Acreditamos que a odontologia moderna deve unir precisão técnica com um atendimento humanizado. Na Dente+, oferecemos um ambiente acolhedor e focado no seu bem-estar.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white/50 p-8 rounded-3xl backdrop-blur-sm">
                <div className="w-12 h-12 bg-[#FDFBF7] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <ShieldCheck className="text-[#8EAC9B]" />
                </div>
                <h3 className="font-extrabold mb-2">Tecnologia de Ponta</h3>
                <p className="text-sm text-[#6D7A73]">Equipamentos modernos para diagnósticos precisos e tratamentos indolores.</p>
              </div>
              <div className="bg-white/50 p-8 rounded-3xl backdrop-blur-sm">
                <div className="w-12 h-12 bg-[#FDFBF7] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="text-[#8EAC9B]" />
                </div>
                <h3 className="font-extrabold mb-2">Atendimento Ágil</h3>
                <p className="text-sm text-[#6D7A73]">Processos simplificados para que você não perca tempo em esperas.</p>
              </div>
              <div className="bg-white/50 p-8 rounded-3xl backdrop-blur-sm">
                <div className="w-12 h-12 bg-[#FDFBF7] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-[#8EAC9B]" />
                </div>
                <h3 className="font-extrabold mb-2">Foco no Paciente</h3>
                <p className="text-sm text-[#6D7A73]">Atendimento personalizado para entender e resolver suas necessidades reais.</p>
              </div>
            </div>
          </div>
        </section>

        <Services />
        <Testimonials />

        <section className="py-24 px-6 text-center">
          <div className="max-w-xl mx-auto space-y-6">
            <span className="text-[#8EAC9B] font-extrabold tracking-widest uppercase text-xs">Agendamento Simplificado</span>
            <h2 className="text-4xl font-extrabold text-[#4A5D54]">Pronto para transformar seu sorriso?</h2>
            <p className="text-lg text-[#6D7A73]">
              Reserve seu horário em menos de um minuto e nossa equipe entrará em contato.
            </p>
            <button 
              onClick={toggleBooking}
              className="mt-4 bg-[#4A5D54] text-white px-10 py-4 rounded-full text-lg font-extrabold shadow-lg shadow-[#4A5D54]/20 hover:scale-105 transition-transform"
            >
              Agendar consulta agora
            </button>
          </div>
        </section>
      </main>

      <Footer />

      {/* Booking Modal */}
      {isBookingOpen && <BookingModal onClose={toggleBooking} />}
    </div>
  );
};

export default App;
