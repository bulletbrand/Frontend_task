import React, { FC } from "react";
import { useFormContext } from "react-hook-form";
import { StepProps } from "./Buyflow.types";
import { StepperNavigation, Input } from "../../../components";
import styles from "./buyFlow.module.scss";

export const NamesStep: FC<StepProps> = ({
  nextStepCallback,
  prevStepCallback,
  isPrevStepVisible,
}: StepProps): JSX.Element => {
  const methods = useFormContext();

  return (
    <>
      <div className={styles.formStepItem}>
        <Input
          {...methods.register("firstName")}
          error={methods.formState.errors.firstName}
          aria-invalid={!!methods.formState.errors.firstName}
          placeholder="First name"
          label="First name:"
          isRequired
        />
      </div>
      <div className={styles.formStepItem}>
        <Input
          {...methods.register("lastName")}
          error={methods.formState.errors.lastName}
          aria-invalid={!!methods.formState.errors.lastName}
          placeholder="Last name"
          label="Last name:"
          isRequired
        />
      </div>
      <StepperNavigation
        backCallback={prevStepCallback}
        isPrevStepVisible={isPrevStepVisible}
        nextStepCallback={() => nextStepCallback(["lastName", "firstName"])}
      />
    </>
  );
};
