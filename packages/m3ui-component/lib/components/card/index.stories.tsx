import type { Meta, StoryObj } from "@storybook/react";

import { Card } from ".";

const meta: Meta<typeof Card> = {
  component: Card,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Outlined: Story = {
  args: {},
  render: (props) => <Card {...props} />,
};

export const Elevated: Story = {
  args: {},
  render: (props) => <Card {...props} />,
};

export const Filled: Story = {
  args: {},
  render: (props) => <Card {...props} />,
};
