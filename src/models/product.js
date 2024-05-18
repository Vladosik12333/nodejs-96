import Joi from "joi";
import objectId from "joi-objectid";

import mongoose from "mongoose";

Joi.objectId = objectId(Joi);

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    inStock: { type: Boolean, default: true },
    popular: { type: Boolean, default: false },
  },
  {
    versionKey: false,
  }
);

export default mongoose.model("product", productSchema);

export const createProductSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().required(),
  inStock: Joi.boolean().default(true),
  popular: Joi.boolean().default(false),
});

export const producIdSchema = Joi.object({
  id: Joi.objectId().required(),
});
