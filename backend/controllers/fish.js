import { SOMETHING_WENT_WRONG } from "../constants/fish.js";
import { createFish } from "../services/fish.js";

export const createFishController = async (req, res) => {
  const requestBody = req.body;
  const fish = {
    name: requestBody.name,
    description: requestBody.description,
    imageUrl: requestBody.imageUrl,
  };
  try {
    const response = await createFish(fish);
    return res.status(201).json({
      message: "Fish created successfully",
      data: response,
    });
  } catch (error) {
    res.boom.serverUnavailable(SOMETHING_WENT_WRONG);
  }
};
