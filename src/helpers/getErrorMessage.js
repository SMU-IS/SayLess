const getErrorMessage = (err) => {
  let errMsg = '';
  switch (err) {
    case '':
      errMsg = 'Please enter your email address and password.';
      break;

    case '!email':
      errMsg = 'Please enter an email address.';
      break;

    case 'Firebase: Error (auth/missing-password).':
      errMsg = 'Please enter a password.';
      break;

    case 'Firebase: Password should be at least 6 characters (auth/weak-password).':
      errMsg =
        'Please enter a stronger password. It should be at least 6 characters.';
      break;

    case 'Firebase: Error (auth/popup-closed-by-user).':
      errMsg = 'Sign in via Google aborted. Please try again.';
      break;

    case 'Firebase: Error (auth/missing-email).':
      errMsg = 'Email cannot be blank.';
      break;

    case 'Firebase: Error (auth/invalid-email).':
      errMsg = 'Please enter a valid email.';
      break;

    case 'Firebase: Error (auth/email-already-in-use).':
      errMsg = 'The email address is already in use.';
      break;

    case 'Firebase: Error (auth/wrong-password).':
      errMsg = "You've entered a wrong password.";
      break;

    case 'Firebase: Error (auth/user-not-found).':
      errMsg = 'The email address is not registered.';
      break;

    default:
      errMsg = err;
  }
  return errMsg;
};

export { getErrorMessage };
