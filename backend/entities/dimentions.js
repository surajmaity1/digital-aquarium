import mongoose from "mongoose";

const DimentionsSchema = mongoose.Schema(
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

export const Dimentions = mongoose.model("dimentions", DimentionsSchema);
