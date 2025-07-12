import express from "express";
import { createFish } from "../controllers/fish.js";
import { createFishValidator } from "../middlewares/validators/fish.js";

const router = express.Router();

router.post("/", createFishValidator, createFish);

export default router;
