const { Router } = require("express");
const { createCategory } = require("../controllers/categoryController");

const router = Router();

router.post("/", createCategory);

module.exports = router;
