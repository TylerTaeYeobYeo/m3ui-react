import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";

import { IconButton } from ".";
import { SHAPE, VARIANT } from "../../../constant";

const meta: Meta<typeof IconButton> = {
  component: IconButton,
  tags: ["autodocs"],
  argTypes: {
    shape: {
      control: { type: "radio" },
      options: Object.values(SHAPE).filter((v) => v !== SHAPE.ELEVATED),
    },
    variant: {
      control: { type: "radio" },
      options: Object.values(VARIANT).filter((v) => v !== VARIANT.SURFACE),
    },
    value: {
      control: { type: "radio" },
      options: [true, false, undefined],
    },
  },
};

export default meta;

type Story = StoryObj<typeof IconButton>;

export const Filled: Story = {
  args: {
    shape: SHAPE.FILLED,
    onClick: action("onClick"),
    iconProps: {
      icon: "settings",
    },
    disabled: false,
  },
  render: (props) => <IconButton {...props} />,
};

export const Outlined: Story = {
  args: {
    shape: SHAPE.OUTLINED,
    onClick: action("onClick"),
    iconProps: {
      icon: "settings",
    },
    disabled: false,
  },
  render: (props) => <IconButton {...props} />,
};

export const Text: Story = {
  args: {
    shape: SHAPE.TEXT,
    onClick: action("onClick"),
    iconProps: {
      icon: "settings",
    },
    disabled: false,
  },
  render: (props) => <IconButton {...props} />,
};

export const Tonal: Story = {
  args: {
    shape: SHAPE.TONAL,
    onClick: action("onClick"),
    iconProps: {
      icon: "settings",
    },
    disabled: false,
  },
  render: (props) => <IconButton {...props} />,
};
