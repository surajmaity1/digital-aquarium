import express from "express";
import { router } from "./routes/index.js";
import { middleware } from "./middlewares/index.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec, swaggerUICss } from "./swaggerDocs.js";

const app = express();

app.use(
  "/api/docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec, {
    customCss:
      ".swagger-ui .opblock .opblock-summary-path-description-wrapper { align-items: center; display: flex; flex-wrap: wrap; gap: 0 10px; padding: 0 10px; width: 100%; }",
    customCssUrl: swaggerUICss,
  })
);

dotenv.config();

const PORT = process.env.SERVER_PORT;
app.get("/health", (req, res) => {
  res.json({ message: `Server is up and running 🎉` });
});

middleware(app);
app.use("/api", router);

mongoose
  .connect(`${process.env.MONGODB_URL}`)
  .then(() => {
    console.log("Mongodb Connected ... ");
    app.listen(PORT, () => {
      console.log(
        `Server is up and running 🎉 on port http://localhost:${PORT}.`
      );
    });
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

export default app;
