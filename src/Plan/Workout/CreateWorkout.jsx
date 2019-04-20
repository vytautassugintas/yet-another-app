import React, { useContext, useState } from "react";
import { AppContext } from "../../App";
import { excerciseList } from "../../shared/workout";

function ExcerciseList({ exerciseList, onExerciseClick }) {
  return (
    <>
      {exerciseList.map(group => (
        <div key={group.id} style={{ marginBottom: 12 }}>
          <div>
            <b>{group.title}</b>
          </div>
          <div>
            {group.excercises.map(exercise => (
              <div
                key={exercise.id}
                onClick={() => onExerciseClick(exercise)}
                style={{ paddingTop: 6, paddingBottom: 6 }}
              >
                {exercise.title}
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

export default function CreateWorkout() {
  const [addedExerciseGroups, updateAddedExerciseGroups] = useState([]);

  function findExerciseGroup(exerciseGroups, exerciseId) {
    return exerciseGroups.find(group =>
      group.excercises.find(exercise => exercise.id === exerciseId)
    );
  }

  function findExistingGroup(exerciseGroups, groupId) {
    return (
      exerciseGroups.length > 0 &&
      exerciseGroups.find(group => group.id === groupId)
    );
  }

  function addExerciseToGroup(groups, exercise) {
    return groups.map(group => {
      if (!findExerciseGroup(groups, exercise.id)) {
        group.excercises = [...group.excercises, exercise];
      }
      return group;
    });
  }

  function handleExcerciseClick(exercise) {
    const excerciseListCopy = JSON.parse(JSON.stringify(excerciseList));

    const exerciseGroup = findExerciseGroup(excerciseListCopy, exercise.id);
    const existingGroup = findExistingGroup(
      addedExerciseGroups,
      exerciseGroup.id
    );

    if (existingGroup) {
      updateAddedExerciseGroups(
        addExerciseToGroup(addedExerciseGroups, exercise)
      );
    } else {
      exerciseGroup.excercises = [exercise];
      updateAddedExerciseGroups([...addedExerciseGroups, exerciseGroup]);
    }
  }

  return (
    <div>
      <h3>Added excercises</h3>
      <ExcerciseList
        exerciseList={addedExerciseGroups}
        onExerciseClick={() => {}}
      />
      <hr />
      <ExcerciseList
        exerciseList={excerciseList}
        onExerciseClick={handleExcerciseClick}
      />
    </div>
  );
}
