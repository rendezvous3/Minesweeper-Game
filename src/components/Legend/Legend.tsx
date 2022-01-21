import React, { FC } from "react";
import styled from "@emotion/styled";
// import { withStyles, ClassNameMap } from "@mui/styles";

export interface ILegendProps {
  /**
   * classes from material UI
   */
  // classes: ClassNameMap;
  /**
   * Feature that should be activated after first+second actions
   */
  feature: string;
  /**
   * First action
   */
  firstAction: string;
  /**
   * Second action
   */
  secondAction: string;
}

// const styles = {
//   flagComboParent: {
//     background: "#e3e3e3",
//   },
//   parent: {
//     fontSize: "1em",
//     margin: "0 auto 2vw",
//     lineHeight: "1.25em",
//   },
//   firstAction: {
//     color: "#ec433c",
//   },
//   secondAction: {
//     color: "#2a48ec",
//   },
// };

// const Legend: FC<LegendProps> = ({
//   classes,
//   feature,
//   firstAction,
//   secondAction,
// }) => (
//   <legend className={classes.parent}>
//     <strong>{feature}: </strong>
//     <code className={classes.flagComboParent}>
//       <span className={classes.firstAction}>{firstAction}</span> +{" "}
//       <span className={classes.secondAction}>{secondAction}</span>
//     </code>
//   </legend>
// );

// export default withStyles(styles)(Legend);

export const Legend: FC<LegendProps> = ({
  feature,
  firstAction,
  secondAction,
}) => (
  <Parent>
    <strong>{feature}: </strong>
    <FlagComboParent>
      <FirstAction>{firstAction}</FirstAction> +{" "}
      <SecondAction>{secondAction}</SecondAction>
    </FlagComboParent>
  </Parent>
);

const FlagComboParent = styled.code`
  background: #e3e3e3;
`;

const Parent = styled.legend`
  font-size: 1em;
  margin: 0 auto 2vw;
  line-height: 1.25em;
`;

const FirstAction = styled.span`
  color: #ec433c;
`;

const SecondAction = styled.span`
  color: #2a48ec;
`;
