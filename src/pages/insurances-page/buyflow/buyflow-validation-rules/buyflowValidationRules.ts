import { number, string } from "yup";
import { EMAIL_INVALID_MESSAGE, REQUIRED_FIELD_MESSAGE } from "../../../../constants/messages";

export const emailValidate = (field: string) => {
  return string()
    .email(EMAIL_INVALID_MESSAGE)
    .required(field + REQUIRED_FIELD_MESSAGE)
    .max(80);
};

export const ageValidate = (field: string) => {
  return number()
    .transform((value) => (Number.isNaN(value) ? undefined : value))
    .nullable()
    .required(field + REQUIRED_FIELD_MESSAGE)
    .positive()
    .max(125);
};

export const textFieldValidate = (field: string) => {
  return string()
    .required(field + REQUIRED_FIELD_MESSAGE)
    .max(60);
};
