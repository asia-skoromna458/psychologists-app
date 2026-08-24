import { Psychologist } from "@/types/psychologist";
import css from "./PsyCard.module.css";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { useState } from "react";
import Reviews from "../Reviews/Reviews";
interface PsychologistCardProps {
  psychologist: Psychologist;
}
export default function PsyCard({ psychologist }: PsychologistCardProps) {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className={css.container}>
      <div className={css.imageWrapper}>
        <Image
          src={psychologist.avatar_url}
          alt={psychologist.name}
          width={96}
          height={96}
          className={css.image}
        />
      </div>
      <div className={css.info}>
        <div className={css.top}>
          <p className={css.header}>Psychologist</p>
          <h2 className={css.name}>{psychologist.name}</h2>

          <p className={css.rating}>
            <FaStar className={css.ratingIcon} />
            Rating: {psychologist.rating}
          </p>
          <p className={css.price}>
            Price / 1 hour:
            <span className={css.spanPrice}>
              {psychologist.price_per_hour}$
            </span>
          </p>
          <FaRegHeart className={css.heartIcon} />
        </div>

        <ul className={css.infoTags}>
          <li className={css.tagItem}>
            <span className={css.spanTag}>Experience: </span>
            {psychologist.experience}
          </li>
          <li className={css.tagItem}>
            <span className={css.spanTag}>License:</span> {psychologist.license}
          </li>
          <li className={css.tagItem}>
            <span className={css.spanTag}>Specialization: </span>
            {psychologist.specialization}
          </li>
          <li className={css.tagItem}>
            <span className={css.spanTag}>Initial consultation: </span>
            {psychologist.initial_consultation}
          </li>
        </ul>
        <p className={css.descr}>{psychologist.about}</p>
        {!showMore && (
          <button className={css.readMore} onClick={() => setShowMore(true)}>
            Read more
          </button>
        )}
        {showMore && <Reviews reviews={psychologist.reviews} />}
      </div>
    </div>
  );
}
