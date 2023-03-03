const VALID_EMAIL_ENDINGS = ["gmail.com", "outlook.com"];

function validate(email) {
  return VALID_EMAIL_ENDINGS.some((el) => email.endsWith(el));
}

export default validate;
