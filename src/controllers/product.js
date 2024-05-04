import httpError from "../helpers/httpError.js";

const getAll = (req, res) => {
  throw httpError(402, "Error 1");
  res.json("Hello Back-end!").status(230);
};

const create = (req, res) => {
  res.json("I created product");
};

export default { getAll, create };
