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
    ],
    dogSize: 'multporte'
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
    details: 'Petisco 100% natural feito de traqueia bovina desidratada lentamente em temperatura controlada. Rico em glucosamina e condroitina, favorece articulações e limpeza dental. Mastigável leve (nível fácil), adequado para cães de todos os portes. Embalagem com 200g.',
    dogSize: 'medio'
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
    details: 'Petisco 100% natural feito de traqueia bovina desidratada lentamente em baixa temperatura. Seu formato redondo dificulta a posição de mordida, tornando a mastigação mais eficiente na limpeza dos dentes caninos. Rico em glucosamina e condroitina, auxilia na saúde articular e na higiene bucal. Dificuldade: fácil; indicado para cães saudáveis de todos os portes. Embalagem com 1 unidade.',
    dogSize: 'multporte'
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
    details: 'Petisco 100% natural feito de pele bovina enrolada e desidratada lentamente. Alta resistência, proporciona distração prolongada, enriquece o ambiente e exercita a mandíbula. Auxilia na limpeza dental. Embalagem com 4 unidades.',
    dogSize: 'pequeno'
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
    details: 'Petisco 100% natural feito de pele bovina desidratada e enrolada artesanalmente. Super resistente — indicado para cães com energia e mordida forte. Proporciona enriquecimento ambiental, distração prolongada e exercício da mandíbula. Auxilia na limpeza dental, combate tártaro e promove bem-estar. Embalagem com 1 unidade.',
    dogSize: 'grande'
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
    details: 'Petisco 100% natural feito de orelha de boi (com duto auditivo), higienizada, esterilizada e desidratada lentamente. Textura crocante e mais resistente, ideal para distração prolongada, enriquecimento ambiental e controle de ansiedade de separação. Auxilia na limpeza dental e redução de tártaro. Indicado para cães de médio e grande porte. Embalagem com 1 unidade.',
    dogSize: 'grande'
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
    details: 'Mastigável 100% natural feito de couro de búfalo sem pelos, em formato espiral para maior resistência e segurança. Rico em estímulo para limpeza bucal, entretenimento e gasto de energia. Embalagem com 1 unidade.',
    dogSize: 'pequeno'
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
    details: 'Feito 100% de couro bovino, desidratado lentamente sem aditivos, conservantes ou corantes. Nível de resistência alto, ideal para limpeza dental e estímulo da mastigação. Cada embalagem contém 1 unidade. Indicado para cães de médio a grande porte.',
    dogSize: 'multporte'
  },
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
    details: 'Feito com 100% de pele bovina enrolada e desidratada, sem conservantes, corantes ou aditivos. Alta resistência para proporcionar longas sessões de mastigação, auxiliando na limpeza dental e alívio de estresse. Recomendado para cães de todos os portes, especialmente os com mordida potente. Cada embalagem contém 1 unidade. Oferecer sempre sob supervisão.',
    dogSize: 'multporte'
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
    details: 'Petisco 100% natural feito de pele bovina enrolada e desidratada lentamente. Alta resistência, proporciona enriquecimento ambiental, distração prolongada e exercício da mandíbula. Auxilia na limpeza dental e alívio da ansiedade. Indicado para cães de todos os portes e idades — ideal para mordida forte. Embalagem com 1 unidade.',
    dogSize: 'medio'
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
    details: 'Petisco macio e saboroso, ideal para cães de todos os portes.',
    dogSize: 'multporte'
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
    details: 'Palito mastigável que auxilia na limpeza dos dentes do seu cachorro.',
    dogSize: 'multporte'
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
    details: 'Ossinho mastigável que ajuda na limpeza dos dentes e redução do tártaro.',
    dogSize: 'multporte'
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
    details: 'Petisco crocante feito com blend especial de grãos selecionados.',
    dogSize: 'multporte'
  },
  {
    id: 'good-lovin-5',
    brand: 'good-lovin',
    name: 'Mini Bifinhos Good Lovin',
    description: 'Petiscos pequenos para treino',
    price: 21.90,
    image: 'https://images.pexels.com/photos/7788906/pexels-photo-7788906.jpeg',
    images: [
      './catalogs/petiscosMastigaveis/Natuka Buba.JPG',
      'https://images.pexels.com/photos/1139793/pexels-photo-1139793.jpeg'
    ],
    details: 'Petiscos em tamanho pequeno, ideais para treinamento e recompensa.',
    dogSize: 'multporte'
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
    details: 'Petisco feito 100% de carne de frango desidratada lentamente a baixa temperatura. Rico em proteínas, altamente palatável, pode ser facilmente fracionado para treinos e adequado para cães e gatos. Embalagem com 60g.',
    dogSize: 'pequeno'
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
    details: 'Petisco 100% natural feito de orelhas de coelho desidratadas lentamente em temperatura controlada. Baixa rigidez, ideal para cães e gatos de pequeno porte. Rico em cartilagem e pelos — auxilia na limpeza bucal, saúde gastrointestinal e oferece enriquecimento ambiental. Embalagem com 50g.',
    dogSize: 'pequeno'
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
    details: 'Petisco 100% natural feito de rúmen bovino desidratado lentamente. Super crocante com aroma marcante, rico em proteínas. Baixo teor calórico — ideal para cães e gatos com sobrepeso. Fácil de fragmentar na mão, excelente para treinos, filhotes e idosos. Promove limpeza dental e saúde gastrointestinal. Indicado para cães e gatos de todos os portes. Embalagem com 70 g.',
    dogSize: 'grande'
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
    details: 'Petisco 100% natural feito de coração bovino desidratado lentamente em baixa temperatura. Baixo teor calórico — ideal para cães e gatos com sobrepeso. Textura crocante, fácil de fragmentar na mão — excelente para treinos, adestramento e apoio a filhotes e idosos. Rico em proteínas, vitaminas B (riboflavina, niacina e B12), ferro e zinco. Embalagem com 70g.',
    dogSize: 'pequeno'
  },

  // Produtos adicionais com classificação por porte
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
    details: 'Petisco 100% natural feito de aorta bovina desidratada lentamente em temperatura controlada. Rico em proteínas e colágeno, crocante, levemente flexível e altamente palatável. Ideal para limpeza bucal, estímulo de mastigação, enriquecimento ambiental e distração. Embalagem com 4 unidades.',
    dogSize: 'medio'
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
    details: 'Petisco 100% natural feito de bexiga bovina desidratada lentamente. Baixo teor calórico, extremamente palatável e ideal para limpeza bucal, enriquecimento ambiental e distração. Embalagem com 5 unidades.',
    dogSize: 'pequeno'
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
    details: 'Feito 100% de couro bovino, desidratado lentamente sem aditivos, conservantes ou corantes. Nível de resistência alto, ideal para limpeza dental e estímulo da mastigação. Cada embalagem contém 1 unidade. Indicado para cães de pequeno a médio porte',
    dogSize: 'medio'
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
    details: 'Petisco 100% natural feito de couro bovino com pelos, desidratado lentamente a baixa temperatura. Promove limpeza dental, entretenimento e estímulo à mastigação. Textura moderada, indicado para cães de todos os portes. Embalagem com 4 unidades.',
    dogSize: 'pequeno'
  },
  {
    id: 'chewable-8',
    brand: 'natuka',
    name: 'Natuka Vergalho Stick',
    description: 'Mastigável natural feito de vergalho bovino',
    price: 58.90,
    image: './catalogs/petiscosMastigaveis/natuka vergalho.JPG',
    images: [
      './catalogs/petiscosMastigaveis/natuka vergalho.JPG',
      './catalogs/petiscosMastigaveis/vergalho natuka.JPG'
    ],
    details: "Feito exclusivamente de vergalho bovino 100% natural, sem aditivos, conservantes ou corantes. Textura firme que estimula a mastigação e ajuda na saúde dental. Produto de alta palatabilidade e durabilidade. Recomendado para cães de médio a grande porte. Embalagem contém 1 unidade. Oferecer com supervisão.",
    dogSize: 'multporte'
  },
  {
    id: 'chewable-9',
    brand: 'good-lovin',
    name: 'Mini Traqueia Bovina Good Lovin',
    description: 'Mastigável natural de traqueia bovina',
    price: 25.90,
    image: './catalogs/petiscosMastigaveis/traqueia mini goodlovin.JPG',
    images: [
      './catalogs/petiscosMastigaveis/traqueia mini goodlovin.JPG',
      './catalogs/petiscosMastigaveis/traqueia mini.JPG'
    ],
    details: 'Petisco 100% natural feito de traqueia bovina desidratada lentamente em baixa temperatura. Rico em colágeno, glucosamina e condroitina, auxilia na saúde das articulações e na regeneração de tecidos. Textura firme que promove limpeza dental e enriquecimento ambiental. Embalagem com 5 unidades.',
    dogSize: 'pequeno'
  },
  {
    id: 'chewable-10',
    brand: 'good-lovin',
    name: 'Big Traqueia Bovina Good Lovin',
    description: 'Mastigável natural de traqueia bovina – unidade única',
    price: 25.90,
    image: './catalogs/petiscosMastigaveis/traqueia.JPG',
    images: [
      './catalogs/petiscosMastigaveis/traqueia.JPG',
      './catalogs/petiscosMastigaveis/big traqueia.JPG'
    ],
    details: 'Petisco 100% natural feito de traqueia bovina higienizada e esterilizada, desidratada lentamente em baixa temperatura.\nRica em colágeno, glucosamina e condroitina — favorece a saúde articular e regeneração de tecidos.\nTextura rígida, ideal para promover limpeza dental, removendo tártaro e placa.\nEstimula a mastigação, proporcionando entretenimento, enriquecimento ambiental e alívio do estresse.\n\nEmbalagem contém 1 unidade (aproximadamente 13cm x 8cm), com variação natural de formato e cor.\nProduto livre de conservantes e corantes.',
    dogSize: 'grande'
  },
  {
    id: 'chewable-11',
    brand: 'good-lovin',
    name: 'Spiral Júnior Good Lovin',
    description: 'Mastigável natural de couro bovino em espiral – pacote com 5 unidades',
    price: 25.90,
    image: './catalogs/petiscosMastigaveis/Spiral Junior.JPG',
    images: [
      './catalogs/petiscosMastigaveis/Spiral Junior.JPG',
      './catalogs/petiscosMastigaveis/junior spiral.JPG'
    ],
    details: 'Petisco 100% natural feito de couro bovino desidratado lentamente em baixa temperatura, com pelos curtos. Itens altamente resistentes e duráveis, ideais para cães com grande necessidade de mastigação. Proporcionam limpeza dental (equivalem a 40 min de caminhada a cada 20 min de uso) e aliviam a ansiedade e estresse. Rico em fibras insolúveis que auxiliam o trânsito intestinal. Indicados para cães de porte pequeno, mas também adequados a todos os portes. Embalagem com 5 unidades (aprox. 14,5cm cada), peso mínimo de 55g. Conservação: após aberto, consumir em até 7 dias. Use sempre sob supervisão.',
    dogSize: 'pequeno'
  },
  {
    id: 'chewable-12',
    brand: 'good-lovin',
    name: 'Spiral Extreme Good Lovin',
    description: 'Mastigável natural de couro bovino em espiral – pacote com 2 unidades',
    price: 29.90,
    image: './catalogs/petiscosMastigaveis/Spiral extreme.JPG',
    images: [
      './catalogs/petiscosMastigaveis/Spiral extreme.JPG',
      './catalogs/petiscosMastigaveis/extreme spiral.JPG'
    ],
    details: 'Petisco 100% natural feito de couro bovino (com pelos), lavada, esterilizada e desidratada lentamente em baixa temperatura.\nIdeal para cães que gostam de mastigação intensa — súper resistente e durável.\nAuxilia na limpeza dental – funciona como fio dental natural, reduz em até 90% o odor da mastigação.\nOferece enriquecimento ambiental, alívio de estresse e estímulo mental.\n\nConteúdo da embalagem:\n• 2 espirais (peso mínimo de 100g).\n\nCuidados:\n• Use sempre sob supervisão.\n• Conservar em lugar seco e arejado, longe do calor e sol.\n• Consumir em até 7 dias após aberto.\n• Interrompa o uso se o pet começar a engolir pedaços grandes.',
    dogSize: 'grande'
  },
  {
    id: 'chewable-13',
    brand: 'good-lovin',
    name: 'Tie Good Lovin',
    description: 'Mastigável natural de couro bovino em formato de gravata',
    price: 19.90,
    image: './catalogs/petiscosMastigaveis/mordedor tie.JPG',
    images: [
      './catalogs/petiscosMastigaveis/mordedor tie.JPG',
      './catalogs/petiscosMastigaveis/tie.png'
    ],
    details: 'Feito 100% de couro bovino com pelos curtos, desidratado lentamente. Altamente resistente, auxilia na saúde bucal, alívio do estresse e melhora do trânsito intestinal. Indicado para cães de todos os portes. Embalagem com 1 unidade (15cm).',
    dogSize: 'multporte'
  },
  {
    id: 'chewable-14',
    brand: 'luv',
    name: 'Orelha de Coelho Luv',
    description: 'Mastigável natural de orelha de coelho',
    price: 44.90,
    image: './catalogs/petiscosMastigaveis/Orelha de Coelho.jpeg',
    images: [
      './catalogs/petiscosMastigaveis/Orelha de Coelho.jpeg',
      './catalogs/petiscosMastigaveis/coelho orelha.JPG'
    ],
    details: 'Petisco 100% natural feito de orelhas de coelho desidratadas lentamente em temperatura controlada. Baixa rigidez, ideal para cães e gatos de pequeno porte. Rico em cartilagem e pelos — auxilia na limpeza bucal, saúde gastrointestinal e oferece enriquecimento ambiental. Embalagem com 50g.',
    dogSize: 'pequeno'
  },
  {
    id: 'chewable-15',
    brand: 'luv',
    name: 'Luv Mini Mat',
    description: 'Mastigável natural de pele bovina em formato quadrado',
    price: 39.90,
    image: './catalogs/petiscosMastigaveis/mat mini.jpeg',
    images: [
      './catalogs/petiscosMastigaveis/mat mini.jpeg',
      './catalogs/petiscosMastigaveis/mini mat.JPG'
    ],
    details: 'Petisco 100% natural feito de pele bovina com pelos, desidratado lentamente. Nível difícil, ideal para cães de porte pequeno e filhotes. Auxilia na limpeza dental, controle de ansiedade e satisfação do instinto de roer. Embalagem com 2 unidades.',
    dogSize: 'pequeno'
  },
  {
    id: 'chewable-18',
    brand: 'luv',
    name: 'Luv Mat',
    description: 'Mastigável natural de pele bovina em formato quadrado',
    price: 57.49,
    image: './catalogs/petiscosMastigaveis/luv mat.jpeg',
    images: [
      './catalogs/petiscosMastigaveis/luv mat.jpeg',
      './catalogs/petiscosMastigaveis/mat luv.JPG'
    ],
    details: 'Petisco 100% natural feito de pele bovina com pelos, desidratado lentamente em temperatura controlada.\nFormato quadrado ( 20 x 20 cm), sem base para roer — mais desafiador para o pet.\nDificuldade: difícil; indicado para cães saudáveis de porte médio e grande.\nAuxilia na limpeza dental, sacia o instinto de roer, protege móveis e oferece enriquecimento ambiental — 20 min de mastigação equivalem a 40 min de caminhada.\nEmbalagem com 1 unidade.\nConservar em local seco e arejado; após aberto, consumir em até 15 dias.',
    dogSize: 'medio'
  },
  {
    id: 'chewable-19',
    brand: 'luv',
    name: 'Orelha Suína Luv',
    description: 'Mastigável natural de orelha de porco',
    price: 51.49,
    image: './catalogs/petiscosMastigaveis/Orelha Suína.jpeg',
    images: [
      './catalogs/petiscosMastigaveis/Orelha Suína.jpeg',
      './catalogs/petiscosMastigaveis/suina orelha.JPG'
    ],
    details: 'Petisco 100% natural feito de orelhas de porco desidratadas lentamente em baixa temperatura. Baixa rigidez, ideal para cães de todos os portes, especialmente filhotes.\n\nBenefícios:\n• Auxilia na limpeza dental e higiene gengival;\n• Estimula o instinto de mastigação, reduz ansiedade e protege móveis;\n• Promove entretenimento e enriquecimento ambiental.\n\nEmbalagem com 4 unidades.\n\nDificuldade: fácil a moderado.',
    dogSize: 'medio'
  },
  {
    id: 'chewable-20',
    brand: 'luv',
    name: 'Orelha Bovina Luv',
    description: 'Mastigável natural de orelha bovina com pelos',
    price: 51.49,
    image: './catalogs/petiscosMastigaveis/orelha bovina luv.JPG',
    images: [
      './catalogs/petiscosMastigaveis/orelha bovina luv.JPG',
      './catalogs/petiscosMastigaveis/bovina orelha.JPG'
    ],
    details: 'Petisco 100% natural feito de orelhas de boi desidratadas lentamente em temperatura controlada. Rigidez moderada, ideal para cães de todos os portes. Auxilia na limpeza dental, alivia o estresse e entretém o pet — 20 min roendo equivalem a 40 min de caminhada.',
    dogSize: 'grande'
  },
  {
    id: 'chewable-25',
    brand: 'alecrim',
    name: 'Buchinho Crocante AlecrimPet',
    description: 'Mastigável natural de rúmen bovino',
    price: 28.90,
    image: './catalogs/petiscosMastigaveis/buchinho crocante.JPG',
    images: [
      './catalogs/petiscosMastigaveis/buchinho crocante.JPG',
      './catalogs/petiscosMastigaveis/crocante buchinho.JPG'
    ],
    details: 'Petisco 100% natural feito de rúmen bovino desidratado lentamente. Super crocante com aroma marcante, rico em proteínas. Baixo teor calórico — ideal para cães e gatos com sobrepeso. Fácil de fragmentar na mão, excelente para treinos, filhotes e idosos. Promove limpeza dental e saúde gastrointestinal. Indicado para cães e gatos de todos os portes. Embalagem com 70 g.',
    dogSize: 'grande'
  },

  // Produtos de Agrado (Treats)
  {
    id: 'treat-1',
    brand: 'natuka',
    name: 'Tiras de Frango Natuka',
    description: 'Petisco natural desidratado de frango',
    price: 37.90,
    image: '/catalogs/petiscosAgrado/Natuka Tiras de frango.JPG',
    images: [
      '/catalogs/petiscosAgrado/Natuka Tiras de frango.JPG',
      '/catalogs/petiscosAgrado/tiras de frango.jpeg'
    ],
    details: 'Petisco feito 100% de carne de frango desidratada lentamente a baixa temperatura. Rico em proteínas, altamente palatável, pode ser facilmente fracionado para treinos e adequado para cães e gatos. Embalagem com 60g.',
    dogSize: 'pequeno'
  },
  {
    id: 'treat-2',
    brand: 'natuka',
    name: 'Tiras Suínas Natuka',
    description: 'Petisco natural desidratado de suína',
    price: 37.90,
    image: './catalogs/petiscosAgrado/Tiras suína natuka.JPG',
    images: [
      './catalogs/petiscosAgrado/Tiras suína natuka.JPG',
      './catalogs/petiscosAgrado/Natuka Tiras de Suina.JPG'
    ],
    details: 'Petisco feito 100% de filé suíno desidratado lentamente em baixas temperaturas. Rico em proteínas, altamente palatável, pode ser facilmente fracionado para treinos e adequado para cães e gatos. Embalagem com 60g.',
    dogSize: 'pequeno'
  },
  {
    id: 'treat-3',
    brand: 'natuka',
    name: 'Natuka Pop – Pulmão Bovino',
    description: 'Petisco natural de pulmão bovino',
    price: 30.90,
    image: './catalogs/petiscosAgrado/Natuka Pop.JPG',
    images: [
      './catalogs/petiscosAgrado/Natuka Pop.JPG',
      './catalogs/petiscosAgrado/natuka popp.JPG'
    ],
    details: 'Petisco 100% natural feito de pulmão de boi desidratado lentamente em baixa temperatura. Leve, de baixo teor calórico, altamente atrativo e ideal para treinos e recompensas. Adequado para cães e gatos. Embalagem com 60g.',
    dogSize: 'multporte'
  },
  {
    id: 'treat-4',
    brand: 'natuka',
    name: 'Sticks Carnes Nobres Good Lovin',
    description: 'Petisco natural de carnes nobres bovinas',
    price: 34.90,
    image: './catalogs/petiscosAgrado/STICKS CARNES NOBRES.JPG',
    images: [
      './catalogs/petiscosAgrado/STICKS CARNES NOBRES.JPG',
      './catalogs/petiscosAgrado/stick nobre.JPG',
    ],
    details: 'Petisco feito 100% de carne bovina (patinho e lombinho), higienizada e esterilizada, desidratada lentamente. Baixo teor de gordura, 100% natural, ideal para treino e recompensa. Embalagem com 60 g.',
    dogSize: 'multporte'
  },
  {
    id: 'treat-5',
    brand: 'natuka',
    name: 'Sticks Filé Mignon Suíno',
    description: 'Petisco natural de filé mignon suíno',
    price: 38.30,
    image: './catalogs/petiscosAgrado/STICKS FILÉ MIGNON SUÍNO.JPG',
    images: [
      './catalogs/petiscosAgrado/STICKS FILÉ MIGNON SUÍNO.JPG',
      './catalogs/petiscosAgrado/filé mignon suíno.png',
    ],
    details: 'Petisco feito 100% de filé mignon suíno higienizado e desidratado lentamente em baixa temperatura. Rico em proteínas, com baixo teor de gordura, altamente palatável, ideal para treinos, recompensas e enriquecimento ambiental. Embalagem com 60g.',
    dogSize: 'multporte'
  },
  {
    id: 'treat-6',
    brand: 'natuka',
    name: 'Sticks Focinho Suíno',
    description: 'Petisco natural de focinho suíno',
    price: 33.90,
    image: './catalogs/petiscosAgrado/Focinho Suíno.JPG',
    images: [
      './catalogs/petiscosAgrado/Focinho Suíno.JPG',
      './catalogs/petiscosAgrado/focinho suíno.png',
    ],
    details: 'Snack mastigável feito 100% de focinho suíno desidratado. Rico em proteínas, auxilia na saúde bucal e no alívio do estresse. Embalagem com 6 unidades.',
    dogSize: 'multporte'
  },
  {
    id: 'treat-7',
    brand: 'natuka',
    name: 'Snacks Filé Peito de Frango',
    description: 'Petisco natural de filé de peito de frango',
    price: 38.30,
    image: './catalogs/petiscosAgrado/file de frango.JPG',
    images: [
      './catalogs/petiscosAgrado/file de frango.JPG',
      './catalogs/petiscosAgrado/snacks file de peito de frango.JPG'
    ],
    details: 'Petisco feito 100% de filé de peito de frango desidratado, rico em proteínas, auxilia na higiene bucal, alivia o estresse e oferece enriquecimento ambiental. Embalagem com 60g.',
    dogSize: 'pequeno'
  },

  // Mordedores (Chewers)
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
    details: 'Petisco 100% natural feito de casco bovino (queratina), desidratado lentamente. Extremamente rígido — oferece mastigação prolongada e pode durar dias. Pode ser recheado para enriquecimento ambiental. Ideal para limpeza dental, alívio de estresse e controle de peso. Indicado para cães de todos os portes, exceto com problemas dentários. Embalagem com 4 unidades.',
    dogSize: 'grande'
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
    details: 'Petisco 100% natural feito de chifre bovino (queratina), sem ponta, muito rígido e durável. Ideal para mastigação prolongada, limpeza dental e enriquecimento ambiental. Pode ser recheado para maior estímulo. Indicado para cães de todos os portes. Produto natural — variações de tamanho, cor e peso podem ocorrer.\n\nDisponível em dois tamanhos:\n• Tamanho M (porte médio): R$ 24,90\n• Tamanho G (porte grande): R$ 27,90\nEmbalagem com 1 unidade..',
    dogSize: 'medio'
  },
  {
    id: 'chewer-3',
    brand: 'good-lovin',
    name: 'Casco Bovino Good Lovin',
    description: 'Mastigável natural de casco bovino',
    price: 12.50,
    image: './catalogs/mordedores/Casco.JPG',
    images: [
      './catalogs/mordedores/Casco.JPG',
      './catalogs/mordedores/casco bovino good.JPG'
    ],
    details: 'Petisco 100% natural feito de casco bovino higienizado e esterilizado, desidratado lentamente. Alta durabilidade — ideal para filhotes em troca dentária e cães com instinto de mastigação. Promove limpeza dental, controle de tártaro e distração prolongada. Indicado para cães de pequeno e médio porte. Embalagem com 1 unidade.',
    dogSize: 'grande'
  },
  {
    id: 'chewer-4',
    brand: 'good-lovin',
    name: 'Chifre Bovino Good Lovin',
    description: 'Mastigável natural de chifre bovino',
    price: 38.90,
    image: './catalogs/mordedores/Chifre.JPG',
    images: [
      './catalogs/mordedores/Chifre.JPG',
      './catalogs/mordedores/bovino chifre good.JPG'
    ],
    details: 'Petisco 100% natural feito de chifre bovino inteiro, higienizado e desidratado lentamente. Muito resistente e durável, ideal para mastigação prolongada e limpeza dental. Indicado para cães de porte médio e grande. Embalagem com 1 unidade. ',
    dogSize: 'grande'
  },
  {
    id: 'chewer-5',
    brand: 'good-lovin',
    name: 'Orelha Bovina Júnior com Pelos Good Lovin',
    description: 'Mastigável natural de orelha bovina com pelos',
    price: 12.90,
    image: './catalogs/mordedores/Orelha bovina.JPG',
    images: [
      './catalogs/mordedores/Orelha bovina.JPG',
      './catalogs/mordedores/bovina orelha.JPG'
    ],
    details: 'Petisco 100% natural feito de orelha bovina com pelos, higienizada e desidratada lentamente. Textura crocante, rica em magnésio, auxilia na limpeza dental e alívio de estresse. Ideal para distração prolongada. Embalagem com 1 unidade.',
    dogSize: 'medio'
  },
  {
    id: 'chewer-6',
    brand: 'good-lovin',
    name: 'Orelha de Boi Jumbo Good Lovin (sem ouvido)',
    description: 'Mastigável natural de orelha bovina sem ouvido',
    price: 12.90,
    image: './catalogs/mordedores/orelha de boi.JPG',
    images: [
      './catalogs/mordedores/orelha de boi.JPG',
      './catalogs/mordedores/orelha de boi.JPG'
    ],
    details: 'Petisco 100% natural feito de orelha de boi higienizada, esterilizada e desidratada lentamente. Muito crocante, alta palatabilidade e durabilidade, ideal para distração prolongada e enriquecimento ambiental. Auxilia na higiene bucal e controle de tártaro. Indicado para cães de médio e grande porte. Embalagem com 1 unidade.',
    dogSize: 'grande'
  }
];