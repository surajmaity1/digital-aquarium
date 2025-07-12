import express from "express";
import boom from "express-boom";
import morgan from "morgan";

export const middleware = (app) => {
  app.use(boom());
  app.use(express.json());
  app.use(morgan("combined"));
};
