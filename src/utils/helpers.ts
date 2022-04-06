export const clearStorageDataFields = (fields: Array<string>): void => {
  fields.forEach((field) => localStorage.removeItem(field));
};

export const compose = <R>(fn1: (a: R) => R, ...fns: Array<(a: R) => R>) =>
  fns.reduce((prevFn, nextFn) => (value) => prevFn(nextFn(value)), fn1);

export const sleep = (ms: number): Promise<void> => {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, ms);
  });
};

export const formatLabels = (label: string) => {
  return label
    .split(/(?=[A-Z])/)
    .map((word, i) => {
      return i === 0 ? word[0].toUpperCase() + word.slice(1) : word.toLowerCase();
    })
    .join(" ");
};

export const uniqArr = (arr: Array<string>) => {
  return arr.filter((elem, pos, arr) => arr.indexOf(elem) === pos);
};
