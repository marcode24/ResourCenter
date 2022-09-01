const { Router } = require("express");
const { createResource } = require("../controllers/resourceController");
const { validateCategory } = require("../middlewares/validateCategory");

const router = Router();

router.post("/", [validateCategory], createResource);

module.exports = router;
