import joi from "joi";
import {
  VIEW_DIMENSION_2D,
  VIEW_DIMENSION_3D,
} from "../../constants/dimensions.js";

export const dimensionsValidators = async (req, res, next) => {
  const schema = joi
    .object()
    .strict()
    .keys({
      view: joi
        .string()
        .required()
        .valid(VIEW_DIMENSION_2D, VIEW_DIMENSION_3D)
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
