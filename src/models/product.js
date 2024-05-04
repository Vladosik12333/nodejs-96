import Joi from "joi";

export const createProductSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().required(),
  inStock: Joi.boolean().default(true),
});
