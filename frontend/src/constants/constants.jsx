export const WEBSITE_NAME = "ForceLearn";
export const WEBSITE_URL = "https://forcelearn.com/";
export const PARENT_WEBSITE_NAME = "Anuhya Digital";
export const PARENT_WEBSITE_URL = "https://anuhyadigital.com/";
export const API_BASE_URL = process.env.NODE_ENV === 'production'
? 'https://forcelearn-backend.onrender.com'
: 'http://localhost:5001';
export const BASE_URL = process.env.NODE_ENV === 'production'
? 'https://forcelearn2.netlify.app'
: 'http://localhost:5173';