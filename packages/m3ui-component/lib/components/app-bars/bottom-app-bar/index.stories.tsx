import type { Meta, StoryObj } from "@storybook/react";

import { BottomAppBar } from ".";
import { SHAPE } from "../../../constant";
import { IconButton } from "../../buttons";

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
      <IconButton
        iconProps={{
          icon: "favorite",
        }}
        shape={SHAPE.TEXT}
        key={"favorite"}
      />,
      <IconButton
        iconProps={{
          icon: "more_vert",
        }}
        shape={SHAPE.TEXT}
        key={"more_vert"}
      />,
    ],
  },
  render: (props) => <BottomAppBar {...props} />,
};
export const FAB: Story = {
  args: {
    actions: [
      <IconButton
        iconProps={{
          icon: "favorite",
        }}
        shape={SHAPE.TEXT}
        key={"favorite"}
      />,
      <IconButton
        iconProps={{
          icon: "more_vert",
        }}
        shape={SHAPE.TEXT}
        key={"more_vert"}
      />,
    ],
    floatingActionButton: {
      iconProps: {
        icon: "edit",
      },
    },
  },
  render: (props) => <BottomAppBar {...props} />,
};
