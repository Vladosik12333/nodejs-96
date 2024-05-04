const wrapper = (controller) => (req, res, next) => {
  try {
    controller(req, res);
  } catch (error) {
    next(error);
  }
};

export default wrapper;
