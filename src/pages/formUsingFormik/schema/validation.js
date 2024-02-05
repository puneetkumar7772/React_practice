import * as Yup from "yup";

export const formDataSchema = Yup.object({
  firstname: Yup.string()
    .min(2)
    .max(20)
    .required("please Enter your First name"),
  lastname: Yup.string().min(2).max(20).required("please Enter your Last name"),
  email: Yup.string().email().required("please Enter your Email"),
  password: Yup.string().min(6).required("please Enter your password"),
});
