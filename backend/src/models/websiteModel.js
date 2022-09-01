const { Schema, model, SchemaTypes } = require("mongoose");

const websiteSchema = Schema({
  resource: {
    type: SchemaTypes.ObjectId,
    ref: "resource",
    default: {},
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  link: {
    type: String,
    required: true,
  },
  comments: [
    {
      type: String,
      default: [],
    },
  ],
});

module.exports = model("website", websiteSchema);
