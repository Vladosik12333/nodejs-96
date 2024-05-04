import { PORT } from "./src/config.js";
import app from "./src/app.js";

app.listen(PORT, (err) => {
  if (err) {
    console.log("Server wasn't run becauce of error: ", err);
    process.exit(1);
  }
  console.log("Server is running on port: ", PORT);
});
