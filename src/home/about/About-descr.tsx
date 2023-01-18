import React from "react";
import styles from "./About-descr.module.css";

const About = () => {
  return (
    <div className={styles["about-descr"]}>
      <h1>Hi, I'm Susanna</h1>
      <h2>Full Stack Developer, Trust & Safety Expert, and Problem Solver</h2>
      <div className={styles.overlay}>
        I enjoy building things from scratch, experimenting with new
        technologies, and creating user facing products. I am an experienced
        problem solver who believes that best solutions are achieved through
        cross-team collaboration. As a software developer I will use my can-do
        attitude and my skills to contribute to the success of your company.
        Let’s talk!
      </div>
    </div>
  );
};

export default About;
