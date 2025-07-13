import { SOMETHING_WENT_WRONG } from "../constants/fish.js";
import { updateDimentions } from "../services/dimentions.js";

export const updateDimentionsController = async (req, res) => {
  try {
    const requestBody = req.body;
    const response = await updateDimentions(requestBody);

    if (!response.isUpdated) {
      return res.status(400).json({
        message: "View not updated as already same dimention implemented",
        data: {
          view: response.view,
        },
      });
    }

    return res.status(200).json({
      message: "dimentions updated successfully",
      data: {
        view: response.view,
      },
    });
  } catch (error) {
    return res.boom.serverUnavailable(SOMETHING_WENT_WRONG);
  }
};
