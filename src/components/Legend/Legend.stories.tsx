import React from "react";
import { Story, Meta } from "@storybook/react";

// import Legend, { LegendProps } from "./Legend";
import { Legend, ILegendProps } from "./Legend";

export default {
  title: "Top/Legend",
  component: Legend,
} as Meta;

const Template: Story<ILegendProps> = (args) => <Legend {...args} />;

export const GameLegend = Template.bind({});
GameLegend.args = {
  feature: "Flag",
  firstAction: "ctrl",
  secondAction: "click",
};
