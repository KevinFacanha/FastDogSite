import { create } from 'zustand';
import { CartItem, Product, ProductVariant } from '../types/product';

interface CartStore {
  items: CartItem[];
  couponCode: string | null;
  addItem: (product: Product, variant?: ProductVariant) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  setCouponCode: (code: string | null) => void;
  subtotal: number;
  discount: number;
  total: number;
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  couponCode: null,
  addItem: (product, variant) =>
    set((state) => {
      // Verificar se o produto existe
      if (!product || !product.id) {
        console.error('Produto inválido:', product);
        return state;
      }

      // Para produtos com variantes, consideramos o ID + tamanho como identificador único
      const itemKey = variant ? `${product.id}-${variant.size}` : product.id;
      const existingItem = state.items.find(
        (item) => {
          const existingKey = item.selectedVariant 
            ? `${item.product.id}-${item.selectedVariant.size}` 
            : item.product.id;
          return existingKey === itemKey;
        }
      );

      let newItems;
      if (existingItem) {
        newItems = state.items.map((item) => {
          const existingKey = item.selectedVariant 
            ? `${item.product.id}-${item.selectedVariant.size}` 
            : item.product.id;
          return existingKey === itemKey
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        });
      } else {
        // Criar um produto com o preço da variante se aplicável
        const productWithVariantPrice = variant 
          ? { ...product, price: variant.price }
          : product;
        
        newItems = [...state.items, { 
          product: productWithVariantPrice, 
          quantity: 1,
          selectedVariant: variant
        }];
      }

      const newSubtotal = newItems.reduce(
        (total, item) => {
          const price = item.product?.price || 0;
          const quantity = item.quantity || 0;
          return total + (price * quantity);
        },
        0
      );

      const newDiscount = state.couponCode ? newSubtotal * 0.1 : 0;
      const newTotal = newSubtotal - newDiscount;

      return {
        ...state,
        items: newItems,
        subtotal: newSubtotal,
        discount: newDiscount,
        total: newTotal,
      };
    }),
  removeItem: (productId) =>
    set((state) => {
      const newItems = state.items.filter((item) => item.product?.id !== productId);
      
      const newSubtotal = newItems.reduce(
        (total, item) => {
          const price = item.product?.price || 0;
          const quantity = item.quantity || 0;
          return total + (price * quantity);
        },
        0
      );

      const newDiscount = state.couponCode ? newSubtotal * 0.1 : 0;
      const newTotal = newSubtotal - newDiscount;

      return {
        ...state,
        items: newItems,
        subtotal: newSubtotal,
        discount: newDiscount,
        total: newTotal,
      };
    }),
  updateQuantity: (productId, quantity) =>
    set((state) => {
      const newItems = state.items.map((item) =>
        item.product?.id === productId ? { ...item, quantity: Math.max(0, quantity) } : item
      ).filter(item => item.quantity > 0); // Remove itens com quantidade 0

      const newSubtotal = newItems.reduce(
        (total, item) => {
          const price = item.product?.price || 0;
          const itemQuantity = item.quantity || 0;
          return total + (price * itemQuantity);
        },
        0
      );

      const newDiscount = state.couponCode ? newSubtotal * 0.1 : 0;
      const newTotal = newSubtotal - newDiscount;

      return {
        ...state,
        items: newItems,
        subtotal: newSubtotal,
        discount: newDiscount,
        total: newTotal,
      };
    }),
  setCouponCode: (code) =>
    set((state) => {
      const newSubtotal = state.items.reduce(
        (total, item) => {
          const price = item.product?.price || 0;
          const quantity = item.quantity || 0;
          return total + (price * quantity);
        },
        0
      );

      const newDiscount = code ? newSubtotal * 0.1 : 0;
      const newTotal = newSubtotal - newDiscount;

      return {
        ...state,
        couponCode: code,
        discount: newDiscount,
        total: newTotal,
      };
    }),
  get subtotal() {
    return get().items.reduce(
      (total, item) => {
        const price = item.product?.price || 0;
        const quantity = item.quantity || 0;
        return total + (price * quantity);
      },
      0
    );
  },
  get discount() {
    const state = get();
    return state.couponCode ? state.subtotal * 0.1 : 0;
  },
  get total() {
    const state = get();
    return state.subtotal - state.discount;
  },
}));