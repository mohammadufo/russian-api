const mongoose = require('mongoose')
const { default: slugify } = require('slugify')

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'A product must have a name'],
      unique: true,
    },
    slug: String,
    price: {
      type: Number,
      required: [true, 'A product must have a price'],
    },
    imageCover: {
      type: String,
    },
    imageList: {
      type: [String],
    },
    description: {
      type: String,
      required: [true, 'A product must have a product'],
    },
    category: {
      type: mongoose.Schema.ObjectId,
      ref: 'Category',
      required: [true, 'Product must belong to a category'],
    },
  },
  { timestamps: true }
)

productSchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true })
  next()
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product
