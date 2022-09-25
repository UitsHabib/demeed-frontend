import { string, object} from 'yup';

export const loginSchema = object().shape(
    {
        email: string().required("Field must not be empty"),
        password: string().required("Field must not be empty")
    }
);