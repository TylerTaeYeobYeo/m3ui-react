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

const BaseBottomAppBar = styled.div``;

export const BottomAppBar = forwardRef<HTMLDivElement, BottomAppBarProps>(
  ({ actions, floatingActionButton, ...props }, ref) => {
    return (
      <BaseBottomAppBar ref={ref} {...props}>
        {actions?.map((action) => action)}
        {floatingActionButton && (
          <FloatingActionButton {...floatingActionButton} />
        )}
      </BaseBottomAppBar>
    );
  }
);
