// pages/BlogsPage.jsx
import React from 'react';
import { Helmet } from 'react-helmet';

// ─── Components for Blogs Page ───────────────────────────────────────
import Blogs from '../components/Blogs';
import CTA from '../components/CTA';

const BlogsPage = () => {
  // ─── Schema for Blogs Page ───────────────────────────────────────────
  const jsonLdBlogsPage = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Blogs - Business Name",
    "description": "Collection of our latest insights and trends in digital services.",
    "url": "https://example.com/blogs"
  };

  return (
    <>
      <Helmet>
        <title>All Blogs - Business Name</title>
        <meta name="description" content="Explore our latest blog posts on SEO, web design, and digital marketing insights." />
        <script type="application/ld+json">
          {JSON.stringify(jsonLdBlogsPage)}
        </script>
      </Helmet>

      {/* ─── Sections ───────────────────────────────────────────── */}
      <Blogs />
      <CTA />
    </>
  );
};

export default BlogsPage;
