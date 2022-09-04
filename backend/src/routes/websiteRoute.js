const { Router } = require("express");
const {
  createWebsite,
  getWebsites,
  getWebsitesByResource,
  getWebsiteById,
} = require("../controllers/websiteController");
const {
  validateResourceID,
  validateMongoID,
} = require("../middlewares/validateMongoID");

const router = Router();

router.get("/", getWebsites);
router.get("/:id", [validateMongoID], getWebsiteById);
router.get("/resource/:id", [validateMongoID], getWebsitesByResource);

router.post("/", [validateResourceID], createWebsite);

module.exports = router;
