const express = require('express')
const router = express.Router()
const fetchAdmin = require('../middleware/fetchadmin')
const Post = require('../models/post')

const slugify = (value = '') => value
    .toString()
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

const createUniqueSlug = async (value, excludeId) => {
    const baseSlug = slugify(value) || 'blog-post'
    let slug = baseSlug
    let counter = 2

    while (await Post.exists({ slug, ...(excludeId ? { _id: { $ne: excludeId } } : {}) })) {
        slug = `${baseSlug}-${counter++}`
    }

    return slug
}

router.get('/', async (_req, res) => {
    try {
        res.send(await Post.find().sort({ date: -1 }))
    } catch (error) {
        res.status(500).send('Unable to fetch blog posts')
    }
})

router.get('/slug/:slug', async (req, res) => {
    try {
        const post = await Post.findOne({ slug: decodeURIComponent(req.params.slug) })
        if (!post) return res.status(404).send('Blog post not found')
        res.send(post)
    } catch (error) {
        res.status(500).send('Unable to fetch blog post')
    }
})

router.get('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        if (!post) return res.status(404).send('Blog post not found')
        res.send(post)
    } catch (error) {
        res.status(500).send('Unable to fetch blog post')
    }
})

router.post('/', fetchAdmin, async (req, res) => {
    try {
        const { metaTitle, metaDescription, title, category, image, description, date } = req.body
        const slug = await createUniqueSlug(metaTitle || title)
        const post = await Post.create({ slug, metaTitle, metaDescription, title, category, image, description, date })
        res.status(201).send(post)
    } catch (error) {
        res.status(500).send('Unable to create blog post')
    }
})

router.put('/:id', fetchAdmin, async (req, res) => {
    try {
        const { metaTitle, metaDescription, title, category, image, description, date } = req.body
        const slug = await createUniqueSlug(metaTitle || title, req.params.id)
        const post = await Post.findByIdAndUpdate(req.params.id, { slug, metaTitle, metaDescription, title, category, image, description, date }, { new: true })
        if (!post) return res.status(404).send('Blog post not found')
        res.send(post)
    } catch (error) {
        res.status(500).send('Unable to update blog post')
    }
})

router.delete('/:id', fetchAdmin, async (req, res) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id)
        if (!post) return res.status(404).send('Blog post not found')
        res.send({ success: true })
    } catch (error) {
        res.status(500).send('Unable to delete blog post')
    }
})

module.exports = router
