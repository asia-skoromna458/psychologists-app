import css from "./UserBar.module.css";
import { logout, useAuthStore } from "@/lib/firebase/auth";
import { useFavoriteStore } from "@/lib/store/favorite";
import Image from "next/image";

export default function UserBar() {
  const setFavorites = useFavoriteStore((state) => state.setFavorites);
  const user = useAuthStore((state) => state.user);
  return (
    <div className={css.container}>
      <div className={css.iconWrapper}>
        <Image src="/user_icon.svg" width={16} height={16} alt="User_icon" />
      </div>
      <p className={css.name}>{user?.displayName}</p>
      <button
        className={css.logOutBtn}
        onClick={() => {
          logout();
          setFavorites([]);
        }}
      >
        Log Out
      </button>
    </div>
  );
}
