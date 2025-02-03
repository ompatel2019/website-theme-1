// pages/blogs/Blog2.jsx
import React from 'react';
import { Helmet } from 'react-helmet';

const Blog2 = () => {
  // ─── Schema for Blog Post ────────────────────────────────────────────
  const jsonLdBlogPost = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Blog Post 2 Title",
    "description": "Summary of blog post 2.",
    "url": "https://example.com/blogs/2",
    "author": {
      "@type": "Person",
      "name": "Author Name"
    },
    "datePublished": "2025-01-02"
  };

  return (
    <>
      <Helmet>
        <title>Blog Post 2 - Business Name</title>
        <meta name="description" content="Summary of blog post 2." />
        <script type="application/ld+json">
          {JSON.stringify(jsonLdBlogPost)}
        </script>
      </Helmet>

      {/* ─── Blog Content ───────────────────────────────────────────── */}
      <article>
        <h1>Blog Post 2 Title</h1>
        <p>Content for Blog Post 2 goes here...</p>
      </article>
    </>
  );
};

export default Blog2;
