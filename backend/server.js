// server.js

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const compression = require('compression'); // For Gzip and Brotli compression

const app = express();
const PORT = process.env.PORT || 5001;

// Google Script URL
const BLOG_DATA_URL = 'https://script.googleusercontent.com/macros/echo?user_content_key=jq7LJ2vZAGA-mebIfjXvHlljXiNJKyoxqO36kl_awt2MWlMaG8iOKg0J7pqkIGzZCHOD9IPx4pdsdmarnoH5rogeDZGfDNVNm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnLx3XoYJX-cKhhqWNaK1YqC_AXh73j6sjBaUK65phyr2JoFFIk_FxBOWM6FdnpwNcZCoyqB_9r_NceTdqgib85dchcifrka_u9z9Jw9Md8uu&lib=M-HmB2Uc7P1CZSxVVgWaDS27GdywWANqa';

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(compression()); // Enable Gzip and Brotli compression

// Serve static files from the "assets" directory with caching
app.use('/assets', express.static(path.join(__dirname, 'assets'), {
  maxAge: '1y', // Cache for 1 year
}));

// Expires headers for other static content
app.use((req, res, next) => {
  if (req.url.match(/\.(jpg|jpeg|png|gif|css|js)$/)) {
    res.setHeader('Cache-Control', 'public, max-age=31536000'); // Cache for 1 year
  }
  next();
});

// Routes
const blogRoutes = require('./routes/blogRoutes');

// Use routes
app.use('/api/blog', blogRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
