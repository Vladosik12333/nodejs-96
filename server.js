import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json("Hello Back-end!");
});

app.listen(3000);
