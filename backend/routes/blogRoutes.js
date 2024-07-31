const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

// Get all blogs
router.get('/', blogController.getAllBlogs);
router.get('/recent', blogController.getRecentPosts);
router.get('/:slug', blogController.getBlogBySlug);
router.get('/:slug/adjacent', blogController.getAdjacentPosts);
router.get('/search', blogController.searchBlogs);

module.exports = router;
