import express from "express";
import fish from "./fish.js";
import dimensions from "./dimensions.js";

export const router = express.Router();

router.use("/fish", fish);
router.use("/dimensions", dimensions);
