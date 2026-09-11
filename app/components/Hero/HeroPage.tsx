import Image from "next/image";
import css from "./HeroPage.module.css";
import { MdOutlineArrowOutward } from "react-icons/md";
import Link from "next/link";
import { IoCheckbox } from "react-icons/io5";
import { FaUserGroup } from "react-icons/fa6";
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
        <div className={css.imageWrapper}>
          <Image
            src="/image 1.jpg"
            alt="Hero picture"
            width={464}
            height={526}
            className={css.image}
          />
          <div className={css.badge1}>?</div>
          <div className={css.badge2}>
            <IoCheckbox className={css.checkIcon} />
            <p className={css.badgeTextTop}>Experienced psychologists</p>
            <p className={css.badgeTextBotom}>15,000</p>
          </div>
          <div className={css.badge3}>
            <FaUserGroup className={css.peopleIcon} />
          </div>
        </div>
      </div>
    </main>
  );
}
