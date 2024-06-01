import Product from "../models/product.js";

const create = async (body) => {
  const product = await Product.create(body);
  return product;
};

const getAll = async (filters) => {
  const allProducts = await Product.find(filters);
  return allProducts;
};

const getById = async (id) => {
  const product = await Product.findById(id);
  return product;
};

const deleteById = async (id) => {
  const product = await Product.findByIdAndDelete(id);
  return product;
};

const updateById = async (id, body) => {
  const product = await Product.findByIdAndUpdate(id, body, { new: true });
  return product;
};

export default { create, getAll, getById, deleteById, updateById };
