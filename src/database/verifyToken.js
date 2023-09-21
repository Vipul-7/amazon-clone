const jwt = require("jsonwebtoken");

const verifyToken = (token) => {
  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    return decodedToken;
  } catch (error) {
    return null;
  }
};

module.exports = verifyToken;
