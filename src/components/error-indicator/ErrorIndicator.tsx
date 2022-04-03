import React from "react";
import styles from "./errorIndicator.module.scss";

const ErrorIndicator = () => {
  return (
    <div className={styles.errorIndicator}>
      <span className={styles.boom}>BOOM!</span>
      <span>something has gone terribly wrong</span>
      <span>(but we already sent droids to fix it)</span>
    </div>
  );
};

export default ErrorIndicator;
