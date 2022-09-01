const { Router } = require("express");
const { createWebsite } = require("../controllers/websiteController");
const { validateResourceID } = require("../middlewares/validateMongoID");

const router = Router();

router.post("/", [validateResourceID], createWebsite);

module.exports = router;
