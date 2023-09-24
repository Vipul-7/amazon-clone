const jwt = require("jsonwebtoken");

const isValidTokenExpiry = (token) => {
  if (!token) {
    return false;
  }
  const { exp } = jwt.decode(token); // Decode the token to get its expiration time

  const currentTimeInSeconds = Math.floor(Date.now() / 1000); // Get current time in seconds

  const tokenExpirationInSeconds = exp;

  const remainingTimeInSeconds =
    tokenExpirationInSeconds - currentTimeInSeconds; // Remaining time in seconds

  if (remainingTimeInSeconds <= 0) {
    return false;
  }

  return true;
};

export default isValidTokenExpiry;
