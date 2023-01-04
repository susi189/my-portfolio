import { Project } from "../../types/project";
import styles from "./ProjectItem.module.css";

const SingleProject = ({
  id,
  image,
  title,
  description,
  technologies,
}: Project): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>{title}</div>
      <div className={styles.image}>
        <img src={image} alt="project thumbnail"></img>
      </div>
      <div className={styles.description}>{description}</div>
      <div className={styles.tools}>Tools used: {technologies}</div>
    </div>
  );
};

export default SingleProject;
