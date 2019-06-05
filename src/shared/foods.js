let id = 0;

function createMacros(carbs, fats, protein) {
  return {
    carbs,
    fats,
    protein,
  };
}

function calculateKcal(macros) {
  const { carbs, fats, protein } = macros;
  return carbs * 4 + fats * 9 + protein * 4;
}

export function modifyMacros(food, grams) {
  const {
    macros: { carbs, fats, protein },
    kcal,
  } = food;

  return {
    ...food,
    macros: {
      carbs: (carbs * grams) / 100,
      fats: (fats * grams) / 100,
      protein: (protein * grams) / 100,
    },
    grams,
    kcal: (kcal * grams) / 100,
  };
}

function createFood(title, macros) {
  id += 1;
  return {
    id: `f_${id}`,
    title,
    weight: 100,
    macros,
    kcal: calculateKcal(macros),
  };
}

export function calculateTotals(ingredients) {
  return ingredients.reduce(
    (prev, current) => ({
      grams: prev.grams + parseFloat(current.grams),
      kcal: prev.kcal + parseFloat(current.kcal),
      macros: {
        carbs: prev.macros.carbs + parseFloat(current.macros.carbs),
        fats: prev.macros.fats + parseFloat(current.macros.fats),
        protein: prev.macros.protein + parseFloat(current.macros.protein),
      },
    }),
    {
      grams: 0,
      kcal: 0,
      macros: {
        carbs: 0,
        fats: 0,
        protein: 0,
      },
    },
  );
}

export const foods = [
  createFood('Cottage Cheese low fat', createMacros(3.9, 0.5, 16.2)),
  createFood('Eggs', createMacros(1, 11, 13)),
  createFood('Chicken Breast', createMacros(0, 1.7, 22.8)),
  createFood('Minced Chicken Breast', createMacros(0.4, 4.5, 22.5)),
  createFood('Oats SKANĖJA', createMacros(50, 6, 19.1)),
  createFood('Greek Yogurth AISTĖ', createMacros(2.3, 2, 9)),
  createFood('Banana', createMacros(23, 0, 1)),
  createFood('Salmon', createMacros(0.3, 10.8, 20.2)),
  createFood('Orange', createMacros(12, 0.1, 0.9)),
  createFood('Whole Grain Bread', createMacros(41, 1.1, 6.6)),
  createFood('Protein Cheese VALIO PRO FEEL 5%', createMacros(0, 5, 34)),
];

export function getFoodById(id) {
  return foods.find(food => food.id === id);
}
