import React, { FC } from "react";
import { useFormContext } from "react-hook-form";
import { StepProps } from "./Buyflow.types";
import { StepperNavigation, Input } from "../../../components";
import styles from "./buyFlow.module.scss";

export const AgeStep: FC<StepProps> = ({
  nextStepCallback,
  prevStepCallback,
  isPrevStepVisible,
}: StepProps): JSX.Element => {
  const methods = useFormContext();

  return (
    <>
      <div className={styles.formStepItem}>
        <Input
          type="number"
          {...methods.register("age")}
          error={methods.formState.errors.age}
          aria-invalid={!!methods.formState.errors.age}
          placeholder="Age"
          isRequired
          label="Age:"
        />
      </div>
      <StepperNavigation
        backCallback={prevStepCallback}
        isPrevStepVisible={isPrevStepVisible}
        nextStepCallback={() => nextStepCallback(["age"])}
      />
    </>
  );
};
