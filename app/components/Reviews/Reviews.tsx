import { Review } from "@/types/psychologist";
import css from "./Reviews.module.css";
import { FaStar } from "react-icons/fa";

interface ReviewsProps {
  reviews: Review[];
}

export default function Reviews({ reviews }: ReviewsProps) {
  return (
    <div className={css.container}>
      {reviews.map((review, index) => (
        <div key={index}>
          <div className={css.info}>
            <div className={css.avatar}>{review.reviewer[0].toUpperCase()}</div>

            <div className={css.top}>
              <p>{review.reviewer}</p>
              <p className={css.rating}>
                <FaStar className={css.ratingIcon} />
                {review.rating}
              </p>
            </div>
          </div>

          <p className={css.comment}>{review.comment}</p>
        </div>
      ))}
      <button className={css.appointmentBtn}>Make an appointment</button>
    </div>
  );
}
