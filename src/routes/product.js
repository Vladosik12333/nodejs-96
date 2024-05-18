import express from "express";
import wrapper from "../helpers/wrapper.js";
import controllers from "../controllers/product.js";
import validator from "../middlewares/validation.js";
import {
  createProductSchema,
  producIdSchema,
  updateProductSchema,
} from "../models/product.js";

const route = express.Router();

route.get("/", wrapper(controllers.getAll));

route.post(
  "/",
  validator.body(createProductSchema),
  wrapper(controllers.create)
);

route.get(
  "/:id",
  validator.params(producIdSchema),
  wrapper(controllers.getById)
);

route.delete(
  "/:id",
  validator.params(producIdSchema),
  wrapper(controllers.deleteById)
);

route.put(
  "/:id",
  validator.body(updateProductSchema),
  validator.params(producIdSchema),
  wrapper(controllers.updateById)
);

export default route;
