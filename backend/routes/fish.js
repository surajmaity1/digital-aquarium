import express from "express";
import { createFishController } from "../controllers/fish.js";
import { createFishValidator } from "../middlewares/validators/fish.js";

const router = express.Router();

router.post("/", createFishValidator, createFishController);

export default router;
