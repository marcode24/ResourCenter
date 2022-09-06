const { SchemaTypes, Schema, model } = require("mongoose");
const { defaultImageUser } = require("../constants/images");

const userSchema = Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  lastName: {
    type: String,
  },
  image: {
    type: String,
    default: defaultImageUser,
  },
  active: {
    type: Boolean,
    default: true,
  },
  darkMode: {
    type: Boolean,
    default: false,
  },
  websitesStarried: [
    {
      stars: {
        type: Number,
        default: 0,
        required: true,
      },
      website: {
        type: SchemaTypes.ObjectId,
        ref: "website",
        required: true,
      },
    },
  ],
});

module.exports = model("user", userSchema);
