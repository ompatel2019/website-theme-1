import React from 'react'
import { Link } from 'react-router-dom';
import Section from './Section';
import SectionHeader from './SectionHeader';
import Project from './Project'
import placeholder from '../assets/images/placeholder.png'

const Projects = ({ bg, text, isHome}) => {
  // Project data array with sample plumbing projects
  const projectsData = [
    {
      id: 1,
      title: "Modern Bathroom Renovation",
      category: "Residential",
      description: "Complete bathroom overhaul including installation of high-efficiency fixtures, custom shower system, and heated flooring.",
      image: "/api/placeholder/600/400",
      client: "Thompson Residence",
      completionDate: "January 2025"
    },
    {
      id: 2,
      title: "Commercial Kitchen Plumbing",
      category: "Commercial",
      description: "Installation of industrial-grade plumbing systems for a restaurant kitchen, including grease traps and specialized drainage.",
      image: "/api/placeholder/600/400",
      client: "Seaside Bistro",
      completionDate: "December 2024"
    },
    {
      id: 3,
      title: "Whole-House Repiping",
      category: "Residential",
      description: "Complete replacement of outdated galvanized pipes with modern PEX plumbing throughout a three-story Victorian home.",
      image: "/api/placeholder/600/400",
      client: "Historic Hill Home",
      completionDate: "November 2024"
    },
    {
      id: 4,
      title: "Hotel Water Heating System",
      category: "Commercial",
      description: "Installation of energy-efficient tankless water heating system for a 40-room boutique hotel.",
      image: "/api/placeholder/600/400",
      client: "Harbor View Inn",
      completionDate: "October 2024" 
    },
    {
      id: 5,
      title: "Outdoor Irrigation System",
      category: "Residential",
      description: "Custom designed and installed water-saving irrigation system with smart controls for a large residential property.",
      image: "/api/placeholder/600/400",
      client: "Meadowlark Estate",
      completionDate: "September 2024"
    },
    {
      id: 6,
      title: "Medical Facility Plumbing",
      category: "Commercial",
      description: "Specialized medical-grade plumbing installation with strict sanitation requirements for a new dental clinic.",
      image: "/api/placeholder/600/400",
      client: "Bright Smile Dentistry",
      completionDate: "August 2024"
    },
    {
      id: 7,
      title: "Eco-Friendly Rainwater Harvesting",
      category: "Residential",
      description: "Installation of a comprehensive rainwater collection and filtration system for household use.",
      image: "/api/placeholder/600/400",
      client: "Green Living Residence",
      completionDate: "July 2024"
    },
    {
      id: 8,
      title: "Office Building Retrofit",
      category: "Commercial",
      description: "Complete plumbing retrofit for a 5-story office building, including water-saving fixtures and ADA compliance upgrades.",
      image: "/api/placeholder/600/400",
      client: "Downtown Business Center",
      completionDate: "June 2024"
    }
  ];

  // Display 4 projects for homepage, 8 for projects page
  const displayProjects = isHome ? projectsData.slice(0, 4) : projectsData;

  return (
    <Section bg={bg} text={text}>
        <div className="">
          <SectionHeader 
            sectionName="Our Projects" 
            sectionHeader="View Our Latest Projects"
            sectionDesc="Explore our gallery of completed projects to see the quality and scope of our plumbing work. From routine repairs to complex installations, we showcase our commitment to excellence and attention to detail in every task we undertake."
            centre={true}
          />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 mb-12 max-sm:px-2">
          {displayProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src={placeholder} 
                  alt={project.title} 
                  className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-0 right-0 bg-primary text-white py-1 px-3 rounded-bl-lg">
                  {project.category}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{project.description}</p>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>{project.client}</span>
                  <span>{project.completionDate}</span>
                </div>
                <Link to={`/projects/${project.id}`} className="block mt-4 text-center bg-gray-100 hover:bg-gray-200 text-primary font-semibold py-2 px-4 rounded-md transition-colors duration-200">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        {isHome ? 
          <div className="flex text-center">
            <Link to='/projects' className="flex-1">
              <button className="w-fit bg-primary hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md shadow-lg transition-all duration-300 transform hover:scale-105 group">
                View All Projects
                <i className="bi bi-arrow-right ml-2 inline-block transform group-hover:translate-x-1 transition-transform"></i>
              </button>
            </Link>
          </div>
        : 
        <></>
        }
    </Section>
  )
}

export default Projects