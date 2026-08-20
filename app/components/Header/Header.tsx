import Link from "next/link";
import css from "./Header.module.css";

export default function Header() {
  return (
    <header className={css.header}>
      <div className={css.container}>
        <Link href="/" className={css.logo}>
          <span className={css.logoSpan}>psychologists.</span>services
        </Link>
        <nav className={css.navigation}>
          <Link href="/">Home</Link>
          <Link href="/psychologists">Psychologists</Link>
          <Link href="/favorites" className={css.favorites}>
            Favorites
          </Link>
        </nav>
        <div>
          <button className={css.logInBtn}>Log In</button>
          <button className={css.regBtn}>Registration</button>
        </div>
      </div>
      <hr className={css.divider} />
    </header>
  );
}
