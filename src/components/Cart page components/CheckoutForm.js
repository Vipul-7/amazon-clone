import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Required";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
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

const CheckoutForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      street: "",
      city: "",
      pincode: "",
    },
    validate,
    onSubmit: (values) => {},
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.name}
      />

      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />

      <label htmlFor="street">Street</label>
      <input
        id="street"
        name="street"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.street}
      />

      <label htmlFor="city">City</label>
      <input
        id="city"
        name="city"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.city}
      />

      <label htmlFor="pincode">Pincode</label>
      <input
        id="pincode"
        name="pincode"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.pincode}
      />
    </form>
  );
};

export default CheckoutForm;
