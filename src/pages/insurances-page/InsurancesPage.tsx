import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Tag, Container } from "../../components";
import { routes } from "../../routes/routes";
import styles from "./insurances.module.scss";

export const InsurancesPage: FC = (): JSX.Element => {
  return (
    <div className={styles.insurancesWrapper}>
      <Tag tag="h2">Insurances</Tag>
      <Container>
        <div className={styles.linkContainer}>
          <Link to={routes.DEVELOPER_INSURANCES_PAGE}>Go to developer insurance</Link>
          <Link to={routes.DESIGNER_INSURANCES_PAGE}>Go to designer insurance</Link>
        </div>
      </Container>
    </div>
  );
};
