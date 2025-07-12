import express from "express";
import fish from "./fish.js";
import dimentions from "./dimentions.js";

export const router = express.Router();

router.use("/fish", fish);
router.use("/dimentions", dimentions);
