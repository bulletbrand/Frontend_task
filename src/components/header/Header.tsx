import React from "react";
import logo from "../../assets/images/logo.svg";
import styles from "./header.module.scss";

export const Header = (): JSX.Element => {
  return (
    <header className={styles.appHeader}>
      <img src={logo} className={styles.appLogo} alt="logo" />
    </header>
  );
};
