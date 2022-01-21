// import GameName, { IGameNameProps } from "./GameName";
import { GameName, IGameNameProps } from "./GameName";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Top/GameName",
  component: GameName,
} as Meta;

const Template: Story<IGameNameProps> = (args) => <GameName {...args} />;

export const MinesweeperGameName = Template.bind({});
MinesweeperGameName.args = {
  title: "minesweeper",
};
