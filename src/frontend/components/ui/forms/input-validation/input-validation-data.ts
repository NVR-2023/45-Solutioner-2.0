type InputValidationTest = {
  regEx: RegExp;
  errorMessage: string;
};

type InputValidationTests = InputValidationTest[];

const NAME_VALIDATION_TABLE: InputValidationTests = [
  { regEx: /^.+$/, errorMessage: "Required" },
  {
    regEx: /^.{3,}$/,
    errorMessage: "At least 3 characters long",
  },
  {
    regEx: /^[a-zA-Z0-9\s]+$/,
    errorMessage: "Only letters, digits, and spaces",
  },
];

const EMAIL_VALIDATION_TABLE: InputValidationTests = [
  { regEx: /^.+$/, errorMessage: "Required" },
  { regEx: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, errorMessage: "Invalid email" },
];

const PASSWORD_VALIDATION_TABLE: InputValidationTests = [
  { regEx: /^.+$/, errorMessage: "Required" },
  { regEx: /^.{8,}$/, errorMessage: "At least 8 characters long" },
  { regEx: /^(?=.*[A-Z]).{8,}$/, errorMessage: "At least one uppercase letter" },
  { regEx: /^(?=.*[a-z]).{8,}$/, errorMessage: "At least one lowercase letter" },
  { regEx: /^(?=.*\d).{8,}$/, errorMessage: "At least one digit" },
];

const validateField = (inputField: string, table: InputValidationTests) => {
  for (const validation of table) {
    if (!validation.regEx.test(inputField)) {
      return validation.errorMessage;
    }
  }
  return "";
};

export const INPUT_VALIDATION_MAP = new Map<string, (inputValue: string) => string>([
  ["name", (inputValue) => validateField(inputValue, NAME_VALIDATION_TABLE)],
  ["email", (inputValue) => validateField(inputValue, EMAIL_VALIDATION_TABLE)],
  ["password", (inputValue) => validateField(inputValue, PASSWORD_VALIDATION_TABLE)],
]);
