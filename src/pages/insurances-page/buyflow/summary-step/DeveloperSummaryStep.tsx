import React, { FC } from "react";
import { Link } from "react-router-dom";
import { routes } from "../../../../routes/routes";
import { IDeveloperForm, ISummaryProps } from "../Buyflow.types";

export const DeveloperSummaryStep: FC<ISummaryProps<IDeveloperForm>> = ({ collectedData }): JSX.Element => {
  return (
    <>
      <div>Email: {collectedData.email}</div>
      <div>Age: {collectedData.age}</div>
      <div>
        <Link to={routes.DEVELOPER_INSURANCES_PAGE}>Purchase</Link>
      </div>
    </>
  );
};
