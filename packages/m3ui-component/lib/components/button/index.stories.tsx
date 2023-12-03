import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";

import { Button } from ".";
import { VARIANT } from "../../constant";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Filled: Story = {
  args: {
    variant: VARIANT.FILLED,
    children: "Filled",
    onClick: action("onClick"),
    disabled: false,
    style: {},
  },
  render: (props) => <Button {...props} />,
};

export const Outlined: Story = {
  args: {
    variant: VARIANT.OUTLINED,
    children: "Outlined",
    onClick: action("onClick"),
    disabled: false,
    style: {},
  },
  render: (props) => <Button {...props} />,
};

export const Text: Story = {
  args: {
    variant: VARIANT.TEXT,
    children: "Text",
    onClick: action("onClick"),
    disabled: false,
    style: {},
  },
  render: (props) => <Button {...props} />,
};

export const Elevated: Story = {
  args: {
    variant: VARIANT.ELEVATED,
    children: "Elevated",
    onClick: action("onClick"),
    disabled: false,
    style: {},
  },
  render: (props) => <Button {...props} />,
};

export const Tonal: Story = {
  args: {
    variant: VARIANT.TONAL,
    children: "Tonal",
    onClick: action("onClick"),
    disabled: false,
    style: {},
  },
  render: (props) => <Button {...props} />,
};
