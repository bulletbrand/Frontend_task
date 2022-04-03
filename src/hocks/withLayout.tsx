import React from "react";
import { Header, Footer } from "../components";
import styles from "../App.module.scss";

const withLayout = (Component: React.ComponentType) => {
  return () => {
    const isAuth = true;

    if (isAuth) {
      return (
        <div className={styles.App}>
          <Header />
          <Component />
          <Footer />
        </div>
      );
    }

    return (
      <div className={styles.App}>
        <Component />
      </div>
    );
  };
};

export default withLayout;
