import React from "react";
import styles from "./SignupForm.module.scss";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};
  if (
    !values.email ||
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
  ) {
    errors.email = "Enter a valid email address";
  }

  if (!values.password || values.password.length < 6) {
    errors.password = "Password must be atleast 6 characters";
  }

  return errors;
};

const LoginForm = (props) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      props.onSubmit(values);
    },
  });

  const isNotValid = formik.errors.email || formik.errors.password;

  return (
    <div className={styles.signupForm}>
      <h1 className={styles.title}>Login</h1>

      {props.errorMessage && <h5 className={styles.serverError}>{props.errorMessage}</h5>}

      <form onSubmit={formik.handleSubmit}>
        <div className={styles.input}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="E-mail"
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className={styles.validationError}>{formik.validationError.email}</div>
          ) : null}
        </div>

        <div className={styles.input}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="At least 6 characters"
            id="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className={styles.validationError}>{formik.errors.password}</div>
          ) : null}
        </div>

        <button
          className={styles.button}
          type="submit"
          disabled={isNotValid || props.isSending}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
