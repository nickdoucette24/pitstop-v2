import logoImg from "../../../assets/images/pitstop_logo.png";
import styles from "./Logo.module.scss";

const Logo = () => {
  return <img className={styles["logo"]} src={logoImg} alt="pitstop logo" />;
};

export default Logo;
