import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ButtonHTMLAttributes, forwardRef, useRef } from "react";
import { SHAPE, VARIANT } from "../../../constant";
import { useTheme } from "../../../core/theme-provider/hook";
import { COLOR_DIVIERSION_TYPE } from "../../../core/theme-provider/theme-setting/color/color.constant";
import { ClassNamePrefixProps } from "../../../core/theme-provider/theme.context";
import { useRipple } from "../../../hooks/use-ripple";
import {
  getColorVariable,
  getTonalColor,
  mixColor,
} from "../../../utils/style.util";
import { ICON_SHAPE, Icon, IconProps } from "../../icon";

export type IconButtonProps = {
  shape?: Omit<SHAPE, SHAPE.ELEVATED>;
  variant?: VARIANT;
  value?: boolean; // true | false | undefined
  rippleEffect?: boolean;
  iconProps: Omit<IconProps, "shape" | "filled">;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children">;

type InnerIconButtonProps = Omit<IconButtonProps, "iconProps"> &
  ClassNamePrefixProps;

type ButtonColorParam = {
  variant?: VARIANT;
  value?: boolean;
  disabled?: boolean;
};

const textButtonColor = ({ variant, value, disabled }: ButtonColorParam) => {
  switch (value) {
    case true:
    case undefined:
      return css`
        --buttonSurface: transparent;
        --onButtonSurface: ${disabled ? "transparent" : "var(--onSurface)"};
        --buttonPrimary: ${getColorVariable({ variant })};
        --onButtonPrimary: var(--onSurface);
      `;
    case false:
      return css`
        --buttonSurface: transparent;
        --onButtonSurface: ${disabled ? "transparent" : "var(--onSurface)"};
        --buttonPrimary: ${getColorVariable({
          variant: VARIANT.SURFACE,
          type: COLOR_DIVIERSION_TYPE.ON_VARIANT,
        })};
        --onButtonPrimary: var(--onSurface);
      `;
  }
};
const filledButtonColor = ({ variant, value, disabled }: ButtonColorParam) => {
  switch (value) {
    case true:
    case undefined:
      return css`
        --buttonSurface: ${disabled
          ? "var(--surface)"
          : getColorVariable({ variant })};
        --onButtonSurface: ${disabled
          ? "var(--onSurface)"
          : " var(--onSurface)"};
        --buttonPrimary: ${getColorVariable({
          variant,
          type: COLOR_DIVIERSION_TYPE.ON,
        })};
        --onButtonPrimary: var(--onSurface);
      `;
    case false:
      return css`
        --buttonSurface: ${disabled
          ? "var(--surface)"
          : getColorVariable({
              variant: VARIANT.SURFACE,
              type: COLOR_DIVIERSION_TYPE.CONTAINER_HIGHEST,
            })};
        --onButtonSurface: ${disabled
          ? "var(--onSurface)"
          : " var(--onSurface)"};
        --buttonPrimary: ${getColorVariable({
          variant,
        })};
        --onButtonPrimary: var(--onSurface);
      `;
  }
};
const tonalButtonColor = ({ variant, value, disabled }: ButtonColorParam) => {
  const tonalVariant: VARIANT = getTonalColor(variant ?? VARIANT.SECONDARY);
  switch (value) {
    case true:
    case undefined:
      return css`
        --buttonSurface: ${disabled
          ? "var(--surface)"
          : getColorVariable({
              variant: tonalVariant,
              type: COLOR_DIVIERSION_TYPE.CONTAINER,
            })};
        --onButtonSurface: ${disabled ? "var(--onSurface)" : "transparent"};
        --buttonPrimary: ${getColorVariable({
          variant: tonalVariant,
          type: COLOR_DIVIERSION_TYPE.ON_CONTAINER,
        })};
        --onButtonPrimary: var(--onSurface);
      `;
    case false:
      return css`
        --buttonSurface: ${disabled
          ? "var(--surface)"
          : getColorVariable({
              variant: VARIANT.SURFACE,
              type: COLOR_DIVIERSION_TYPE.CONTAINER_HIGHEST,
            })};
        --onButtonSurface: ${disabled ? "var(--onSurface)" : "transparent"};
        --buttonPrimary: ${getColorVariable({
          variant: VARIANT.SURFACE,
          type: COLOR_DIVIERSION_TYPE.ON_VARIANT,
        })};
        --onButtonPrimary: var(--onSurface);
      `;
  }
};
const outlinedButtonColor = ({ value, disabled }: ButtonColorParam) => {
  switch (value) {
    case false:
    case undefined:
      return css`
        --buttonSurface: transparent;
        --onButtonSurface: ${disabled ? "transparent" : "var(--onSurface)"};
        --buttonPrimary: ${getColorVariable({
          variant: VARIANT.SURFACE,
          type: COLOR_DIVIERSION_TYPE.ON,
        })};
        --onButtonPrimary: var(--onSurface);
      `;
    case true:
      return css`
        --buttonSurface: ${disabled
          ? "transparent"
          : getColorVariable({
              variant: VARIANT.SURFACE,
              type: COLOR_DIVIERSION_TYPE.INVERSE,
            })};
        --onButtonSurface: ${disabled
          ? getColorVariable({
              variant: VARIANT.SURFACE,
              type: COLOR_DIVIERSION_TYPE.ON,
            })
          : "transparent"};
        --buttonPrimary: ${getColorVariable({
          variant: VARIANT.SURFACE,
          type: disabled
            ? COLOR_DIVIERSION_TYPE.ON
            : COLOR_DIVIERSION_TYPE.INVERSE_ON,
        })};
        --onButtonPrimary: var(--onSurface);
      `;
  }
};
const TextIconButton = styled.button`
  ${({ shape, variant, value, disabled }) => {
    switch (shape) {
      case SHAPE.TEXT:
        return textButtonColor({ variant, value, disabled });
      case SHAPE.FILLED:
        return filledButtonColor({ variant, value, disabled });
      case SHAPE.TONAL:
        return tonalButtonColor({ variant, value, disabled });
      case SHAPE.OUTLINED:
        return outlinedButtonColor({ variant, value, disabled });
    }
  }}
  position: relative;
  overflow: hidden;
  display: inline-block;

  border: none;
  border-radius: 100px;

  color: var(--buttonPrimary);
  background-color: var(--buttonSurface);

  padding: 8px;
  margin: 4px;

  width: 40px;
  height: 40px;
  overflow: hidden;

  cursor: pointer;

  transition-property: color, background-color;
  transition-duration: 0.2s;

  ${({ classNamePrefix }: InnerIconButtonProps) => `${classNamePrefix}icon`} {
    width: 24px;
    height: 24px;
    font-size: 24px;
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
    background-color: ${mixColor(
      "var(--onButtonSurface)",
      "var(--buttonSurface)",
      12
    )};
    color: ${mixColor("var(--onButtonPrimary)", "var(--buttonSurface)", 38)};
    cursor: not-allowed;
  }
`;
const FilledIconButton = styled(TextIconButton)``;
const OutlinedIconButton = styled(TextIconButton)`
  outline: 1px solid var(--outline);
  &:focus-visible {
    outline: 1px solid var(--outline);
  }
  &:disabled {
    outline: 1px solid ${mixColor("var(--onSurface)", "var(--surface)", 12)};
  }
`;
const TonalIconButton = styled(TextIconButton)``;

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      variant = VARIANT.PRIMARY,
      shape = SHAPE.FILLED,
      value,
      iconProps,
      rippleEffect = true,
      ...props
    },
    ref
  ) => {
    const buttonRef = useRef<HTMLButtonElement>();
    const { classNamePrefix } = useTheme();
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
      classNamePrefix,
      value,
      "data-animation": "ripple",
      ...props,
    };

    const child = (
      // @ts-ignore
      <Icon
        filled={value}
        shape={iconProps.icon ? ICON_SHAPE.OUTLINED : undefined}
        {...iconProps}
      />
    );

    useRipple(buttonRef, rippleEffect);

    switch (shape) {
      case SHAPE.TONAL:
        return <TonalIconButton {...commonProps}>{child}</TonalIconButton>;
      case SHAPE.FILLED:
        return <FilledIconButton {...commonProps}>{child}</FilledIconButton>;
      case SHAPE.OUTLINED:
        if (value) {
          return <FilledIconButton {...commonProps}>{child}</FilledIconButton>;
        }
        return (
          <OutlinedIconButton {...commonProps}>{child}</OutlinedIconButton>
        );
      case SHAPE.TEXT:
        return <TextIconButton {...commonProps}>{child}</TextIconButton>;
    }
  }
);
