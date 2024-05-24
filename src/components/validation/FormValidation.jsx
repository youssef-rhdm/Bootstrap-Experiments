import * as yup from "yup";

export const FormSchema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  telephone: yup.number().required().max(10).min(5),
  message: yup.string().required(),
  sex: yup.string().required(),
  occupation: yup.string().required(),
});

