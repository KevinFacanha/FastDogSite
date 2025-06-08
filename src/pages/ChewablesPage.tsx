import React, { useState } from 'react';
import { Heart, Plus, X, Minus, Package, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { useCartStore } from '../store/useCartStore';
import { useFavoritesStore } from '../store/useFavoritesStore';
import { Product } from '../types/product';
import toast from 'react-hot-toast';

const chewables: Product[] = [
  {
    id: 'chewable-1',
    brand: 'natuka',
    name: 'Palito Mastigável Natural',
    description: 'Palito natural para higiene bucal',
    price: 24.90,
    image: 'https://images.pexels.com/photos/825949/pexels-photo-825949.jpeg',
    images: [
      'https://images.pexels.com/photos/825949/pexels-photo-825949.jpeg',
      'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg'
    ],
    details: 'Palito mastigável natural que auxilia na limpeza dos dentes e diversão do seu pet.'
  },
  {
    id: 'chewable-2',
    brand: 'natuka',
    name: 'Osso Mastigável Premium',
    description: 'Osso resistente para cães grandes',
    price: 25.90,
    image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg',
    images: [
      'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg',
      'https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg'
    ],
    details: 'Osso mastigável premium, ideal para cães de grande porte que gostam de mastigar.'
  },
  {
    id: 'chewable-3',
    brand: 'natuka',
    name: 'Couro Bovino Desidratado',
    description: 'Couro natural para mastigação',
    price: 26.90,
    image: 'https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg',
    images: [
      'https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg',
      'https://images.pexels.com/photos/4587959/pexels-photo-4587959.jpeg'
    ],
    details: 'Couro bovino desidratado, 100% natural e seguro para mastigação prolongada.'
  },
  {
    id: 'chewable-4',
    brand: 'natuka',
    name: 'Chifre de Búfalo',
    description: 'Mastigável duradouro natural',
    price: 27.90,
    image: 'https://images.pexels.com/photos/4587959/pexels-photo-4587959.jpeg',
    images: [
      'https://images.pexels.com/photos/4587959/pexels-photo-4587959.jpeg',
      'https://images.pexels.com/photos/6816860/pexels-photo-6816860.jpeg'
    ],
    details: 'Chifre de búfalo natural, extremamente duradouro e rico em cálcio.'
  },
  {
    id: 'chewable-5',
    brand: 'natuka',
    name: 'Tendão Bovino Trançado',
    description: 'Tendão natural trançado',
    price: 28.90,
    image: 'https://images.pexels.com/photos/6816860/pexels-photo-6816860.jpeg',
    images: [
      'https://images.pexels.com/photos/6816860/pexels-photo-6816860.jpeg',
      'https://images.pexels.com/photos/7788657/pexels-photo-7788657.jpeg'
    ],
    details: 'Tendão bovino trançado, rico em proteínas e ideal para mastigação.'
  },
  {
    id: 'chewable-6',
    brand: 'natuka',
    name: 'Orelha de Porco Desidratada',
    description: 'Petisco mastigável crocante',
    price: 29.90,
    image: 'https://images.pexels.com/photos/7788657/pexels-photo-7788657.jpeg',
    images: [
      'https://images.pexels.com/photos/7788657/pexels-photo-7788657.jpeg',
      'https://images.pexels.com/photos/7788654/pexels-photo-7788654.jpeg'
    ],
    details: 'Orelha de porco desidratada, crocante e saborosa para cães de todos os portes.'
  },
  {
    id: 'chewable-7',
    brand: 'natuka',
    name: 'Pata de Frango Desidratada',
    description: 'Rica em glucosamina natural',
    price: 30.90,
    image: 'https://images.pexels.com/photos/7788654/pexels-photo-7788654.jpeg',
    images: [
      'https://images.pexels.com/photos/7788654/pexels-photo-7788654.jpeg',
      'https://images.pexels.com/photos/7788239/pexels-photo-7788239.jpeg'
    ],
    details: 'Pata de frango desidratada, rica em glucosamina para saúde das articulações.'
  },
  {
    id: 'chewable-8',
    brand: 'natuka',
    name: 'Traqueia Bovina',
    description: 'Mastigável rico em cartilagem',
    price: 31.90,
    image: 'https://images.pexels.com/photos/7788239/pexels-photo-7788239.jpeg',
    images: [
      'https://images.pexels.com/photos/7788239/pexels-photo-7788239.jpeg',
      'https://images.pexels.com/photos/7788236/pexels-photo-7788236.jpeg'
    ],
    details: 'Traqueia bovina rica em cartilagem, excelente para saúde articular.'
  },
  {
    id: 'chewable-9',
    brand: 'natuka',
    name: 'Costela Bovina Defumada',
    description: 'Sabor defumado irresistível',
    price: 32.90,
    image: 'https://images.pexels.com/photos/7788236/pexels-photo-7788236.jpeg',
    images: [
      'https://images.pexels.com/photos/7788236/pexels-photo-7788236.jpeg',
      'https://images.pexels.com/photos/7788901/pexels-photo-7788901.jpeg'
    ],
    details: 'Costela bovina defumada com sabor irresistível e textura ideal para mastigação.'
  },
  {
    id: 'chewable-10',
    brand: 'natuka',
    name: 'Pele de Peixe Desidratada',
    description: 'Rica em ômega 3',
    price: 33.90,
    image: 'https://images.pexels.com/photos/7788901/pexels-photo-7788901.jpeg',
    images: [
      'https://images.pexels.com/photos/7788901/pexels-photo-7788901.jpeg',
      'https://images.pexels.com/photos/7788903/pexels-photo-7788903.jpeg'
    ],
    details: 'Pele de peixe desidratada, rica em ômega 3 para pelagem brilhante.'
  },
  {
    id: 'chewable-11',
    brand: 'natuka',
    name: 'Focinho de Porco',
    description: 'Mastigável natural resistente',
    price: 34.90,
    image: 'https://images.pexels.com/photos/7788903/pexels-photo-7788903.jpeg',
    images: [
      'https://images.pexels.com/photos/7788903/pexels-photo-7788903.jpeg',
      'https://images.pexels.com/photos/7788904/pexels-photo-7788904.jpeg'
    ],
    details: 'Focinho de porco natural, resistente e ideal para cães que adoram mastigar.'
  },
  {
    id: 'chewable-12',
    brand: 'natuka',
    name: 'Nervo de Boi Torcido',
    description: 'Mastigável de longa duração',
    price: 35.90,
    image: 'https://images.pexels.com/photos/7788904/pexels-photo-7788904.jpeg',
    images: [
      'https://images.pexels.com/photos/7788904/pexels-photo-7788904.jpeg',
      'https://images.pexels.com/photos/7788905/pexels-photo-7788905.jpeg'
    ],
    details: 'Nervo de boi torcido, mastigável de longa duração rico em proteínas.'
  },
  {
    id: 'chewable-13',
    brand: 'natuka',
    name: 'Casca de Búfalo',
    description: 'Mastigável extra resistente',
    price: 36.90,
    image: 'https://images.pexels.com/photos/7788905/pexels-photo-7788905.jpeg',
    images: [
      'https://images.pexels.com/photos/7788905/pexels-photo-7788905.jpeg',
      'https://images.pexels.com/photos/7788906/pexels-photo-7788906.jpeg'
    ],
    details: 'Casca de búfalo extra resistente, ideal para cães destruidores.'
  },
  {
    id: 'chewable-14',
    brand: 'natuka',
    name: 'Pulmão Bovino Desidratado',
    description: 'Leve e nutritivo',
    price: 37.90,
    image: 'https://images.pexels.com/photos/7788906/pexels-photo-7788906.jpeg',
    images: [
      'https://images.pexels.com/photos/7788906/pexels-photo-7788906.jpeg',
      'https://images.pexels.com/photos/1139793/pexels-photo-1139793.jpeg'
    ],
    details: 'Pulmão bovino desidratado, leve e nutritivo, ideal para cães idosos.'
  },
  {
    id: 'chewable-15',
    brand: 'natuka',
    name: 'Rabo de Porco Inteiro',
    description: 'Mastigável natural completo',
    price: 38.90,
    image: 'https://images.pexels.com/photos/1139793/pexels-photo-1139793.jpeg',
    images: [
      'https://images.pexels.com/photos/1139793/pexels-photo-1139793.jpeg',
      'https://images.pexels.com/photos/4498185/pexels-photo-4498185.jpeg'
    ],
    details: 'Rabo de porco inteiro, mastigável natural que proporciona horas de diversão.'
  },
  {
    id: 'chewable-16',
    brand: 'natuka',
    name: 'Cartilagem de Tubarão',
    description: 'Rico em condroitina',
    price: 39.90,
    image: 'https://images.pexels.com/photos/4498185/pexels-photo-4498185.jpeg',
    images: [
      'https://images.pexels.com/photos/4498185/pexels-photo-4498185.jpeg',
      'https://images.pexels.com/photos/6568461/pexels-photo-6568461.jpeg'
    ],
    details: 'Cartilagem de tubarão rica em condroitina para saúde das articulações.'
  },
  {
    id: 'chewable-17',
    brand: 'natuka',
    name: 'Pescoço de Frango',
    description: 'Crocante e nutritivo',
    price: 40.90,
    image: 'https://images.pexels.com/photos/6568461/pexels-photo-6