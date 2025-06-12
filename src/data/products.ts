import { Product } from '../types/product';

export const products: Product[] = [
  // Natuka Products
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
    details: "Trança natural feita 100% de couro bovino com pelos, desidratada lentamente em baixa temperatura.\nProduto resistente, artesanal e sem conservantes, corantes ou aditivos.\nAuxilia na saúde bucal, reduz o estresse e é rica em glucosamina natural para suporte articular.\n\nDisponível em três tamanhos:\n• Tamanho P (15cm) – indicado para cães de pequeno porte – R$ 35,90\n• Tamanho M (25cm) – indicado para cães de médio porte – R$ 38,30\n• Tamanho G (35cm) – indicado para cães de grande porte – R$ 45,90",
    hasVariants: true,
    variants: [
      { size: 'P', price: 35.90, description: 'Tamanho P (15cm) - Cães de pequeno porte' },
      { size: 'M', price: 38.30, description: 'Tamanho M (25cm) - Cães de médio porte' },
      { size: 'G', price: 45.90, description: 'Tamanho G (35cm) - Cães de grande porte' }
    ]
  },
 {
    id: 'chewable-15',
    brand: 'luv',
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
    brand: 'luv',
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
    id: 'chewable-20',
    brand: 'alecrim',
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
    id: 'chewable-21',
    brand: 'alecrim',
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

  // Produtos fictícios Natuka
  {
    id: 'fictional-1',
    brand: 'alecrim',
    name: 'Crush Pet Alecrim',
    description: 'Mordedor natural de pele bovina desidratada',
    price: 34.90,
    image: './catalogs/crush pet.JPG',
    images: [
      './catalogs/crush pet.JPG',
      './catalogs/pet crush.JPG'
    ],
    details: 'Feito com 100% de pele bovina enrolada e desidratada, sem conservantes, corantes ou aditivos. Alta resistência para proporcionar longas sessões de mastigação, auxiliando na limpeza dental e alívio de estresse. Recomendado para cães de todos os portes, especialmente os com mordida potente. Cada embalagem contém 1 unidade. Oferecer sempre sob supervisão.'
  },
    {
    id: 'chewable-22',
    brand: 'alecrim',
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

  // Good Lovin Products
  {
    id: 'good-lovin-1',
    brand: 'good-lovin',
    name: 'Bifinho Premium Good Lovin',
    description: 'Petisco macio sabor carne',
    price: 24.90,
    image: 'https://images.pexels.com/photos/7788901/pexels-photo-7788901.jpeg',
    images: [
      'https://images.pexels.com/photos/7788901/pexels-photo-7788901.jpeg',
      'https://images.pexels.com/photos/7788903/pexels-photo-7788903.jpeg'
    ],
    details: 'Petisco macio e saboroso, ideal para cães de todos os portes.'
  },
  {
    id: 'good-lovin-2',
    brand: 'good-lovin',
    name: 'Palito Mastigável Good Lovin',
    description: 'Petisco para higiene bucal',
    price: 19.90,
    image: 'https://images.pexels.com/photos/7788903/pexels-photo-7788903.jpeg',
    images: [
      'https://images.pexels.com/photos/7788903/pexels-photo-7788903.jpeg',
      'https://images.pexels.com/photos/7788904/pexels-photo-7788904.jpeg'
    ],
    details: 'Palito mastigável que auxilia na limpeza dos dentes do seu cachorro.'
  },
  {
    id: 'good-lovin-3',
    brand: 'good-lovin',
    name: 'Ossinho Dental Good Lovin',
    description: 'Petisco para limpeza dos dentes',
    price: 22.90,
    image: 'https://images.pexels.com/photos/7788904/pexels-photo-7788904.jpeg',
    images: [
      'https://images.pexels.com/photos/7788904/pexels-photo-7788904.jpeg',
      'https://images.pexels.com/photos/7788905/pexels-photo-7788905.jpeg'
    ],
    details: 'Ossinho mastigável que ajuda na limpeza dos dentes e redução do tártaro.'
  },
  {
    id: 'good-lovin-4',
    brand: 'good-lovin',
    name: 'Snack Crocante Good Lovin',
    description: 'Petisco crocante multigrãos',
    price: 26.90,
    image: 'https://images.pexels.com/photos/7788905/pexels-photo-7788905.jpeg',
    images: [
      'https://images.pexels.com/photos/7788905/pexels-photo-7788905.jpeg',
      'https://images.pexels.com/photos/7788906/pexels-photo-7788906.jpeg'
    ],
    details: 'Petisco crocante feito com blend especial de grãos selecionados.'
  },
  {
    id: 'good-lovin-5',
    brand: 'good-lovin',
    name: 'Mini Bifinhos Good Lovin',
    description: 'Petiscos pequenos para treino',
    price: 21.90,
    image: 'https://images.pexels.com/photos/7788906/pexels-photo-7788906.jpeg',
    images: [
      'https://images.pexels.com/photos/7788906/pexels-photo-7788906.jpeg',
      'https://images.pexels.com/photos/1139793/pexels-photo-1139793.jpeg'
    ],
    details: 'Petiscos em tamanho pequeno, ideais para treinamento e recompensa.'
  },

  // Luv Products
  {
    id: 'luv-1',
    brand: 'luv',
    name: 'Luv Tiras de Frango',
    description: 'Petisco natural desidratado de frango',
    price: 37.90,
    image: '/catalogs/petiscosAgrado/Natuka Tiras de frango.JPG',
    images: [
      '/catalogs/petiscosAgrado/Natuka Tiras de frango.JPG',
      '/catalogs/petiscosAgrado/tiras de frango.jpeg'
    ],
    details: 'Petisco feito 100% de carne de frango desidratada lentamente a baixa temperatura. Rico em proteínas, altamente palatável, pode ser facilmente fracionado para treinos e adequado para cães e gatos. Embalagem com 60g.'
  },
  {
    id: 'luv-2',
    brand: 'luv',
    name: 'Luv Orelha de Coelho',
    description: 'Mastigável natural de orelha de coelho',
    price: 44.90,
    image: './catalogs/petiscosMastigaveis/Orelha de Coelho.jpeg',
    images: [
      './catalogs/petiscosMastigaveis/Orelha de Coelho.jpeg',
      './catalogs/petiscosMastigaveis/coelho orelha.JPG'
    ],
    details: 'Petisco 100% natural feito de orelhas de coelho desidratadas lentamente em temperatura controlada. Baixa rigidez, ideal para cães e gatos de pequeno porte. Rico em cartilagem e pelos — auxilia na limpeza bucal, saúde gastrointestinal e oferece enriquecimento ambiental. Embalagem com 50g.'
  },

  // Alecrim Products
  {
    id: 'alecrim-1',
    brand: 'alecrim',
    name: 'Alecrim Buchinho Crocante',
    description: 'Mastigável natural de rúmen bovino',
    price: 28.90,
    image: './catalogs/petiscosMastigaveis/buchinho crocante.JPG',
    images: [
      './catalogs/petiscosMastigaveis/buchinho crocante.JPG',
      './catalogs/petiscosMastigaveis/crocante buchinho.JPG'
    ],
    details: 'Petisco 100% natural feito de rúmen bovino desidratado lentamente. Super crocante com aroma marcante, rico em proteínas. Baixo teor calórico — ideal para cães e gatos com sobrepeso. Fácil de fragmentar na mão, excelente para treinos, filhotes e idosos. Promove limpeza dental e saúde gastrointestinal. Indicado para cães e gatos de todos os portes. Embalagem com 70 g.'
  },
  {
    id: 'alecrim-2',
    brand: 'alecrim',
    name: 'Alecrim Delícia de Treino',
    description: 'Petisco natural de coração bovino desidratado',
    price: 29.90,
    image: './catalogs/petiscosMastigaveis/bovino coração.JPG',
    images: [
      './catalogs/petiscosMastigaveis/bovino coração.JPG',
      './catalogs/petiscosMastigaveis/coração bovino.JPG'
    ],
    details: 'Petisco 100% natural feito de coração bovino desidratado lentamente em baixa temperatura. Baixo teor calórico — ideal para cães e gatos com sobrepeso. Textura crocante, fácil de fragmentar na mão — excelente para treinos, adestramento e apoio a filhotes e idosos. Rico em proteínas, vitaminas B (riboflavina, niacina e B12), ferro e zinco. Embalagem com 70g.'
  }
];