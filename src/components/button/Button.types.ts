import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

type ButtonAppearance = "primary" | "danger" | "success" | "dark";

export interface ButtonProps
  extends Omit<
    DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
    "onAnimationStart" | "onDragStart" | "onDragEnd" | "onDrag" | "ref"
  > {
  children: ReactNode;
  appearance?: ButtonAppearance;
}
