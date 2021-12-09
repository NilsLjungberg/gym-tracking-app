import React, { useState } from "react";

import Header from "./components/Header";
import AddWorkout from "./components/AddWorkout";
import WorkoutList from "./components/WorkoutList";

function App() {
  const [workoutList, setWorkoutList] = useState([]);
  const [array, setArray] = useState(false);

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

  return (
    <>
      <Header />
      <AddWorkout onAddWorkout={addWorkoutHandler} />
      {array && <WorkoutList workouts={workoutList} />}
    </>
  );
}

export default App;
