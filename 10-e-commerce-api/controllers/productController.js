const createProduct = async (req, res) => {
  res.send('Create product');
};

const getAllProducts = async (req, res) => {
  res.send('get all products');
};

const getSingleProduct = async (req, res) => {
  res.send('Get single product');
};

const updateProduct = async (req, res) => {
  res.send('Update product');
};

const deleteProduct = async (req, res) => {
  res.send('Delete product');
};

const uploadProduct = async (req, res) => {
  res.send('Upload product');
};

module.exports = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  uploadProduct,
};
