import { SOMETHING_WENT_WRONG } from "../constants/fish.js";
import { createFish, deleteFishById, getFish, getFishById } from "../services/fish.js";

export const createFishController = async (req, res) => {
  try {
    const requestBody = req.body;
    const fish = {
      name: requestBody.name,
      description: requestBody.description,
      imageUrl: requestBody.imageUrl,
      type: requestBody.type,
    };
    const response = await createFish(fish);

    return res.status(201).json({
      message: "Fish created successfully",
      data: response,
    });
  } catch (error) {
    return res.boom.serverUnavailable(SOMETHING_WENT_WRONG);
  }
};

export const getFishController = async (req, res) => {
  try {
    const response = await getFish();

    return res.status(200).json({
      message: "Fish fetched successfully",
      data: response,
    });
  } catch (error) {
    return res.boom.serverUnavailable(SOMETHING_WENT_WRONG);
  }
};

export const getFishByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await getFishById(id);

    if (!response) {
      return res.status(404).json({
        message: "No fish found. Please add some fish",
      });
    }

    return res.status(200).json({
      message: "Fish fetched successfully",
      data: response,
    });
  } catch (error) {
    return res.boom.serverUnavailable(SOMETHING_WENT_WRONG);
  }
};

export const deleteFishByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await deleteFishById(id);

    if (!response) {
      return res.status(404).json({
        message: "No fish found. Please add some fish",
      });
    }

    return res.status(204).json();
  } catch (error) {
    return res.boom.serverUnavailable(SOMETHING_WENT_WRONG);
  }
};
