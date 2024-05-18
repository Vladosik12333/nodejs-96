import { PORT, DB_URI } from "./src/config.js";
import app from "./src/app.js";
import mongoose from "mongoose";

mongoose
  .connect(DB_URI)
  .then(() => {
    console.log("Database connection successful");

    app.listen(PORT, (err) => {
      if (err) {
        console.log("Server wasn't run because of error: ", err);
        process.exit(1);
      }
      console.log("Server is running on port: ", PORT);
    });
  })
  .catch((error) => {
    console.log("Database wasn`t run because of error: ", error);
    process.exit(1);
  });
