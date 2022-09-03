const { Router } = require("express");
const {
  createWebsite,
  getWebsites,
  getWebsitesByResource,
} = require("../controllers/websiteController");
const {
  validateResourceID,
  validateMongoID,
} = require("../middlewares/validateMongoID");

const router = Router();

router.get("/", getWebsites);
router.get("/resource/:id", [validateMongoID], getWebsitesByResource);

router.post("/", [validateResourceID], createWebsite);

module.exports = router;
