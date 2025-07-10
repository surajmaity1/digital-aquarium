import express from "express";
import boom from "express-boom";

export const middleware = (app) => {
  app.use(express.json());
  app.use(boom());
};
