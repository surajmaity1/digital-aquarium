import express from "express";
import { router } from "./routes/index.js";
import { middleware } from "./middlewares/index.js";
const app = express();
const PORT = 3000;

middleware(app);

app.get("/health", (req, res) => {
  res.json({ message: `Server is up and running 🎉` });
});

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server is up and running 🎉 on port http://localhost:${PORT}`);
});
