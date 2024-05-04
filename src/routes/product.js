import express from "express";
import wrapper from "../helpers/wrapper.js";
import controllers from "../controllers/product.js";
import validator from "../middlewares/validation.js";
import { createProductSchema } from "../models/product.js";

const route = express.Router();

route.get("/", wrapper(controllers.getAll));

route.post(
  "/",
  validator.body(createProductSchema),
  wrapper(controllers.create)
);

export default route;