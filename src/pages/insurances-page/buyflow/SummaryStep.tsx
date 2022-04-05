import React, { FC } from "react";
import { Link } from "react-router-dom";
import { IBuyFlowForm, ISummaryProps } from "./Buyflow.types";

export const SummaryStep: FC<ISummaryProps<IBuyFlowForm>> = ({ collectedData, link }): JSX.Element => {
  return (
    <>
      {Object.values(collectedData).map((value) => {
        return (
          <div key={value}>
            {value}: {value}
          </div>
        );
      })}
      <div>
        <Link to={link}>Purchase</Link>
      </div>
    </>
  );
};
