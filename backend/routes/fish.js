import express from "express";
import {
  createFishController,
  deleteFishByIdController,
  getFishByIdController,
  getFishController,
} from "../controllers/fish.js";
import { createFishValidator } from "../middlewares/validators/fish.js";

const router = express.Router();

router.post("/", createFishValidator, createFishController);
router.get("/", getFishController);
router.get("/:id", getFishByIdController);
router.delete("/:id", deleteFishByIdController);

export default router;
