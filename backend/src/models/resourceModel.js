const { Schema, model, SchemaTypes } = require("mongoose");

const resourceSchema = Schema({
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
  category: {
    type: SchemaTypes.ObjectId,
    ref: "category",
    required: true,
  },
});

module.exports = model("resource", resourceSchema);
