import { Formik, Form, Field } from "formik";
import { toast } from "react-hot-toast";
import { login } from "../../redux/auth/operations.js";
import css from "./LoginForm.module.css";
import { useDispatch } from "react-redux";

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(login(values))
      .unwrap()
      .then(() => {
        toast.success("Success!!!");
      })
      .catch((error) => {
        console.log(error);
      });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Email
          <Field type="email" name="email" />
        </label>
        <label className={css.label}>
          Password
          <Field type="password" name="password" />
        </label>
        <button type="submit" className={css.button}>
          Log In
        </button>
      </Form>
    </Formik>
  );
}