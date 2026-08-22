import { Psychologist } from "@/types/psychologist";

interface PsychologistCardProps {
  psychologist: Psychologist;
}
export default function PsyCard({ psychologist }: PsychologistCardProps) {
  return (
    <>
      <ul>
        <li>
          <p>{psychologist.name}</p>
          <p>{psychologist.experience}</p>
          <p>{psychologist.about}</p>
        </li>
      </ul>
    </>
  );
}
