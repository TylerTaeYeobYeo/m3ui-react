import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";
import { LIST_ITEM_SHAPE, ListItem } from ".";
import { Icon } from "../icon";

const meta: Meta<typeof ListItem> = {
  component: ListItem,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof ListItem>;

export const Default: Story = {
  args: {
    leading: <Icon icon="man" />,
    headline: "Headline",
    children: "Supporting Text",
    trailing: <Icon icon="wifi" />,
  },
  render: (props) => <ListItem {...props} />,
};

export const Video: Story = {
  args: {
    shape: LIST_ITEM_SHAPE.VIDEO,
    leading: (
      <video
        src="http://www.w3schools.com/html/mov_bbb.mp4"
        loop
        muted
        autoPlay
        width="100%"
        height="100%"
      />
    ),
    headline: "Headline",
    children: "Supporting Text",
    trailing: <Icon icon="wifi" />,
  },
  render: (props) => <ListItem {...props} />,
};

export const WithDivider: Story = {
  args: {
    leading: <Icon icon="man" />,
    headline: "Headline",
    children: "Supporting Text",
    trailing: <Icon icon="wifi" />,
    bottomDivider: true,
  },
  render: (props) => (
    <div>
      <ListItem {...props} />
      <ListItem {...props} bottomDivider={false} />
    </div>
  ),
};

export const ClickEvent: Story = {
  args: {
    leading: <Icon icon="man" />,
    headline: "Headline",
    children: "Supporting Text",
    trailing: <Icon icon="wifi" />,
    onClick: action("onClick"),
  },
  render: (props) => <ListItem {...props} />,
};
