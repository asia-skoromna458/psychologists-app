import { RiFileUserFill } from "react-icons/ri";
import css from "./UserBar.module.css";
import { logout, useAuthStore } from "@/lib/firebase/auth";
import { useFavoriteStore } from "@/lib/store/favorite";

export default function UserBar() {
  const favorites = useFavoriteStore((state) => state.setFavorites);
  const user = useAuthStore((state) => state.user);
  return (
    <div className={css.container}>
      <RiFileUserFill className={css.icon} />
      <p className={css.name}>{user?.displayName}</p>
      <button
        className={css.logOutBtn}
        onClick={() => {
          logout();
          favorites([]);
        }}
      >
        Log Out
      </button>
    </div>
  );
}
