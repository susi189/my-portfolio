import Logo from "./Logo";
import Navbar from "./Navbar";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <Logo />
      <Navbar />
    </div>
  );
};

export default Header;
