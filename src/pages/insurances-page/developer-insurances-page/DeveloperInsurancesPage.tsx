import React, { FC } from "react";
import { Tag, Container, LinkButton } from "../../../components";
import { routes } from "../../../routes/routes";
import { ProductIds } from "../Insurances.types";
import styles from "./developerInsuarancesPage.module.scss";

const productId = ProductIds.devIns;

export const DeveloperInsurancesPage: FC = () => {
  return (
    <div>
      <Tag tag="h2">Welcome to Getsafe&apos;s developer insurance</Tag>
      <Container>
        <div className={styles.linkContainer}>
          <LinkButton to={`${routes.DEVELOPER_INSURANCES_FORM}/${productId}`}>Get started!</LinkButton>
          <LinkButton to={`${routes.INSURANCES_PAGE}`}>Back to insurances</LinkButton>
        </div>
      </Container>
    </div>
  );
};
