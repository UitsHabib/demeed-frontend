import { string, object } from "yup";

export const RegisterSchema = object().shape({
  name: string()
    .min(2, "This field must be at most 2 carectors long")
    .max(50, "This field must be at most 50 carectors long")
    .required("Please inter your full name"),
  email: string().required("Please inter your email address"),
  password: string()
    .min(2, "This field must be at most 2 carectors long")
    .max(50, "This field must be at most 8 carectors long")
    .required("Required Password"),
  repassword: string().required("Re-Password"),
});
