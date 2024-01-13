import styled from "@emotion/styled";
import { HTMLAttributes, ReactNode, forwardRef } from "react";
import {
  FloatingActionButton,
  FloatingActionButtonProps,
} from "../../buttons/floating-action-button";

export type BottomAppBarProps = {
  floatingActionButton?: FloatingActionButtonProps;
  actions?: ReactNode[];
} & Omit<HTMLAttributes<HTMLDivElement>, "children">;

const BaseBottomAppBar = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  padding: 12px 16px 12px 4px;
`;

const BaseActionWrapper = styled.div`
  display: flex;
`;

export const BottomAppBar = forwardRef<HTMLDivElement, BottomAppBarProps>(
  ({ actions, floatingActionButton, ...props }, ref) => {
    return (
      <BaseBottomAppBar ref={ref} {...props}>
        <BaseActionWrapper>
          {actions?.map((action) => action)}
        </BaseActionWrapper>
        {floatingActionButton && (
          <FloatingActionButton {...floatingActionButton} />
        )}
      </BaseBottomAppBar>
    );
  }
);
