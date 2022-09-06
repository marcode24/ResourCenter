const { Router } = require("express");
const { createComment } = require("../controllers/commentController");
const { validateCreateComment } = require("../middlewares/validateFields");
const router = Router();

router.post("/", [validateCreateComment], createComment);

module.exports = router;
