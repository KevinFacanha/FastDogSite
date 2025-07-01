import React, { useState } from 'react';
import { X, Minus, Plus, ShoppingBag, Tag, MapPin } from 'lucide-react';
import { useCartStore } from '../store/useCartStore';
import { formatPrice, formatFullPrice } from '../utils/formatPrice';
import toast from 'react-hot-toast';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose }) => {
  const { items, subtotal, discount, total, removeItem, updateQuantity, couponCode, setCouponCode } = useCartStore();
  const [couponInput, setCouponInput] = useState('');
  const [cep, setCep] = useState('');
  const [cepError, setCepError] = useState('');

  // Lista de cupons válidos - ADICIONE NOVOS CUPONS AQUI
  const validCoupons = [
    'ESCOLADECAES10', 
    'LOKIEAPOLO10', 
    'BDOG10', 
    'FASTDOG10',
    'NOVOCUPOM10',     // ← Exemplo de novo cupom
    'PROMO2025',       // ← Exemplo de novo cupom
    'DESCONTO10'       // ← Exemplo de novo cupom
  ];

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
      .map((item) => {
        const variantInfo = item.selectedVariant ? ` (${item.selectedVariant.description})` : '';
        const itemPrice = item.product?.price || 0;
        return `• ${item.quantity}x ${item.product?.name || 'Produto'}${variantInfo} - ${formatFullPrice(
          itemPrice * item.quantity
        )}`;
      })
      .join('\n')}\n\nSubtotal: ${formatFullPrice(subtotal)}${
      couponCode ? `\nCupom: ${couponCode} (-10%): -${formatFullPrice(discount)}` : ''
    }\n\nCEP: ${cep}\n Frete será calculado via WhatsApp\n\nTotal: ${formatFullPrice(total)}`;

    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = '5511945993793';
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  };

  const handleApplyCoupon = () => {
    const couponToValidate = couponInput.trim().toUpperCase();
    
    if (!couponToValidate) {
      toast.error('Digite um cupom');
      return;
    }

    if (validCoupons.includes(couponToValidate)) {
      setCouponCode(couponToValidate);
      setCouponInput('');
      toast.success('Cupom aplicado! Desconto de 10% concedido');
    } else {
      toast.error('Cupom inválido');
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-md mx-4 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-4 border-b dark:border-gray-700 flex justify-between items-center flex-shrink-0">
          <h2 className="text-xl font-semibold text-green-800 dark:text-green-400">Carrinho</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        {/* Content Area - Scrollable */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-4">
            {items.length === 0 ? (
              <div className="text-center py-8">
                <ShoppingBag className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                <p className="text-gray-500 dark:text-gray-400">Seu carrinho está vazio</p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item, index) => {
                  // Verificar se o produto existe
                  if (!item.product) {
                    return null;
                  }

                  return (
                    <div
                      key={`${item.product.id}-${item.selectedVariant?.size || 'default'}-${index}`}
                      className="flex items-center justify-between border-b dark:border-gray-700 pb-4"
                    >
                      <div className="flex items-center space-x-4">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-16 h-16 object-cover rounded"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                          }}
                        />
                        <div>
                          <h3 className="font-medium text-gray-900 dark:text-gray-100">{item.product.name}</h3>
                          {item.selectedVariant && (
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              {item.selectedVariant.description}
                            </p>
                          )}
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {formatFullPrice(item.product.price || 0)}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, Math.max(0, item.quantity - 1))
                          }
                          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="w-8 text-center text-gray-900 dark:text-gray-100">{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity + 1)
                          }
                          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => removeItem(item.product.id)}
                          className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 ml-4"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
        
        {/* Footer - Fixed at bottom when there are items */}
        {items.length > 0 && (
          <div className="border-t dark:border-gray-700 bg-white dark:bg-gray-800 flex-shrink-0">
            {/* Coupon and CEP Section */}
            <div className="p-4 space-y-4">
              {/* Coupon Input */}
              <div className="flex items-center space-x-2">
                <div className="flex-1">
                  <div className="relative">
                    <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      value={couponInput}
                      onChange={(e) => setCouponInput(e.target.value.toUpperCase())}
                      placeholder="Digite seu cupom"
                      className="w-full pl-10 pr-4 py-2 border dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          handleApplyCoupon();
                        }
                      }}
                    />
                  </div>
                </div>
                <button
                  onClick={handleApplyCoupon}
                  className="bg-green-600 dark:bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-700 dark:hover:bg-green-800 transition-colors"
                >
                  Aplicar
                </button>
              </div>

              {/* Applied Coupon Display */}
              {couponCode && (
                <div className="flex justify-between items-center bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                  <div>
                    <p className="text-green-800 dark:text-green-400 font-medium">{couponCode}</p>
                    <p className="text-green-600 dark:text-green-300 text-sm">Desconto de 10% aplicado</p>
                  </div>
                  <button
                    onClick={() => {
                      setCouponCode(null);
                      setCouponInput('');
                      toast.success('Cupom removido');
                    }}
                    className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              )}

              {/* CEP Input */}
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  value={cep}
                  onChange={handleCEPChange}
                  placeholder="Digite seu CEP"
                  maxLength={9}
                  className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 ${
                    cepError ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'
                  }`}
                />
                {cepError && (
                  <p className="text-red-500 dark:text-red-400 text-sm mt-1">{cepError}</p>
                )}
              </div>

              {/* Price Summary */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 dark:text-gray-300">Subtotal:</span>
                  <span className="text-gray-900 dark:text-gray-100">{formatFullPrice(subtotal)}</span>
                </div>
                
                {couponCode && discount > 0 && (
                  <div className="flex justify-between items-center">
                    <span className="text-green-600 dark:text-green-400">Desconto (10%):</span>
                    <span className="text-green-600 dark:text-green-400">-{formatFullPrice(discount)}</span>
                  </div>
                )}
                
                <div className="flex justify-between items-center border-t dark:border-gray-600 pt-2">
                  <span className="font-semibold text-gray-900 dark:text-gray-100">Total:</span>
                  <span className="font-bold text-lg text-gray-900 dark:text-gray-100">
                    {formatFullPrice(total)}
                  </span>
                </div>
              </div>
            </div>
            
            {/* Fixed Checkout Button */}
            <div className="p-4 pt-0">
              <a
                href={generateWhatsAppMessage()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppClick}
                className="block w-full bg-green-600 dark:bg-green-700 text-white text-center py-3 rounded-lg hover:bg-green-700 dark:hover:bg-green-800 transition-colors font-semibold shadow-lg"
              >
                Finalizar no WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;