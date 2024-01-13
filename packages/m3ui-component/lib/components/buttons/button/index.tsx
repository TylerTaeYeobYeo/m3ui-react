import styled from "@emotion/styled";
import { ButtonHTMLAttributes, ReactElement, forwardRef, useRef } from "react";
import { SHAPE, VARIANT } from "../../../constant";
import { useTheme } from "../../../core/theme-provider/hook";
import { COLOR_DIVIERSION_TYPE } from "../../../core/theme-provider/theme-setting/color/color.constant";
import { TYPOGRAPHY } from "../../../core/theme-provider/theme-setting/typography/typography.constant";
import { ClassNamePrefixProps } from "../../../core/theme-provider/theme.context";
import { useRipple } from "../../../hooks/use-ripple";
import {
  getColorVariable,
  getTonalColor,
  mixColor,
} from "../../../utils/style.util";
import { IconProps } from "../../icon";

export type ButtonProps = {
  shape?: SHAPE;
  variant?: Omit<VARIANT, VARIANT.SURFACE>;
  icon?: ReactElement<IconProps>;
  children: React.ReactNode | React.ReactNode[];
  rippleEffect?: boolean;
  /** default: TYPOGRAPHY.LABEL_LARGE */
  typography?: TYPOGRAPHY;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children">;

type InternalButtonProps = ButtonProps & ClassNamePrefixProps;

const TextButton = styled.button`
  --buttonSurface: transparent;
  --onButtonSurface: var(--onSurface);
  --buttonPrimary: ${({ variant, shape }: InternalButtonProps) => {
    const isTonal = shape === SHAPE.TONAL;
    const option = {
      variant: isTonal
        ? getTonalColor(variant as VARIANT)
        : (variant as VARIANT | undefined),
      type: isTonal ? COLOR_DIVIERSION_TYPE.CONTAINER : undefined,
    };
    return getColorVariable(option);
  }};
  --buttonOnPrimary: ${({ variant, shape }: InternalButtonProps) => {
    const isTonal = shape === SHAPE.TONAL;
    const option = {
      variant: isTonal
        ? getTonalColor(variant as VARIANT)
        : (variant as VARIANT | undefined),
      type: isTonal
        ? COLOR_DIVIERSION_TYPE.ON_CONTAINER
        : COLOR_DIVIERSION_TYPE.ON,
    };
    return getColorVariable(option);
  }};
  position: relative;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  border: none;
  border-radius: 100px;

  color: var(--buttonPrimary);
  background-color: var(--buttonSurface);

  padding: ${({ shape, icon }: InternalButtonProps) =>
    icon
      ? shape === SHAPE.TEXT
        ? "12px 16px 12px 10px"
        : "10px 24px 10px 16px"
      : shape === SHAPE.TEXT
      ? "10px 12px"
      : "10px 24px"};

  cursor: pointer;

  transition-property: color, background-color;
  transition-duration: 0.2s;

  ${({ classNamePrefix }) => `${classNamePrefix}icon`} {
    width: 18px;
    height: 18px;
    font-size: 18px;
  }

  &:focus-visible {
    outline: none;
    background-color: ${mixColor(
      "var(--buttonPrimary)",
      "var(--buttonSurface)",
      12
    )};
  }
  &:hover {
    background-color: ${mixColor(
      "var(--buttonPrimary)",
      "var(--buttonSurface)",
      8
    )};
  }
  &:active {
    background-color: ${mixColor(
      "var(--buttonPrimary)",
      "var(--buttonSurface)",
      12
    )};
  }
  &:disabled {
    background-color: var(--buttonSurface);
    color: ${mixColor("var(--onButtonSurface)", "var(--buttonSurface)", 38)};
    cursor: not-allowed;
  }
`;
const FilledButton = styled(TextButton)`
  background-color: var(--buttonPrimary);
  color: var(--buttonOnPrimary);

  box-shadow: var(--elevation-0);

  transition-property: box-shadow, color, background-color;

  &:focus-visible {
    background-color: ${mixColor(
      "var(--buttonSurface)",
      "var(--buttonPrimary)",
      12
    )};
    color: var(--buttonOnPrimary);
  }
  &:hover {
    background-color: ${mixColor(
      "var(--buttonSurface)",
      "var(--buttonPrimary)",
      8
    )};
    color: var(--buttonOnPrimary);
    box-shadow: var(--elevation-1);
  }
  &:active {
    background-color: ${mixColor(
      "var(--buttonSurface)",
      "var(--buttonPrimary)",
      12
    )};
    color: var(--buttonOnPrimary);
    box-shadow: var(--elevation-0);
  }
  &:disabled {
    box-shadow: var(--elevation-0);
    cursor: not-allowed;
    background-color: ${mixColor(
      "var(--onButtonSurface)",
      "var(--buttonSurface)",
      12
    )};
    color: ${mixColor("var(--onButtonSurface)", "var(--buttonSurface)", 38)};
  }
`;
const OutlinedButton = styled(TextButton)`
  outline: 1px solid var(--outline);

  transition-property: outline, color, background-color;
  &:focus-visible {
    outline: 1px solid var(--outline);
    background-color: ${mixColor(
      "var(--buttonPrimary)",
      "var(--buttonSurface)",
      12
    )};
  }
  &:hover {
    background-color: ${mixColor(
      "var(--buttonPrimary)",
      "var(--buttonSurface)",
      8
    )};
  }
  &:active {
    outline: 1px solid var(--buttonPrimary);
    background-color: ${mixColor(
      "var(--buttonPrimary)",
      "var(--buttonSurface)",
      12
    )};
  }
  &:disabled {
    outline: 1px solid
      ${mixColor("var(--onButtonSurface)", "var(--buttonSurface)", 12)};
    color: ${mixColor("var(--onButtonSurface)", "var(--buttonSurface)", 38)};
    background-color: var(--buttonSurface);
    cursor: not-allowed;
  }
`;
const ElevatedButton = styled(TextButton)`
  --buttonSurfaceContainerLow: var(--surfaceContainerLow);
  box-shadow: var(--elevation-1);

  background-color: var(--buttonSurfaceContainerLow);

  transition-property: box-shadow, color, background-color;
  &:focus-visible {
    background-color: ${mixColor(
      "var(--buttonPrimary)",
      "var(--buttonSurfaceContainerLow)",
      12
    )};
  }
  &:hover {
    box-shadow: var(--elevation-2);
    background-color: ${mixColor(
      "var(--buttonPrimary)",
      "var(--buttonSurfaceContainerLow)",
      8
    )};
  }
  &:active {
    box-shadow: var(--elevation-1);
    background-color: ${mixColor(
      "var(--buttonPrimary)",
      "var(--buttonSurfaceContainerLow)",
      12
    )};
  }
  &:disabled {
    box-shadow: var(--elevation-0);
    background-color: ${mixColor(
      "var(--onButtonSurface)",
      "var(--buttonSurface)",
      12
    )};
    color: ${mixColor("var(--onButtonSurface)", "var(--buttonSurface)", 38)};
    cursor: not-allowed;
  }
`;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = VARIANT.PRIMARY,
      shape = SHAPE.FILLED,
      icon,
      children,
      typography = TYPOGRAPHY.LABEL_LARGE,
      rippleEffect = true,
      className,
      ...props
    },
    ref
  ) => {
    const { classNamePrefix } = useTheme();
    const buttonRef = useRef<HTMLButtonElement>();
    const commonProps = {
      ref: (el: HTMLButtonElement) => {
        if (ref) {
          if (typeof ref === "function") {
            ref(el);
          } else {
            ref.current = el;
          }
        }
        buttonRef.current = el;
      },
      variant,
      shape,
      icon,
      classNamePrefix,
      className: `${classNamePrefix}${typography} ${className ?? ""}`,
      "data-animation": "ripple",
      ...props,
    };
    const body = (
      <>
        {icon}
        {children}
      </>
    );

    useRipple(buttonRef, rippleEffect);

    switch (shape) {
      case SHAPE.FILLED:
        return <FilledButton {...commonProps}>{body}</FilledButton>;
      case SHAPE.OUTLINED:
        return <OutlinedButton {...commonProps}>{body}</OutlinedButton>;
      case SHAPE.TEXT:
        return <TextButton {...commonProps}>{body}</TextButton>;
      case SHAPE.ELEVATED:
        return <ElevatedButton {...commonProps}>{body}</ElevatedButton>;
      case SHAPE.TONAL:
        return <FilledButton {...commonProps}>{body}</FilledButton>;
    }
  }
);
