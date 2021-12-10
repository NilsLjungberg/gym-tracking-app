import React from "react";

import classes from "./Header.module.css";
import WorkoutSummaryButton from "../UI/WorkoutSummaryButton";

const Header = (props) => (
  <div className={classes.header}>
    <div className={classes.nav}>
      <h1>Workout Tracker</h1>
      <WorkoutSummaryButton onClick={props.onShowSummary}>
        Workout Summary
      </WorkoutSummaryButton>
    </div>
    <h3 className={classes.instruction}>Add your completed exercises below</h3>
  </div>
);

export default Header;
