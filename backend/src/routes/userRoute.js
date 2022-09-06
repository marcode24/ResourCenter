const { Router } = require("express");
const { createUser } = require("../controllers/userController");
const { validateCreateUser } = require("../middlewares/validateFields");
const router = Router();

router.post("/", [validateCreateUser], createUser);

module.exports = router;
