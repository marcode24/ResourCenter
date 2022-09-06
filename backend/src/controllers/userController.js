const bcrypt = require("bcrypt");
const User = require("../models/userModel");
const { generateJWT } = require("../utils/jwt");

const createUser = async (req = request, res = response) => {
  try {
    const { password, email } = req.body;
    const emailExist = await User.findOne({ email });
    if (emailExist) {
      return res.status(400).json({
        ok: false,
        msg: "email has already been registered",
      });
    }
    const newUser = new User({ email });
    const salt = bcrypt.genSaltSync();
    newUser.password = bcrypt.hashSync(password, salt);
    const userSaved = await newUser.save();
    const [token, userData] = await Promise.all([
      generateJWT(userSaved.id),
      User.findById(userSaved.id, "-password"),
    ]);
    res.status(201).json({
      ok: true,
      user: userData,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Something went wrong",
    });
  }
};

module.exports = {
  createUser,
};
