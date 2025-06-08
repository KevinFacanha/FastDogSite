import React, { useState } from 'react';
import { products } from '../data/products';
import { useCartStore } from '../store/useCartStore';
import { Product } from '../types/product';
import { Plus } from 'lucide-react';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
  onAddToCart: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4 p-6">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
        <p className="text-gray-600 mb-4">{product.details}</p>
        <p className="text-xl font-bold text-green-600 mb-6">
          R$ {product.price.toFixed(2)}
        </p>
        <div className="flex space-x-4">
          <button
            onClick={onAddToCart}
            className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            Adicionar ao Carrinho
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

const ProductSection: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = (product: Product) => {
    addItem(product);
    setSelectedProduct(null);
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {['natuka', 'bom-amoroso', 'luv-alecrim'].map((brand) => (
          <div key={brand} id={brand} className="mb-16">
            <h2 className="text-3xl font-bold text-green-800 mb-8 capitalize">
              {brand === 'bom-amoroso' ? 'Bom Amoroso' : brand === 'luv-alecrim' ? 'Luv e Alecrim' : 'Natuka'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products
                .filter((product) => product.brand === brand)
                .map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-xl font-semibold mb-2">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 mb-4">{product.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-bold text-green-600">
                          R$ {product.price.toFixed(2)}
                        </span>
                        <button
                          onClick={() => setSelectedProduct(product)}
                          className="bg-green-600 text-white p-2 rounded-full hover:bg-green-700 transition-colors"
                        >
                          <Plus className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
      
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={() => handleAddToCart(selectedProduct)}
        />
      )}
    </section>
  );
};

export default ProductSection;