export interface IDesignerForm {
  email: string;
  age: number;
  firstName: string;
  lastName: string;
}

export type DesignerOrderProps = Array<keyof IDesignerForm>;
