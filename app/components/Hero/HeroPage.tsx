import Image from "next/image";
import css from "./HeroPage.module.css";
import { MdOutlineArrowOutward } from "react-icons/md";
import Link from "next/link";
export default function Hero() {
  return (
    <main>
      <div className={css.container}>
        <div className={css.heroContent}>
          <h1 className={css.heroTitle}>
            The road to the <span className={css.titleSpan}>depths</span> of the
            human soul
          </h1>
          <p className={css.heroText}>
            We help you to reveal your potential, overcome challenges and find a
            guide in your own life with the help of our experienced
            psychologists.
          </p>
          <Link href="/psychologists" className={css.heroBtn}>
            Get started <MdOutlineArrowOutward className={css.iconBtn} />
          </Link>
        </div>
        <Image
          src="/image 1.jpg"
          alt="Hero picture"
          width={464}
          height={526}
          className={css.image}
        />
      </div>
    </main>
  );
}
