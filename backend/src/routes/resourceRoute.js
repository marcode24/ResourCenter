const { Router } = require("express");
const {
  createResource,
  updateResource,
} = require("../controllers/resourceController");
const { validateCategory } = require("../middlewares/validateCategory");
const { validateMongoID } = require("../middlewares/validateMongoID");

const router = Router();

router.post("/", [validateCategory], createResource);

router.put("/:id", [validateMongoID], updateResource);

module.exports = router;
