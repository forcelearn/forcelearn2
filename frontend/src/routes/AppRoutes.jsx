import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../layouts/Layout';

import Home from '../pages/Home';
import Error from '../pages/Error';

import Blogs from '../components/Blogs';
import BlogPostDetail from '../components/BlogPostDetail';

const AppRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/index.html" element={<Home />} />
            <Route path="blog.html" element={<Blogs />} />
            <Route path="blog/:slug.html" element={<BlogPostDetail />} />
            <Route path="*" element={<Error />} />

            </Route>
       </Routes>
    );
};
export default AppRoutes;