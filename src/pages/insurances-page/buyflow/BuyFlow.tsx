import React, { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { ObjectSchema } from "yup";
import { Container, Tag } from "../../../components";
import { PRODUCT_IDS_TO_NAMES } from "../../../constants/constants";
import styles from "./buyFlow.module.scss";
import { IBuyFlowForm, IStep, ProductIds } from "./Buyflow.types";
import { usePersistedState } from "../../../hooks/usePersistedState";
import { useClearLocalStorage } from "../../../hooks/useClearLocalStorage";
import { SummaryStep } from "./SummaryStep";

interface IBuyProps {
  steps: Array<IStep>;
  validationSchema: ObjectSchema<any>;
  productId: ProductIds;
  formState: any;
  lastStepLink: string;
}

export const BuyFlow: FC<IBuyProps> = ({
  steps,
  validationSchema,
  productId,
  formState,
  lastStepLink,
}: IBuyProps): JSX.Element => {
  const [currentStep, setStep] = usePersistedState<number>("currentStep", 0);
  const [collectedData, setCollectedData] = usePersistedState<IBuyFlowForm>("collectedData", formState);
  useClearLocalStorage(["collectedData", "currentStep"]); // clear local storage when component unmount

  const methods = useForm<IBuyFlowForm>({
    defaultValues: collectedData,
    mode: "onTouched",
    reValidateMode: "onChange",
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: IBuyFlowForm) => setCollectedData(data);

  const onStepValidate = async (fields: Array<string>) => methods.trigger(fields);

  const isStepValid = Object.entries(methods.formState.errors)?.length;

  const getStepCallback = async (fields: Array<string>) => {
    await onStepValidate(fields);
    if (isStepValid) return;
    if (currentStep + 1 === steps.length) {
      await methods.handleSubmit(onSubmit)();
    } else {
      const fields = methods.getValues();
      setCollectedData(fields);
    }
    setStep(currentStep + 1);
  };

  const getStepsDisplay = () => {
    if (currentStep === steps.length) return <SummaryStep link={lastStepLink} collectedData={collectedData} />;
    const Component = steps[currentStep].component;
    return <Component nextStepCallback={getStepCallback} />;
  };

  const getStepTitleText = () => {
    if (currentStep < steps.length - 1) {
      return `Step ${currentStep + 1} of ${steps.length}`;
    }
    return "Summary";
  };

  return (
    <div>
      <Tag tag="h2">Buying {PRODUCT_IDS_TO_NAMES[productId]}</Tag>
      <Container>
        <div className={styles.buyFlowFormWrapper}>
          <FormProvider {...methods}>
            <div className={styles.stepTitle}>{getStepTitleText()}</div>
            <form className={styles.buyFlowForm}>{getStepsDisplay()}</form>
          </FormProvider>
        </div>
      </Container>
    </div>
  );
};
