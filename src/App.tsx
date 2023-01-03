import React from "react";
import Main from "./main/Main";
// import Navbar from "./navbar/Navbar";
import styles from "./App.module.css";

const App = (): JSX.Element => {
  return (
    <div className={styles.app}>
      {/* <Navbar /> */}
      <Main />
    </div>
  );
};

export default App;
