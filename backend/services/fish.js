import { Fish } from "../entities/fish.js";

export const createFish = async (fish) => {
  try {
    const response = await Fish.create(fish);
    return {
      id: response.id,
      name: response.name,
      description: response.description,
      imageUrl: response.imageUrl,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
