import React from "react";

function ProjectItem({ name, about, technologies }) {
  console.log(name)

  const tech = technologies.map(techitem=>{
    return <span key={techitem}>{techitem}</span>
  })

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {tech}
      </div>
    </div>
  );
}

export default ProjectItem;
