import repositories from '../repositories/product.js';

const create = async (body) => {
  const product = await repositories.create(body);
  return product;
};

const getAll = async () => {
  const allProducts = await repositories.getAll();
  return allProducts;
};

export default { create, getAll };
