import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from '../types/product';
import toast from 'react-hot-toast';

interface FavoritesStore {
  favorites: Product[];
  addFavorite: (product: Product) => void;
  removeFavorite: (productId: string) => void;
  isFavorite: (productId: string) => boolean;
}

export const useFavoritesStore = create<FavoritesStore>()(
  persist(
    (set, get) => ({
      favorites: [],
      addFavorite: (product) => {
        set((state) => ({
          favorites: [...state.favorites, product],
        }));
        toast.success('Produto adicionado aos favoritos');
      },
      removeFavorite: (productId) => {
        set((state) => ({
          favorites: state.favorites.filter((product) => product.id !== productId),
        }));
        toast.success('Produto removido dos favoritos');
      },
      isFavorite: (productId) =>
        get().favorites.some((product) => product.id === productId),
    }),
    {
      name: 'favorites-storage',
    }
  )
);