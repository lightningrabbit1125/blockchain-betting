import type { Meta, StoryObj } from "@storybook/react";
import Button from "../ui/atoms/Button";

const meta: Meta<typeof Button> = {
  title: "UI/Atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["blue", "black", "red", "green", "blueOne"],
    },
    disabled: {
      control: { type: "boolean" },
    },
    type: {
      control: { type: "select" },
      options: ["button", "submit", "reset"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Click me",
    variant: "blue",
  },
};

export const Black: Story = {
  args: {
    children: "Black Button",
    variant: "black",
  },
};

export const Red: Story = {
  args: {
    children: "Red Button",
    variant: "red",
  },
};

export const Green: Story = {
  args: {
    children: "Green Button",
    variant: "green",
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled Button",
    disabled: true,
  },
};

export const Submit: Story = {
  args: {
    children: "Submit",
    type: "submit",
  },
};
