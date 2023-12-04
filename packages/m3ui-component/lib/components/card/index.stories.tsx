import type { Meta, StoryObj } from "@storybook/react";

import { CARD_SHAPE, Card } from ".";
import { Button } from "..";

const meta: Meta<typeof Card> = {
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    shape: {
      control: {
        type: "radio",
        options: Object.values(CARD_SHAPE),
      },
      defaultValue: CARD_SHAPE.OUTLINED,
    },
    rippleEffect: {
      control: {
        type: "boolean",
      },
      defaultValue: true,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Outlined: Story = {
  args: {
    children: (
      <>
        Outlined
        <Button onClick={(e) => e.stopPropagation()}>test</Button>
      </>
    ),
    shape: CARD_SHAPE.OUTLINED,
    style: {
      padding: "1rem",
    },
  },
  render: (props) => <Card {...props} />,
};

export const Elevated: Story = {
  args: {
    children: "Elevated",
    shape: CARD_SHAPE.ELEVATED,
    style: {
      padding: "1rem",
    },
  },
  render: (props) => <Card {...props} />,
};

export const Filled: Story = {
  args: {
    children: "Filled",
    shape: CARD_SHAPE.FILLED,
    style: {
      padding: "1rem",
    },
  },
  render: (props) => <Card {...props} />,
};
