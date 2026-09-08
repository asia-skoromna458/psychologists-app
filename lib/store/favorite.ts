import { create } from "zustand";

interface FavoriteState {
  favorites: string[];
  setFavorites: (indexes: string[]) => void;
}
export const useFavoriteStore = create<FavoriteState>((set) => ({
  favorites: [],
  setFavorites: (indexes) => set({ favorites: indexes }),
}));
