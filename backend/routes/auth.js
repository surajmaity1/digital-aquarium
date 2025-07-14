import express from "express";
import { registerUser, loginUser, logoutUser,  resetPassword } from "../controllers/auth.js";
import { SignUpValidators, loginValidators } from "../middlewares/validators/auth.js";

const router = express.Router();

router.post('/register', SignUpValidators, registerUser);
router.post('/login', loginValidators, loginUser);
router.get('/logout', logoutUser);
router.post('/reset-password', resetPassword);

export default router