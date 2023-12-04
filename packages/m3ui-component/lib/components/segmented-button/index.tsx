import styled from "@emotion/styled";
import {
  ButtonHTMLAttributes,
  ForwardedRef,
  HTMLAttributes,
  ReactNode,
  forwardRef,
  useRef,
} from "react";
import { useTheme } from "../../core/theme-provider/hook";
import { SHAPE_SCALE } from "../../core/theme-provider/theme-setting/shape";
import { useRipple } from "../../hooks/use-ripple";
import { mixColor } from "../../utils/style.util";
import { Icon, IconProps } from "../icon";

type SegmentedButtonDensityType = 0 | -1 | -2 | -3;
type ButtonPropWithoutChildren = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "children"
>;

/**
 * @description
 * SegmentedButtonItem followes typical button props,
 * however, children is prerequisite
 */
export type SegementedButtonItem = {
  children: ReactNode | ReactNode[];
} & ButtonPropWithoutChildren;

export type SegmentedButtonValue = string | number | SegementedButtonItem;

export type SegmentedButtonProps = {
  wrapperProps?: Omit<HTMLAttributes<HTMLDivElement>, "children">;
  density?: SegmentedButtonDensityType;
  showSelectIcon?: boolean;
  data: SegementedButtonItem[];
  /**
   * render item is a template function to render each button
   */
  renderItem?: (props: {
    ref?: ForwardedRef<HTMLElement>;
    item: SegementedButtonItem;
    index: number;
    selected: boolean;
    showSelectIcon: boolean;
    commonProps?: ButtonPropWithoutChildren;
  }) => ReactNode;
  /**
   * @description
   * value is used to set selected button
   * value can be set as 3 types:
   * - id of the button: string
   * - index of the button: number
   * - reference of the data element
   * encourage you to use reference of the data element
   */
  value?: SegmentedButtonValue[];
  onChange?: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent> & {
      item: SegementedButtonItem;
      index: number;
      selected: boolean;
    }
  ) => void;
  rippleEffect?: boolean;
  iconProps?: IconProps;
} & Omit<ButtonPropWithoutChildren, "onChange" | "value">;

type SegmentedButtonWrapperProps = HTMLAttributes<HTMLDivElement> & {
  density?: SegmentedButtonDensityType;
  classNamePrefix: string;
};

const SegmentedButtonWrapper = styled.div<SegmentedButtonWrapperProps>`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 1px;
  margin: 4px 0px;
  height: ${({ density = 0 }) => `${40 - density * 4}px`};

  /* border-radius: ${({ classNamePrefix }) =>
    `var(--${classNamePrefix}shape-${SHAPE_SCALE.FULL})`}; */
`;

type SegmentedButtonInnerProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  selected?: boolean;
  classNamePrefix: string;
};

const SegmentedButtonInner = styled.button<SegmentedButtonInnerProps>`
  --buttonSurface: ${({ selected }) =>
    selected ? "var(--secondaryContainer)" : "transparent"};
  --onButtonSurface: ${({ selected }) =>
    selected ? "var(--onSecondaryContainer)" : "var(--onSurface)"};
  position: relative;
  height: 100%;
  width: 100%;
  min-width: 24px;
  padding: 10px 12px;
  background-color: var(--buttonSurface);
  color: var(--onButtonSurface);
  border: none;
  outline: 1px solid var(--outline);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  overflow: hidden;
  transition: background-color 0.2s, color 0.2s;

  :first-of-type {
    border-top-left-radius: ${({ classNamePrefix }) =>
      `var(--${classNamePrefix}shape-${SHAPE_SCALE.FULL})`};
    border-bottom-left-radius: ${({ classNamePrefix }) =>
      `var(--${classNamePrefix}shape-${SHAPE_SCALE.FULL})`};
  }
  :last-of-type {
    border-top-right-radius: ${({ classNamePrefix }) =>
      `var(--${classNamePrefix}shape-${SHAPE_SCALE.FULL})`};
    border-bottom-right-radius: ${({ classNamePrefix }) =>
      `var(--${classNamePrefix}shape-${SHAPE_SCALE.FULL})`};
  }

  &:focus-visible {
    background-color: ${mixColor(
      "var(--onButtonSurface)",
      "var(--buttonSurface)",
      12
    )};
  }
  &:hover {
    background-color: ${mixColor(
      "var(--onButtonSurface)",
      "var(--buttonSurface)",
      8
    )};
  }
  &:active {
    background-color: ${mixColor(
      "var(--onButtonSurface)",
      "var(--buttonSurface)",
      12
    )};
  }
  &:disabled {
    background-color: var(--buttonSurface);
    color: ${mixColor("var(--onButtonSurface)", "var(--buttonSurface)", 38)};
    outline: 1px solid ${mixColor("var(--outline)", "transparent", 12)};
    cursor: not-allowed;
  }
`;

