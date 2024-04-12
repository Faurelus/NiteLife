import React from "react";
import { useFormik } from "formik";
import { signInValidation } from "./signIn";

const initialValues = {
  username: "",
  password: "",
};

function FormValidation() {
  const { values, handleBlur, handleChange, handleSubmit, errors } = useFormik({
    initialValues: initialValues,
    validationSchema: signInValidation,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="formAuthentication">
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <br />
        <input
          type="text"
          name="username"
          value={values.username}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        <br />
        {errors.username && <small>{errors.username.message}</small>}
        <br />

        <label htmlFor="password">Password:</label>
        <br />
        <input
          type="password"
          name="password"
          value={values.password}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        <br />
        {errors.password && <small>{errors.password.message}</small>}
        <br />
        <button type="signIn">Sign In</button>
        <br />
        <br />
        <button type="signUp">Sign Up</button>
      </form>
    </div>
  );
}

export default FormValidation;
