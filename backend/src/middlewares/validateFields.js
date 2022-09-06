const {
  validateEmail,
  validatePassword,
  validateText,
} = require("../utils/regex");

const validateCreateUser = (req = request, res = response, next) => {
  const { email = null, password = null } = req.body;
  if (!validateEmail(email) || !validatePassword(password)) {
    return res.status(400).json({
      ok: false,
      msg: "password or email has incorrect format",
    });
  }
  next();
};

module.exports = {
  validateCreateUser,
};