type SegmentedButtonInnerItemProps = {
  value?: SegmentedButtonValue[];
  item: SegementedButtonItem;
  index: number;
  showSelectIcon: boolean;
  commonProps?: ButtonPropWithoutChildren;
  classNamePrefix: string;
  onChange?: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent> & {
      item: SegementedButtonItem;
      index: number;
      selected: boolean;
    }
  ) => void;
  renderItem?: (props: {
    ref?: ForwardedRef<HTMLElement>;
    item: SegementedButtonItem;
    index: number;
    selected: boolean;
    showSelectIcon: boolean;
    commonProps?: ButtonPropWithoutChildren;
  }) => ReactNode;
  rippleEffect?: boolean;
  iconProps?: IconProps;
};

const SegmentedButtonInnerItem = ({
  value,
  item,
  index,
  commonProps,
  classNamePrefix,
  showSelectIcon,
  onChange,
  renderItem,
  rippleEffect = true,
  iconProps,
}: SegmentedButtonInnerItemProps) => {
  const { id, className, children, ...buttonProps } = item;
  const btnRef = useRef<HTMLElement>();
  const selected =
    value?.some((v) => v === index || v === id || v === item) ?? false;
  useRipple(btnRef, rippleEffect);
  return (
    renderItem?.({
      ref: (el) => {
        if (el) {
          btnRef.current = el;
        }
      },
      item,
      index,
      selected,
      showSelectIcon,
      commonProps,
    }) ?? (
      <SegmentedButtonInner
        // @ts-ignore
        ref={btnRef}
        className={`${classNamePrefix}segmented-button ${className ?? ""}`}
        classNamePrefix={classNamePrefix}
        selected={selected}
        onClick={(e) => {
          const fn = buttonProps?.onClick ?? commonProps?.onClick;
          fn?.(e);
          onChange?.({
            ...e,
            item,
            index,
            selected: !selected,
          });
        }}
        {...commonProps}
        {...buttonProps}
      >
        {showSelectIcon && (
          <Icon
            {...(iconProps ?? {
              icon: "check",
              style: {
                overflow: "hidden",
                maxWidth: selected ? "100%" : "0%",
                transitionProperty: "max-height, max-width",
                transitionDuration: "0.2s",
                transitionTimingFunction: "ease-in-out",
              },
            })}
          />
        )}
        {children}
      </SegmentedButtonInner>
    )
  );
};

export const SegmentedButton = forwardRef<HTMLDivElement, SegmentedButtonProps>(
  (
    {
      wrapperProps,
      density = 0,
      showSelectIcon = true,
      data = [],
      value,
      renderItem,
      onChange,
      iconProps,
      rippleEffect = true,
      ...commonProps
    }: SegmentedButtonProps,
    ref
  ) => {
    const { classNamePrefix } = useTheme();
    return (
      <SegmentedButtonWrapper
        ref={ref}
        density={density}
        classNamePrefix={classNamePrefix}
        {...wrapperProps}
      >
        {data.map((item, index) => {
          return (
            <SegmentedButtonInnerItem
              key={item.id ?? index}
              value={value}
              item={item}
              index={index}
              commonProps={commonProps}
              classNamePrefix={classNamePrefix}
              showSelectIcon={showSelectIcon}
              onChange={onChange}
              renderItem={renderItem}
              rippleEffect={rippleEffect}
              iconProps={iconProps}
            />
          );
        })}
      </SegmentedButtonWrapper>
    );
  }
);
