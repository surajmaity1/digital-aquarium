import express from "express";
import { dimensionsValidators } from "../middlewares/validators/dimensions.js";
import {
  createDimensionsController,
  getDimensionsController,
  updateDimensionsController,
} from "../controllers/dimensions.js";

const router = express.Router();

router.post("/", dimensionsValidators, createDimensionsController);
router.put("/", dimensionsValidators, updateDimensionsController);
router.get("/", getDimensionsController);

export default router;
