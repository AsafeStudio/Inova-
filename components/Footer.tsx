
import React from 'react';
import { MapPin, Phone, MessageCircle, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#4A5D54] text-[#E8F3ED] pt-20 pb-10 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-2 space-y-6">
          <div className="flex items-center">
            <img src="https://i.imgur.com/0HtyACs.png" alt="Dente+" className="h-9 w-auto brightness-0 invert" />
          </div>
          <p className="text-[#BCCBC1] max-w-sm">
            Referência em tratamentos odontológicos modernos, unindo tecnologia e cuidado humano para transformar sorrisos.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-[#8EAC9B] flex items-center justify-center hover:bg-[#8EAC9B] transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-[#8EAC9B] flex items-center justify-center hover:bg-[#8EAC9B] transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="font-extrabold text-white uppercase tracking-widest text-xs">Unidade Central</h4>
          <div className="space-y-4 text-sm">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#8EAC9B] shrink-0" />
              <span>Av. das Tulipas, 120 - Sala 402<br />Bairro Jardim, São Paulo - SP</span>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="font-extrabold text-white uppercase tracking-widest text-xs">Contatos</h4>
          <div className="space-y-4 text-sm">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-[#8EAC9B]" />
              <span>(11) 4004-9000</span>
            </div>
            <div className="flex items-center gap-3">
              <MessageCircle className="w-5 h-5 text-[#8EAC9B]" />
              <span>(11) 98888-7777</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto pt-10 border-t border-white/10 text-center md:text-left flex flex-col md:flex-row justify-between gap-4 text-xs text-[#BCCBC1]">
        <p>© 2024 Clínica Dente+. Todos os direitos reservados. RT: Dr. João Silva - CRO/SP 12345</p>
        <div className="flex gap-6 justify-center">
          <a href="#" className="hover:text-white">Privacidade</a>
          <a href="#" className="hover:text-white">Termos de Uso</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
