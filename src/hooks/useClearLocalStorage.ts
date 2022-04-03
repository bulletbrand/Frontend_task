import { useEffect } from "react";
import { clearStorageDataFields } from "../utils/helpers";

export const useClearLocalStorage = (fields: Array<string>) => {
  useEffect(() => {
    return () => clearStorageDataFields(fields);
  }, []);
};
