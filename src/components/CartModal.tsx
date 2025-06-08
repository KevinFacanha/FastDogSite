import React, { useState } from 'react';
import { X, Minus, Plus, ShoppingBag, Tag, MapPin } from 'lucide-react';
import { useCartStore } from '../store/useCartStore';
import toast from 'react-hot-toast';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose }) => {
  const { items, total, removeItem, updateQuantity, couponCode, setCouponCode } = useCartStore();
  const [couponInput, setCouponInput] = useState('');
  const [cep, setCep] = useState('');
  const [cepError, setCepError] = useState('');

  const formatCEP = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 5) return numbers;
    return `${numbers.slice(0, 5)}-${numbers.slice(5, 8)}`;
  };

  const handleCEPChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedCEP = formatCEP(e.target.value);
    setCep(formattedCEP);
    setCepError('');
  };

  const validateCEP = () => {
    const cepRegex = /^\d{5}-?\d{3}$/;
    if (!cepRegex.test(cep.replace('-', ''))) {
      setCepError('CEP inválido');
      return false;
    }
    return true;
  };

  const generateWhatsAppMessage = () => {
    const message = `Olá! Gostaria de fazer o seguinte pedido:\n${items
      .map(
        (item) =>
          `• ${item.quantity}x ${item.product.name} - R$ ${(
            item.product.price * item.quantity
          ).toFixed(2)}`
      )
      .join('\n')}${
      couponCode ? `\nCupom: ${couponCode}` : ''
    }\nCEP: ${cep}\nTotal: R$ ${total.toFixed(2)}`;

    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = '5511945993793';
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  };

  const handleApplyCoupon = () => {
    if (couponInput.trim()) {
      setCouponCode(couponInput.trim());
      toast.success('Cupom aplicado com sucesso');
    }
  };

  const handleWhatsAppClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!validateCEP()) {
      e.preventDefault();
      toast.error('Por favor, insira um CEP válido');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4">
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-xl font-semibold text-green-800">Carrinho</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="p-4 max-h-96 overflow-y-auto">
          {items.length === 0 ? (
            <div className="text-center py-8">
              <ShoppingBag className="h-12 w-12 mx-auto text-gray-400 mb-4" />
              <p className="text-gray-500">Seu carrinho está vazio</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex items-center justify-between border-b pb-4"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <h3 className="font-medium">{item.product.name}</h3>
                      <p className="text-sm text-gray-500">
                        R$ {item.product.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() =>
                        updateQuantity(item.product.id, Math.max(0, item.quantity - 1))
                      }
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() =>
                        updateQuantity(item.product.id, item.quantity + 1)
                      }
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => removeItem(item.product.id)}
                      className="text-red-500 hover:text-red-700 ml-4"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {items.length > 0 && (
          <div className="p-4 border-t space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex-1">
                <div className="relative">
                  <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    value={couponInput}
                    onChange={(e) => setCouponInput(e.target.value.toUpperCase())}
                    placeholder="Digite seu cupom"
                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>
              <button
                onClick={handleApplyCoupon}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                Aplicar
              </button>
            </div>

            {couponCode && (
              <div className="flex justify-between items-center bg-green-50 p-2 rounded-lg">
                <div>
                  <p className="text-green-800 font-medium">{couponCode}</p>
                </div>
                <button
                  onClick={() => {
                    setCouponCode(null);
                    setCouponInput('');
                    toast.success('Cupom removido');
                  }}
                  className="text-red-500 hover:text-red-700"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            )}

            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                value={cep}
                onChange={handleCEPChange}
                placeholder="Digite seu CEP"
                maxLength={9}
                className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                  cepError ? 'border-red-500' : ''
                }`}
              />
              {cepError && (
                <p className="text-red-500 text-sm mt-1">{cepError}</p>
              )}
            </div>

            <div className="flex justify-between items-center">
              <span className="font-semibold">Total:</span>
              <span className="font-bold text-lg">
                R$ {total.toFixed(2)}
              </span>
            </div>
            
            <a
              href={generateWhatsAppMessage()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}
              className="block w-full bg-green-600 text-white text-center py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              Finalizar no WhatsApp
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;