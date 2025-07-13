import { Dimentions } from "../entities/dimentions.js";

export const updateDimentions = async (updatedView) => {
  try {
    const dimention = await Dimentions.find({});

    if (dimention.length === 0) {
      const response = await Dimentions.create(updatedView);
      return {
        isUpdated: true,
        view: response.view,
      };
    }

    const { id, view: oldDimention } = dimention[0];

    if (oldDimention === "2D" && oldDimention === updatedView.view) {
      return {
        isUpdated: false,
        view: oldDimention,
      };
    }

    if (oldDimention === "3D" && oldDimention === updatedView.view) {
      return {
        isUpdated: false,
        view: oldDimention,
      };
    }

    await Dimentions.findByIdAndUpdate(id, { view: updatedView.view });

    return {
      isUpdated: true,
      view: updatedView.view,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
