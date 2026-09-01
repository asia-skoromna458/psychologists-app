"use client";
import Link from "next/link";
import css from "./Header.module.css";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import LoginModal from "../Modal/LoginModal/LoginModal";
import RegisterModal from "../Modal/RegisterModal/RegisterModal";
import { getCurrentUser, useAuthStore } from "@/lib/firebase/auth";
import UserBar from "./UserBar/UserBar";

export default function Header() {
  const [modal, setModal] = useState<"login" | "registration" | null>(null);
  const pathname = usePathname();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  // const user = useAuthStore((state) => state.user);
  useEffect(() => {
    getCurrentUser();
  }, []);
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
          {isAuthenticated && (
            <Link
              href="/favorites"
              className={`${css.navLink} ${
                pathname === "/favorites" ? css.active : ""
              }`}
            >
              Favorites
            </Link>
          )}
        </nav>
        {!isAuthenticated && (
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
        )}
        {isAuthenticated && <UserBar />}
      </div>
      <hr className={css.divider} />
      {modal === "login" && <LoginModal onClose={() => setModal(null)} />}
      {modal === "registration" && (
        <RegisterModal onClose={() => setModal(null)} />
      )}
    </header>
  );
}
