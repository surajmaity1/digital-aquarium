import express from "express";
import { dimentionsValidators } from "../middlewares/validators/dimentions.js";
import { updateDimentionsController } from "../controllers/dimentions.js";
import { checkUserLoggedIn, jwtValidator } from "../middlewares/validators/auth.js";


const router = express.Router();

router.put("/", jwtValidator, checkUserLoggedIn, dimentionsValidators, updateDimentionsController);

const router = express.Router();

router.put("/", dimentionsValidators, updateDimentionsController);

export default router;
