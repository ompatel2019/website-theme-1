// pages/ProjectsPage.jsx
import React from 'react';
import SeoHelmet from '../tools/SeoHelmet';

// ─── Components for Projects Page ───────────────────────────────────────
import Projects from '../components/Projects';
import CTA from '../components/CTA';

const ProjectsPage = () => {
  // ─── Schema for Projects Page ───────────────────────────────────────────
  const jsonLdProjectsPage = {
    "@context": "https://schema.org",
    "@type": "Project",
    "name": "Projects",
    "description": "Collection of our latest insights and trends in digital services.",
    "url": "https://example.com/Projects"
  };

  return (
    <>
      <SeoHelmet
        title="Projects"
        description="Collection of our latest insights and trends in digital services."
        jsonSchema={jsonLdProjectsPage}
      />

      {/* ─── Sections ───────────────────────────────────────────── */}
      <Projects />
      <CTA />
    </>
  );
};

export default ProjectsPage;
