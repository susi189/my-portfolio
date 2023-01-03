import React from "react";
import About from "./about/About-descr";
import ImageSection from "./about/About-img";
import Projects from "./projects/Projects";
import styles from "./Main.module.css";

const Main = () => {
  return (
    <main className={styles["main-section"]}>
      <About />
      <ImageSection />
      <div className={styles.wrapper}>
        <Projects />
      </div>
    </main>
  );
};

export default Main;
