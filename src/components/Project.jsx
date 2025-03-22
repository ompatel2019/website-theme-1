// components/Project.jsx
import React from 'react';
import ImageComponent from './ImageComponent';

const Project = ({ project }) => {
  return (
    <div className="container py-10">
      <div className="mb-8">
        <ImageComponent
          src={project.image}
          alt={project.title}
          width="100%"
          height="auto"
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

      <hr className="border-gray-500 mb-6" />
      <p className="text-base leading-relaxed text-gray-200">
        {project.extendedDescription}
      </p>
    </div>
  );
};

export default Project;
