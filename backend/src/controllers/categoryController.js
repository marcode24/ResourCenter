const { request, response } = require("express");
const Category = require("../models/categoryModel");

const createCategory = async (req = request, res = response) => {
  try {
    const name = req.body.name || null;
    const regexName = new RegExp(name, "i");
    const existCategory = await Category.findOne({ name: regexName });
    if (existCategory) {
      return res.status(200).json({
        ok: true,
        msg: "One category has similar name",
      });
    }
    const newCategory = new Category({ ...req.body });
    const categoryCreated = await newCategory.save();

    res.status(201).json({
      ok: true,
      msg: "Category created correctly",
      category: categoryCreated,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Something went wrong, try again",
    });
  }
};

module.exports = {
  createCategory,
};
