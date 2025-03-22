// pages/ProjectPage.jsx
import React, { Suspense, lazy } from 'react';
import { useParams, Link } from 'react-router-dom';
import { slugify } from '../utils/slugify';
import Section from '../components/Section';
import PageHeadingHeader from '../components/PageHeadingHeader';
import CTA from '../components/CTA';
import CTAMini from '../components/CTAMini';
import NotFoundPage from './NotFoundPage';

const ProjectPage = ({ projectsData }) => {
  const { slug } = useParams();

  const project = projectsData.find(
    (p) => slugify(p.title) === slug
  );

  if (!project) {
    return (
      <NotFoundPage/>
    );
  }

  return (
    <>
      <CTAMini text="Book online and receive $50 off your first service"/>
      <Section bg="bg-black" text="text-white">
        <PageHeadingHeader
          route={`Home / Projects / ${project.title}`}
          heading={project.title}
        />

        <div className="container py-10">
          <div className="mb-8">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto rounded shadow-md"
            />
          </div>
          <div className="mb-6 text-gray-300">
            <p className="mb-2">
              <span className="font-bold">Category:</span> {project.category}
            </p>
            <p className="mb-2">
              <span className="font-bold">Client:</span> {project.client}
            </p>
            <p>
              <span className="font-bold">Completion Date:</span> {project.completionDate}
            </p>
          </div>

          <hr className="border-gray-500 mb-6"/>
          <p className="text-base leading-relaxed text-gray-200">
            {project.extendedDescription}
          </p>

        </div>
      </Section>
      <CTA />
    </>
  );
};

export default ProjectPage;
