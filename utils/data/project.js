import React from 'react';
import { projectsData } from './projects-data'; 

const project = () => {
    return (
        <div>
            {projectsData.map(project => (
                <div key={project.id} className="project-card">
                    <h2>{project.name}</h2>
                    <p>{project.description}</p>
                    <ul>
                        {project.tools.map(tool => (
                            <li key={tool}>{tool}</li>
                        ))}
                    </ul>
                    <p>Role: {project.role}</p>

                    {/* Conditionally render the GitHub link if it exists */}
                    {project.code && (
                        <a href={project.code} target="_blank" rel="noopener noreferrer">
                            GitHub
                        </a>
                    )}

                    {/* Conditionally render the Live Demo link if it exists */}
                    {project.demo && (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            Live Demo
                        </a>
                    )}

                    <img src={project.image} alt={project.name} />
                </div>
            ))}
        </div>
    );
};

export default project;
