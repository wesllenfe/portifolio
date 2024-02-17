import React from 'react';
import ProjectCard from '../ProjectCard';

const projects = [
  {
    id: 1,
    image: '',
    description: 'Descrição do projeto 1',
    repoLink: 'link-para-repositorio-1'
  },
  {
    id: 2,
    image: '',
    description: 'Descrição do projeto 2',
    repoLink: 'link-para-repositorio-2'
  },
  // Adicione mais projetos conforme necessário
];

function Projects() {
  return (
    <div className="container">
      <h2>Projetos</h2>
      <div className="card-container">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
