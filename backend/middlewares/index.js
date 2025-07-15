import express from "express";
import boom from "express-boom";
import cors from "cors";
import cookieParser from "cookie-parser";

export const middleware = (app) => {
  app.use(boom());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());
  app.use(cookieParser()); // Middleware to parse cookies
};
