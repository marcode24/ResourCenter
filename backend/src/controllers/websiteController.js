const { request, response } = require("express");
const { resourceExist } = require("../helpers/validateResource");
const Website = require("../models/websiteModel");

const createWebsite = async (req = request, res = response) => {
  try {
    const { resource: resourceID } = req.body;
    const existResource = await resourceExist(resourceID);
    if (!existResource) {
      return res.status(404).json({
        ok: true,
        msg: "Resource not found",
      });
    }
    const newWebsite = new Website({ ...req.body });
    newWebsite.resource = resourceID;
    const websiteCreated = await newWebsite.save();
    res.status(201).json({
      ok: true,
      website: websiteCreated,
      msg: "Website created correctly",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Something went wrong, try again",
    });
  }
};

module.exports = {
  createWebsite,
};
