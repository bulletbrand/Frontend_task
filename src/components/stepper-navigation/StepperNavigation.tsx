import React from "react";
import { Button } from "../button/Button";
import styles from "./stepperNavigation.module.scss";
import { StepperNavigationTypes } from "./StepperNavigation.types";

export const StepperNavigation = ({
  isPrevStepVisible,
  backCallback,
  nextStepCallback,
}: StepperNavigationTypes): JSX.Element => {
  return (
    <div className={styles.navigationWrapper}>
      {isPrevStepVisible && (
        <Button type="button" onClick={backCallback}>
          Back
        </Button>
      )}
      <Button type="button" onClick={nextStepCallback}>
        Next
      </Button>
    </div>
  );
};
