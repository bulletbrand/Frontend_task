import React, { FC } from "react";
import { useFormContext } from "react-hook-form";
import { Input } from "../../../components/input/Input";
import { Button } from "../../../components";
import styles from "./buyFlow.module.scss";
import { StepProps } from "./Buyflow.types";

export const AgeStep: FC<StepProps> = ({ nextStepCallback, nextStep }: StepProps): JSX.Element => {
  const methods = useFormContext();
  const age = methods.watch("age");

  const isButtonDisabled = (): boolean => !age || !!Object.entries(methods.formState.errors)?.length;

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
      <Button disabled={isButtonDisabled()} type="button" onClick={() => nextStepCallback(nextStep)}>
        Next
      </Button>
    </>
  );
};
