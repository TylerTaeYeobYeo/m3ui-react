import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";
import { SHAPE } from "../../constant";
import { Icon } from "../icon";

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    shape: {
      control: { type: "radio" },
      options: Object.values(SHAPE),
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Filled: Story = {
  args: {
    shape: SHAPE.FILLED,
    children: "Filled",
    onClick: action("onClick"),
    disabled: false,
  },
  render: (props) => <Button {...props} />,
};

export const Outlined: Story = {
  args: {
    shape: SHAPE.OUTLINED,
    children: "Outlined",
    onClick: action("onClick"),
    disabled: false,
  },
  render: (props) => <Button {...props} />,
};

export const Text: Story = {
  args: {
    shape: SHAPE.TEXT,
    children: "Text",
    onClick: action("onClick"),
    disabled: false,
  },
  render: (props) => <Button {...props} />,
};

export const Elevated: Story = {
  args: {
    shape: SHAPE.ELEVATED,
    children: "Elevated",
    onClick: action("onClick"),
    disabled: false,
  },
  render: (props) => <Button {...props} />,
};

export const Tonal: Story = {
  args: {
    shape: SHAPE.TONAL,
    children: "Tonal",
    onClick: action("onClick"),
    disabled: false,
  },
  render: (props) => <Button {...props} />,
};

export const WithIcon: Story = {
  args: {
    shape: SHAPE.TONAL,
    icon: <Icon icon={"settings"} />,
    children: "Tonal",
    onClick: action("onClick"),
    disabled: false,
  },
  render: (props) => <Button {...props} />,
};
