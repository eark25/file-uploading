const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const uploadController = require('../controllers/uploadController');

router
  .route('/')
  .get(productController.getAllProducts)
  .post(productController.createProduct);

router.route('/uploads').post(uploadController.uploadProductImage);

module.exports = router;
