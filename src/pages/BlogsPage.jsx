// pages/BlogsPage.jsx
import React from 'react';
import SeoHelmet from '../tools/SeoHelmet';

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
      <SeoHelmet
        title="Blogs - Business Name"
        description="Collection of our latest insights and trends in digital services."
        jsonSchema={jsonLdBlogsPage}
      />

      {/* ─── Sections ───────────────────────────────────────────── */}
      <Blogs />
      <CTA />
    </>
  );
};

export default BlogsPage;
