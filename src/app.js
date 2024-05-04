import express from "express";
import wrapper from "./helpers/wrapper.js";
import httpError from "./helpers/httpError.js";

import logger from "morgan";
import cors from "cors";
const app = express();

app.use(logger("dev"));

app.use(cors());

app.use(express.json());

app.get(
  "/",
  wrapper((req, res) => {
    throw httpError(402, "Error 1");
    res.json("Hello Back-end!").status(230);
  })
);

app.get(
  "/2",
  wrapper((req, res) => {
    throw httpError(402, "Error 2");
    res.json("Hello Back-end!").status(230);
  })
);

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
