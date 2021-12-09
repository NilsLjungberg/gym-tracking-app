import React from "react";

import Card from "../UI/Card";

import classes from "./WorkoutList.module.css";

const WorkoutList = (props) => {
  return (
    <Card>
      <div className={classes.flex}>
        {props.workouts.map((workout) => (
          <li key={workout.id}>
            <h3>{workout.exercise}</h3>
            <p>
              {workout.sets} Set(s) / {workout.reps} Rep(s)
            </p>
          </li>
        ))}
      </div>
    </Card>
  );
};

export default WorkoutList;
