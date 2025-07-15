import mongoose from "mongoose";

const DimensionsSchema = mongoose.Schema(
  {
    view: {
      type: String,
      required: [true, "view required"],
      default: "2D",
    },
  },
  {
    timestamps: true,
  }
);

export const Dimensions = mongoose.model("dimensions", DimensionsSchema);
