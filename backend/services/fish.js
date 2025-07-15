import { Fish } from "../entities/fish.js";

export const createFish = async (fish) => {
  try {
    const response = await Fish.create(fish);
    return {
      id: response.id,
      name: response.name,
      description: response.description,
      imageUrl: response.imageUrl,
      type: response.type,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getFish = async () => {
  try {
    const response = await Fish.find({});
    const fishList = new Array(response.length);

    for (let index = 0; index < response.length; index++) {
      const element = response[index];
      const fish = {
        id: element.id,
        name: element.name,
        description: element.description,
        imageUrl: element.imageUrl,
        type: element.type,
      };

      fishList[index] = fish;
    }

    return fishList;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getFishById = async (id) => {
  try {
    const response = await Fish.findById(id);
    if (!response) {
      return null;
    }
    return {
      id: response.id,
      name: response.name,
      description: response.description,
      imageUrl: response.imageUrl,
      type: response.type,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const deleteFishById = async (id) => {
  try {
    const response = await Fish.findByIdAndDelete(id);

    if (!response) {
      return null;
    }

    return true;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
