/* eslint-disable import/no-anonymous-default-export */
import Button, { ButtonProps } from "./Button";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Button",
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Red = Template.bind({});
Red.args = {
  // backgroundColor: "red",
  btnColor: "red",
  label: "red",
  // size: "md",
};

export const Green = Template.bind({});
Green.args = {
  // backgroundColor: "red",
  btnColor: "green",
  label: "green",
  // size: "md",
};

export const Blue = Template.bind({});
Blue.args = {
  // backgroundColor: "red",
  btnColor: "blue",
  label: "blue",
  // size: "md",
};
