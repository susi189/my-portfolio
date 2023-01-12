import React from "react";
import styles from "./About-img.module.css";
import profile from "../../assets/profile.jpg";

const ImageSection = () => {
  return (
    <div className={styles["about-wrapper"]}>
      <div className={styles["about-image"]}>
        <img src={profile} alt="Susanna's profile"></img>
      </div>
    </div>
  );
};

export default ImageSection;
