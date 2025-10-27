
import React from 'react';
import Section from './Section';
import { PROJECTS } from '../constants';

interface ProjectsProps {
    onOpenOverlay: (type: 'project', id: string) => void;
}

const Projects: React.FC<ProjectsProps> = ({ onOpenOverlay }) => {
  return (
    <Section id="projects" variant={2}>
      <div className="flex items-center justify-between" data-reveal-item>
        <h2 className="text-3xl font-bold">Portfolio</h2>
         <p className="text-gray-500 dark:text-gray-400 hidden sm:block">A selection of my projects</p>
      </div>
      <div className="mt-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" data-reveal-item>
        {PROJECTS.map((project) => (
          <div 
            key={project.id}
            onClick={() => onOpenOverlay('project', project.id)}
            className="group cursor-pointer bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="overflow-hidden">
                <img loading="lazy" src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">{project.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{project.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
