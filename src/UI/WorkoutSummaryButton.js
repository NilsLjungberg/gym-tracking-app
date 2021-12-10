import React from "react";

import classes from "./WorkoutSummaryButton.module.css";

const WorkoutSummaryButton = (props) => {
  return (
    <button onClick={props.onClick} className={classes.summary}>
      {props.children}
    </button>
  );
};

export default WorkoutSummaryButton;
