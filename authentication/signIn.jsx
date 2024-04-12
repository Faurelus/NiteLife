import * as yup from "yup";

const passwordRules =
  /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&?@ "])[a-zA-Z0-9!#$%&?@]{5,20}$/;
export const signInValidation = yup.object({
  username: yup
    .string()
    .min(5, { message: "Enter a valid username" })
    .required("Required"),

  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Incorrect password" })
    .required("Required"),
});
