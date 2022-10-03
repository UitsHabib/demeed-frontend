import { string, object } from 'yup';

export const permissionSetNameSchema = object().shape(
    {
        set_name: string()
            .required("This field must not be empty.")
    }
);