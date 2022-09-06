const { Schema, model, SchemaTypes } = require("mongoose");

const commentSchema = Schema({
  content: {
    type: String,
    default: null,
  },
  created: {
    type: Date,
    default: new Date(),
    required: true,
  },
  user: {
    type: SchemaTypes.ObjectId,
    ref: "user",
    required: true,
  },
});

module.exports = model("comment", commentSchema);
