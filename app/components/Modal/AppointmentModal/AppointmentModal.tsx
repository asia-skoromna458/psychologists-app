import { Psychologist } from "@/types/psychologist";
import Modal from "../Modal";
import Image from "next/image";
import css from "./AppointmentModal.module.css";
interface AppointmentModalProps {
  onClose: () => void;
  psychologist: Psychologist;
}
export default function AppointmentModal({
  onClose,
  psychologist,
}: AppointmentModalProps) {
  return (
    <Modal onClose={onClose}>
      <div className={css.container}>
        <h2 className={css.title}>Make an appointment with a psychologists</h2>
        <p className={css.descr}>
          You are on the verge of changing your life for the better. Fill out
          the short form below to book your personal appointment with a
          professional psychologist. We guarantee confidentiality and respect
          for your privacy.
        </p>
        <div className={css.psychologist}>
          <Image
            src={psychologist.avatar_url}
            alt={psychologist.name}
            width={44}
            height={44}
            className={css.image}
          />
          <p className={css.header}>Your psychologists</p>
          <h2 className={css.name}>{psychologist.name}</h2>
        </div>
        <form className={css.form}>
          <label>
            <input placeholder="Name" className={css.input} />
          </label>
          <label>
            <input placeholder="+380" type="tel" />
          </label>
          <label>
            <input placeholder="Email" className={css.input} />
          </label>
          <button type="submit" className={css.logInBtn}>
            Send
          </button>
        </form>
      </div>
    </Modal>
  );
}
