import React, { useState } from 'react';
import { Heart, Plus, X, Minus, Package, Clock, ChevronLeft, ChevronRight, Search } from 'lucide-react';
import { useCartStore } from '../store/useCartStore';
import { useFavoritesStore } from '../store/useFavoritesStore';
import { Product } from '../types/product';
import toast from 'react-hot-toast';

const chewables: Product[] = [
  {
    id: 'chewable-1',
    brand: 'natuka',
    name: 'Aorta Bovina Natuka',
    description: 'Mastigável natural de aorta bovina',
    price: 35.90,
    image: './catalogs/petiscosMastigaveis/Natuka Aorta Bovina.JPG',
    images: [
      './catalogs/petiscosMastigaveis/Natuka Aorta Bovina.JPG',
      './catalogs/petiscosMastigaveis/aorta bovina.JPG'
    ],
    details: 'Petisco 100% natural feito de aorta bovina desidratada lentamente em temperatura controlada. Rico em proteínas e colágeno, crocante, levemente flexível e altamente palatável. Ideal para limpeza bucal, estímulo de mastigação, enriquecimento ambiental e distração. Embalagem com 4 unidades.'
  },
  {
    id: 'chewable-2',
    brand: 'natuka',
    name: 'Natuka Buba',
    description: 'Mastigável natural de couro de búfalo',
    price: 41.90,
    image: './catalogs/petiscosMastigaveis/Natuka Buba.JPG',
    images: [
      './catalogs/petiscosMastigaveis/Natuka Buba.JPG',
      './catalogs/petiscosMastigaveis/buba natuka.JPG'
    ],
    details: 'Mastigável 100% natural feito de couro de búfalo sem pelos, em formato espiral para maior resistência e segurança. Rico em estímulo para limpeza bucal, entretenimento e gasto de energia. Embalagem com 1 unidade.'
  },
  {
    id: 'chewable-3',
    brand: 'natuka',
    name: 'Natuka Puff',
    description: 'Mastigável natural de bexiga bovina',
    price: 37.90,
    image: './catalogs/petiscosMastigaveis/Natuka Puff.JPG',
    images: [
      './catalogs/petiscosMastigaveis/Natuka Puff.JPG',
      './catalogs/petiscosMastigaveis/puff natuka.JPG'
    ],
    details: 'Petisco 100% natural feito de bexiga bovina desidratada lentamente. Baixo teor calórico, extremamente palatável e ideal para limpeza bucal, enriquecimento ambiental e distração. Embalagem com 5 unidades.'
  },
  {
    id: 'chewable-4',
    brand: 'natuka',
    name: 'Natuka Knot',
    description: 'Mastigável natural de couro bovino em formato de nó (knot)',
    price: 33.90,
    image: './catalogs/petiscosMastigaveis/knot.jpeg',
    images: [
      './catalogs/petiscosMastigaveis/knot.jpeg',
      './catalogs/petiscosMastigaveis/natuka knot.JPG'
    ],
    details: 'Feito 100% de couro bovino, desidratado lentamente sem aditivos, conservantes ou corantes. Nível de resistência alto, ideal para limpeza dental e estímulo da mastigação. Cada embalagem contém 1 unidade. Indicado para cães de pequeno a médio porte'
  },
  {
    id: 'chewable-5',
    brand: 'natuka',
    name: 'Natuka Knot Plus',
    description: 'Mastigável natural de couro bovino em formato de nó (knot)',
    price: 35.90,
    image: './catalogs/petiscosMastigaveis/Natuka Knotplus.JPG',
    images: [
      './catalogs/petiscosMastigaveis/Natuka Knotplus.JPG',
      './catalogs/petiscosMastigaveis/knotplus.JPG'
    ],
    details: 'Feito 100% de couro bovino, desidratado lentamente sem aditivos, conservantes ou corantes. Nível de resistência alto, ideal para limpeza dental e estímulo da mastigação. Cada embalagem contém 1 unidade. Indicado para cães de médio a grande porte.'
  },
  {
  id: 'natuka-1',
  brand: 'natuka',
  name: 'Palitinho Bovino Natuka',
  description: 'Mastigável natural de couro bovino com pelos',
  price: 28.90,
  image: '/catalogs/Natuka Palitinho Bovino.JPG',
  images: [
    '/catalogs/Natuka Palitinho Bovino.JPG',
    '/catalogs/palitinho bovino.jpeg'
  ],
  details: 'Petisco 100% natural feito de couro bovino com pelos, desidratado lentamente a baixa temperatura. Promove limpeza dental, entretenimento e estímulo à mastigação. Textura moderada, indicado para cães de todos os portes. Embalagem com 4 unidades.'
},
  {
    id: 'chewable-7',
    brand: 'natuka',
    name: 'Natuka Trança Bovina',
    description: 'Rica em glucosamina natural',
    price: 35.90,
    image: './catalogs/petiscosMastigaveis/Natuka Trança Bovina.JPG',
    images: [
      './catalogs/petiscosMastigaveis/Natuka Trança Bovina.JPG',
      './catalogs/petiscosMastigaveis/natuka tranca.JPG'
    ],
    details: "Trança natural feita 100% de couro bovino com pelos, desidratada lentamente em baixa temperatura.\nProduto resistente, artesanal e sem conservantes, corantes ou aditivos.\nAuxilia na saúde bucal, reduz o estresse e é rica em glucosamina natural para suporte articular.\n\nDisponível em três tamanhos:\n• Tamanho P (15cm) – indicado para cães de pequeno porte – R$ 35,90\n• Tamanho M (25cm) – indicado para cães de médio porte – R$ 38,90\n• Tamanho G (35cm) – indicado para cães de grande porte – R$ 45,90"
  },
  {
    id: 'chewable-8',
    brand: 'natuka',
    name: 'Mini Traqueia Bovina Good Lovin',
    description: 'Mastigável natural de traqueia bovina',
    price: 25.90,
    image: './catalogs/petiscosMastigaveis/traqueia mini goodlovin.JPG',
    images: [
      './catalogs/petiscosMastigaveis/traqueia mini goodlovin.JPG',
      './catalogs/petiscosMastigaveis/traqueia mini.JPG'
    ],
    details: 'Petisco 100% natural feito de traqueia bovina desidratada lentamente em baixa temperatura. Rico em colágeno, glucosamina e condroitina, auxilia na saúde das articulações e na regeneração de tecidos. Textura firme que promove limpeza dental e enriquecimento ambiental. Embalagem com 5 unidades.'
  },
  {
    id: 'chewable-9',
    brand: 'natuka',
    name: 'Big Traqueia Bovina Good Lovin',
    description: 'Mastigável natural de traqueia bovina – unidade única',
    price: 25.90,
    image: './catalogs/petiscosMastigaveis/traqueia.JPG',
    images: [
      './catalogs/petiscosMastigaveis/traqueia.JPG',
      './catalogs/petiscosMastigaveis/big traqueia.JPG'
    ],
    details: 'Petisco 100% natural feito de traqueia bovina higienizada e esterilizada, desidratada lentamente em baixa temperatura.\nRica em colágeno, glucosamina e condroitina — favorece a saúde articular e regeneração de tecidos.\nTextura rígida, ideal para promover limpeza dental, removendo tártaro e placa.\nEstimula a mastigação, proporcionando entretenimento, enriquecimento ambiental e alívio do estresse.\n\nEmbalagem contém 1 unidade (aproximadamente 13cm x 8cm), com variação natural de formato e cor.\nProduto livre de conservantes e corantes.'
  },
  {
    id: 'chewable-10',
    brand: 'natuka',
    name: 'Spiral Júnior Good Lovin',
    description: 'Mastigável natural de couro bovino em espiral – pacote com 5 unidades',
    price: 25.90,
    image: './catalogs/petiscosMastigaveis/Spiral Junior.JPG',
    images: [
      './catalogs/petiscosMastigaveis/Spiral Junior.JPG',
      './catalogs/petiscosMastigaveis/junior spiral.JPG'
    ],
    details: 'Petisco 100% natural feito de couro bovino desidratado lentamente em baixa temperatura, com pelos curtos. Itens altamente resistentes e duráveis, ideais para cães com grande necessidade de mastigação. Proporcionam limpeza dental (equivalem a 40 min de caminhada a cada 20 min de uso) e aliviam a ansiedade e estresse. Rico em fibras insolúveis que auxiliam o trânsito intestinal. Indicados para cães de porte pequeno, mas também adequados a todos os portes. Embalagem com 5 unidades (aprox. 14,5cm cada), peso mínimo de 55g. Conservação: após aberto, consumir em até 7 dias. Use sempre sob supervisão.'
  },
  {
    id: 'chewable-11',
    brand: 'natuka',
    name: 'Spiral Extreme Good Lovin',
    description: 'Mastigável natural de couro bovino em espiral – pacote com 2 unidades',
    price: 29.90,
    image: './catalogs/petiscosMastigaveis/Spiral extreme.JPG',
    images: [
      './catalogs/petiscosMastigaveis/Spiral extreme.JPG',
      './catalogs/petiscosMastigaveis/extreme spiral.JPG'
    ],
    details: 'Petisco 100% natural feito de couro bovino (com pelos), lavada, esterilizada e desidratada lentamente em baixa temperatura.\nIdeal para cães que gostam de mastigação intensa — súper resistente e durável.\nAuxilia na limpeza dental – funciona como fio dental natural, reduz em até 90% o odor da mastigação.\nOferece enriquecimento ambiental, alívio de estresse e estímulo mental.\n\nConteúdo da embalagem:\n• 2 espirais (peso mínimo de 100g).\n\nCuidados:\n• Use sempre sob supervisão.\n• Conservar em lugar seco e arejado, longe do calor e sol.\n• Consumir em até 7 dias após aberto.\n• Interrompa o uso se o pet começar a engolir pedaços grandes.'
  },
  {
    id: 'chewable-12',
    brand: 'natuka',
    name: 'Tie Good Lovin',
    description: 'Mastigável natural de couro bovino em formato de gravata',
    price: 19.90,
    image: './catalogs/petiscosMastigaveis/mordedor tie.JPG',
    images: [
      './catalogs/petiscosMastigaveis/mordedor tie.JPG',
      './catalogs/petiscosMastigaveis/tie.png'
    ],
    details: 'Feito 100% de couro bovino com pelos curtos, desidratado lentamente. Altamente resistente, auxilia na saúde bucal, alívio do estresse e melhora do trânsito intestinal. Indicado para cães de todos os portes. Embalagem com 1 unidade (15cm).'
  },
  {
    id: 'chewable-13',
    brand: 'natuka',
    name: 'Orelha de Coelho Luv',
    description: 'Mastigável natural de orelha de coelho',
    price: 44.90,
    image: './catalogs/petiscosMastigaveis/Orelha de Coelho.jpeg',
    images: [
      './catalogs/petiscosMastigaveis/Orelha de Coelho.jpeg',
      './catalogs/petiscosMastigaveis/coelho orelha.JPG'
    ],
    details: 'Petisco 100% natural feito de orelhas de coelho desidratadas lentamente em temperatura controlada. Baixa rigidez, ideal para cães e gatos de pequeno porte. Rico em cartilagem e pelos — auxilia na limpeza bucal, saúde gastrointestinal e oferece enriquecimento ambiental. Embalagem com 50g.'
  },
  {
    id: 'chewable-14',
    brand: 'natuka',
    name: 'Luv Mini Mat',
    description: 'Mastigável natural de pele bovina em formato quadrado',
    price: 39.90,
    image: './catalogs/petiscosMastigaveis/mat mini.jpeg',
    images: [
      './catalogs/petiscosMastigaveis/mat mini.jpeg',
      './catalogs/petiscosMastigaveis/mini mat.JPG'
    ],
    details: 'Petisco 100% natural feito de pele bovina com pelos, desidratado lentamente. Nível difícil, ideal para cães de porte pequeno e filhotes. Auxilia na limpeza dental, controle de ansiedade e satisfação do instinto de roer. Embalagem com 2 unidades.'
  },
  {
    id: 'chewable-15',
    brand: 'natuka',
    name: 'Traqueia Bovina Luv',
    description: 'Mastigável natural de cartilagem bovina',
    price: 44.90,
    image: './catalogs/petiscosMastigaveis/Traqueia Bovina.jpeg',
    images: [
      './catalogs/petiscosMastigaveis/Traqueia Bovina.jpeg',
      './catalogs/petiscosMastigaveis/bovina traqueia.JPG',
    ],
    details: 'Petisco 100% natural feito de traqueia bovina desidratada lentamente em temperatura controlada. Rico em glucosamina e condroitina, favorece articulações e limpeza dental. Mastigável leve (nível fácil), adequado para cães de todos os portes. Embalagem com 200g.'
  },
  {
    id: 'chewable-16',
    brand: 'natuka',
    name: 'Traqueia Redonda Luv',
    description: 'Mastigável natural de traqueia bovina em formato redondo',
    price: 39.44,
    image: './catalogs/petiscosMastigaveis/Traqueia Redonda.jpeg',
    images: [
      './catalogs/petiscosMastigaveis/Traqueia Redonda.jpeg',
      './catalogs/petiscosMastigaveis/redonda traqueia.JPG'
    ],
    details: 'Petisco 100% natural feito de traqueia bovina desidratada lentamente em baixa temperatura. Seu formato redondo dificulta a posição de mordida, tornando a mastigação mais eficiente na limpeza dos dentes caninos. Rico em glucosamina e condroitina, auxilia na saúde articular e na higiene bucal. Dificuldade: fácil; indicado para cães saudáveis de todos os portes. Embalagem com 1 unidade.'
  },
  {
    id: 'chewable-17',
    brand: 'natuka',
    name: 'Luv Mat',
    description: 'Mastigável natural de pele bovina em formato quadrado',
    price: 57.49,
    image: './catalogs/petiscosMastigaveis/luv mat.jpeg',
    images: [
      './catalogs/petiscosMastigaveis/luv mat.jpeg',
      './catalogs/petiscosMastigaveis/mat luv.JPG'
    ],
    details: 'Petisco 100% natural feito de pele bovina com pelos, desidratado lentamente em temperatura controlada.\nFormato quadrado ( 20 x 20 cm), sem base para roer — mais desafiador para o pet.\nDificuldade: difícil; indicado para cães saudáveis de porte médio e grande.\nAuxilia na limpeza dental, sacia o instinto de roer, protege móveis e oferece enriquecimento ambiental — 20 min de mastigação equivalem a 40 min de caminhada.\nEmbalagem com 1 unidade.\nConservar em local seco e arejado; após aberto, consumir em até 15 dias.'
  },
  {
    id: 'chewable-18',
    brand: 'natuka',
    name: 'Orelha Suína Luv',
    description: 'Mastigável natural de orelha de porco',
    price: 51.49,
    image: './catalogs/petiscosMastigaveis/Orelha Suína.jpeg',
    images: [
      './catalogs/petiscosMastigaveis/Orelha Suína.jpeg',
      './catalogs/petiscosMastigaveis/suina orelha.JPG'
    ],
    details: 'Petisco 100% natural feito de orelhas de porco desidratadas lentamente em baixa temperatura. Baixa rigidez, ideal para cães de todos os portes, especialmente filhotes.\n\nBenefícios:\n• Auxilia na limpeza dental e higiene gengival;\n• Estimula o instinto de mastigação, reduz ansiedade e protege móveis;\n• Promove entretenimento e enriquecimento ambiental.\n\nEmbalagem com 4 unidades.\n\nDificuldade: fácil a moderado.'
  },
  {
    id: 'chewable-19',
    brand: 'natuka',
    name: 'Orelha Bovina Luv',
    description: 'Mastigável natural de orelha bovina com pelos',
    price: 51.49,
    image: './catalogs/petiscosMastigaveis/orelha bovina luv.JPG',
    images: [
      './catalogs/petiscosMastigaveis/orelha bovina luv.JPG',
      './catalogs/petiscosMastigaveis/bovina orelha.JPG'
    ],
    details: 'Petisco 100% natural feito de orelhas de boi desidratadas lentamente em temperatura controlada. Rigidez moderada, ideal para cães de todos os portes. Auxilia na limpeza dental, alivia o estresse e entretém o pet — 20 min roendo equivalem a 40 min de caminhada.'
  },
  {
    id: 'chewable-20',
    brand: 'natuka',
    name: 'Delícia de Treino – Coração Bovino Alecrim Pet',
    description: 'Petisco natural de coração bovino desidratado',
    price: 29.90,
    image: './catalogs/petiscosMastigaveis/bovino coração.JPG',
    images: [
      './catalogs/petiscosMastigaveis/bovino coração.JPG',
      './catalogs/petiscosMastigaveis/coração bovino.JPG'
    ],
    details: 'Petisco 100% natural feito de coração bovino desidratado lentamente em baixa temperatura. Baixo teor calórico — ideal para cães e gatos com sobrepeso. Textura crocante, fácil de fragmentar na mão — excelente para treinos, adestramento e apoio a filhotes e idosos. Rico em proteínas, vitaminas B (riboflavina, niacina e B12), ferro e zinco. Embalagem com 70g.'
  },
    {
    id: 'chewable-20',
    brand: 'natuka',
    name: 'Rosquinha Mineira',
    description: 'Mastigável natural de pele bovina enrolada',
    price: 28.49,
    image: './catalogs/petiscosMastigaveis/Rosquinha Mineira.JPG',
    images: [
      './catalogs/petiscosMastigaveis/Rosquinha Mineira.JPG',
      './catalogs/petiscosMastigaveis/mineira rosquinha.JPG'
    ],
    details: 'Petisco 100% natural feito de pele bovina enrolada e desidratada lentamente. Alta resistência, proporciona distração prolongada, enriquece o ambiente e exercita a mandíbula. Auxilia na limpeza dental. Embalagem com 4 unidades.'
  },
    {
    id: 'chewable-20',
    brand: 'natuka',
    name: 'Rocambole Mineiro Miúdo Alecrim Pet',
    description: 'Mastigável natural de pele bovina enrolada',
    price: 29.90,
    image: './catalogs/petiscosMastigaveis/rocambole mineiro.JPG',
    images: [
      './catalogs/petiscosMastigaveis/rocambole mineiro.JPG',
      './catalogs/petiscosMastigaveis/mineiro rocambole.JPG'
    ],
    details: 'Petisco 100% natural feito de pele bovina enrolada e desidratada lentamente. Alta resistência, proporciona enriquecimento ambiental, distração prolongada e exercício da mandíbula. Auxilia na limpeza dental e alívio da ansiedade. Indicado para cães de todos os portes e idades — ideal para mordida forte. Embalagem com 1 unidade.'
  },
    {
    id: 'chewable-20',
    brand: 'natuka',
    name: 'Rocambole Mineiro Graúdo Alecrim Pet',
    description: 'Mastigável natural de pele bovina enrolada',
    price: 41.90,
    image: './catalogs/petiscosMastigaveis/Mineiro Graúdo.JPG',
    images: [
      './catalogs/petiscosMastigaveis/Mineiro Graúdo.JPG',
      './catalogs/petiscosMastigaveis/graudo mineiro.JPG',
    ],
    details: 'Petisco 100% natural feito de pele bovina desidratada e enrolada artesanalmente. Super resistente — indicado para cães com energia e mordida forte. Proporciona enriquecimento ambiental, distração prolongada e exercício da mandíbula. Auxilia na limpeza dental, combate tártaro e promove bem-estar. Embalagem com 1 unidade.'
  },
    {
    id: 'chewable-20',
    brand: 'natuka',
    name: 'Buchinho Crocante AlecrimPet',
    description: 'Mastigável natural de rúmen bovino',
    price: 28.90,
    image: './catalogs/petiscosMastigaveis/buchinho crocante.JPG',
    images: [
      './catalogs/petiscosMastigaveis/buchinho crocante.JPG',
      './catalogs/petiscosMastigaveis/crocante buchinho.JPG'
    ],
    details: 'Petisco 100% natural feito de rúmen bovino desidratado lentamente. Super crocante com aroma marcante, rico em proteínas. Baixo teor calórico — ideal para cães e gatos com sobrepeso. Fácil de fragmentar na mão, excelente para treinos, filhotes e idosos. Promove limpeza dental e saúde gastrointestinal. Indicado para cães e gatos de todos os portes. Embalagem com 70 g.'
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
  const calculatePixPrice = (price: number) => price * 0.9;

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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 md:p-6">
          <div className="space-y-4">
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden cursor-pointer border-2 transition-all ${
                    selectedImage === index
                      ? 'border-green-500'
                      : 'border-transparent hover:border-green-300'
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
          
          <div className="space-y-4 md:space-y-6">
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                {product.name}
              </h2>
              <p className="text-gray-600 mb-4">{product.details}</p>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Package className="h-4 w-4" />
                  <span>Estoque disponível</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>Entrega em até 3 dias úteis</span>
                </div>
              </div>
            </div>
            
            <div>
              <p className="text-2xl font-bold text-green-600">
                R$ {product.price.toFixed(2)}
              </p>
              <p className="text-gray-600">
                Pix: R$ {calculatePixPrice(product.price).toFixed(2)}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
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
                <span className="whitespace-nowrap">Adicionar ao Carrinho</span>
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

const ChewablesPage: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const productsPerPage = 6;
  const addItem = useCartStore((state) => state.addItem);
  const { addFavorite, removeFavorite, isFavorite } = useFavoritesStore();

  // Filtrar produtos baseado no termo de busca
  const filteredChewables = chewables.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredChewables.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredChewables.slice(indexOfFirstProduct, indexOfLastProduct);

  // Reset para primeira página quando buscar
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

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
    return price * 0.9;
  };

  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 md:mb-8 gap-4">
        <h1 className="text-3xl md:text-4xl font-bold text-green-800">
          Petiscos Mastigáveis
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
      {filteredChewables.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">Nenhum produto encontrado para "{searchTerm}"</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
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
                      className="w-full h-48 sm:h-64 object-contain transition-transform duration-300 group-hover:scale-110"
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
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">{product.name}</h3>
                    <div className="space-y-1 mb-4">
                      <p className="text-lg font-bold text-green-600">
                        R$ {product.price.toFixed(2)}
                      </p>
                      <p className="text-sm text-gray-600">
                        Pix: R$ {calculatePixPrice(product.price).toFixed(2)}
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
            <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4 sm:space-x-4">
              <button
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg w-full sm:w-auto justify-center ${
                  currentPage === 1
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-green-600 text-white hover:bg-green-700'
                } transition-colors`}
              >
                <ChevronLeft className="h-5 w-5" />
                <span>Anterior</span>
              </button>
              
              <div className="text-gray-600 text-center">
                Página {currentPage} de {totalPages}
              </div>
              
              <button
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg w-full sm:w-auto justify-center ${
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

export default ChewablesPage;