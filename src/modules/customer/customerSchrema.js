import { string, object } from 'yup';

export const customerSchema = object().shape({
    name: string()
        .required("This field must not be empty"),
    email: string()
        .required("This field must not be empty"),
    password: string()
        .required("This filed must not be empty"),
    repassword: string()
        .required("This filed must not be empty"),
});