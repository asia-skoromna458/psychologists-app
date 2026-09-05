"use client";
import { Psychologist } from "@/types/psychologist";
import css from "./PsyCard.module.css";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useState, useEffect } from "react";
import Reviews from "../Reviews/Reviews";
import {
  getFavorites,
  addToFavorites,
  removeFromFavorites,
} from "@/lib/firebase/favorites";
interface PsychologistCardProps {
  psychologist: Psychologist;
  onAppointment: (psychologist: Psychologist) => void;
  index: number;
}

export default function PsyCard({
  psychologist,
  onAppointment,
  index,
}: PsychologistCardProps) {
  const [showMore, setShowMore] = useState(false);
  const [isFavorites, setIsFavorites] = useState(false);
  useEffect(() => {
    async function loadFavorites() {
      const favorites = await getFavorites();
      setIsFavorites(favorites?.[index]);
    }
    loadFavorites();
  }, [index]);
  const handleClick = async () => {
    addToFavorites(index);
    setIsFavorites(!isFavorites);
  };

  const handleRemove = async () => {
    removeFromFavorites(index);
    setIsFavorites(false);
  };
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

          {isFavorites ? (
            <FaHeart className={css.favorites} onClick={handleRemove} />
          ) : (
            <FaRegHeart className={css.heartIcon} onClick={handleClick} />
          )}
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
        {showMore && (
          <Reviews
            reviews={psychologist.reviews}
            onAppointment={() => onAppointment(psychologist)}
          />
        )}
      </div>
    </div>
  );
}
