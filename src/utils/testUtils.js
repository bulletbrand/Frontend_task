import { FormProvider, useForm } from "react-hook-form";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import React from "react";

export function renderWithReactHookForm(
  ui,
  { defaultValues = {}, reValidateMode = "", mode = "", resolver = {} } = {}
) {
  const Wrapper = ({ children }) => {
    const methods = useForm({ defaultValues, reValidateMode, mode, resolver });
    return (
      <MemoryRouter>
        <FormProvider {...methods}>
          <form>{children}</form>
        </FormProvider>
      </MemoryRouter>
    );
  };

  return {
    ...render(ui, { wrapper: Wrapper }),
  };
}

export const renderWithMemory = (component) => {
  return { ...render(<MemoryRouter>{component}</MemoryRouter>) };
};
