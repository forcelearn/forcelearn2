import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { API_BASE_URL } from '../constants/constants';
import Preloader from '../components/Preloader/Preloader'
const GOOGLE_SCRIPT_URL = 'https://script.googleusercontent.com/macros/echo?user_content_key=jq7LJ2vZAGA-mebIfjXvHlljXiNJKyoxqO36kl_awt2MWlMaG8iOKg0J7pqkIGzZCHOD9IPx4pdsdmarnoH5rogeDZGfDNVNm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnLx3XoYJX-cKhhqWNaK1YqC_AXh73j6sjBaUK65phyr2JoFFIk_FxBOWM6FdnpwNcZCoyqB_9r_NceTdqgib85dchcifrka_u9z9Jw9Md8uu&lib=M-HmB2Uc7P1CZSxVVgWaDS27GdywWANqa';

const RecentPosts = () => {
  const [recentPosts, setRecentPosts] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchRecentPosts = async () => {
      try {
        const response = await axios.get(GOOGLE_SCRIPT_URL);
        const posts = response.data
          .map(post => ({
            ...post,
            imageUrl: `${API_BASE_URL}${post.imageUrl}`, // Prepend API_BASE_URL
          }))
          .sort((a, b) => b.id - a.id) // Sort posts by ID in descending order
          .slice(0, 8); // Limit to 8 posts
        setRecentPosts(posts);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error('Error fetching recent posts:', error);
        setLoading(false); // Set loading to false even if there is an error
      }
    };

    fetchRecentPosts();
  }, []);

  if (loading) {
    return <Preloader />; // Show preloader while loading
  }

  return (
    <div className="recent-posts">
      <h3>Recent Posts</h3>
      <ul>
        {recentPosts.map(post => (
          <li key={post.slug}>
            <Link to={`/blog/${post.slug}.html`}>
              <img src={post.imageUrl} alt={post.title} className="recent-post-image" loading="lazy" /> {/* Lazy load images */}
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentPosts;
