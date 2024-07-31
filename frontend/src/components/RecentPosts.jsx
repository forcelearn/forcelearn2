import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { API_BASE_URL } from '../constants/constants';

const RecentPosts = () => {
  const [recentPosts, setRecentPosts] = useState([]);

  useEffect(() => {
    const fetchRecentPosts = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/blog/recent`);
        const posts = response.data.map(post => ({
          ...post,
          imageUrl: `${API_BASE_URL}${post.imageUrl}`, // Prepend API_BASE_URL
        }));
        setRecentPosts(posts);
      } catch (error) {
        console.error('Error fetching recent posts:', error);
      }
    };

    fetchRecentPosts();
  }, []);

  return (
    <div className="recent-posts">
      <h3>Recent Posts</h3>
      <ul>
        {recentPosts.map(post => (
          <li key={post.slug}>
            <Link to={`/blog/${post.slug}.html`}>
              <img src={post.imageUrl} alt={post.title} className="recent-post-image" />
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentPosts;
