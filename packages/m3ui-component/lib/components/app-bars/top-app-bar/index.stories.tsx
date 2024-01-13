import type { Meta, StoryObj } from "@storybook/react";

import { TOP_APP_BAR_SIZE, TopAppBar } from ".";
import { SHAPE } from "../../../constant/style.constant";
import { IconButton } from "../../buttons";
import { Icon } from "../../icon";

const meta: Meta<typeof TopAppBar> = {
  component: TopAppBar,
  tags: ["autodocs"],
  argTypes: {
    centerTitle: {
      control: {
        type: "boolean",
      },
    },
    size: {
      control: { type: "select" },
      options: Object.values(TOP_APP_BAR_SIZE),
    },
  },
};

export default meta;

type Story = StoryObj<typeof TopAppBar>;

export const Horizontal: Story = {
  args: {
    leading: <Icon icon="menu" />,
    headline: "Top App Bar",
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
  render: (props) => <TopAppBar {...props} />,
};
