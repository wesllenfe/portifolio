import React from 'react';

function ProjectCard({ project }) {
  return (
    <div className="card">
      <img src={project.image} alt={project.description} />
      <p>{project.description}</p>
      <a href={project.repoLink}>Link para o repositório</a>
    </div>
  );
}

export default ProjectCard;
