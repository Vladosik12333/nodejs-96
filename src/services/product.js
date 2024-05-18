import httpError from "../helpers/httpError.js";
import repositories from "../repositories/product.js";

const create = async (body) => {
  const product = await repositories.create(body);
  return product;
};

const getAll = async () => {
  const allProducts = await repositories.getAll();
  return allProducts;
};

const getById = async (id) => {
  const product = await repositories.getById(id);

  if (!product) throw httpError(404, "Product not found");

  return product;
};

const deleteById = async (id) => {
  const product = await repositories.deleteById(id);
  if (!product) throw httpError(404, "Product not found");
  return product;
};

const updateById = async (id, body) => {
  const product = await repositories.updateById(id, body);
  if (!product) throw httpError(404, "Product not found");
  return product;
};

export default { create, getAll, getById, deleteById, updateById };
