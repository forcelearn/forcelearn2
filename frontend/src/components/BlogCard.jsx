import React from 'react';
import { Link } from 'react-router-dom'; 
import { API_BASE_URL, BASE_URL } from '../constants/constants';

const BlogCard = ({ item }) => {
  return (
    <div className="card h-100">
      <img src={`${BASE_URL}${item.featureimage}`} className="card-img-top" alt={item.title} loading="lazy" />
      <div className="card-body">
        <h5 className="font-sans-serif fw-bold fs-md-0 fs-lg-1">{item.title}</h5>
        <p><strong>{item.tag}</strong></p>
        <p>{item.description}</p>
        <p><small>{new Date(item.createdDate).toLocaleDateString()}</small></p>
        <Link className="btn btn-primary me-2" to={`/blog/${item.slug}.html`}>View Details</Link>
      </div>
    </div>
  );
};

export default React.memo(BlogCard);
