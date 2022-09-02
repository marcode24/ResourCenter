const { request, response } = require("express");
const categoryModel = require("../models/categoryModel");
const Resource = require("../models/resourceModel");

const createResource = async (req = request, res = response) => {
  try {
    const { name, category } = req.body;
    const existCategory = await categoryModel.findById(category);
    if (!existCategory) {
      return res.status(404).json({
        ok: true,
        msg: "category not found",
      });
    }
    const existResource = await Resource.findOne({
      name: { $regex: name, $options: "i" },
    });
    if (existResource) {
      return res.status(200).json({
        ok: true,
        msg: "One resource has a similar name",
      });
    }
    const newResource = new Resource({ ...req.body });
    const resourceCreated = await newResource.save();
    existCategory.resources.push(resourceCreated._id);
    await existCategory.save();
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

const updateResource = async (req = request, res = response) => {
  try {
    const { id: resourceID } = req.params;
    const { category, ...changes } = req.body;
    const resourceUpdated = await Resource.findByIdAndUpdate(
      resourceID,
      changes,
      { new: true }
    );
    res.status(200).json({
      ok: true,
      msg: "Resource updated correctly",
      resource: resourceUpdated,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Something went wrong, try again",
    });
  }
};

const getResources = async (req = request, res = response) => {
  try {
    const { skip = 0, limit = 10 } = req.query;
    const resources = await Resource.find({}, "", {
      limit,
      skip,
    });
    res.status(200).json({
      ok: true,
      resources,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Something went wrong, try again",
    });
  }
};

const getResourceById = async (req = request, res = response) => {
  try {
    const resourceID = req.params.id;
    const resourceDB = await Resource.findById(resourceID);
    if (!resourceDB) {
      return res.status(404).json({
        ok: true,
        msg: "Resource not found",
      });
    }
    res.status(200).json({
      ok: true,
      resource: resourceDB,
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
  updateResource,
  getResources,
  getResourceById,
};
