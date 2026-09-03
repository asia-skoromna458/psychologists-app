import { auth, db } from "./firebase";
import { get, ref, remove, set } from "firebase/database";

// const getUser = async () => {
//   const user = auth.currentUser;
//   if (!user) {
//     return;
//   }
//   return user;
// };
export const addToFavorites = async (index: number) => {
  const user = auth.currentUser;
  if (!user) {
    return;
  }
  const userRef = ref(db, `users/${user.uid}/favorites/${index}`);
  await set(userRef, true);
};

export const removeFromFavorites = async (index: number) => {
  const user = auth.currentUser;
  if (!user) {
    return;
  }
  const userRef = ref(db, `users/${user.uid}/favorites/${index}`);
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
