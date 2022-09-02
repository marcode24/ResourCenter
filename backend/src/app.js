const express = require("express");
const cors = require("cors");
const app = express();

require("dotenv").config();

app.use(cors());

app.use(express.json());

app.use("/api/resource", require("./routes/resourceRoute"));
app.use("/api/website", require("./routes/websiteRoute"));
app.use("/api/category", require("./routes/categoryRoute"));

module.exports = app;
