import React, { FC } from "react";
import { Tag, Container, LinkButton } from "../../../components";
import { routes } from "../../../routes/routes";
import { ProductIds } from "../Insurances.types";
import styles from "./designerInsurancesPage.module.scss";

const productId = ProductIds.desIns;

export const DesignerInsurancesPage: FC = () => {
  return (
    <div>
      <Tag tag="h2">Welcome to Getsafe&apos;s designer insurance</Tag>
      <Container>
        <div className={styles.linkContainer}>
          <LinkButton to={`${routes.DESIGNER_INSURANCES_FORM}/${productId}`}>Get started!</LinkButton>
          <LinkButton to={`${routes.INSURANCES_PAGE}`}>Back to insurances</LinkButton>
        </div>
      </Container>
    </div>
  );
};
