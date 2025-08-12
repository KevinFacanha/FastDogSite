import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const phoneNumber = '5511945993793';
  const message = encodeURIComponent('Olá! Gostaria de saber mais sobre os produtos FastDog.');
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isTooltipVisible && (
        <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-lg p-4 mb-2 w-64 animate-fade-in">
          <button 
            onClick={() => setIsTooltipVisible(false)}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          >
            <X className="h-4 w-4" />
          </button>
          <p className="text-green-800 text-sm">
            Gostou de algum produto ou ficou com alguma dúvida? Chama a gente!
          </p>
        </div>
      )}
      
      <a 
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-xl transform transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        onMouseEnter={() => setIsTooltipVisible(true)}
        onClick={() => setIsTooltipVisible(false)}
      >
        <MessageCircle className="h-8 w-8" />
      </a>
    </div>
  );
};

export default WhatsAppButton;