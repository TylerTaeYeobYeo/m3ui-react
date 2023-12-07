import { action } from "@storybook/addon-actions";
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

export const Clickable: Story = {
  args: {
    children: "Filled",
    shape: CARD_SHAPE.FILLED,
    onClick: action("onClick"),
    clickable: true,
    style: {
      padding: "1rem",
    },
  },
  render: (props) => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <Card {...props} shape={CARD_SHAPE.OUTLINED}>
        Outlined
      </Card>
      <Card {...props} shape={CARD_SHAPE.ELEVATED}>
        Elevated
      </Card>
      <Card {...props} shape={CARD_SHAPE.FILLED} />
    </div>
  ),
};
