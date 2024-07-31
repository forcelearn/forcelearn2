// server.js

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const compression = require('compression');
const axios = require('axios');
const path = require('path');
const blogRoutes = require('./routes/blogRoutes');

const app = express();
const PORT = process.env.PORT || 5001;

// Google Script URL
const BLOG_DATA_URL = 'https://script.googleusercontent.com/macros/echo?user_content_key=jq7LJ2vZAGA-mebIfjXvHlljXiNJKyoxqO36kl_awt2MWlMaG8iOKg0J7pqkIGzZCHOD9IPx4pdsdmarnoH5rogeDZGfDNVNm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnLx3XoYJX-cKhhqWNaK1YqC_AXh73j6sjBaUK65phyr2JoFFIk_FxBOWM6FdnpwNcZCoyqB_9r_NceTdqgib85dchcifrka_u9z9Jw9Md8uu&lib=M-HmB2Uc7P1CZSxVVgWaDS27GdywWANqa';

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(compression()); // Enable Gzip compression

// Serve static files from the "assets" directory
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Use routes
app.use('/api/blog', blogRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
