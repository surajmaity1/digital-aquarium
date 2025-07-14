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


/** GET Methods */
/**
 * @openapi
 * '/api/fish/{id}':
 *  get:
 *     tags:
 *     - Fish Controller
 *     summary: Get a fish by id
 *     parameters:
 *      - name: id
 *        in: path
 *        description: The id of the fish
 *        required: true
 *     responses:
 *      200:
 *        description: Fetched Successfully
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 *      500:
 *        description: Server Error
 */
router.get("/:id", getFishByIdController);
router.delete("/:id", deleteFishByIdController);

export default router;
