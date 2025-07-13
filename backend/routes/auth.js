import express from "express";
import { registerUser, loginUser, logoutUser,  resetPassword } from "../controllers/auth.js";

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/logout', logoutUser);
router.post('/reset-password', resetPassword);

export default router