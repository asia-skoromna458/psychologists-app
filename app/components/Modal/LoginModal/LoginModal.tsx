import { useForm } from "react-hook-form";
import Modal from "../Modal";
import css from "../Modal.module.css";
interface LoginFormValues {
  email: string;
  password: string;
}
interface LoginModalProps {
  onClose: () => void;
}

export default function LoginModal({ onClose }: LoginModalProps) {
  const { register, handleSubmit } = useForm<LoginFormValues>();
  const onSubmit = (data: LoginFormValues) => {
    console.log(data);
  };
  return (
    <Modal onClose={onClose}>
      <div className={css.container}>
        <h2 className={css.title}>Log In</h2>
        <p className={css.descr}>
          Welcome back! Please enter your credentials to access your account and
          continue your search for a psychologist.
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
          <label>
            <input
              {...register("email")}
              placeholder="Email"
              className={css.input}
            />
          </label>
          <label>
            <input
              {...register("password")}
              placeholder="Password"
              className={css.input}
            />
          </label>
          <button type="submit" className={css.logInBtn}>
            Log In
          </button>
        </form>
      </div>
    </Modal>
  );
}
