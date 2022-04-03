import React from "react";
import { ContainerTypes } from "./Container.types";
import styles from "./container.module.scss";

export const Container = ({ children }: ContainerTypes): JSX.Element => {
  return <div className={styles.container}>{children}</div>;
};
