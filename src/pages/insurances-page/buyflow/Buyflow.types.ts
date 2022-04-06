import React from "react";

export interface StepProps {
  nextStepCallback: (validateFields: Array<string>) => void;
  prevStepCallback: () => void;
  isPrevStepVisible: boolean;
}

export interface ISummaryProps<T> {
  collectedData: T;
  onPurchase: () => void;
  summaryFieldsOrder: Array<string>;
}

export interface IStep {
  name: string;
  component: React.ComponentType<StepProps>;
}

export interface IBuyFlowForm {
  [key: string]: any;
}
