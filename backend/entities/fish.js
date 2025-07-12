const mongoose = require("mongoose");

const FishesSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "fish name required"],
      default: "",
    },
    description: {
      type: String,
      required: [true, "description required"],
      default: "",
    },

    fishImage: {
      type: String,
      required: [true, "fishImage required"],
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const Fish = mongoose.model("Post", FishesSchema);

module.exports = Fish;
