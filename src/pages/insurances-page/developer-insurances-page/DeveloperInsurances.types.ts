export interface IDeveloperForm {
  email: string;
  age: number;
}

export type DeveloperOrderProps = Array<keyof IDeveloperForm>;
