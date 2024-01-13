import styled from "@emotion/styled";
import { CSSProperties, HTMLAttributes, forwardRef } from "react";
import { SIZE } from "../../../constant/style.constant";
import { useTheme } from "../../../core/theme-provider/hook";

export enum TOP_APP_BAR_SIZE {
  SMALL = SIZE.SMALL,
  MEDIUM = SIZE.MEDIUM,
  LARGE = SIZE.LARGE,
}

export type TopAppBarProps = {
  leading?: React.ReactNode;
  actions?: React.ReactNode[];
  size?: TOP_APP_BAR_SIZE;
  centerTitle?: boolean;
  headline?: React.ReactNode;
} & Omit<HTMLAttributes<HTMLDivElement>, "children">;

const Wrapper = styled.div<{ size: TOP_APP_BAR_SIZE }>`
  width: 100%;
  display: grid;
  align-items: center;
  gap: 4px;
  padding: 8px 4px;
  background-color: var(--surfaceContainer);
  grid-template-columns: ${({ size }) =>
    size === TOP_APP_BAR_SIZE.SMALL ? "48px 1fr auto" : "48px auto"};
`;

const Leading = styled.div`
  min-width: 48px;
  min-height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  grid-column: 1;
`;

const Title = styled.div<{
  centerTitle?: boolean;
  size?: TOP_APP_BAR_SIZE;
  typography?: CSSProperties;
}>`
  display: flex;
  flex: 1;
  justify-content: ${({ centerTitle }) =>
    centerTitle ? "center" : "flex-start"};
  background-color: var(--surfaceContainer);
  font-size: ${({ typography }) => typography?.fontSize};
  font-style: ${({ typography }) => typography?.fontStyle};
  font-weight: ${({ typography }) => typography?.fontWeight};
  line-height: ${({ typography }) => typography?.lineHeight};
  letter-spacing: ${({ typography }) => typography?.letterSpacing};
  grid-column-start: ${({ size }) => (size === TOP_APP_BAR_SIZE.SMALL ? 2 : 1)};
  grid-column-end: ${({ size }) => (size === TOP_APP_BAR_SIZE.SMALL ? 2 : 3)};
  grid-row: ${({ size }) => (size === TOP_APP_BAR_SIZE.SMALL ? 1 : 2)};
  padding: ${({ size }) =>
    size === TOP_APP_BAR_SIZE.SMALL
      ? "0px"
      : size === TOP_APP_BAR_SIZE.MEDIUM
      ? "0px 12px 16px"
      : "36px 12px 20px"};
`;

const Actions = styled.div<{ size: TOP_APP_BAR_SIZE }>`
  display: flex;
  justify-content: flex-end;
  grid-column: ${({ size }) => (size === TOP_APP_BAR_SIZE.SMALL ? 3 : 2)};
`;

export const TopAppBar = forwardRef<HTMLDivElement, TopAppBarProps>(
  (
    {
      size = TOP_APP_BAR_SIZE.SMALL,
      centerTitle,
      leading,
      actions,
      headline,
      ...props
    },
    ref
  ) => {
    const { typography } = useTheme();
    const leadingSection = leading && <Leading>{leading}</Leading>;
    const actionSection = actions && (
      <Actions size={size}>
        {actions.map((action, index) => (
          <Leading key={index}>{action}</Leading>
        ))}
      </Actions>
    );
    const titleSection = headline && (
      <Title
        centerTitle={centerTitle}
        size={size}
        typography={
          size === TOP_APP_BAR_SIZE.LARGE
            ? typography?.["headline-medium"]
            : size === TOP_APP_BAR_SIZE.MEDIUM
            ? typography?.["headline-small"]
            : typography?.["title-large"]
        }
      >
        {headline}
      </Title>
    );
    return (
      <Wrapper ref={ref} size={size} {...props}>
        {leadingSection}
        {titleSection}
        {actionSection}
      </Wrapper>
    );
  }
);
