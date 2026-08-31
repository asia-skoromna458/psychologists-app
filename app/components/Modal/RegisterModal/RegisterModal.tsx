import Modal from "../Modal";
import css from "../Modal.module.css";
import { HiOutlineEyeOff, HiOutlineEye } from "react-icons/hi";
import { useState } from "react";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

interface RegisterModalProps {
  onClose: () => void;
}

interface RegisterFormValues {
  name: string;
  email: string;
  password: string;
}

const RegisterFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Minimum 2 characters")
    .max(32, "Max 32 characters")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Minimum 8 characters")
    .required("Password is required"),
});

export default function RegisterModal({ onClose }: RegisterModalProps) {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: yupResolver(RegisterFormSchema),
  });
  const onSubmit = (data: RegisterFormValues) => {
    console.log(data);
  };
  return (
    <Modal onClose={onClose}>
      <div className={css.container}>
        <h2 className={css.title}>Registration</h2>
        <p className={css.descr}>
          Thank you for your interest in our platform! In order to register, we
          need some information. Please provide us with the following
          information.
        </p>
        <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
          <label>
            <input
              {...register("name")}
              placeholder="Name"
              className={css.input}
            />
            {errors.name && (
              <p className={css.errorMessage}>{errors.name.message}</p>
            )}
          </label>
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
            Sign Up
          </button>
        </form>
      </div>
    </Modal>
  );
}
