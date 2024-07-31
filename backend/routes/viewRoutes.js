const express = require('express');
const router = express.Router();
const viewController = require('../controllers/viewController');

// Get view count for a blog
router.get('/:slug', viewController.getViewCount);

// Increment view count for a blog
router.post('/:slug/view', viewController.incrementViewCount);

module.exports = router;
