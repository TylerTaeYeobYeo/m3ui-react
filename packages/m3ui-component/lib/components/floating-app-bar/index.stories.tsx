import type { Meta, StoryObj } from "@storybook/react";

import { FloatingActionButton } from ".";
import { SIZE, VARIANT } from "../../constant";

const meta: Meta<typeof FloatingActionButton> = {
  component: FloatingActionButton,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: {
        type: "select",
      },
      options: [SIZE.SMALL, SIZE.MEDIUM, SIZE.LARGE],
      defaultValue: SIZE.MEDIUM,
    },
    variant: {
      control: {
        type: "select",
      },
      options: Object.values(VARIANT),
      defaultValue: VARIANT.PRIMARY,
    },
  },
};

export default meta;

type Story = StoryObj<typeof FloatingActionButton>;

export const Icon: Story = {
  args: {
    iconProps: {
      icon: "edit",
    },
  },
  render: (props) => <FloatingActionButton {...props} />,
};

export const Label: Story = {
  args: {
    iconProps: {
      icon: "edit",
    },
    children: "Label",
  },
  render: (props) => <FloatingActionButton {...props} />,
};
