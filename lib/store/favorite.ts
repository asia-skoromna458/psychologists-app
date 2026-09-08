import { create } from "zustand";

interface FavoriteState {
  favorites: number[];
  setFavorites: (indexes: number[]) => void;
}
export const useFavoriteStore = create<FavoriteState>((set) => ({
  favorites: [],
  setFavorites: (indexes) => set({ favorites: indexes }),
}));
