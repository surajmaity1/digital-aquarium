import express from "express";
import { registerUser, loginUser, logoutUser,  resetPassword } from "../controllers/auth.js";
import { authValidators } from "../middlewares/validators/auth.js";

const router = express.Router();

router.post('/register', authValidators, registerUser);
router.post('/login', authValidators, loginUser);
router.get('/logout', logoutUser);
router.post('/reset-password', resetPassword);

export default router