import { FormProvider, useForm } from "react-hook-form";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import React from "react";

export function renderWithReactHookForm(
  ui: React.ReactElement,
  { defaultValues = {}, reValidateMode = "", mode = "", resolver = {} }: any = {}
) {
  const Wrapper = ({ children }: any) => {
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

export const renderWithMemory = (component: React.ReactElement) => {
  return { ...render(<MemoryRouter>{component}</MemoryRouter>) };
};
