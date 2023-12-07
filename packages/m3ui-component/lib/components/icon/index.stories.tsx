import type { Meta, StoryObj } from "@storybook/react";

import { ICON_SHAPE, Icon } from ".";

const meta: Meta<typeof Icon> = {
  component: Icon,
  tags: ["autodocs"],
  argTypes: {
    filled: {
      control: {
        type: "boolean",
        options: [true, false],
        default: false,
      },
    },
    weight: {
      control: {
        type: "select",
        options: [100, 200, 300, 400, 500, 600, 700],
        default: 400,
      },
    },
    grade: {
      control: {
        type: "select",
        options: [-25, 0, 200],
        default: 0,
      },
    },
    opticalSize: {
      control: {
        type: "select",
        options: [20, 24, 40, 48],
        default: 24,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Filled: Story = {
  args: {
    shape: ICON_SHAPE.OUTLINED,
    filled: true,
    icon: "settings",
  },
  render: (props) => <Icon {...props} />,
};
