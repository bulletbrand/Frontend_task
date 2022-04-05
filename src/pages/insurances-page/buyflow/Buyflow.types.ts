import React from "react";

export interface StepProps {
  nextStepCallback: (validateFields: Array<string>) => void;
}

export interface ISummaryProps<T> {
  collectedData: T;
  purchaseLink: string;
  summaryFieldsOrder: Array<string>;
}

export interface IStep {
  name: string;
  component: React.ComponentType<StepProps>;
}

export interface IBuyFlowForm {
  [key: string]: any;
}
