type InputValidationTest = {
  regEx: RegExp;
  message: string;
};

type InputValidationTests = InputValidationTest[];

export const USERNAME_VALIDATION: InputValidationTests = [
  { regEx: /^.+$/, message: "Required" },
  {
    regEx: /^.{3,}$/,
    message: "At least 3 characters long",
  },
  {
    regEx: /^[a-zA-Z0-9]+$/,
    message: "Only letters and digits",
  },
];
export const EMAIL_VALIDATION: InputValidationTests = [
  { regEx: /^.+$/, message: "Required" },
  {
    regEx: /^.{6,}$/,
    message: "At least 6 characters long",
  },
  { regEx: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "Invalid format" },
];

export const PASSWORD_VALIDATION: InputValidationTests = [
  { regEx: /^.+$/, message: "Required" },
  { regEx: /^.{8,}$/, message: "At least 8 characters long" },
  { regEx: /^(?=.*[A-Z]).{8,}$/, message: "At least one uppercase letter" },
  { regEx: /^(?=.*[a-z]).{8,}$/, message: "At least one lowercase letter" },
  { regEx: /^(?=.*\d).{8,}$/, message: "At least one digit" },
];
