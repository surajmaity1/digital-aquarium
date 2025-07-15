import express from "express";
import {
  createFishController,
  deleteFishByIdController,
  getFishByIdController,
  getFishController,
} from "../controllers/fish.js";
import { createFishValidator } from "../middlewares/validators/fish.js";
import { checkUserLoggedIn, jwtValidator } from "../middlewares/validators/auth.js";


const router = express.Router();

router.post("/",jwtValidator, checkUserLoggedIn, createFishValidator, createFishController);
router.get("/", jwtValidator, checkUserLoggedIn, getFishController);
router.get("/:id", jwtValidator, checkUserLoggedIn, getFishByIdController);
router.post("/", createFishValidator, createFishController);
router.get("/", getFishController);
router.get("/:id", getFishByIdController);
router.delete("/:id", deleteFishByIdController);

export default router;
