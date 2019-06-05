const GROUPS = {
  CHEST: 'chest',
  BACK: 'back',
  LEGS: 'legs',
  BICEPS: 'biceps',
  SHOULDERS: 'shoulders',
  TRICEPS: 'triceps',
};

function createExcersice(title, group, id) {
  return {
    id: `${group}-${id}`,
    title,
    group,
  };
}

function createExcersiceGroup(title, group, excercises) {
  let id = 0;
  return {
    id: `G-${group}-${id}`,
    group,
    title,
    excercises: excercises.map((e) => {
      id += 1;
      return createExcersice(e, group, id);
    }),
  };
}

export const excerciseList = [
  createExcersiceGroup('Chest', GROUPS.CHEST, [
    'Incline Bench Press',
    'Dumbbells Bench Press',
    'Dumbbells Chest Fly',
  ]),
  createExcersiceGroup('Biceps', GROUPS.BICEPS, [
    'Biceps Curl',
    'Dumbbells Hammer',
  ]),
  createExcersiceGroup('Legs', GROUPS.LEGS, [
    'Squats',
    'Leg Extension',
    'Leg Curl',
    'Seated Calf Raise',
  ]),
  createExcersiceGroup('Shoulders', GROUPS.SHOULDERS, [
    'Shoulder Press',
    'Shoulder Upright Row',
    'Bent over Shoulder Flys',
  ]),
  createExcersiceGroup('Back', GROUPS.BACK, [
    'Deadlift',
    'Bent-Over Barbell Deadlift',
    'Pulldown',
    'Row',
  ]),
  createExcersiceGroup('Triceps', GROUPS.TRICEPS, ['Dips', 'French Press']),
];

const chestGroup = excerciseList.find(e => e.group === GROUPS.CHEST);
const bicepsGroup = excerciseList.find(e => e.group === GROUPS.BICEPS);
const legsGroup = excerciseList.find(e => e.group === GROUPS.LEGS);
const shouldersGroup = excerciseList.find(e => e.group === GROUPS.SHOULDERS);
const backGroup = excerciseList.find(e => e.group === GROUPS.BACK);
const tricepsGroup = excerciseList.find(e => e.group === GROUPS.TRICEPS);

export const currentPlan = [
  {
    title: 'Chest, biceps',
    groups: [chestGroup, bicepsGroup],
  },
  {
    title: 'Legs, shoulders',
    groups: [legsGroup, shouldersGroup],
  },
  {
    title: 'Back, triceps',
    groups: [backGroup, tricepsGroup],
  },
];
