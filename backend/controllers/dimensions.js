import { SOMETHING_WENT_WRONG } from "../constants/fish.js";
import {
  createDimensions,
  getDimensions,
  updateDimensions,
} from "../services/dimensions.js";

export const createDimensionsController = async (req, res) => {
  try {
    const requestBody = req.body;
    const view = {
      view: requestBody.view,
    };

    const response = await createDimensions(view);

    if (response.isAlreadyCreated) {
      return res.status(400).json({
        message: "Dimension already created",
        data: {
          view: response.view,
        },
      });
    }

    return res.status(201).json({
      message: "Dimension created successfully",
      data: {
        view: response.view,
      },
    });
  } catch (error) {
    return res.boom.serverUnavailable(SOMETHING_WENT_WRONG);
  }
};

export const getDimensionsController = async (req, res) => {
  try {
    const response = await getDimensions();

    if (!response) {
      return res.status(404).json({
        message: "No dimension found. Please create dimensions",
      });
    }

    return res.status(200).json({
      message: "Dimension fetched successfully",
      data: {
        view: response.view,
      },
    });
  } catch (error) {
    return res.boom.serverUnavailable(SOMETHING_WENT_WRONG);
  }
};

export const updateDimensionsController = async (req, res) => {
  try {
    const requestBody = req.body;
    const response = await updateDimensions(requestBody);

    if (!response.isUpdated) {
      return res.status(400).json({
        message: "View not updated as already same dimension implemented",
        data: {
          view: response.view,
        },
      });
    }

    return res.status(200).json({
      message: "dimensions updated successfully",
      data: {
        view: response.view,
      },
    });
  } catch (error) {
    return res.boom.serverUnavailable(SOMETHING_WENT_WRONG);
  }
};
