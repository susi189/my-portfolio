import React from "react";
import Main from "./home/Home";
// import Navbar from "./navbar/Navbar";
import styles from "./App.module.css";
import Projects from "./projects/Projects";

const App = (): JSX.Element => {
  return (
    <div className={styles.app}>
      {/* <Navbar /> */}
      <Main />
      <Projects />
    </div>
  );
};

export default App;
