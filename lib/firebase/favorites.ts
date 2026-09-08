import { auth, db } from "./firebase";
import { get, ref, remove, set } from "firebase/database";

// const getUser = async () => {
//   const user = auth.currentUser;
//   if (!user) {
//     return;
//   }
//   return user;
// };
export const addToFavorites = async (id: string) => {
  const user = auth.currentUser;
  console.log("user:", user);
  if (!user) {
    return;
  }
  const userRef = ref(db, `users/${user.uid}/favorites/${id}`);
  await set(userRef, true);
};

export const removeFromFavorites = async (id: string) => {
  const user = auth.currentUser;
  if (!user) {
    return;
  }
  const userRef = ref(db, `users/${user.uid}/favorites/${id}`);
  await remove(userRef);
};

export const getFavorites = async () => {
  const user = auth.currentUser;
  if (!user) {
    return;
  }
  const userRef = ref(db, `users/${user.uid}/favorites`);
  const data = await get(userRef);
  const favorites = data.val();
  return favorites;
};
