// pages/blogs/Blog1.jsx
import React from 'react';
import { Helmet } from 'react-helmet';

const Blog1 = () => {
  // ─── Schema for Blog Post ────────────────────────────────────────────
  const jsonLdBlogPost = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Blog Post 1 Title",
    "description": "Summary of blog post 1.",
    "url": "https://example.com/blogs/1",
    "author": {
      "@type": "Person",
      "name": "Author Name"
    },
    "datePublished": "2025-01-01"
  };

  return (
    <>
      <Helmet>
        <title>Blog Post 1 - Business Name</title>
        <meta name="description" content="Summary of blog post 1." />
        <script type="application/ld+json">
          {JSON.stringify(jsonLdBlogPost)}
        </script>
      </Helmet>

      {/* ─── Blog Content ───────────────────────────────────────────── */}
      <article>
        <h1>Blog Post 1 Title</h1>
        <p>Content for Blog Post 1 goes here...</p>
      </article>
    </>
  );
};

export default Blog1;
