// pages/ProjectsPage.jsx
import React from 'react';
import SeoHelmet from '../tools/SeoHelmet';
import Projects from '../components/Projects';
import CTA from '../components/CTA';
import Stats from '../components/Stats';
import CTAMini from '../components/CTAMini';
import PageHeading from '../components/PageHeading';

const ProjectsPage = ({ placeholderImg, projectsData }) => {
  const jsonLdProjectsPage = {
    "@context": "https://schema.org",
    "@type": "Project",
    "name": "Business Name",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere ac quam et imperdiet. Etiam non mauris feugiat, efficitur mauris sed, aliquam dui. Nulla gravida.",
    "url": "https://example.com/projects"
  };

  const stats = [
    { stat: "120", statType: "+", statDesc: "Residential Installations" },
    { stat: "550", statType: "+", statDesc: "Clients Served" },
    { stat: "1100", statType: "+", statDesc: "Projects Completed" }
  ];

  return (
    <>
      <SeoHelmet
        title="Projects | Business Name"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere ac quam et imperdiet. Etiam non mauris feugiat, efficitur mauris sed, aliquam dui. Nulla gravida."
        canonicalUrl="https://example.com/projects"
        jsonSchema={jsonLdProjectsPage}
      />

      <PageHeading
        placeholderImg={placeholderImg}
        route="Home / Projects"
        heading="Projects"
        subheading="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere ac quam et imperdiet. Etiam non mauris feugiat, efficitur mauris sed, aliquam dui. Nulla gravida."
      />
      <Stats stats={stats} bg="bg-black" text="text-white"/>
      <CTAMini text="Claim Your Exclusive Discount Now"/>
      <Projects
        bg="bg-black"
        text="text-white"
        isHome={false}
        placeholderImg={placeholderImg}
        projectsData={projectsData}
      />
      <CTA bg="bg-primary" text="text-black"/>
    </>
  );
};

export default ProjectsPage;
