const mongoose = require('mongoose')

const { Schema } = mongoose

const postSchema = new Schema({
    slug: { type: String, required: true, unique: true },
    metaTitle: { type: String },
    metaDescription: { type: String },
    title: { type: String, required: true },
    category: { type: String },
    image: { type: String },
    description: { type: String },
    date: { type: Date, default: Date.now }
})

module.exports = mongoose.model('post', postSchema)
