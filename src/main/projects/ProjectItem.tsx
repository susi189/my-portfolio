import { Project } from "../../types/project";
import styles from "./ProjectItem.module.css";

const SingleProject = ({
  id,
  image,
  title,
  description,
  technologies,
}: Project) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Single project</div>
      <div className={styles.image}></div>
      <div className={styles.description}></div>
      <div className={styles.tools}></div>
    </div>
  );
};

export default SingleProject;
