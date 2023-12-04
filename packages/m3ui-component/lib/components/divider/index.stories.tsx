import type { Meta, StoryObj } from "@storybook/react";

import { Divider } from ".";
import { Icon } from "../icon";

const meta: Meta<typeof Divider> = {
  component: Divider,
  tags: ["autodocs"],
  argTypes: {
    vertical: {
      control: {
        type: "boolean",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Divider>;

export const Horizontal: Story = {
  args: {},
  render: (props) => (
    <div
      style={{
        display: props.vertical ? "flex" : "block",
      }}
    >
      <Icon
        icon="wifi"
        style={{
          color: "var(--primary)",
        }}
      />
      <Divider {...props} />
      <Icon
        icon="call"
        style={{
          color: "var(--primary)",
        }}
      />
    </div>
  ),
};

export const Vertical: Story = {
  args: {
    vertical: true,
  },
  render: (props) => (
    <div
      style={{
        display: props.vertical ? "flex" : "block",
      }}
    >
      <Icon
        icon="wifi"
        style={{
          color: "var(--primary)",
        }}
      />
      <Divider {...props} />
      <Icon
        icon="call"
        style={{
          color: "var(--primary)",
        }}
      />
    </div>
  ),
};
