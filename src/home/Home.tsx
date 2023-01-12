import React from "react";
import About from "./about/About-descr";
import ImageSection from "./about/About-img";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles["main-section"]}>
      <About />
      <ImageSection />
    </div>
  );
};

export default Home;
