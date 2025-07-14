import joi from "joi";

export const SignUpValidators = async (req, res, next) => {
   const passwordRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])/;
    const schema = joi
        .object()
        .strict()
        .keys({
            email: joi.string().email().required().messages({
                "string.email": "email must be valid",
                "string.empty": "email cannot be empty",
                "any.required": "email is required",
            }),
            password: joi.string().min(8).max(30).pattern(passwordRegex).required().messages({
                "string.min": "password must be at least 8 characters long",
                "string.max": "password must be at most 30 characters long",
                "string.pattern.base": "password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
                "string.empty": "password cannot be empty",
                "any.required": "password is required",
            }),
            name: joi.string().required().messages({
                "any.required": "name is required",
                "string.empty": "name cannot be empty",
            }),
            gender: joi.string().required().messages({
                "any.required": "gender is required",
                "string.empty": "gender cannot be empty",
            }),

        });
    try {
        await schema.validateAsync(req.body, { abortEarly: false });
        next();
    } catch (error) {
        res.boom.badRequest(error.details[0].message);
    }
}

export const loginValidators = async (req, res, next) => {
   const passwordRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])/;
    const schema = joi
        .object()
        .strict()
        .keys({
            email: joi.string().email().required().messages({
                "string.email": "email must be valid",
                "string.empty": "email cannot be empty",
                "any.required": "email is required",
            }),
            password: joi.string().min(8).max(30).pattern(passwordRegex).required().messages({
                "string.min": "password must be at least 8 characters long",
                "string.max": "password must be at most 30 characters long",
                "string.pattern.base": "password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
                "string.empty": "password cannot be empty",
                "any.required": "password is required",
            }),
         

        });
    try {
        await schema.validateAsync(req.body, { abortEarly: false });
        next();
    } catch (error) {
        res.boom.badRequest(error.details[0].message);
    }
}
