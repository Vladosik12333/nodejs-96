import express from "express";
import logger from "morgan";
import cors from "cors";
import routeProduct from "./routes/product.js";

const app = express();

app.use(logger("dev"));

app.use(cors());

app.use(express.json());

app.use("/api/products", routeProduct);

app.use((error, _, res, __) => {
  const { status = 500, message = "Server internal error" } = error;
  res.status(status).json({ message });
});

app.use((_, res) => {
  res
    .json({
      message: "Not found",
    })
    .status(404);
});

export default app;
