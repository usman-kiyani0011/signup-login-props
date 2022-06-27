const validation = (values) => {
  let errors = {};
  if (!values.name) {
    errors.name = "Name is required";
  }

  if (!values.email) {
    errors.email = "Email address is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 5) {
    errors.password = "Password must have a minimum 5 characters";
  }

  if (!values.confirmPassword) {
    return "Confirm password is required";
  } else if (values.confirmPassword.length < 5) {
    return "Confirm password must have a minimum 5 characters";
  } else if (values.confirmPassword !== values.password) {
    return "Passwords do not match";
  }

  return errors;
};

export default validation;
