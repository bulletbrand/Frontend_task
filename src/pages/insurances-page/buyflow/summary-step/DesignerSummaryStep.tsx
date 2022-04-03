import React, { FC } from "react";
import { Link } from "react-router-dom";
import { routes } from "../../../../routes/routes";
import { IDesignerForm, ISummaryProps } from "../Buyflow.types";

export const DesignerSummaryStep: FC<ISummaryProps<IDesignerForm>> = ({ collectedData }): JSX.Element => {
  return (
    <>
      <div>Email: {collectedData.email}</div>
      <div>Age: {collectedData.age}</div>
      <div>First name: {collectedData.firstName}</div>
      <div>Last name: {collectedData.lastName}</div>
      <div>
        <Link to={routes.DESIGNER_INSURANCES_PAGE}>Purchase</Link>
      </div>
    </>
  );
};
