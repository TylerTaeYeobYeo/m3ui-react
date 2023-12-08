import type { Meta, StoryObj } from "@storybook/react";

import { ExtendedFAB } from ".";
import { VARIANT } from "../../constant";

const meta: Meta<typeof ExtendedFAB> = {
  component: ExtendedFAB,
  tags: ["autodocs"],
  argTypes: {
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

type Story = StoryObj<typeof ExtendedFAB>;

export const Base: Story = {
  args: {
    iconProps: {
      icon: "edit",
    },
    children: "Label",
  },
  render: (props) => <ExtendedFAB {...props} />,
};
