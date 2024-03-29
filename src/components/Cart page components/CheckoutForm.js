import { useFormik } from "formik";
import styles from "./CheckoutForm.module.scss";

const validate = (values) => {
  const errors = {};
  if (!values.street) {
    errors.street = "Required";
  }
  if (!values.city) {
    errors.city = "Required";
  }
  if (!values.pincode) {
    errors.pincode = "Required";
  } else if (values.pincode.length !== 6) {
    errors.pincode = "Invalid pincode";
  }
  return errors;
};

const CheckoutForm = (props) => {
  const formik = useFormik({
    initialValues: {
      street: "",
      city: "",
      pincode: "",
    },
    validate,
    onSubmit: (values) => {
      props.onSubmit(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={styles.form}>
      <label htmlFor="street">Street</label>
      <input
        id="street"
        name="street"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.street}
      />
      {formik.touched.street && formik.errors.street ? (
        <div className={styles.errors}>{formik.errors.street}</div>
      ) : null}

      <label htmlFor="city">City</label>
      <input
        id="city"
        name="city"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.city}
      />
      {formik.touched.city && formik.errors.city ? (
        <div className={styles.errors}>{formik.errors.city}</div>
      ) : null}

      <label htmlFor="pincode">Pincode</label>
      <input
        id="pincode"
        name="pincode"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.pincode}
      />
      {formik.touched.pincode && formik.errors.pincode ? (
        <div className={styles.errors}>{formik.errors.pincode}</div>
      ) : null}

      {props.isError && <div className={styles.submitError}>{props.error}</div>}

      {!props.isSending && (
        <button type="submit" className={styles.button}>
          Submit
        </button>
      )}

      {props.isSending && (
        <div className={styles["cart-loading"]}>
          <img src="/images/loader.gif" alt="loader" />
        </div>
      )}
    </form>
  );
};

export default CheckoutForm;
