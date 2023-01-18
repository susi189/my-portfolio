import { Project } from "../types/project";
import styles from "./ProjectItem.module.css";

const SingleProject = ({
  id,
  image,
  title,
  description,
  list1,
  list2,
  list3,
  technologies,
  link,
}: Project): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>{title}</div>
      <div className={styles.image}>
        <img src={image} alt="project thumbnail"></img>
        <section className={styles.overlay}>
          <div className={styles.description}>{description}</div>
          <div className={styles.list}>
            <ul>
              <li>{list1}</li>
              <li>{list2}</li>
              <li>{list3}</li>
            </ul>
          </div>
          <div className={styles.link}>
            <a href={link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        </section>
      </div>
      <div className={styles.tools}>
        <span className={styles.bold}>Tools used:</span> {technologies}
      </div>
    </div>
  );
};

export default SingleProject;
