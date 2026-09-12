import * as Yup from "yup";
export const AppointmentModalSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Minimum 2 characters")
    .max(32, "Max 32 characters")
    .required("Name is required"),
  tel: Yup.string()
    .matches(/^\+380\d{9}$/, "Invalid phone number")
    .required("Phone is required"),
  time: Yup.string().required("Time is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  comment: Yup.string()
    .min(10, "Minimum 10 characters")
    .required("Comment is required"),
});

export const LoginFormSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Minimum 8 characters")
    .required("Password is required"),
});

export const RegisterFormSchema = Yup.object().shape({
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
