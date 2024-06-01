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

export const updateProductSchema = Joi.object({
  name: Joi.string(),
  price: Joi.number(),
  inStock: Joi.boolean(),
  popular: Joi.boolean(),
}).min(1);

export const filtersProductSchema = Joi.object({
  name: Joi.string(),
  inStock: Joi.boolean(),
  popular: Joi.boolean(),
});

export const sortingProductSchema = Joi.object({
  sortBy: Joi.string().valid("name", "price", "inStock", "popular"),
  orderBy: Joi.boolean().default(true),
});

export const filtersAndSortingSchema = Joi.object({
  name: Joi.string(),
  inStock: Joi.boolean(),
  popular: Joi.boolean(),
  sortBy: Joi.string().valid("name", "price", "inStock", "popular"),
  orderBy: Joi.boolean().default(true),
});
