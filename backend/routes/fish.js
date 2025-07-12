import express from "express";
import {
  createFishController,
  getFishByIdController,
  getFishController,
} from "../controllers/fish.js";
import { createFishValidator } from "../middlewares/validators/fish.js";

const router = express.Router();

router.post("/", createFishValidator, createFishController);
router.get("/", getFishController);
router.get("/:id", getFishByIdController);

export default router;
