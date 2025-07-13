import express from "express";
import boom from "express-boom";

export const middleware = (app) => {
  app.use(boom());
  app.use(express.json());
};
