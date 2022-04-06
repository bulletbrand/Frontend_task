import React, { FC } from "react";
import { IBuyFlowForm, ISummaryProps } from "./Buyflow.types";
import { formatLabels } from "../../../utils/helpers";
import { Button } from "../../../components";
import styles from "./buyFlow.module.scss";

export const SummaryStep: FC<ISummaryProps<IBuyFlowForm>> = ({
  collectedData,
  onPurchase,
  summaryFieldsOrder,
}): JSX.Element => {
  return (
    <div className={styles.summaryWrapper}>
      <div className={styles.summaryFieldsContainer}>
        {summaryFieldsOrder.map((step) => {
          return (
            <div key={step} data-testid="summary_field">
              <b>{formatLabels(step)}</b> : {collectedData[step]}
            </div>
          );
        })}
      </div>
      <div>
        <Button onClick={onPurchase}>Purchase</Button>
      </div>
    </div>
  );
};
