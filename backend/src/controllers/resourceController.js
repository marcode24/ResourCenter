const { request, response } = require("express");
const Resource = require("../models/resourceModel");

const createResource = async (req = request, res = response) => {
  try {
    const name = req.body.name || null;
    const regexName = new RegExp(name, "i");
    const existResource = await Resource.findOne({ name: regexName });
    if (existResource) {
      return res.status(200).json({
        ok: true,
        msg: "One resource has a similar name",
      });
    }
    const newResource = new Resource({ ...req.body });
    const resourceCreated = await newResource.save();
    res.status(201).json({
      ok: true,
      resource: resourceCreated,
      msg: "Resource created correctly",
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
  createResource,
};
