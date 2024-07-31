const blogData = require('../data/blogData');

// Get all blogs
exports.getAllBlogs = (req, res) => {
  res.json(blogData);
};

// Get blog by slug
exports.getBlogBySlug = (req, res) => {
  const blog = blogData.find(b => b.slug === req.params.slug);
  if (blog) {
    res.json(blog);
  } else {
    res.status(404).json({ message: 'Blog not found' });
  }
};

// Get recent posts
exports.getRecentPosts = (req, res) => {
  const recentPosts = blogData.slice(0, 5);
  res.json(recentPosts);
};

// Example getAdjacentPosts function
exports.getAdjacentPosts = (req, res) => {
  const { slug } = req.params;
  const blogIndex = blogData.findIndex(b => b.slug === slug);

  if (blogIndex === -1) {
    return res.status(404).json({ message: 'Blog not found' });
  }

  const previousPost = blogData[blogIndex - 1] || null;
  const nextPost = blogData[blogIndex + 1] || null;

  res.json({ previousPost, nextPost });
};

// Example searchBlogs function
exports.searchBlogs = (req, res) => {
  const query = req.query.q.toLowerCase();
  const results = blogData.filter(blog =>
    blog.title.toLowerCase().includes(query) ||
    blog.description.toLowerCase().includes(query)||
    blog.content.toLowerCase().includes(query)
  );

  res.json(results);
};

