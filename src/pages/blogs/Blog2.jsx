// pages/blogs/Blog1.jsx
import React from 'react';
import { HashLink } from 'react-router-hash-link';
import SeoHelmet from '../../tools/SeoHelmet';

const Blog1 = () => {
  // ─── Schema for Blog Post ────────────────────────────────────────────
  const jsonLdBlogPost = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Blog Post 2 Title",
    "description": "Summary of blog post 2.",
    "url": "https://example.com/blogs/1",
    "author": {
      "@type": "Person",
      "name": "Author Name"
    },
    "datePublished": "2025-01-01"
  };

  return (
    <>
      <SeoHelmet
        title="Blog Post 2 - Business Name"
        description="Summary of blog post 2."
        jsonSchema={jsonLdBlogPost}
      />

      {/* ─── Blog Content ───────────────────────────────────────────── */}
      <article>
        <h1>Blog Post 2 Title</h1>
        <p>Content for Blog Post 2 goes here...</p>
      </article>
    </>
  );
};

export default Blog1;
