import styled from "@emotion/styled";
import { ButtonHTMLAttributes, forwardRef } from "react";
import { VARIANT } from "../../constant";

const TextButton = styled.button`
  --buttonSurface: var(--surface);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  border: none;
  border-radius: 100px;

  color: var(--primary);
  background-color: var(--surfaceContainerLow);

  padding: 10px 12px;

  cursor: pointer;

  transition-property: color, background-color;
  transition-duration: 0.2s;

  &:focus-visible {
    outline: none;
    background-color: color-mix(
      in srgb,
      var(--primary) 12%,
      var(--surfaceContainerLow)
    );
  }
  &:hover {
    background-color: color-mix(
      in srgb,
      var(--primary) 8%,
      var(--surfaceContainerLow)
    );
  }
  &:active {
    background-color: color-mix(
      in srgb,
      var(--primary) 12%,
      var(--surfaceContainerLow)
    );
  }
  &:disabled {
    background-color: var(--buttonSurface);
    color: color-mix(in srgb, var(--onSurface) 38%, var(--buttonSurface));
    cursor: not-allowed;
  }
`;
const FilledButton = styled(TextButton)`
  padding: 10px 24px;

  background-color: var(--primary);
  color: var(--onPrimary);

  box-shadow: var(--elevation-0);

  transition-property: box-shadow, color, background-color;

  &:focus-visible {
    background-color: color-mix(
      in srgb,
      var(--buttonSurface) 12%,
      var(--primary)
    );
    color: var(--onPrimary);
  }
  &:hover {
    background-color: color-mix(
      in srgb,
      var(--buttonSurface) 8%,
      var(--primary)
    );
    color: var(--onPrimary);
    box-shadow: var(--elevation-1);
  }
  &:active {
    background-color: color-mix(
      in srgb,
      var(--buttonSurface) 12%,
      var(--primary)
    );
    color: var(--onPrimary);
    box-shadow: var(--elevation-0);
  }
  &:disabled {
    box-shadow: var(--elevation-0);
    cursor: not-allowed;
    background-color: color-mix(in srgb, var(--onSurface) 12%, var(--surface));
    color: color-mix(in srgb, var(--onSurface) 38%, var(--buttonSurface));
  }
`;
const OutlinedButton = styled(TextButton)`
  padding: 10px 24px;

  border: 1px solid var(--outline);

  transition-property: border, color, background-color;
  &:focus-visible {
    background-color: color-mix(
      in srgb,
      var(--primary) 12%,
      var(--buttonSurface)
    );
  }
  &:hover {
    background-color: color-mix(
      in srgb,
      var(--primary) 8%,
      var(--buttonSurface)
    );
  }
  &:active {
    border: 1px solid var(--primary);
    background-color: color-mix(
      in srgb,
      var(--primary) 12%,
      var(--buttonSurface)
    );
  }
  &:disabled {
    border: 1px solid
      color-mix(in srgb, var(--onSurface) 12%, var(--buttonSurface));
    color: color-mix(in srgb, var(--onSurface) 38%, var(--buttonSurface));
    background-color: var(--buttonSurface);
    cursor: not-allowed;
  }
`;
const ElevatedButton = styled(TextButton)`
  box-shadow: var(--elevation-1);

  padding: 10px 24px;

  transition-property: box-shadow, color, background-color;

  &:hover {
    box-shadow: var(--elevation-2);
  }
  &:active {
    box-shadow: var(--elevation-1);
  }
  &:disabled {
    box-shadow: var(--elevation-0);
    background-color: color-mix(in srgb, var(--onSurface) 12%, var(--surface));
    color: color-mix(in srgb, var(--onSurface) 38%, var(--buttonSurface));
    cursor: not-allowed;
  }
`;
const TonalButton = styled(TextButton)`
  padding: 10px 24px;

  color: var(--onSecondaryContainer);
  background: var(--secondaryContainer);

  box-shadow: var(--elevation-0);

  transition-property: box-shadow, color, background-color;

  &:focus-visible {
    outline: none;
    background-color: color-mix(
      in srgb,
      var(--onSecondaryContainer) 12%,
      var(--secondaryContainer)
    );
    box-shadow: var(--elevation-0);
  }
  &:hover {
    box-shadow: var(--elevation-1);
    background-color: color-mix(
      in srgb,
      var(--onSecondaryContainer) 8%,
      var(--secondaryContainer)
    );
  }
  &:active {
    background-color: color-mix(
      in srgb,
      var(--onSecondaryContainer) 12%,
      var(--secondaryContainer)
    );
    box-shadow: var(--elevation-0);
  }
  &:disabled {
    background-color: color-mix(in srgb, var(--onSurface) 12%, var(--surface));
    color: color-mix(in srgb, var(--onSurface) 38%, var(--buttonSurface));
    cursor: not-allowed;
    box-shadow: var(--elevation-0);
  }
`;

export type ButtonProps = {
  variant?: VARIANT;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = VARIANT.FILLED, ...props }, ref) => {
    switch (variant) {
      case VARIANT.FILLED:
        return <FilledButton ref={ref} {...props} />;
      case VARIANT.OUTLINED:
        return <OutlinedButton ref={ref} {...props} />;
      case VARIANT.TEXT:
        return <TextButton ref={ref} {...props} />;
      case VARIANT.ELEVATED:
        return <ElevatedButton ref={ref} {...props} />;
      case VARIANT.TONAL:
        return <TonalButton ref={ref} {...props} />;
    }
  }
);
