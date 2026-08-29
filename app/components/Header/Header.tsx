"use client";
import Link from "next/link";
import css from "./Header.module.css";
import { usePathname } from "next/navigation";
import { useState } from "react";
import LoginModal from "../Modal/LoginModal/LoginModal";
import RegisterModal from "../Modal/RegisterModal/RegisterModal";

export default function Header() {
  const [modal, setModal] = useState<"login" | "registration" | null>(null);
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
          <button className={css.logInBtn} onClick={() => setModal("login")}>
            Log In
          </button>
          <button
            className={css.regBtn}
            onClick={() => setModal("registration")}
          >
            Registration
          </button>
        </div>
      </div>
      <hr className={css.divider} />
      {modal === "login" && <LoginModal onClose={() => setModal(null)} />}
      {modal === "registration" && (
        <RegisterModal onClose={() => setModal(null)} />
      )}
    </header>
  );
}
