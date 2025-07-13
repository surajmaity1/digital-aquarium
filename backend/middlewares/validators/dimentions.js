import joi from "joi";
import {
  VIEW_DIMENTION_2D,
  VIEW_DIMENTION_3D,
} from "../../constants/dimentions.js";

export const dimentionsValidators = async (req, res, next) => {
  const schema = joi
    .object()
    .strict()
    .keys({
      view: joi
        .string()
        .required()
        .valid(VIEW_DIMENTION_2D, VIEW_DIMENTION_3D)
        .messages({
          "any.required": "view is required",
          "string.empty": "view cannot be empty",
        }),
    });
  try {
    await schema.validateAsync(req.body, { abortEarly: false });
    next();
  } catch (error) {
    res.boom.badRequest(error.details[0].message);
  }
};
