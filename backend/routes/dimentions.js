import express from "express";
import { dimentionsValidators } from "../middlewares/validators/dimentions.js";
import { updateDimentionsController } from "../controllers/dimentions.js";

const router = express.Router();

router.put("/", dimentionsValidators, updateDimentionsController);

export default router;
