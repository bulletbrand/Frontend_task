import React from "react";

export interface IInsuranceForm {
  email: string;
  age: number;
}

export type IDeveloperForm = IInsuranceForm;

export interface IDesignerForm extends IInsuranceForm {
  firstName: string;
  lastName: string;
}

export enum ProductIds {
  devIns = "dev_ins",
  desIns = "des_ins",
}

export interface StepProps {
  nextStepCallback: (validateFields: Array<string>) => void;
}

export interface ISummaryProps<T> {
  collectedData: T;
  link: string;
}

export interface IStep {
  name: string;
  component: any;
}

export interface IBuyFlowForm {
  [key: string]: any;
}
