let id = 0;

function createMacros(carbs, fats, protein) {
  return {
    carbs,
    fats,
    protein
  };
}

function calculateKcal(macros) {
  const { carbs, fats, protein } = macros;
  return carbs * 4 + fats * 9 + protein * 4;
}

function createFood(title, macros) {
  id = id + 1;
  return {
    id: `f_${id}`,
    title,
    weight: 100,
    macros,
    kcal: calculateKcal(macros)
  };
}

export const foods = [
  createFood("Cottage Cheese low fat", createMacros(3.9, 0.5, 16.2)),
  createFood("Eggs", createMacros(1, 11, 13)),
  createFood("Chicken Breast", createMacros(0, 1.7, 22.8)),
  createFood("Minced Chicken Breast", createMacros(0.4, 4.5, 22.5)),
  createFood("Oats SKANĖJA", createMacros(50, 6, 19.1)),
  createFood("Greek Yogurth AISTĖ", createMacros(2.3, 2, 9)),
  createFood("Banana", createMacros(23, 0, 1))
];
