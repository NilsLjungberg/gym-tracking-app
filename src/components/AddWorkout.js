import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";

import ErrorModal from "../UI/ErrorModal";

import classes from "./AddWorkout.module.css";

const AddWorkout = (props) => {
  const [exerciseInput, setExerciseInput] = useState("");
  const [setsInput, setSetsInput] = useState(1);
  const [repsInput, setRepsInput] = useState(1);
  const [error, setError] = useState();

  const addExerciseHandler = (event) => {
    event.preventDefault();
    if (exerciseInput.trim().length === 0) {
      setError({
        title: "Something went wrong!",
        message: "Please enter an exercise!",
      });
      return;
    }
    props.onAddWorkout(exerciseInput, setsInput, repsInput);
    setExerciseInput("");
    setSetsInput(1);
    setRepsInput(1);
  };

  const exerciseInputHandler = (event) => {
    setExerciseInput(event.target.value);
  };

  const setsInputHandler = (event) => {
    setSetsInput(event.target.value);
  };

  const repsInputHandler = (event) => {
    setRepsInput(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onErrorHandler={errorHandler}
        />
      )}
      <Card>
        <form onSubmit={addExerciseHandler}>
          <div className={classes["exercise-input"]}>
            <div className={classes.exercise}>
              <label className={classes.label} htmlFor="exercise-one">
                Exercise
              </label>
              <input
                className={classes["exercise-definition"]}
                type="text"
                id="exercise-one"
                name="exercise-one"
                value={exerciseInput}
                onChange={exerciseInputHandler}
              />
            </div>
            <div className={classes["number-input"]}>
              <div className={classes["sets-reps"]}>
                <label className={classes.label} htmlFor="sets">
                  Sets
                </label>
                <select
                  className={classes.select}
                  name="sets"
                  id="sets"
                  value={setsInput}
                  onChange={setsInputHandler}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
              <div className={classes["sets-reps"]}>
                <label className={classes.label} htmlFor="reps">
                  Reps
                </label>
                <select
                  className={classes.select}
                  name="reps"
                  id="reps"
                  value={repsInput}
                  onChange={repsInputHandler}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                </select>
              </div>
            </div>
          </div>
          <Button type="submit">Add Exercise</Button>
        </form>
      </Card>
    </>
  );
};

export default AddWorkout;
