import React from 'react';
import { X, Heart, Plus, ShoppingBag } from 'lucide-react';
import { useFavoritesStore } from '../store/useFavoritesStore';
import { useCartStore } from '../store/useCartStore';
import toast from 'react-hot-toast';

interface FavoritesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FavoritesModal: React.FC<FavoritesModalProps> = ({ isOpen, onClose }) => {
  const { favorites, removeFavorite } = useFavoritesStore();
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = (product: Product) => {
    addItem(product);
    toast.success('Produto adicionado ao carrinho');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl mx-4 max-h-[90vh] overflow-hidden animate-fade-in">
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-xl font-semibold text-green-800 flex items-center">
            <Heart className="h-5 w-5 mr-2 text-red-500" />
            Favoritos ({favorites.length})
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="p-4 overflow-y-auto max-h-[70vh]">
          {favorites.length === 0 ? (
            <div className="text-center py-12">
              <Heart className="h-16 w-16 mx-auto text-gray-300 mb-4" />
              <p className="text-gray-500 text-lg">Sua lista de favoritos está vazia</p>
              <p className="text-gray-400 mt-2">
                Adicione produtos aos favoritos clicando no coração em cada produto
              </p>
            </div>
          ) : (
            <div className="grid gap-4">
              {favorites.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center justify-between border rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center space-x-4">
                    <div className="relative w-20 h-20 rounded-lg overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">{product.name}</h3>
                      <p className="text-green-600 font-bold">
                        R$ {product.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="bg-green-600 text-white p-2 rounded-lg hover:bg-green-700 transition-colors transform hover:scale-105"
                      title="Adicionar ao carrinho"
                    >
                      <ShoppingBag className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => removeFavorite(product.id)}
                      className="text-red-500 hover:text-red-700 p-2 hover:bg-red-50 rounded-lg transition-colors"
                      title="Remover dos favoritos"
                    >
                      <Heart className="h-5 w-5 fill-current" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FavoritesModal