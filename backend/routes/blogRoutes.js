// routes/blogRoutes.js

const express = require('express');
const router = express.Router();
const { getBlogs, getBlogBySlug } = require('../controllers/blogController');

// Get all blogs with pagination
router.get('/', getBlogs);

// Get a single blog by slug
router.get('/:slug', getBlogBySlug);

module.exports = router;
