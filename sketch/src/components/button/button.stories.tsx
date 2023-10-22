import { Button, type ButtonProps } from "@deopea.sketch/button";
import type { Meta, StoryObj } from "storybook-framework-qwik";

console.log(Button);

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
