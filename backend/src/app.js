const express = require("express");
const app = express();
require("dotenv").config();

app.use(express.json());

app.use("/api/resource", require("./routes/resourceRoute"));

module.exports = app;
