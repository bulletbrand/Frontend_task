import React from "react";
import styles from "./footer.module.scss";
import { Tag } from "../tag/Tag";

export const Footer = (): JSX.Element => {
  return (
    <footer className={styles.appFooter}>
      <Tag>© Application Inc., 2022. All rights reserved.</Tag>
    </footer>
  );
};
