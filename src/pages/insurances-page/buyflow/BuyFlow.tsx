import React, { FC, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { ObjectSchema } from "yup";
import { useHistory } from "react-router-dom";
import { Container, Spinner, Tag } from "../../../components";
import { PRODUCT_IDS_TO_NAMES } from "../../../constants/constants";
import styles from "./buyFlow.module.scss";
import { IBuyFlowForm, IStep } from "./Buyflow.types";
import { ProductIds } from "../Insurances.types";
import { usePersistedState } from "../../../hooks/usePersistedState";
import { useClearLocalStorage } from "../../../hooks/useClearLocalStorage";
import { SummaryStep } from "./SummaryStep";
import { sleep, uniqArr } from "../../../utils/helpers";

interface IBuyFlowProps {
  steps: Array<IStep>;
  validationSchema: ObjectSchema<any>;
  productId: ProductIds;
  formState: IBuyFlowForm;
  purchaseLink: string;
}

export const BuyFlow: FC<IBuyFlowProps> = (props: IBuyFlowProps): JSX.Element => {
  const { steps, validationSchema, productId, formState, purchaseLink } = props;

  const [currentStep, setStep] = usePersistedState<number>("currentStep", 0);
  const [collectedData, setCollectedData] = usePersistedState<IBuyFlowForm>("collectedData", formState);
  const [dataOrder, setDataOrder] = usePersistedState<Array<string>>("dataOrder", []);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const history = useHistory();
  useClearLocalStorage(["collectedData", "currentStep", "dataOrder"]);

  const methods = useForm({
    defaultValues: collectedData,
    mode: "onTouched",
    reValidateMode: "onChange",
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: IBuyFlowForm) => setCollectedData(data);

  const onStepValidate = async (fields: Array<string>) => methods.trigger(fields);

  const isStepValid = () => Object.entries(methods.formState.errors)?.length;

  const getStepCallback = async (stepFields: Array<string>) => {
    await onStepValidate(stepFields);
    if (isStepValid()) return;
    if (currentStep + 1 === steps.length) {
      await methods.handleSubmit(onSubmit)();
    } else {
      const fields = methods.getValues();
      setCollectedData(fields);
    }

    setDataOrder((dataOrder: Array<string>) => uniqArr([...dataOrder, ...stepFields]));
    setStep(currentStep + 1);
  };

  const prevStepCallback = () => {
    setStep(currentStep - 1);
    methods.clearErrors();
  };

  const onPurchase = async () => {
    setIsLoading(true);
    await sleep(2000);
    history.push(purchaseLink);
  };

  const getStepsDisplay = () => {
    if (currentStep === steps.length)
      return <SummaryStep summaryFieldsOrder={dataOrder} onPurchase={onPurchase} collectedData={collectedData} />;
    const Component = steps[currentStep].component;
    return (
      <Component
        isPrevStepVisible={currentStep !== 0}
        prevStepCallback={prevStepCallback}
        nextStepCallback={getStepCallback}
      />
    );
  };

  const getStepTitleText = (): string => {
    if (currentStep < steps.length) return `Step ${currentStep + 1} of ${steps.length}`;
    return "Summary";
  };

  return (
    <div>
      <Tag tag="h2">Buying {PRODUCT_IDS_TO_NAMES[productId]}</Tag>
      <Container>
        <div className={styles.buyFlowFormWrapper}>
          <FormProvider {...methods}>
            <div data-testid="step_title" className={styles.stepTitle}>
              {getStepTitleText()}
            </div>
            {!isLoading ? (
              <form className={styles.buyFlowForm}>{getStepsDisplay()}</form>
            ) : (
              <Spinner loading={isLoading} />
            )}
          </FormProvider>
        </div>
      </Container>
    </div>
  );
};
