import { Top, ITopProps } from "./Top";
import { Meta, Story } from "@storybook/react";

export default {
  title: "Top/Top",
  component: Top,
} as Meta;

const Template: Story<ITopProps> = (args) => <Top {...args} />;

export const TopPanel = Template.bind({});
TopPanel.args = {
  feature: "Flag",
  firstAction: "ctrl",
  secondAction: "click",
  title: "Minesweeper",
};
