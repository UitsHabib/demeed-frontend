import { string, object } from 'yup';

export const singupSchema = object().shape({
    email: string()
        .required("This field must not be empty"),
    password: string()
        .required("This filed must npt be empty")
});