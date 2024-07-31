// controllers/blogController.js

const axios = require('axios');
const BLOG_DATA_URL = 'https://script.googleusercontent.com/macros/echo?user_content_key=jq7LJ2vZAGA-mebIfjXvHlljXiNJKyoxqO36kl_awt2MWlMaG8iOKg0J7pqkIGzZCHOD9IPx4pdsdmarnoH5rogeDZGfDNVNm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnLx3XoYJX-cKhhqWNaK1YqC_AXh73j6sjBaUK65phyr2JoFFIk_FxBOWM6FdnpwNcZCoyqB_9r_NceTdqgib85dchcifrka_u9z9Jw9Md8uu&lib=M-HmB2Uc7P1CZSxVVgWaDS27GdywWANqa';

const getBlogs = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 12;
  const skip = (page - 1) * limit;

  try {
    const response = await axios.get(BLOG_DATA_URL);
    const blogs = response.data;

    const totalBlogs = blogs.length;
    const totalPages = Math.ceil(totalBlogs / limit);
    const paginatedBlogs = blogs.slice(skip, skip + limit);

    res.json({
      data: paginatedBlogs,
      totalPages,
    });
  } catch (error) {
    console.error('Error fetching blog data:', error);
    res.status(500).json({ message: 'Error fetching blog data' });
  }
};

const getBlogBySlug = async (req, res) => {
  const { slug } = req.params;

  try {
    const response = await axios.get(BLOG_DATA_URL);
    const blogs = response.data;
    const blog = blogs.find(blog => blog.slug === slug);

    if (!blog) return res.status(404).json({ message: 'Blog not found' });

    res.json(blog);
  } catch (error) {
    console.error('Error fetching blog by slug:', error);
    res.status(500).json({ message: 'Error fetching blog by slug' });
  }
};

module.exports = { getBlogs, getBlogBySlug };
