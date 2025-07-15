import { Dimensions } from "../entities/dimensions.js";

export const createDimensions = async (view) => {
  try {
    const dimension = await Dimensions.find({});

    if (dimension.length === 1) {
      return {
        isAlreadyCreated: true,
        view: dimension[0].view,
      };
    }

    const response = await Dimensions.create(view);

    return {
      isAlreadyCreated: false,
      view: response.view,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getDimensions = async () => {
  try {
    const dimension = await Dimensions.find({});

    if (dimension.length === 0) {
      return null;
    }

    return dimension[0];
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const updateDimensions = async (updatedView) => {
  try {
    const dimension = await Dimensions.find({});

    if (dimension.length === 0) {
      const response = await Dimensions.create(updatedView);
      return {
        isUpdated: true,
        view: response.view,
      };
    }

    const { id, view: oldDimension } = dimension[0];

    if (oldDimension === updatedView.view) {
      return {
        isUpdated: false,
        view: oldDimension,
      };
    }

    await Dimensions.findByIdAndUpdate(id, { view: updatedView.view });

    return {
      isUpdated: true,
      view: updatedView.view,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
