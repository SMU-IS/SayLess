const validateLoginFields = (email, password) => {
  return email.length > 0 && password.length > 0;
};

const validateSignUpFields = (email, password, confirmPassword) => {
  return email.length > 0 && password.length > 0 && confirmPassword.length > 0;
};

const isPasswordMatch = (password, confirmPassword) => {
  return password === confirmPassword;
};

export { validateLoginFields, validateSignUpFields, isPasswordMatch };
