import express from "express";
import { PORT } from "./src/config.js";
import logger from "morgan"
import cors from "cors";
const app = express();

app.use(logger("dev"))

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.json("Hello Back-end!").status(230);
});

app.use((_, res) => {
  res.json({
    message: "Not found"
  }).status(404)
})

app.listen(PORT, (err) => {
  if (err) {
    console.log("Server wasn't run becauce of error: ", err);
    process.exit(1);
  }
  console.log("Server is running on port: ", PORT);
});
