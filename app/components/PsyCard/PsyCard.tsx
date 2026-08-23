import { Psychologist } from "@/types/psychologist";
import css from "./PsyCard.module.css";
interface PsychologistCardProps {
  psychologist: Psychologist;
}
export default function PsyCard({ psychologist }: PsychologistCardProps) {
  return (
    <div className={css.container}>
      <ul>
        <li>
          <p>{psychologist.name}</p>
          <p>{psychologist.experience}</p>
          <p>{psychologist.about}</p>
        </li>
      </ul>
    </div>
  );
}
