// routes/blogRoutes.js

const express = require('express');
const router = express.Router();
const axios = require('axios');

// Google Script URL
const BLOG_DATA_URL = 'https://script.googleusercontent.com/macros/echo?user_content_key=jq7LJ2vZAGA-mebIfjXvHlljXiNJKyoxqO36kl_awt2MWlMaG8iOKg0J7pqkIGzZCHOD9IPx4pdsdmarnoH5rogeDZGfDNVNm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnLx3XoYJX-cKhhqWNaK1YqC_AXh73j6sjBaUK65phyr2JoFFIk_FxBOWM6FdnpwNcZCoyqB_9r_NceTdqgib85dchcifrka_u9z9Jw9Md8uu&lib=M-HmB2Uc7P1CZSxVVgWaDS27GdywWANqa';

// GET all blogs
router.get('/', async (req, res) => {
  try {
    const response = await axios.get(BLOG_DATA_URL);
    const blogs = response.data; // Adjust this based on the response structure
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET a single blog by ID
router.get('/:id', async (req, res) => {
  try {
    const response = await axios.get(BLOG_DATA_URL);
    const blogs = response.data; // Adjust this based on the response structure
    const blog = blogs.find(blog => blog.id === parseInt(req.params.id));
    if (!blog) throw new Error('Blog not found');
    res.json(blog);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

// POST a new blog (Not supported as we're using an external URL)
router.post('/', (req, res) => {
  res.status(403).json({ message: 'POST not supported' });
});

// PUT (update) a blog by ID (Not supported as we're using an external URL)
router.put('/:id', (req, res) => {
  res.status(403).json({ message: 'PUT not supported' });
});

// DELETE a blog by ID (Not supported as we're using an external URL)
router.delete('/:id', (req, res) => {
  res.status(403).json({ message: 'DELETE not supported' });
});

module.exports = router;
