import React, { useState, useRef } from 'react';
import { Heart, Plus, X, Minus, Package, Clock, ChevronLeft, ChevronRight, Search } from 'lucide-react';
import { useCartStore } from '../store/useCartStore';
import { useFavoritesStore } from '../store/useFavoritesStore';
import { Product } from '../types/product';
import toast from 'react-hot-toast';

const chewers: Product[] = [
  {
    id: 'chewer-1',
    brand: 'natuka',
    name: 'Casco Bovino Natuka',
    description: 'Mastigável natural de casco bovino',
    price: 41.90,
    image: './catalogs/mordedores/Natuka Casco Bovino.JPG',
    images: [
      './catalogs/mordedores/Natuka Casco Bovino.JPG',
      './catalogs/mordedores/bovino casco.JPG'
    ],
    details: 'Petisco 100% natural feito de casco bovino (queratina), desidratado lentamente. Extremamente rígido — oferece mastigação prolongada e pode durar dias. Pode ser recheado para enriquecimento ambiental. Ideal para limpeza dental, alívio de estresse e controle de peso. Indicado para cães de todos os portes, exceto com problemas dentários. Embalagem com 4 unidades.'
  },
  {
    id: 'chewer-2',
    brand: 'natuka',
    name: 'Chifre Bovino Natuka',
    description: 'Mastigável natural de chifre bovino',
    price: 24.90,
    image: './catalogs/mordedores/Natuka Chifre.JPG',
    images: [
      './catalogs/mordedores/Natuka Chifre.JPG',
      './catalogs/mordedores/bovino chifre.JPG'
    ],
    details: 'Petisco 100% natural feito de chifre bovino (queratina), sem ponta, muito rígido e durável. Ideal para mastigação prolongada, limpeza dental e enriquecimento ambiental. Pode ser recheado para maior estímulo. Indicado para cães de todos os portes. Produto natural — variações de tamanho, cor e peso podem ocorrer.\n\nDisponível em dois tamanhos:\n• Tamanho M (porte médio): R$ 24,90\n• Tamanho G (porte grande): R$ 27,90\nEmbalagem com 1 unidade..'
  },
  {
    id: 'chewer-3',
    brand: 'natuka',
    name: 'Casco Bovino Good Lovin',
    description: 'Mastigável natural de casco bovino',
    price: 12.50,
    image: './catalogs/mordedores/Casco.JPG',
    images: [
      './catalogs/mordedores/Casco.JPG',
      './catalogs/mordedores/casco bovino good.JPG'
    ],
    details: 'Petisco 100% natural feito de casco bovino higienizado e esterilizado, desidratado lentamente. Alta durabilidade — ideal para filhotes em troca dentária e cães com instinto de mastigação. Promove limpeza dental, controle de tártaro e distração prolongada. Indicado para cães de pequeno e médio porte. Embalagem com 1 unidade.'
  },
  {
    id: 'chewer-4',
    brand: 'natuka',
    name: 'Chifre Bovino Good Lovin',
    description: 'Mastigável natural de chifre bovino',
    price: 38.90,
    image: './catalogs/mordedores/Chifre.JPG',
    images: [
      './catalogs/mordedores/Chifre.JPG',
      './catalogs/mordedores/bovino chifre good.JPG'
    ],
    details: 'Petisco 100% natural feito de chifre bovino inteiro, higienizado e desidratado lentamente. Muito resistente e durável, ideal para mastigação prolongada e limpeza dental. Indicado para cães de porte médio e grande. Embalagem com 1 unidade. '
  },
  {
    id: 'chewer-5',
    brand: 'natuka',
    name: 'Orelha Bovina Júnior com Pelos Good Lovin',
    description: 'Mastigável natural de orelha bovina com pelos',
    price: 12.90,
    image: './catalogs/mordedores/Orelha bovina.JPG',
    images: [
      './catalogs/mordedores/Orelha bovina.JPG',
      './catalogs/mordedores/bovina orelha.JPG'
    ],
    details: 'Petisco 100% natural feito de orelha bovina com pelos, higienizada e desidratada lentamente. Textura crocante, rica em magnésio, auxilia na limpeza dental e alívio de estresse. Ideal para distração prolongada. Embalagem com 1 unidade.'
  },
  {
    id: 'chewer-6',
    brand: 'natuka',
    name: 'Orelha de Boi Jumbo Good Lovin (sem ouvido)',
    description: 'Mastigável natural de orelha bovina sem ouvido',
    price: 12.90,
    image: './catalogs/mordedores/orelha de boi.JPG',
    images: [
      './catalogs/mordedores/orelha de boi.JPG',
      './catalogs/mordedores/orelha de boi.JPG'
    ],
    details: 'Petisco 100% natural feito de orelha de boi higienizada, esterilizada e desidratada lentamente. Muito crocante, alta palatabilidade e durabilidade, ideal para distração prolongada e enriquecimento ambiental. Auxilia na higiene bucal e controle de tártaro. Indicado para cães de médio e grande porte. Embalagem com 1 unidade.'
  },
  {
    id: 'chewer-7',
    brand: 'good-lovin',
    name: 'Orelha de Boi Jumbo com Ouvido Good Lovin',
    description: 'Mastigável natural de orelha bovina com ouvido',
    price: 13.90,
    image: './catalogs/mordedores/com ouvido.JPG',
    images: [
      './catalogs/mordedores/com ouvido.JPG',
      './catalogs/mordedores/Orelha de boi com ouvido.JPG'
    ],
    details: 'Petisco 100% natural feito de orelha de boi (com duto auditivo), higienizada, esterilizada e desidratada lentamente. Textura crocante e mais resistente, ideal para distração prolongada, enriquecimento ambiental e controle de ansiedade de separação. Auxilia na limpeza dental e redução de tártaro. Indicado para cães de médio e grande porte. Embalagem com 1 unidade.'
  }


];

