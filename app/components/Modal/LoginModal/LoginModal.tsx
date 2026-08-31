import { useForm } from "react-hook-form";
import Modal from "../Modal";
import css from "../Modal.module.css";
import { HiOutlineEyeOff, HiOutlineEye } from "react-icons/hi";
import { useState } from "react";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface LoginFormValues {
  email: string;
  password: string;
}

interface LoginModalProps {
  onClose: () => void;
}

const LoginFormSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Minimum 8 characters")
    .required("Password is required"),
});

export default function LoginModal({ onClose }: LoginModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: yupResolver(LoginFormSchema),
  });
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
            {errors.email && (
              <p className={css.errorMessage}>{errors.email.message}</p>
            )}
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
            {errors.password && (
              <p className={css.errorMessage}>{errors.password.message}</p>
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
