import joi from "joi";

export const createFishValidator = async (req, res, next) => {
  const schema = joi
    .object()
    .strict()
    .keys({
      name: joi.string().required().messages({
        "any.required": "fish name is required",
        "string.empty": "fish name cannot be empty",
      }),
      imageUrl: joi.string().required().messages({
        "any.required": "imageUrl is required",
        "string.empty": "imageUrl cannot be empty",
      }),
      description: joi.string().required().messages({
        "any.required": "description is required",
        "string.empty": "description cannot be empty",
      }),
      type: joi.string().required().messages({
        "any.required": "type is required",
        "string.empty": "type cannot be empty",
      }),
    });
  try {
    await schema.validateAsync(req.body, { abortEarly: false });
    next();
  } catch (error) {
    res.boom.badRequest(error.details[0].message);
  }
};
