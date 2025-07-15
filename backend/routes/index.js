import express from "express";
import fish from "./fish.js";
import dimentions from "./dimentions.js";
import auth from "./auth.js";
import { checkUserLoggedIn } from "../middlewares/validators/auth.js";

export const router = express.Router();

router.use("/fish", checkUserLoggedIn, fish);
router.use("/dimentions", checkUserLoggedIn, dimentions);
router.use("/auth", auth);
