import React, { FC } from "react";
import styled from "@emotion/styled";

import { Legend, ILegendProps } from "../Legend/Legend";
import { GameName, IGameNameProps } from "../GameName/GameName";

export interface ITopProps extends ILegendProps, IGameNameProps {}
// export type ITopProps = LegendProps & IGameNameProps;

export const Top: FC<ITopProps> = ({ title, ...legendProps }) => (
  <Header>
    <GameName title={title} />
    <Legend {...legendProps} />
  </Header>
);

const Header = styled.header`
  text-align: center;
  position: relative;
  display: Inline-block;
`;
