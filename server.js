import express from "express";
import { PORT } from "./src/config.js";
const app = express();

app.get("/", (req, res) => {
  res.json("Hello Back-end!");
});

app.listen(PORT, (err) => {
  if (err) {
    console.log("Server wasn't run becauce of error: ", err);
    process.exit(1);
  }
  console.log("Server is running on port: ", PORT);
});
