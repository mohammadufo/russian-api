const Category = require('../models/category.model')

exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find()

    res.status(200).json({
      status: 'success',
      categories,
    })
  } catch (err) {
    console.log(err)
  }
}

exports.createCategory = async (req, res) => {
  try {
    const category = await Category.create(req.body)

    res.status(201).json({
      status: 'success',
      category,
    })
  } catch (err) {
    console.log(err)
  }
}
