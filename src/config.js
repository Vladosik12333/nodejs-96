import dotenv from "dotenv";

dotenv.config();

export const { PORT = 3000, DB_URI = "" } = process.env;
