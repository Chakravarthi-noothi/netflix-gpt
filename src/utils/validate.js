export const checkValidData = (fullName, email, password) => {
  const isEmailValid = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  if (fullName !== null) {
    const isNameValid = /^[A-Za-z][A-Za-z0-9_]{7,29}$/.test(fullName);
    if (!isNameValid) return "Full Name is not valid";
  }

  if (!isEmailValid) return "Email ID is not valid";
  if (!isPasswordValid) return "Password is not valid";

  return null;
};
