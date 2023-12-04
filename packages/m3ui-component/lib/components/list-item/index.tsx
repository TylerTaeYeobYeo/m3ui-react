import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { HTMLAttributes, ReactNode, forwardRef, useRef } from "react";
import { useTheme } from "../../core/theme-provider/hook";
import { useRipple } from "../../hooks/use-ripple";
import { mixColor } from "../../utils/style.util";
import { Divider } from "../divider";

export enum LIST_ITEM_SHAPE {
  DEFAULT = "default",
  VIDEO = "video",
}

/**
 * children is the supporting text of the list Item
 */
export type ListItemProps = {
  leading?: ReactNode;
  leadingWrapperProps?: HTMLAttributes<HTMLDivElement>;

  headline: ReactNode;
  headlineWrapperProps?: HTMLAttributes<HTMLDivElement>;

  trailing?: ReactNode;
  trailingWrapperProps?: HTMLAttributes<HTMLDivElement>;

  contentWrapperProps?: HTMLAttributes<HTMLDivElement>;
  childrenWrapperProps?: HTMLAttributes<HTMLDivElement>;

  bottomDivider?: boolean;
  shape?: LIST_ITEM_SHAPE;
  rippleEffect?: boolean;
} & HTMLAttributes<HTMLLIElement>;

const BaseListItem = styled.li<{
  classNamePrefix: string;
  shape: LIST_ITEM_SHAPE;
}>`
  position: relative;
  overflow: hidden;
  display: flex;
  gap: 16px;
  padding: ${({ shape }) =>
    shape === LIST_ITEM_SHAPE.VIDEO ? "12px 16px 12px 0px" : "8px 16px"};
  .${({ classNamePrefix }) => classNamePrefix}icon {
    width: 24px;
    height: 24px;
    font-size: 24px;
  }
  ${({ onClick }) =>
    onClick
      ? css`
          cursor: pointer;
          transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
          &:focus-visible {
            background-color: ${mixColor(
              "var(--onSurface)",
              "transparent",
              12
            )};
          }
          &:hover {
            background-color: ${mixColor("var(--onSurface)", "transparent", 8)};
          }
          &:active {
            background-color: ${mixColor(
              "var(--onSurface)",
              "transparent",
              12
            )};
          }
        `
      : ""}
  &:-webkit-user-drag,
  &:-moz-window-dragging,
  &:has([data-dragging="true"]) {
    background-color: ${mixColor("var(--onSurface)", "transparent", 16)};
    box-shadow: var(--elevation-3);
  }
`;

const LeadingContent = styled.div<{ shape: LIST_ITEM_SHAPE }>`
  max-height: ${({ shape }) =>
    shape === LIST_ITEM_SHAPE.VIDEO ? "64px" : "56px"};
  max-width: ${({ shape }) =>
    shape === LIST_ITEM_SHAPE.VIDEO ? "114px" : "56px"};
  overflow: hidden;
`;
const TrailingContent = styled.div`
  max-width: 24px;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
`;

const Headline = styled.div`
  color: var(--onSurface);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  letter-spacing: 0.5px;
`;
const Children = styled.div`
  color: var(--onSurfaceVariant);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  letter-spacing: 0.25px;
`;

export const ListItem = forwardRef<HTMLLIElement, ListItemProps>(
  (
    {
      children,
      leading,
      leadingWrapperProps,
      headline,
      headlineWrapperProps,
      trailing,
      trailingWrapperProps,
      contentWrapperProps,
      childrenWrapperProps,
      bottomDivider = false,
      shape = LIST_ITEM_SHAPE.DEFAULT,
      onClick,
      rippleEffect = true,
      ...liProps
    },
    ref
  ) => {
    const { classNamePrefix } = useTheme();
    const liRef = useRef<HTMLLIElement>();

    useRipple(liRef, (rippleEffect && !!onClick) ?? false);

    return (
      <BaseListItem
        ref={(el: HTMLLIElement) => {
          if (ref) {
            if (typeof ref === "function") {
              ref(el);
            } else {
              ref.current = el;
            }
          }
          liRef.current = el;
        }}
        classNamePrefix={classNamePrefix}
        shape={shape}
        onClick={onClick}
        {...liProps}
      >
        <LeadingContent {...leadingWrapperProps} shape={shape}>
          {leading}
        </LeadingContent>
        <Content {...contentWrapperProps}>
          <Headline {...headlineWrapperProps}>{headline}</Headline>
          <Children {...childrenWrapperProps}>{children}</Children>
        </Content>
        <TrailingContent {...trailingWrapperProps}>{trailing}</TrailingContent>
        {bottomDivider && (
          <Divider
            style={{
              position: "absolute",
              bottom: 0,
              width: "calc(100% - 32px)",
              margin: 0,
            }}
          />
        )}
      </BaseListItem>
    );
  }
);
