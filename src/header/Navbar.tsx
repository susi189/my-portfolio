import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <a
        href="https://github.com/susi189"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </a>
      <a
        href="https://www.linkedin.com/in/susannabrumm/"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
      {/* <a href="/" target="_blank" rel="noopener noreferrer">
        Contact
      </a> */}
    </div>
  );
};

export default Navbar;
