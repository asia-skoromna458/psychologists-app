import { auth, db } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { ref, set } from "firebase/database";
import { User } from "firebase/auth";
import { create } from "zustand";

export const registerUser = async (
  name: string,
  email: string,
  password: string,
) => {
  const res = await createUserWithEmailAndPassword(auth, email, password);
  const userRef = ref(db, `users/${res.user.uid}`);
  await set(userRef, { name, email });
};

export const loginUser = async (email: string, password: string) => {
  const res = await signInWithEmailAndPassword(auth, email, password);
  return res;
};

type AuthStore = {
  isAuthenticated: boolean;
  user: User | null;
  setUser: (user: User) => void;
  clearIsAuth: () => void;
};

export const useAuthStore = create<AuthStore>((set) => ({
  isAuthenticated: false,
  user: null,
  setUser: (user: User) => {
    set(() => ({ user, isAuthenticated: true }));
  },
  clearIsAuth: () => {
    set(() => ({ user: null, isAuthenticated: false }));
  },
}));

export const getCurrentUser = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      useAuthStore.getState().setUser(user);
    } else {
      useAuthStore.getState().clearIsAuth();
    }
  });
};
