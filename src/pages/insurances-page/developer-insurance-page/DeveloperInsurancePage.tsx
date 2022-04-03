import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Tag, Container } from "../../../components";
import { routes } from "../../../routes/routes";
import { ProductIds } from "../buyflow/Buyflow.types";

const productId = ProductIds.devIns;

export const DeveloperInsurancePage: FC = () => {
  return (
    <div>
      <Tag tag="h2">Welcome to Getsafe&apos;s Developer Insurance</Tag>
      <Container>
        <Link to={`${routes.DEVELOPER_INSURANCES_FORM}/${productId}`}>Get started!</Link>
      </Container>
    </div>
  );
};
