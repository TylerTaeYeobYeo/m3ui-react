import type { Meta, StoryObj } from "@storybook/react";

import { BottomAppBar } from ".";
import { Icon } from "../../icon";

const meta: Meta<typeof BottomAppBar> = {
  component: BottomAppBar,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof BottomAppBar>;

export const Action: Story = {
  args: {
    actions: [
      <Icon icon="favorite" key={"favorite"} />,
      <Icon icon="more_vert" key={"more_vert"} />,
    ],
  },
  render: (props) => <BottomAppBar {...props} />,
};
export const FAB: Story = {
  args: {
    actions: [
      <Icon icon="favorite" key={"favorite"} />,
      <Icon icon="more_vert" key={"more_vert"} />,
    ],
    floatingActionButton: {
      iconProps: {
        icon: "edit",
      },
    },
  },
  render: (props) => <BottomAppBar {...props} />,
};
