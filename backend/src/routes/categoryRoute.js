const { Router } = require("express");
const {
  createCategory,
  getCategories,
} = require("../controllers/categoryController");

const router = Router();

router.get("/", getCategories);

router.post("/", createCategory);

module.exports = router;
