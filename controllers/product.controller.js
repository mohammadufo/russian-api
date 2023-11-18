const Product = require('../models/product.model')

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().populate('category')
    res.status(200).json({
      status: 'success',
      products,
    })
  } catch (err) {
    // res.status(500).json({
    //   stats: 'ERROR 💥',
    //   message: 'Error handling not yet implemented!',
    // })

    console.log(err)
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

exports.getProductBySlug = async (req, res) => {
  try {
    const product = await Product.findOne({ slug: req.params.slug })

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

exports.getProductByCategory = async (req, res) => {
  try {
    const products = await Product.find({ category: req.params.catId })

    res.status(200).json({
      status: 'success',
      products,
    })
  } catch (err) {
    console.log(err)
  }
}
