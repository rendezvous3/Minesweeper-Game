import React from "react";
import { withStyles } from "@mui/styles";
import styles from "./styles";

export interface ButtonProps {
  /**
   * Feature that should be activated after first+second actions
   */
  label: string;
  /**
   * Feature that should be activated after first+second actions
   */
  btnColor: string;
}

const Button = (props: ButtonProps): JSX.Element => {
  const { classes, label, btnColor = "red" } = props;
  const CSSClass = `${classes.root} ${classes[btnColor]}`;
  return <button className={CSSClass}>{label}</button>;
};

export default withStyles(styles)(Button);
