import httpError from '../helpers/httpError.js';
import services from '../services/product.js';

const getAll = async (req, res) => {
  const allProducts = await services.getAll();
  res.json({ allProducts });
};

const create = async (req, res) => {
  const product = await services.create(req.body);
  res.json({ product });
};

export default { getAll, create };
