import express from "express";
import fish from "./fish.js";
import dimentions from "./dimentions.js";
import auth from "./auth.js";

export const router = express.Router();

router.use("/fish", fish);
router.use("/dimentions", dimentions);
router.use("/auth", auth);
