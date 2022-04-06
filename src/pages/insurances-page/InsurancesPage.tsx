import React, { FC } from "react";
import { Tag, Container, LinkButton } from "../../components";
import { routes } from "../../routes/routes";
import styles from "./insurances.module.scss";

export const InsurancesPage: FC = (): JSX.Element => {
  return (
    <div className={styles.insurancesWrapper}>
      <Tag tag="h2">Insurances</Tag>
      <Container>
        <div className={styles.linkContainer}>
          <LinkButton to={routes.DEVELOPER_INSURANCES_PAGE}>Go to developer insurance</LinkButton>
          <LinkButton to={routes.DESIGNER_INSURANCES_PAGE}>Go to designer insurance</LinkButton>
        </div>
      </Container>
    </div>
  );
};
