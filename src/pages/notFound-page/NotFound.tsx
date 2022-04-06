import React, { FC } from "react";
import styles from "./notFound.module.scss";
import { Button, LinkButton, Tag } from "../../components";
import { routes } from "../../routes/routes";

export const NotFound: FC = (): JSX.Element => {
  return (
    <div className={styles.notFoundWrapper}>
      <Tag tag="h2">Page not found</Tag>
      <Button type="button" className={styles.linkButton}>
        <LinkButton to={routes.INSURANCES_PAGE}>Back Home</LinkButton>
      </Button>
    </div>
  );
};
