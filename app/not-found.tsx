import Link from "next/link";
import css from "./error-pages.module.css";
import Image from "next/image";
import { MdOutlineArrowOutward } from "react-icons/md";

export default function NotFound() {
  return (
    <main className={css.container}>
      <Image
        src="/not-found.svg"
        alt="404 illustration"
        width={650}
        height={330}
        loading="eager"
      />
      <p className={css.text}>
        Looks like this page took a break. Try going back home, or come back a
        little later.
      </p>
      <Link href="/" className={css.btn}>
        Back to Home
        <MdOutlineArrowOutward className={css.iconBtn} />
      </Link>
      <p className={css.credit}>
        Illustration by
        <a
          href="https://storyset.com/illustration/404-error-with-a-landscape/bro"
          target="_blank"
          rel="noopener noreferrer"
        >
          Storyset
        </a>
      </p>
    </main>
  );
}
