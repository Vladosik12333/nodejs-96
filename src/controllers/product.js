import services from "../services/product.js";

const getAll = async (req, res) => {
  const allProducts = await services.getAll();
  res.json({ allProducts });
};

const create = async (req, res) => {
  const product = await services.create(req.body);
  res.json({ product });
};

const getById = async (req, res) => {
  const product = await services.getById(req.params.id);
  res.json({ product });
};

const deleteById = async (req, res) => {
  const product = await services.deleteById(req.params.id);
  res.json({ product });
};

const updateById = async (req, res) => {
  const product = await services.updateById(req.params.id, req.body);
  res.json({ product });
};

export default { getAll, create, getById, deleteById, updateById };
