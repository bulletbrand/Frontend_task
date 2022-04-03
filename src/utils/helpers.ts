export const clearStorageDataFields = (fields: Array<string>): void => {
  fields.forEach((field) => localStorage.removeItem(field));
};

export const compose = <R>(fn1: (a: R) => R, ...fns: Array<(a: R) => R>) =>
  fns.reduce((prevFn, nextFn) => (value) => prevFn(nextFn(value)), fn1);

export function sleep(ms: number): Promise<any> {
  // eslint-disable-next-line no-promise-executor-return
  return new Promise((resolve) => setTimeout(resolve, ms));
}
