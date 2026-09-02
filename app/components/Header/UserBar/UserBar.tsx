import { RiFileUserFill } from "react-icons/ri";
import css from "./UserBar.module.css";
import { logout } from "@/lib/firebase/auth";

export default function UserBar() {
  return (
    <div className={css.container}>
      <RiFileUserFill className={css.icon} />
      <p className={css.name}>Name</p>
      <button
        className={css.logOutBtn}
        onClick={() => {
          logout();
        }}
      >
        Log Out
      </button>
    </div>
  );
}
