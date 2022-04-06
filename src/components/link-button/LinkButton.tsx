import React from "react";
import { Link } from "react-router-dom";
import styles from "./linkButton.module.scss";

export const LinkButton = ({ children, to }: any): JSX.Element => {
  return (
    <Link className={styles.linkButton} to={to}>
      {children}
    </Link>
  );
};
