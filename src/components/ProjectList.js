import React from "react";
import ProjectItem from "./ProjectItem";



function ProjectList({ projects }) {
  const prolist = projects.map(proitem =>{
    console.log(proitem);
    return <ProjectItem key={proitem.id} name={proitem.name} about={proitem.about} technologies={proitem.technologies} />
  })
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{prolist}</div>
    </div>
  );
}

export default ProjectList;
