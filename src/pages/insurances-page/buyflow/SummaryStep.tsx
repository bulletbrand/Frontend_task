import React, { FC } from "react";
import { Link } from "react-router-dom";
import { IBuyFlowForm, ISummaryProps } from "./Buyflow.types";
import styles from "./buyFlow.module.scss";

export const SummaryStep: FC<ISummaryProps<IBuyFlowForm>> = ({
  collectedData,
  purchaseLink,
  summaryFieldsOrder,
}): JSX.Element => {
  return (
    <div className={styles.summaryWrapper}>
      <div className={styles.summaryFieldsContainer}>
        {summaryFieldsOrder.map((step) => {
          return (
            <div>
              <b>{step}</b> : {collectedData[step]}
            </div>
          );
        })}
      </div>
      <div>
        <Link to={purchaseLink}>Purchase</Link>
      </div>
    </div>
  );
};
