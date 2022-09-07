const { Router } = require("express");
const { createUser, changeTheme } = require("../controllers/userController");
const { validateCreateUser } = require("../middlewares/validateFields");
const { validateJWT } = require("../middlewares/validateJwt");

const router = Router();

router.post("/", [validateCreateUser], createUser);

router.patch("/theme", [validateJWT], changeTheme);

module.exports = router;
