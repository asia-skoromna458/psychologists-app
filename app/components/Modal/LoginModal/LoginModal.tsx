import { useForm } from "react-hook-form";
import Modal from "../Modal";
import css from "../Modal.module.css";
import { HiOutlineEyeOff, HiOutlineEye } from "react-icons/hi";
import { useState } from "react";
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
  const [showPassword, setShowPassword] = useState(false);
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
          <label className={css.label}>
            <input
              {...register("password")}
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className={css.input}
            />
            {showPassword ? (
              <HiOutlineEye
                className={css.icon}
                onClick={() => {
                  setShowPassword(false);
                }}
              />
            ) : (
              <HiOutlineEyeOff
                className={css.icon}
                onClick={() => {
                  setShowPassword(true);
                }}
              />
            )}
          </label>
          <button type="submit" className={css.logInBtn}>
            Log In
          </button>
        </form>
      </div>
    </Modal>
  );
}
