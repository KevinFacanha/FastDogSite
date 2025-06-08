import { Product } from '../types/product';

export const products: Product[] = [
  // Natuka Products
{
  id: 'natuka-1',
  brand: 'natuka',
  name: 'Palitinho Bovino',
  description: 'Petisco funcional para saúde bucal',
  price: 30.90,
  image: '/catalogs/Natuka Palitinho Bovino.JPG',
  images: [
    '/catalogs/Natuka Palitinho Bovino.JPG',
    '/catalogs/palitinho bovino.jpeg'
  ],
  details: 'Palitinho natural de bovino que promove a mastigação saudável, auxiliando na higiene bucal e no combate ao mau hálito do seu pet.'
},
  {
    id: 'natuka-2',
    brand: 'natuka',
    name: 'Snack Articular',
    description: 'Petisco funcional para saúde das articulações',
    price: 32.90,
    image: 'https://images.pexels.com/photos/825949/pexels-photo-825949.jpeg',
    images: [
      'https://images.pexels.com/photos/825949/pexels-photo-825949.jpeg',
      'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg'
    ],
    details: 'Suplemento em forma de petisco para auxiliar na saúde das articulações do seu pet.'
  },
  {
    id: 'natuka-3',
    brand: 'natuka',
    name: 'Petisco Probiótico',
    description: 'Suplemento para saúde intestinal',
    price: 36.90,
    image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg',
    images: [
      'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg',
      'https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg'
    ],
    details: 'Petisco funcional com probióticos para melhorar a saúde intestinal do seu pet.'
  },
  {
    id: 'natuka-4',
    brand: 'natuka',
    name: 'Snack Calmante Natural',
    description: 'Petisco relaxante para cães',
    price: 34.90,
    image: 'https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg',
    images: [
      'https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg',
      'https://images.pexels.com/photos/4587959/pexels-photo-4587959.jpeg'
    ],
    details: 'Petisco natural com camomila e valeriana para ajudar seu pet a relaxar.'
  },
  {
    id: 'natuka-5',
    brand: 'natuka',
    name: 'Biscoito Hipoalergênico',
    description: 'Para cães com sensibilidade alimentar',
    price: 39.90,
    image: 'https://images.pexels.com/photos/4587959/pexels-photo-4587959.jpeg',
    images: [
      'https://images.pexels.com/photos/4587959/pexels-photo-4587959.jpeg',
      'https://images.pexels.com/photos/6816860/pexels-photo-6816860.jpeg'
    ],
    details: 'Biscoito especial para cães com alergias ou sensibilidades alimentares.'
  },

  // Luv e Alecrim Products
  {
    id: 'luv-alecrim-1',
    brand: 'luv-alecrim',
    name: 'Snack Natural',
    description: 'Petisco 100% natural',
    price: 34.90,
    image: 'https://images.pexels.com/photos/6816860/pexels-photo-6816860.jpeg',
    images: [
      'https://images.pexels.com/photos/6816860/pexels-photo-6816860.jpeg',
      'https://images.pexels.com/photos/7788657/pexels-photo-7788657.jpeg'
    ],
    details: 'Petisco natural sem conservantes, feito com ingredientes selecionados.'
  },
  {
    id: 'luv-alecrim-2',
    brand: 'luv-alecrim',
    name: 'Biscoito Orgânico',
    description: 'Petisco orgânico certificado',
    price: 39.90,
    image: 'https://images.pexels.com/photos/7788657/pexels-photo-7788657.jpeg',
    images: [
      'https://images.pexels.com/photos/7788657/pexels-photo-7788657.jpeg',
      'https://images.pexels.com/photos/7788654/pexels-photo-7788654.jpeg'
    ],
    details: 'Biscoito feito com ingredientes orgânicos certificados, ideal para cães com sensibilidade alimentar.'
  },
  {
    id: 'luv-alecrim-3',
    brand: 'luv-alecrim',
    name: 'Cookie Integral',
    description: 'Biscoito integral nutritivo',
    price: 29.90,
    image: 'https://images.pexels.com/photos/7788654/pexels-photo-7788654.jpeg',
    images: [
      'https://images.pexels.com/photos/7788654/pexels-photo-7788654.jpeg',
      'https://images.pexels.com/photos/7788239/pexels-photo-7788239.jpeg'
    ],
    details: 'Cookie integral rico em fibras e nutrientes essenciais.'
  },
  {
    id: 'luv-alecrim-4',
    brand: 'luv-alecrim',
    name: 'Petisco de Frutas',
    description: 'Mix de frutas desidratadas',
    price: 32.90,
    image: 'https://images.pexels.com/photos/7788239/pexels-photo-7788239.jpeg',
    images: [
      'https://images.pexels.com/photos/7788239/pexels-photo-7788239.jpeg',
      'https://images.pexels.com/photos/7788236/pexels-photo-7788236.jpeg'
    ],
    details: 'Blend especial de frutas desidratadas, rico em vitaminas naturais.'
  },
  {
    id: 'luv-alecrim-5',
    brand: 'luv-alecrim',
    name: 'Snack Vegano',
    description: 'Petisco à base de vegetais',
    price: 36.90,
    image: 'https://images.pexels.com/photos/7788236/pexels-photo-7788236.jpeg',
    images: [
      'https://images.pexels.com/photos/7788236/pexels-photo-7788236.jpeg',
      'https://images.pexels.com/photos/7788901/pexels-photo-7788901.jpeg'
    ],
    details: 'Petisco vegano feito com vegetais orgânicos selecionados.'
  },

  // GoodLoving (Bom Amoroso) Products
  {
    id: 'bom-amoroso-1',
    brand: 'bom-amoroso',
    name: 'Bifinho Premium',
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
    id: 'bom-amoroso-2',
    brand: 'bom-amoroso',
    name: 'Palito Mastigável',
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
    id: 'bom-amoroso-3',
    brand: 'bom-amoroso',
    name: 'Ossinho Dental',
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
    id: 'bom-amoroso-4',
    brand: 'bom-amoroso',
    name: 'Snack Crocante',
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
    id: 'bom-amoroso-5',
    brand: 'bom-amoroso',
    name: 'Mini Bifinhos',
    description: 'Petiscos pequenos para treino',
    price: 21.90,
    image: 'https://images.pexels.com/photos/7788906/pexels-photo-7788906.jpeg',
    images: [
      'https://images.pexels.com/photos/7788906/pexels-photo-7788906.jpeg',
      'https://images.pexels.com/photos/1139793/pexels-photo-1139793.jpeg'
    ],
    details: 'Petiscos em tamanho pequeno, ideais para treinamento e recompensa.'
  }
];