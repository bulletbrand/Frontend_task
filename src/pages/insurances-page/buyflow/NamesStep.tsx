import React, { FC } from "react";
import { useFormContext } from "react-hook-form";
import styles from "./buyFlow.module.scss";
import { Input } from "../../../components/input/Input";
import { Button } from "../../../components";
import { StepProps } from "./Buyflow.types";

export const NamesStep: FC<StepProps> = ({ nextStepCallback, nextStep }: StepProps): JSX.Element => {
  const methods = useFormContext();
  const firstName = methods.watch("firstName");
  const lastName = methods.watch("lastName");

  const isButtonDisabled = (): boolean => !firstName || !lastName || !!Object.entries(methods.formState.errors)?.length;

  return (
    <>
      <div className={styles.formStepItem}>
        <Input
          {...methods.register("firstName")}
          error={methods.formState.errors.firstName}
          aria-invalid={!!methods.formState.errors.firstName}
          placeholder="First Name"
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
      <Button disabled={isButtonDisabled()} type="button" onClick={() => nextStepCallback(nextStep)}>
        Next
      </Button>
    </>
  );
};
