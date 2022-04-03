import React from "react";
import styles from "./footer.module.scss";

export const Footer = (): JSX.Element => {
  return (
    <footer className={styles.appFooter}>
      <p>© Application Inc., 2022. All rights reserved.</p>
    </footer>
  );
};
