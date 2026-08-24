"use client";
import Link from "next/link";
import css from "./Header.module.css";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  return (
    <header className={css.header}>
      <div className={css.container}>
        <Link href="/" className={css.logo}>
          <span className={css.logoSpan}>psychologists.</span>services
        </Link>
        <nav className={css.navigation}>
          <Link
            href="/"
            className={`${css.navLink} ${pathname === "/" ? css.active : ""}`}
          >
            Home
          </Link>
          <Link
            href="/psychologists"
            className={`${css.navLink} ${pathname === "/psychologists" ? css.active : ""}`}
          >
            Psychologists
          </Link>
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
