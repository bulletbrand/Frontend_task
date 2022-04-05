import React, { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./notFound.module.scss";
import { Button, Tag } from "../../components";
import { routes } from "../../routes/routes";

export const NotFound: FC = (): JSX.Element => {
  return (
    <div className={styles.notFoundWrapper}>
      <Tag tag="h2">Page not found</Tag>
      <Button type="button" className={styles.linkButton}>
        <Link to={routes.INSURANCES_PAGE}>Back Home</Link>
      </Button>
    </div>
  );
};
