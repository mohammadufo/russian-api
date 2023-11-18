const mongoose = require('mongoose')
const { default: slugify } = require('slugify')

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'A category must have a name'],
      unique: true,
    },
    slug: String,
    image: String,
    description: {
      type: String,
      required: [true, 'A product must have a description'],
    },
  },
  { timestamps: true }
)

categorySchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true })
  next()
})

const Category = mongoose.model('Category', categorySchema)

module.exports = Category
