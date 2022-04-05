import React, { FC } from "react";
import { Link } from "react-router-dom";
import { routes } from "../../../routes/routes";
import { IDesignerForm, IDeveloperForm, ISummaryProps } from "./Buyflow.types";

export const SummaryStep: FC<ISummaryProps<IDesignerForm | IDeveloperForm>> = ({ collectedData }): JSX.Element => {
  return (
    <>
      {Object.entries(collectedData).map(([field, value]) => {
        return (
          <div key={field}>
            {field}: {value}
          </div>
        );
      })}
      <div>
        <Link to={routes.DESIGNER_INSURANCES_PAGE}>Purchase</Link>
      </div>
    </>
  );
};
