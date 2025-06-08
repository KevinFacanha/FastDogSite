export interface Product {
  id: string;
  brand: 'natuka' | 'bom-amoroso' | 'luv-alecrim';
  name: string;
  description: string;
  price: number;
  image: string;
  images: string[]; // Array de múltiplas imagens
  details: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}