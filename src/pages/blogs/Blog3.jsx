// pages/blogs/Blog3.jsx
import React from 'react';
import { Helmet } from 'react-helmet';

const Blog3 = () => {
  // ─── Schema for Blog Post ────────────────────────────────────────────
  const jsonLdBlogPost = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Blog Post 3 Title",
    "description": "Summary of blog post 3.",
    "url": "https://example.com/blogs/3",
    "author": {
      "@type": "Person",
      "name": "Author Name"
    },
    "datePublished": "2025-01-03"
  };

  return (
    <>
      <Helmet>
        <title>Blog Post 3 - Business Name</title>
        <meta name="description" content="Summary of blog post 3." />
        <script type="application/ld+json">
          {JSON.stringify(jsonLdBlogPost)}
        </script>
      </Helmet>

      {/* ─── Blog Content ───────────────────────────────────────────── */}
      <article>
        <h1>Blog Post 3 Title</h1>
        <p>Content for Blog Post 3 goes here...</p>
      </article>
    </>
  );
};

export default Blog3;
