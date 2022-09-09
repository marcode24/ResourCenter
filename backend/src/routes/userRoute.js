const { Router } = require("express");
const {
  createUser,
  changeTheme,
  modifyPreferences,
} = require("../controllers/userController");
const { validateCreateUser } = require("../middlewares/validateFields");
const { validateJWT } = require("../middlewares/validateJwt");
const { validateMongoID } = require("../middlewares/validateMongoID");

const router = Router();

router.post("/", [validateCreateUser], createUser);

router.patch("/theme", [validateJWT], changeTheme);
router.patch("/saved/:id", [validateJWT, validateMongoID], modifyPreferences);

module.exports = router;
