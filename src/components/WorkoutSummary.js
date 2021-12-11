import React from "react";

import Modal from "../UI/Modal";

import classes from "./WorkoutSummary.module.css";

const WorkoutSummary = (props) => {
  const workoutList = (
    <div className={classes["summary-overview"]}>
      <h1 className={classes["summary-title"]}>Your Workout Summary</h1>
      {props.workouts.map((workout) => (
        <li key={workout.id} className={classes["summary-list"]}>
          <p className={classes["summary-exercise"]}>{workout.exercise}</p>
          <p>
            {workout.sets} Set(s) / {workout.reps} Rep(s)
          </p>
        </li>
      ))}
    </div>
  );

  return (
    <Modal>
      {props.workouts.length === 0 ? (
        <div className={classes["summary-overview"]}>
          <h1 className={classes["summary-title"]}>
            Workout Summary is empty!
          </h1>
          <p className={classes["summary-list-empty"]}>
            Your lazy ass hasn't completed any exercises yet. Go and make some
            gains first!
          </p>
        </div>
      ) : (
        workoutList
      )}
      <div>
        <button
          className={classes["summary-button"]}
          onClick={props.onHideSummary}
          type="button"
        >
          Go Back!
        </button>
      </div>
    </Modal>
  );
};

export default WorkoutSummary;
