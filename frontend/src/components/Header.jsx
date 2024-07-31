import React, { useState } from 'react';
import axios from 'axios';
import { API_BASE_URL, WEBSITE_NAME, WEBSITE_URL } from '../constants/constants';
import { Link } from 'react-router-dom';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();

    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }

    try {
      const response = await axios.get(`${API_BASE_URL}/api/blog/search`, {
        params: { q: searchQuery }
      });
      setSearchResults(response.data);
      setShowResults(true);
    } catch (error) {
      console.error('Error searching blogs:', error);
      setSearchResults([]);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top py-3 block" data-navbar-on-scroll="data-navbar-on-scroll">
      <div className="container mx-auto">
        <a className="navbar-brand" href={WEBSITE_URL}>
          <p>{WEBSITE_NAME}</p>
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse border-t mt-4 lg:mt-0 lg:border-0" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto pt-2 lg:pt-0 font-base">
            <li className="nav-item px-2">
              <a className="nav-link active" aria-current="page" href={WEBSITE_URL}>Home</a>
            </li>
            <li className="nav-item px-2 dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Content
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="/pages/sfdemoorgs.html">Salesforce Demo Orgs</a></li>
                <li><a className="dropdown-item" href="/pages/sflearningpaths.html">Salesforce Learning Paths</a></li>
              </ul>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link" href="about-us.html">About Us</a>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link" href="contact.html">Contact</a>
            </li>
            <li className="nav-item px-2">
              <form className="d-flex" onSubmit={handleSearchSubmit}>
                <input
                  type="search"
                  className="form-control me-2"
                  placeholder="Search"
                  aria-label="Search"
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </li>
          </ul>
        </div>
      </div>

      {showResults && (
        <div className="search-results-dropdown">
          <div className="container">
            <div className="row">
              {searchResults.length > 0 ? (
                searchResults.map((post) => (
                  <div className="col-md-4 mb-4" key={post.slug}>
                    <div className="card h-100">
                      <img src={`${API_BASE_URL}/assets/img/blog/${post.slug}/${post.imageUrl}`} className="card-img-top" alt={post.title} />
                      <div className="card-body">
                        <h5 className="card-title">{post.title}</h5>
                        <p className="card-text">{post.description}</p>
                        <Link to={`/blog/${post.slug}.html`} className="btn btn-primary">Read More</Link>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p>No results found.</p>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
