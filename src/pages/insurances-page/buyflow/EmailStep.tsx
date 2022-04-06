import React, { FC } from "react";
import { useFormContext } from "react-hook-form";
import { StepProps } from "./Buyflow.types";
import { StepperNavigation, Input } from "../../../components";
import styles from "./buyFlow.module.scss";

export const EmailStep: FC<StepProps> = ({
  nextStepCallback,
  prevStepCallback,
  isPrevStepVisible,
}: StepProps): JSX.Element => {
  const methods = useFormContext();

  return (
    <>
      <div className={styles.formStepItem}>
        <Input
          {...methods.register("email")}
          error={methods.formState.errors.email}
          aria-invalid={!!methods.formState.errors.email}
          placeholder="Email"
          isRequired
          label="Email:"
          type="email"
        />
      </div>
      <StepperNavigation
        backCallback={prevStepCallback}
        isPrevStepVisible={isPrevStepVisible}
        nextStepCallback={() => nextStepCallback(["email"])}
      />
    </>
  );
};
