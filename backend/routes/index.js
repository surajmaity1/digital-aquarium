import express from "express";
import fish from "./fish.js";
import dimensions from "./dimensions.js";
import auth from "./auth.js";
import { checkUserLoggedIn } from "../middlewares/validators/auth.js";

export const router = express.Router();

router.use("/fish", checkUserLoggedIn, fish);
router.use("/dimensions", checkUserLoggedIn, dimensions);
router.use("/auth", auth);
