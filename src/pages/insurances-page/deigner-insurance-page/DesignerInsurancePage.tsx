import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Tag, Container } from "../../../components";
import { routes } from "../../../routes/routes";
import { ProductIds } from "../buyflow/Buyflow.types";

const productId = ProductIds.desIns;

export const DesignerInsurancePage: FC = () => {
  return (
    <div>
      <Tag tag="h2">Welcome to Getsafe&apos;s Designer Insurance</Tag>
      <Container>
        <Link to={`${routes.DESIGNER_INSURANCES_FORM}/${productId}`}>Get started!</Link>
      </Container>
    </div>
  );
};
