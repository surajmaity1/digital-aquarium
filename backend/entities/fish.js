import mongoose from "mongoose";

const FishSchema = mongoose.Schema(
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

    imageUrl: {
      type: String,
      required: [true, "imageUrl required"],
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

export const Fish = mongoose.model("Fish", FishSchema);
