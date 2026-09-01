import { RiFileUserFill } from "react-icons/ri";
import css from "./UserBar.module.css";

export default function UserBar() {
  return (
    <div className={css.container}>
      <RiFileUserFill className={css.icon} />
      <p className={css.name}>Name</p>
      <button className={css.logOutBtn}>Log Out</button>
    </div>
  );
}
