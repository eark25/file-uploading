const Product = require('../models/productModel');
const { StatusCodes } = require('http-status-codes');

exports.createProduct = async (req, res) => {
  console.log(req.body);
  const product = await Product.create(req.body);

  res.status(StatusCodes.CREATED).json({
    status: 'success',
    product,
  });
};

exports.getAllProducts = async (req, res) => {
  const products = await Product.find({});

  res.status(StatusCodes.OK).json({
    status: 'success',
    products,
  });
};

exports.getProduct = async (req, res) => {
  res.send('get one');
};

exports.updateProduct = async (req, res) => {
  res.send('update');
};

exports.deleteProduct = async (req, res) => {
  res.send('delete');
};
