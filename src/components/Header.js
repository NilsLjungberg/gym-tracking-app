import React from "react";

import classes from "./Header.module.css";

const Header = () => (
  <div className={classes.header}>
    <h1>Workout</h1>
    <h3 className={classes.instruction}>Add your completed exercises below</h3>
  </div>
);

export default Header;
