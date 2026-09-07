import { Psychologist } from "@/types/psychologist";
import Modal from "../Modal";
import Image from "next/image";
import css from "./AppointmentModal.module.css";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import toast from "react-hot-toast";
interface AppointmentModalProps {
  onClose: () => void;
  psychologist: Psychologist;
}

const AppointmentModalSchema = Yup.object().shape({
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
        <Formik
          initialValues={{
            name: "",
            tel: "",
            time: "",
            email: "",
            comment: "",
          }}
          validationSchema={AppointmentModalSchema}
          onSubmit={() => {
            toast("Appointment sent!");
            onClose();
          }}
        >
          <Form className={css.form}>
            <label>
              <Field name="name" placeholder="Name" className={css.input} />
              <ErrorMessage
                className={css.error}
                name="name"
                component="span"
              />
            </label>
            <label className={css.phone}>
              <Field
                name="tel"
                placeholder="+380"
                type="tel"
                className={css.phoneInput}
              />
              <ErrorMessage className={css.error} name="tel" component="span" />
            </label>
            <label className={css.time}>
              <Field
                name="time"
                type="time"
                className={css.timeInput}
                placeholder="00:00"
              />
              <ErrorMessage
                className={css.error}
                name="time"
                component="span"
              />
            </label>
            <label>
              <Field name="email" placeholder="Email" className={css.input} />
              <ErrorMessage
                className={css.error}
                name="email"
                component="span"
              />
            </label>
            <label>
              <Field
                as="textarea"
                name="comment"
                placeholder="Comment"
                className={css.commetnInput}
              />
              <ErrorMessage
                className={css.error}
                name="comment"
                component="span"
              />
            </label>
            <button type="submit" className={css.logInBtn}>
              Send
            </button>
          </Form>
        </Formik>
      </div>
    </Modal>
  );
}
