import Modal from "../Modal";
import css from "../Modal.module.css";
interface RegisterModalProps {
  onClose: () => void;
}
export default function RegisterModal({ onClose }: RegisterModalProps) {
  return (
    <Modal onClose={onClose}>
      <div className={css.container}>
        <div className={css.container}>
          <h2 className={css.title}>Registration</h2>
          <p className={css.descr}>
            Thank you for your interest in our platform! In order to register,
            we need some information. Please provide us with the following
            information.
          </p>
          <form className={css.form}>
            <label>
              <input placeholder="Name" className={css.input} />
            </label>
            <label>
              <input placeholder="Email" className={css.input} />
            </label>
            <label>
              <input placeholder="Password" className={css.input} />
            </label>
            <button type="submit" className={css.logInBtn}>
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </Modal>
  );
}
