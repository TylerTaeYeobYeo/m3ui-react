import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { SegmentedButton, SegmentedButtonValue } from ".";

const meta: Meta<typeof SegmentedButton> = {
  component: SegmentedButton,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof SegmentedButton>;

export const MultipleSelect: Story = {
  args: {
    data: [
      {
        children: "Button 1",
      },
      {
        children: "Button 2",
      },
      {
        children: "Disabled & Selected",
        disabled: true,
      },
      {
        children: "Disabled",
        disabled: true,
      },
    ],
  },
  render: (props) => {
    const [selected, setSelected] = useState<SegmentedButtonValue[]>([2]);

    return (
      <SegmentedButton
        {...props}
        value={selected}
        onChange={(e) => {
          if (e.selected) {
            setSelected((p) => [...p, e.item]);
          } else {
            setSelected((p) => p.filter((item) => item !== e.item));
          }
        }}
      />
    );
  },
};
export const SingleSelect: Story = {
  args: {
    data: [
      {
        children: "Button 1",
      },
      {
        children: "Button 2",
      },
      {
        children: "Button 2",
      },
      {
        children: "Disabled",
        disabled: true,
      },
    ],
  },
  render: (props) => {
    const [selected, setSelected] = useState<SegmentedButtonValue[]>([]);

    return (
      <SegmentedButton
        {...props}
        value={selected}
        onChange={(e) => {
          if (e.selected) {
            setSelected([e.item]);
          } else {
            setSelected([]);
          }
        }}
      />
    );
  },
};
