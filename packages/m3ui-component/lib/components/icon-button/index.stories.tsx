import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";

import { IconButton } from ".";
import { SHAPE } from "../../constant";

const meta: Meta<typeof IconButton> = {
  component: IconButton,
  tags: ["autodocs"],
  argTypes: {
    shape: {
      control: { type: "radio" },
      options: Object.values(SHAPE),
    },
  },
};

export default meta;

type Story = StoryObj<typeof IconButton>;

export const Filled: Story = {
  args: {
    shape: SHAPE.FILLED,
    children: <span className="material-icons">settings</span>,
    onClick: action("onClick"),
    disabled: false,
  },
  render: (props) => <IconButton {...props} />,
};

export const Outlined: Story = {
  args: {
    shape: SHAPE.OUTLINED,
    children: <span className="material-icons">settings</span>,
    onClick: action("onClick"),
    disabled: false,
  },
  render: (props) => <IconButton {...props} />,
};

export const Text: Story = {
  args: {
    shape: SHAPE.TEXT,
    children: <span className="material-icons">settings</span>,
    onClick: action("onClick"),
    disabled: false,
  },
  render: (props) => <IconButton {...props} />,
};

export const Tonal: Story = {
  args: {
    shape: SHAPE.TONAL,
    children: <span className="material-icons">settings</span>,
    onClick: action("onClick"),
    disabled: false,
  },
  render: (props) => <IconButton {...props} />,
};
