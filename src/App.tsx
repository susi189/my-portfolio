import React from "react";
import Main from "./home/Home";
import Header from "./header/Header";
import styles from "./App.module.css";
import Projects from "./projects/Projects";

const App = (): JSX.Element => {
  return (
    <div className={styles.app}>
      <Header />
      <Main />
      <Projects />
    </div>
  );
};

export default App;
