import React from 'react';
import { Dog, Mail, Phone, MapPin, Instagram } from 'lucide-react';

const FooterSection: React.FC = () => {
  return (
    <footer id="about" className="bg-green-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
          <div className="flex items-center space-x-2 mb-4">
            <img src="/catalogs/fastdog-logo2.png" alt="FastDog Logo" className="h-10 w-10" />
            <span className="text-2xl font-bold">FastDog</span>
            </div>
            <p className="max-w-xs mb-4">
              Distribuidora especializada em petiscos de alta qualidade para cães,
              levando alegria e saúde para o seu melhor amigo de quatro patas.
            </p>
            
            {/* Instagram Link */}
            <div className="flex items-center space-x-2">
              <a
                href="https://www.instagram.com/fastdognaturalpet/?next=%2F"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-yellow-400 hover:text-yellow-300 transition-colors duration-200 group"
                aria-label="Siga-nos no Instagram"
              >
                <div className="p-2 rounded-full bg-yellow-400/10 group-hover:bg-yellow-400/20 transition-colors duration-200">
                  <Instagram className="h-5 w-5" />
                </div>
                <span className="text-sm font-medium">@fastdognaturalpet</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-yellow-400" />
                <span>+55 11 94599-3793</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-yellow-400" />
                <span>fastdognaturalpet@gmail.com</span>

              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-1 text-yellow-400" />
                <span>São Paulo - SP, Brasil</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Horário de Atendimento</h3>
            <ul className="space-y-2">
              <li>Segunda a Sexta: 8h - 18h</li>
              <li>Sábado: 9h - 15h</li>
              <li>Domingo: Fechado</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-green-700 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} FastDog. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;