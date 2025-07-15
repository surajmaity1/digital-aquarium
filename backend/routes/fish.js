import express from "express";
import {
  createFishController,
  getFishByIdController,
  getFishController,
} from "../controllers/fish.js";
import { createFishValidator } from "../middlewares/validators/fish.js";
import { checkUserLoggedIn, jwtValidator } from "../middlewares/validators/auth.js";


const router = express.Router();

router.post("/",jwtValidator, checkUserLoggedIn, createFishValidator, createFishController);
router.get("/", jwtValidator, checkUserLoggedIn, getFishController);
router.get("/:id", jwtValidator, checkUserLoggedIn, getFishByIdController);

export default router;
