import styled from "@emotion/styled";
import {
  ButtonHTMLAttributes,
  ReactElement,
  forwardRef,
  useEffect,
  useRef,
} from "react";
import { SHAPE, VARIANT } from "../../constant";
import { useTheme } from "../../core/theme-provider/hook";
import { COLOR_DIVIERSION_TYPE } from "../../core/theme-provider/theme-setting/color/color.constant";
import { TYPOGRAPHY } from "../../core/theme-provider/theme-setting/typography/typography.constant";
import { ClassNamePrefixProps } from "../../core/theme-provider/theme.context";
import { getColorVariable, getTonalColor } from "../../utils/style.util";
import { IconProps } from "../icon";

export type ButtonProps = {
  shape?: SHAPE;
  variant?: Omit<VARIANT, VARIANT.SURFACE>;
  icon?: ReactElement<IconProps>;
  children: React.ReactNode | React.ReactNode[];
  /** default: TYPOGRAPHY.LABEL_LARGE */
  typography?: TYPOGRAPHY;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children">;

type InternalButtonProps = ButtonProps & ClassNamePrefixProps;

const TextButton = styled.button`
  --buttonSurface: transparent;
  --buttonOnSurface: var(--onSurface);
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
    background-color: color-mix(
      in srgb,
      var(--buttonPrimary) 12%,
      var(--buttonSurface)
    );
  }
  &:hover {
    background-color: color-mix(
      in srgb,
      var(--buttonPrimary) 8%,
      var(--buttonSurface)
    );
  }
  &:active {
    background-color: color-mix(
      in srgb,
      var(--buttonPrimary) 12%,
      var(--buttonSurface)
    );
  }
  &:disabled {
    background-color: var(--buttonSurface);
    color: color-mix(in srgb, var(--buttonOnSurface) 38%, var(--buttonSurface));
    cursor: not-allowed;
  }
`;
const FilledButton = styled(TextButton)`
  background-color: var(--buttonPrimary);
  color: var(--buttonOnPrimary);

  box-shadow: var(--elevation-0);

  transition-property: box-shadow, color, background-color;

  &:focus-visible {
    background-color: color-mix(
      in srgb,
      var(--buttonSurface) 12%,
      var(--buttonPrimary)
    );
    color: var(--buttonOnPrimary);
  }
  &:hover {
    background-color: color-mix(
      in srgb,
      var(--buttonSurface) 8%,
      var(--buttonPrimary)
    );
    color: var(--buttonOnPrimary);
    box-shadow: var(--elevation-1);
  }
  &:active {
    background-color: color-mix(
      in srgb,
      var(--buttonSurface) 12%,
      var(--buttonPrimary)
    );
    color: var(--buttonOnPrimary);
    box-shadow: var(--elevation-0);
  }
  &:disabled {
    box-shadow: var(--elevation-0);
    cursor: not-allowed;
    background-color: color-mix(
      in srgb,
      var(--buttonOnSurface) 12%,
      var(--buttonSurface)
    );
    color: color-mix(in srgb, var(--buttonOnSurface) 38%, var(--buttonSurface));
  }
`;
const OutlinedButton = styled(TextButton)`
  outline: 1px solid var(--outline);

  transition-property: outline, color, background-color;
  &:focus-visible {
    outline: 1px solid var(--outline);
    background-color: color-mix(
      in srgb,
      var(--buttonPrimary) 12%,
      var(--buttonSurface)
    );
  }
  &:hover {
    background-color: color-mix(
      in srgb,
      var(--buttonPrimary) 8%,
      var(--buttonSurface)
    );
  }
  &:active {
    outline: 1px solid var(--buttonPrimary);
    background-color: color-mix(
      in srgb,
      var(--buttonPrimary) 12%,
      var(--buttonSurface)
    );
  }
  &:disabled {
    outline: 1px solid
      color-mix(in srgb, var(--buttonOnSurface) 12%, var(--buttonSurface));
    color: color-mix(in srgb, var(--buttonOnSurface) 38%, var(--buttonSurface));
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
    background-color: color-mix(
      in srgb,
      var(--buttonPrimary) 12%,
      var(--buttonSurfaceContainerLow)
    );
  }
  &:hover {
    box-shadow: var(--elevation-2);
    background-color: color-mix(
      in srgb,
      var(--buttonPrimary) 8%,
      var(--buttonSurfaceContainerLow)
    );
  }
  &:active {
    box-shadow: var(--elevation-1);
    background-color: color-mix(
      in srgb,
      var(--buttonPrimary) 12%,
      var(--buttonSurfaceContainerLow)
    );
  }
  &:disabled {
    box-shadow: var(--elevation-0);
    background-color: color-mix(
      in srgb,
      var(--buttonOnSurface) 12%,
      var(--buttonSurface)
    );
    color: color-mix(in srgb, var(--buttonOnSurface) 38%, var(--buttonSurface));
    cursor: not-allowed;
  }
`;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      shape = SHAPE.FILLED,
      icon,
      children,
      typography = TYPOGRAPHY.LABEL_LARGE,
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
      shape,
      icon,
      classNamePrefix,
      className: `${classNamePrefix}${typography} ${className ?? ""}`,
      ...props,
    };
    const body = (
      <>
        {icon}
        {children}
      </>
    );

    useEffect(() => {
      const btnRef = buttonRef.current;
      if (!btnRef) return;
      const ripple = (e) => {
        // Setup
        const posX = btnRef.offsetLeft;
        const posY = btnRef.offsetTop;
        let buttonWidth = btnRef.offsetWidth;
        let buttonHeight = btnRef.offsetHeight;

        // Add the element
        const ripple = document.createElement("span");

        btnRef.appendChild(ripple);

        // Make it round!
        if (buttonWidth >= buttonHeight) {
          buttonHeight = buttonWidth;
        } else {
          buttonWidth = buttonHeight;
        }

        // Get the center of the element
        const x = e.pageX - posX - buttonWidth / 2;
        const y = e.pageY - posY - buttonHeight / 2;

        ripple.style.width = `${buttonWidth}px`;
        ripple.style.height = `${buttonHeight}px`;
        ripple.style.top = `${y}px`;
        ripple.style.left = `${x}px`;

        ripple.classList.add(`${classNamePrefix}ripple-animation`);
      };

      btnRef.addEventListener("mousedown", ripple);
      return () => {
        btnRef.removeEventListener("mousedown", ripple);
      };
    }, [commonProps]);

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
