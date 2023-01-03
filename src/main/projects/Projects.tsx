import React from "react";
import SingleProject from "./ProjectItem";
import styles from "./Projects.module.css";
import projectsJson from "./projects.json";
import { Project } from "../../types/project";

const Projects = () => {
  const projects = projectsJson as Project[];
  return (
    <div className={styles.projects}>
      <h2>My Projects</h2>
      <section className={styles.items}>
        {projects.map((item: Project) => {
          return (
            <SingleProject
              id={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
              technologies={item.technologies}
            />
          );
        })}
      </section>
    </div>
  );
};

export default Projects;
