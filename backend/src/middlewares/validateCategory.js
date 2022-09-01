const { request, response } = require("express");

const validOptions = [
  "Programming Language",
  "Design",
  "IDE",
  "Text Editor",
  "Language",
];

const validateCategory = (req = request, res = response, next) => {
  const category = req.body.category || null;
  if (!category) {
    return res.status(400).json({
      ok: false,
      msg: "Must provide a category",
    });
  }
  if (!validOptions.includes(category)) {
    return res.status(400).json({
      ok: false,
      msg: "Must provide a valid category",
    });
  }
  next();
};

module.exports = {
  validateCategory,
};