interface ProductModalProps {
  product: Product;
  onClose: () => void;
  onAddToCart: (quantity: number) => void;
  isFavorite: boolean;
  onToggleFavorite: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToCart,
  isFavorite,
  onToggleFavorite,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const calculatePixPrice = (price: number) => price - 1.26;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="absolute top-4 right-4 z-10">
          <button
            onClick={onClose}
            className="bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
          >
            <X className="h-6 w-6 text-gray-600" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          <div className="space-y-4">
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex justify-center space-x-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden cursor-pointer border-2 transition-all ${
                    selectedImage === index
                      ? 'border-green-500 ring-2 ring-green-200'
                      : 'border-gray-200 hover:border-green-300'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-contain"
                  />
                </button>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {product.name}
              </h2>
              <p className="text-gray-600 mb-4">{product.details}</p>
              
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Package className="h-4 w-4" />
                <span>Estoque disponível</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Clock className="h-4 w-4" />
                <span>Entrega em até 3 dias úteis</span>
              </div>
            </div>
            
            <div>
              <p className="text-2xl font-bold text-green-600">
                R$ {product.price.toFixed(2)}
              </p>
              <p className="text-gray-600">
                👉 Pix: R$ {calculatePixPrice(product.price).toFixed(2)}
              </p>
              <p className="text-sm text-green-600 font-medium">
                👉 Economize R$ 1,26 no Pix
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <label className="text-gray-700">Quantidade:</label>
              <div className="flex items-center border rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 hover:bg-gray-100 transition-colors"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="px-4 py-2 border-x min-w-[3rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 hover:bg-gray-100 transition-colors"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <button
                onClick={() => {
                  onAddToCart(quantity);
                  toast.success('Produto adicionado ao carrinho');
                }}
                className="flex-1 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transform hover:scale-105 transition-all duration-200 flex items-center justify-center"
              >
                <Plus className="h-5 w-5 mr-2" />
                Adicionar ao Carrinho
              </button>
              <button
                onClick={onToggleFavorite}
                className={`p-3 rounded-lg border ${
                  isFavorite
                    ? 'bg-red-50 border-red-200'
                    : 'border-gray-200 hover:bg-gray-50'
                } transition-colors`}
              >
                <Heart
                  className={`h-6 w-6 ${
                    isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ChewersPage: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const productsPerPage = 6;
  const addItem = useCartStore((state) => state.addItem);
  const { addFavorite, removeFavorite, isFavorite } = useFavoritesStore();
  const productsGridRef = useRef<HTMLDivElement>(null);

  // Filtrar produtos baseado no termo de busca
  const filteredChewers = chewers.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredChewers.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredChewers.slice(indexOfFirstProduct, indexOfLastProduct);

  // Reset para primeira página quando buscar
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  // Função para detectar se é mobile
  const isMobile = () => {
    return window.innerWidth <= 768;
  };

  // Função para scroll suave para o grid de produtos (apenas mobile)
  const scrollToProductsGrid = () => {
    if (isMobile() && productsGridRef.current) {
      productsGridRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Função para navegar para página anterior
  const handlePreviousPage = () => {
    setCurrentPage(prev => Math.max(1, prev - 1));
    scrollToProductsGrid();
  };

  // Função para navegar para próxima página
  const handleNextPage = () => {
    setCurrentPage(prev => Math.min(totalPages, prev + 1));
    scrollToProductsGrid();
  };

  const toggleFavorite = (product: Product, event?: React.MouseEvent) => {
    if (event) {
      event.stopPropagation();
    }
    
    if (isFavorite(product.id)) {
      removeFavorite(product.id);
    } else {
      addFavorite(product);
    }
  };

  const calculatePixPrice = (price: number) => {
    return price - 1.26;
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <h1 className="text-4xl font-bold text-green-800">
          Mordedores
        </h1>
        
        {/* Campo de Busca */}
        <div className="relative w-full sm:w-80">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
          />
        </div>
      </div>

      {/* Mostrar mensagem se não houver resultados */}
      {filteredChewers.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">Nenhum produto encontrado para "{searchTerm}"</p>
        </div>
      ) : (
        <>
          <div ref={productsGridRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => setSelectedProduct(product)}
                className="cursor-pointer"
              >
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                    <button
                      onClick={(e) => toggleFavorite(product, e)}
                      className="absolute top-2 right-2 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors z-10"
                    >
                      <Heart
                        className={`h-5 w-5 ${
                          isFavorite(product.id)
                            ? 'fill-red-500 text-red-500'
                            : 'text-gray-400'
                        }`}
                      />
                    </button>
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                    <div className="space-y-1 mb-4">
                      <p className="text-lg font-bold text-green-600">
                        R$ {product.price.toFixed(2)}
                      </p>
                      <p className="text-sm text-gray-600">
                        👉 Pix: R$ {calculatePixPrice(product.price).toFixed(2)}
                      </p>
                      <p className="text-xs text-green-600 font-medium">
                        👉 Economize R$ 1,26 no Pix
                      </p>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        addItem(product);
                        toast.success('Produto adicionado ao carrinho');
                      }}
                      className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-all duration-200 transform hover:scale-105 flex items-center justify-center"
                    >
                      <Plus className="h-5 w-5 mr-2" />
                      Adicionar ao Carrinho
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Paginação - só mostra se houver mais de uma página */}
          {totalPages > 1 && (
            <div className="mt-8 flex justify-center items-center space-x-4">
              <button
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                  currentPage === 1
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-green-600 text-white hover:bg-green-700'
                } transition-colors`}
              >
                <ChevronLeft className="h-5 w-5" />
                <span>Anterior</span>
              </button>
              
              <div className="text-gray-600">
                Página {currentPage} de {totalPages}
              </div>
              
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                  currentPage === totalPages
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-green-600 text-white hover:bg-green-700'
                } transition-colors`}
              >
                <span>Próxima</span>
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          )}
        </>
      )}

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={(quantity) => {
            Array(quantity).fill(null).forEach(() => addItem(selectedProduct));
            setSelectedProduct(null);
          }}
          isFavorite={isFavorite(selectedProduct.id)}
          onToggleFavorite={() => toggleFavorite(selectedProduct)}
        />
      )}
    </div>
  );
};

export default ChewersPage;