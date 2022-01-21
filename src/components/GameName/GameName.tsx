import React, { FC } from "react";
import styled from "@emotion/styled";
// import { withStyles } from "@mui/styles";
// import styles from "./styles";

export interface IGameNameProps {
  /**
   * Text for docs here
   */
  title: string;
  /**
   * Text for docs here
   */
  // classes: any;
}

export const GameName: FC<IGameNameProps> = ({ title }) => (
  <GameNameTitle>{title}</GameNameTitle>
);

const GameNameTitle = styled.h1`
  font-size: 1.5em;
`;

// const GameName = (props: IGameNameProps): JSX.Element => {
//   const { title, classes } = props;
//   return <h1 className={classes.root}>{title}</h1>;
// };

// export default withStyles(styles)(GameName);
