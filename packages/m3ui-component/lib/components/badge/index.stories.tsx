import type { Meta, StoryObj } from "@storybook/react";

import { BADGE_VARIANT, Badge } from ".";

const meta: Meta<typeof Badge> = {
  component: Badge,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Dot: Story = {
  args: {
    variant: BADGE_VARIANT.DOT,
    children: <div style={{ backgroundColor: "lightblue" }}>Dot</div>,
  },
  render: (props) => <Badge {...props} />,
};

export const Number: Story = {
  args: {
    variant: BADGE_VARIANT.NUMBER,
    data: 1,
    children: <div style={{ backgroundColor: "lightblue" }}>Number</div>,
  },
  render: (props) => <Badge {...props} />,
};
