import React, { FC } from "react";
import { Link } from "react-router-dom";
import { IBuyFlowForm, ISummaryProps } from "./Buyflow.types";

export const SummaryStep: FC<ISummaryProps<IBuyFlowForm>> = ({
  collectedData,
  purchaseLink,
  summaryFieldsOrder,
}): JSX.Element => {
  return (
    <>
      {summaryFieldsOrder.map((step) => {
        return (
          <div>
            {step} : {collectedData[step]}
          </div>
        );
      })}

      <div>
        <Link to={purchaseLink}>Purchase</Link>
      </div>
    </>
  );
};
