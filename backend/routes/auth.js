import express from "express";
import { registerUser, loginUser, logoutUser } from "../controllers/auth.js";
import {
  SignUpValidators,
  loginValidators,
  checkUserLoggedIn,
} from "../middlewares/validators/auth.js";

const router = express.Router();

router.post("/register", SignUpValidators, registerUser);
router.post("/login", loginValidators, loginUser);
router.get("/logout", checkUserLoggedIn, logoutUser);

export default router;
