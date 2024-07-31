import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Link } from 'react-router-dom'; 
import axios from 'axios';
import { WEBSITE_NAME, API_BASE_URL } from '../constants/constants';
import SkeletonCard from './SkeletonCard/SkeletonCard'; // Import the skeleton component
import Preloader from './Preloader/Preloader'; // Import the preloader component

const BlogCard = lazy(() => import('./BlogCard')); // Lazy load BlogCard

const Blog = () => {
  const [blogData, setBlogData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true); // Add loading state
  const itemsPerPage = 12;

  useEffect(() => {
    const fetchBlogData = async (page) => {
      setLoading(true);
      try {
        const response = await axios.get(`${API_BASE_URL}/api/blog`, {
          params: { page, limit: itemsPerPage },
        });
        console.log('API Response:', response.data); // Debug: Print API response
        setBlogData(response.data.data || []); // Ensure it's an array
        setTotalPages(response.data.totalPages || 1);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error('Error fetching blog data:', error);
        setLoading(false); // Set loading to false even if there is an error
      }
    };

    fetchBlogData(currentPage);
  }, [currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section>
      <div className="container">
        <div className="row">
          {/*  <h1 className="text-center mb-5">{WEBSITE_NAME}</h1> */}
          {loading
            ? <Preloader /> // Show preloader while loading
            : (blogData && blogData.length > 0
                ? blogData.map((item, index) => (
                    <div className="col-md-3 mb-4" key={index}>
                      <Suspense fallback={<SkeletonCard />}>
                        <BlogCard item={item} />
                      </Suspense>
                    </div>
                  ))
                : <p>No blogs available</p>
              )}
        </div>

        {/* Pagination */}
        <div className="d-flex justify-content-center">
          <nav aria-label="Page navigation">
            <ul className="pagination">
              {[...Array(totalPages).keys()].map(number => (
                <li key={number + 1} className={`page-item ${currentPage === number + 1 ? 'active' : ''}`}>
                  <button className="page-link" onClick={() => handlePageChange(number + 1)}>
                    {number + 1}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Blog;
