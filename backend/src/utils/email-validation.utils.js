const validateEmail = (email) => {
  // Regular expression for validating an email address
  const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  // Use the test() method of the regular expression to check if the email is valid
  if (!regex.test(email)) {
    throw new Error("Invalid email address");
  }
};

module.exports = {
  validateEmail,
};
