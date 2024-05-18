import Product from '../models/product.js';

const create = async (body) => {
  const product = await Product.create(body);
  return product;
};

const getAll = async () => {
  const allProducts = await Product.find();
  return allProducts;
};

export default { create, getAll };
