import joi from "joi";
import jwt from "jsonwebtoken"

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

export const jwtValidator = async (req, res, next) => {
    try {
        console.log('Authentication middleware triggered', req.cookies);
        
        // Get the token from the request
         const token = req.cookies.token;

        if (!token) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        // Verify the token and extract user information
        const user = jwt.verify(token, process.env.JWT_SECRET);
        if (!user) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        console.log('Authenticated user:', user);
        // Attach user information to the request object
        req.user = user;
        next();
    } catch (error) {
        console.error('Error during authentication:', error);
        res.status(500).json({ message: 'Error during authentication', error });
    }
}

export const checkUserLoggedIn = async (req, res, next ) => {
    try {
        // Check if user is authenticated
        if (!req.user) {
            return res.status(401).json({ message: 'User is not authenticated' });
        }
        console.log('User is authenticated:', req.user);

        next();
    } catch (error) {
        console.error('Error during user check:', error);
        res.status(500).json({ message: 'Error during user check', error });    
    }
}