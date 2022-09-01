const { request } = require("express");
const { isMongoId } = require("../helpers/mongo-id");

const validateMongoID = (req = request, res = response, next) => {
  const id = req.params.id;
  if (!id || !isMongoId(id)) {
    return res.status(400).json({
      ok: false,
      msg: "Must provide a valid mongo id",
    });
  }
  next();
};

module.exports = {
  validateMongoID,
};
