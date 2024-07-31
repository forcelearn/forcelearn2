const blogData = require('../data/blogData');

// Dummy in-memory view count storage
const viewCounts = {};

exports.getViewCount = (req, res) => {
  const slug = req.params.slug;
  if (viewCounts[slug]) {
    res.json({ views: viewCounts[slug] });
  } else {
    res.json({ views: 0 });
  }
};

exports.incrementViewCount = (req, res) => {
  const slug = req.params.slug;
  if (viewCounts[slug]) {
    viewCounts[slug] += 1;
  } else {
    viewCounts[slug] = 1;
  }
  res.json({ views: viewCounts[slug] });
};
