import type { Meta, StoryObj } from "storybook-framework-qwik";
import { Button, type ButtonProps } from "./button.js";

const meta: Meta<ButtonProps> = {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  component: Button,
};

type Story = StoryObj<ButtonProps>;

export default meta;

export const Primary: Story = {
  args: {
    size: "medium",
  },
  render: (props) => <Button {...props}>Some button</Button>,
};
