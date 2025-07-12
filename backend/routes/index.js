import express from "express";
import fish from "./fish.js";

export const router = express.Router();

router.use("/fish", fish);
