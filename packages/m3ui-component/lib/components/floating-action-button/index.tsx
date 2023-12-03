import { ButtonHTMLAttributes, forwardRef } from "react";

export type FloatingActionButtonProps = {
  variant;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const FloatingActionButton = forwardRef<
  HTMLButtonElement,
  FloatingActionButtonProps
>((props, ref) => {
  return <button ref={ref} {...props} />;
});
