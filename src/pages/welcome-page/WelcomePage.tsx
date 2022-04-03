import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Tag, Container } from "../../components";
import { routes } from "../../routes/routes";

export const WelcomePage: FC = (): JSX.Element => {
  return (
    <div>
      <Tag tag="h2">Welcome to App</Tag>
      <Container>
        <Link to={routes.INSURANCES_PAGE}>Go to insurances page</Link>
      </Container>
    </div>
  );
};
