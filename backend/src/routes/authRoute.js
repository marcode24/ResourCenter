const { Router } = require("express");
const { validateLogin } = require("../middlewares/validateFields");
const { login } = require("../controllers/authController");

const router = Router();

router.post("/login", [validateLogin], login);

module.exports = router;
