import styled from "@emotion/styled";
import { ButtonHTMLAttributes, forwardRef, useRef } from "react";
import { SHAPE, VARIANT } from "../../constant";
import { useTheme } from "../../core/theme-provider/hook";
import { COLOR_DIVIERSION_TYPE } from "../../core/theme-provider/theme-setting/color/color.constant";
import { ClassNamePrefixProps } from "../../core/theme-provider/theme.context";
import { useRipple } from "../../hooks/use-ripple";
import {
  getColorVariable,
  getTonalColor,
  mixColor,
} from "../../utils/style.util";
import { ICON_SHAPE, Icon, IconProps } from "../icon";

export type IconButtonProps = {
  shape?: Omit<SHAPE, SHAPE.ELEVATED>;
  variant?: VARIANT;
  value?: boolean; // true | false | undefined
  rippleEffect?: boolean;
  iconProps: Omit<IconProps, "shape">;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children">;

type InnerIconButtonProps = Omit<IconButtonProps, "iconProps"> &
  ClassNamePrefixProps;

const TextIconButton = styled.button`
  --buttonSurface: transparent;
  --onButtonSurface: ${({ shape }: InnerIconButtonProps) => {
    switch (shape) {
      case SHAPE.TEXT:
      case SHAPE.OUTLINED:
        return getColorVariable({
          variant: VARIANT.SURFACE,
          type: COLOR_DIVIERSION_TYPE.ON_VARIANT,
        });
      case SHAPE.TONAL:
        return getColorVariable({
          variant: VARIANT.SURFACE,
          type: COLOR_DIVIERSION_TYPE.ON_VARIANT,
        });
      case SHAPE.FILLED:
      default:
        return getColorVariable({
          variant: VARIANT.SURFACE,
          type: COLOR_DIVIERSION_TYPE.ON,
        });
    }
  }};
  --buttonPrimary: ${({ variant, shape, value }) => {
    if (value === true) {
      switch (shape) {
        case SHAPE.TEXT:
          return getColorVariable({ variant });
        default:
      }
    } else if (value === false) {
      switch (shape) {
        case SHAPE.FILLED:
        case SHAPE.TONAL:
          return getColorVariable({
            variant: VARIANT.SURFACE,
            type: COLOR_DIVIERSION_TYPE.CONTAINER_HIGHEST,
          });
        default:
      }
    }
    switch (shape) {
      case SHAPE.TEXT:
      case SHAPE.OUTLINED:
        return getColorVariable({
          variant: VARIANT.SURFACE,
          type: COLOR_DIVIERSION_TYPE.ON_VARIANT,
        });
      case SHAPE.TONAL:
        return getColorVariable({
          variant: getTonalColor(variant as VARIANT),
          type: COLOR_DIVIERSION_TYPE.CONTAINER,
        });
      case SHAPE.FILLED:
      default:
        return getColorVariable({
          variant,
        });
    }
  }};
  --buttonOnPrimary: ${({ variant, shape, value }: InnerIconButtonProps) => {
    const isTonal = shape === SHAPE.TONAL;
    if (value === true) {
      switch (shape) {
        case SHAPE.OUTLINED:
          return getColorVariable({
            variant: VARIANT.SURFACE,
            type: COLOR_DIVIERSION_TYPE.INVERSE_ON,
          });
        default:
      }
    } else if (value === false) {
      switch (shape) {
        case SHAPE.FILLED:
          return getColorVariable({
            variant,
          });
        default:
      }
    }

    return getColorVariable({
      variant: isTonal ? getTonalColor(variant as VARIANT) : variant,
      type: isTonal
        ? COLOR_DIVIERSION_TYPE.ON_CONTAINER
        : COLOR_DIVIERSION_TYPE.ON,
    });
  }};
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
    background-color: var(--buttonSurface);
    color: ${mixColor("var(--onButtonSurface)", "var(--buttonSurface)", 38)};
    cursor: not-allowed;
  }
`;
const FilledIconButton = styled(TextIconButton)`
  background-color: var(--buttonPrimary);
  color: var(--buttonOnPrimary);

  transition-property: color, background-color;

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
  }
  &:active {
    background-color: ${mixColor(
      "var(--buttonSurface)",
      "var(--buttonPrimary)",
      12
    )};
    color: var(--buttonOnPrimary);
  }
  &:disabled {
    cursor: not-allowed;
    background-color: ${mixColor(
      "var(--onButtonSurface)",
      "var(--buttonPrimary)",
      12
    )};
    color: ${mixColor("var(--onButtonSurface)", "var(--buttonSurface)", 38)};
  }
`;
const OutlinedIconButton = styled(TextIconButton)`
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
    outline: 1px solid var(--outline);
    background-color: ${mixColor(
      "var(--buttonPrimary)",
      "var(--buttonSurface)",
      8
    )};
  }
  &:active {
    outline: 1px solid var(--outline);
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
        shape={
          iconProps.icon
            ? value
              ? ICON_SHAPE.FILLED
              : ICON_SHAPE.OUTLINED
            : undefined
        }
        {...iconProps}
      />
    );

    useRipple(buttonRef, rippleEffect);

    switch (shape) {
      case SHAPE.TONAL:
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
