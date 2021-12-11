import React, { useState } from "react";

import Header from "./components/Header";
import AddWorkout from "./components/AddWorkout";
import WorkoutList from "./components/WorkoutList";
import WorkoutSummary from "./components/WorkoutSummary";

function App() {
  const [workoutList, setWorkoutList] = useState([]);
  const [array, setArray] = useState(false);
  const [summaryIsVisible, setSummaryIsVisible] = useState(false);

  const addWorkoutHandler = (exercise, sets, reps) => {
    setWorkoutList((prevState) => {
      return [
        {
          exercise: exercise,
          sets: sets,
          reps: reps,
          id: Math.random().toString(),
        },
        ...prevState,
      ];
    });
    setArray(true);
  };

  const showSummaryHandler = () => {
    setSummaryIsVisible(true);
  };

  const hideSummaryHandler = () => {
    setSummaryIsVisible(false);
  };

  return (
    <>
      {summaryIsVisible && (
        <WorkoutSummary
          onHideSummary={hideSummaryHandler}
          workouts={workoutList}
        />
      )}
      <Header onShowSummary={showSummaryHandler} />
      <AddWorkout onAddWorkout={addWorkoutHandler} />
      {array && <WorkoutList workouts={workoutList} />}
    </>
  );
}

export default App;
