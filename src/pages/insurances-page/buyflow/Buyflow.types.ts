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
  nextStepCallback: (field: string, validateFields: Array<string>) => void;
  nextStep: string;
}

export interface ISummaryProps<T> {
  collectedData: T;
}
