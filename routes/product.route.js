const express = require('express')
const {
  getAllProducts,
  createProduct,
  getProduct,
  getProductBySlug,
  getProductByCategory,
} = require('../controllers/product.controller')

const router = express.Router()

router.route('/').get(getAllProducts).post(createProduct)
router.route('/:id').get(getProduct)
router.route('/slug/:slug').get(getProductBySlug)
router.route('/by-category/:catId').get(getProductByCategory)

module.exports = router
