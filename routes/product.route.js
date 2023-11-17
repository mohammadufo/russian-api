const express = require('express')
const {
  getAllProducts,
  createProduct,
  getProduct,
  getProductBySlug,
} = require('../controllers/product.controller')

const router = express.Router()

router.route('/').get(getAllProducts).post(createProduct)
router.route('/:id').get(getProduct)
router.route('/slug/:slug').get(getProductBySlug)

module.exports = router
