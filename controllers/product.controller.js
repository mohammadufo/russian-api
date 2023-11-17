const Product = require('../models/product.model')

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find()
    res.status(200).json({
      status: 'success',
      products,
    })
  } catch (err) {
    res.status(500).json({
      stats: 'ERROR 💥',
      message: 'Error handling not yet implemented!',
    })
  }
}

exports.createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body)

    res.status(201).json({
      status: 'success',
      product,
    })
  } catch (err) {
    res.status(500).json(err)
  }
}

exports.getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)

    res.status(200).json({
      status: 'success',
      product,
    })
  } catch (err) {
    res.status(500).json({
      stats: 'ERROR 💥',
      message: 'Error handling not yet implemented!',
    })
  }
}
