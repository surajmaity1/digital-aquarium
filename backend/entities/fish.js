import mongoose from "mongoose";

const FishSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name required"],
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
    type: {
      type: String,
      required: [true, "type required"],
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

export const Fish = mongoose.model("fish", FishSchema);
