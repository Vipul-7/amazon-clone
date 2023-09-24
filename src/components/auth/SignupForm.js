import React from "react";
import styles from "./SignupForm.module.scss";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Enter your name";
  }

  if (
    !values.email ||
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
  ) {
    errors.email = "Enter a valid email address";
  }

  if (!values.password || values.password.length < 6) {
    errors.password = "Password must be atleast 6 characters";
  }

  if (
    values.confirmPassword.length < 6 ||
    values.password !== values.confirmPassword
  ) {
    errors.confirmPassword = "Passwords must match";
  }

  return errors;
};

const SignupForm = (props) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validate,
    onSubmit: (values) => {
      props.onSubmit(values);
    },
  });

  const isNotValid =
    formik.errors.name ||
    formik.errors.email ||
    formik.errors.password ||
    formik.errors.confirmPassword;

  const onRedirect = () => {
    props.onRedirect();
  };

  return (
    <div className={styles.signupForm}>
      <h1 className={styles.title}>Create Account</h1>

      {props.errorMessage && (
        <h5 className={styles.serverError}>{props.errorMessage}</h5>
      )}

      <form onSubmit={formik.handleSubmit}>
        <div className={styles.input}>
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            placeholder="First name"
            id="name"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className={styles.validationError}>{formik.errors.name}</div>
          ) : null}
        </div>

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
            <div className={styles.validationError}>{formik.errors.email}</div>
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
            <div className={styles.validationError}>
              {formik.errors.password}
            </div>
          ) : null}
        </div>

        <div className={styles.input}>
          <label htmlFor="confirmPassword">Cofirm Password</label>
          <input
            type="text"
            placeholder="At least 6 characters"
            id="confirmPassword"
            name="confirmPassword"
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <div className={styles.validationError}>
              {formik.errors.confirmPassword}
            </div>
          ) : null}
        </div>

        <div className={styles.terms}>
          <p>
            By creating an account, you agree to Amazon&apos;s Conditions of Use
            and Privacy Notice.
          </p>
        </div>

        {!props.isSending && (
          <button
            className={styles.button}
            type="submit"
            disabled={isNotValid || props.isSending}
          >
            Submit
          </button>
        )}
        {props.isSending && <p>Loading...</p>}

        <div className={styles.redirect}>
          <p>
            Already have an account?{" "}
            <span onClick={props.onRedirect}>Login</span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
